/* eslint react-hooks/exhaustive-deps: "off" */
import { useEffect, useState } from 'react';
import type {
  RnUseGooglePlacesAutocompleteProps,
  Place,
  PlacePrediction,
  Geocode,
} from '../types';

// Interfaces for structured response based on Google Places API v1

export const NO_GCP_API_KEY_ERROR = 'NO_GCP_API_KEY_ERROR';
export const NO_LANG_ERROR = 'You should not set language to empty string';

const useGooglePlacesAutocomplete = ({
  countries = [],
  gcpApiKey = '',
  language = 'fr',
  timeoutValue = 1500,
  autocompUrl = 'https://places.googleapis.com/v1/places:autocomplete',
  geocodingUrl = 'https://maps.googleapis.com/maps/api/geocode/json',
}: RnUseGooglePlacesAutocompleteProps) => {
  const [query, setQuery] = useState('');
  const [places, setPlaces] = useState<Place[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  if (gcpApiKey.length === 0) {
    throw new Error(NO_GCP_API_KEY_ERROR);
  }

  if (language.length === 0) {
    throw new Error(NO_LANG_ERROR);
  }

  useEffect(() => {
    if (!query) {
      setPlaces([]);
      return;
    }

    const fetchPlaces = async () => {
      setLoading(true);
      setError(null);

      try {
        const requestBody: Record<string, any> = {
          input: query,
          languageCode: language,
        };

        if (countries.length > 0) {
          requestBody.includedRegionCodes = countries;
        }

        // POST request to Google Places Autocomplete API
        const response = await fetch(
          `${autocompUrl}?input=${encodeURIComponent(query)}&languageCode=${language}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-Goog-Api-Key': gcpApiKey,
            },
            body: JSON.stringify(requestBody),
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }

        const data: any = await response.json();
        const predictions: PlacePrediction[] = data.suggestions || [];

        // Fetch geocode based on place name
        const fetchGeocode = async (name: string): Promise<Geocode> => {
          try {
            const params = new URLSearchParams({
              address: name,
              key: gcpApiKey,
            });

            const geoResponse = await fetch(
              `${geocodingUrl}?${params.toString()}`
            );
            const geoData: any = await geoResponse.json();

            return (
              geoData.results[0]?.geometry.location || { lat: null, lng: null }
            );
          } catch (err) {
            return { lat: null, lng: null };
          }
        };

        // Format predictions with geolocation and additional data
        const formattedPlaces: Place[] = await Promise.all(
          predictions.map(async (prediction) => {
            const placeId = prediction.placePrediction.placeId;
            const mainText =
              prediction.placePrediction.structuredFormat.mainText.text;
            const secondaryText =
              prediction.placePrediction.structuredFormat.secondaryText.text;
            const geocode = await fetchGeocode(mainText);

            return {
              id: placeId,
              name: mainText,
              fullAddress: `${mainText}, ${secondaryText}`,
              types: prediction.placePrediction.types || [],
              latitude: geocode.lat,
              longitude: geocode.lng,
              raw: prediction,
              address_components: prediction.placePrediction.structuredFormat,
            };
          })
        );

        setPlaces(formattedPlaces);
      } catch (err: any) {
        setError(err.message || 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    const timeoutId = setTimeout(fetchPlaces, timeoutValue);
    return () => clearTimeout(timeoutId);
  }, [query, timeoutValue, language]);

  return { query, setQuery, places, loading, error };
};

export default useGooglePlacesAutocomplete;
