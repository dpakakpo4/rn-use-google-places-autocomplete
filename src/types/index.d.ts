export interface StructuredText {
  text: string;
}

export interface AddressComponents {
  mainText: StructuredText;
  secondaryText: StructuredText;
}

export interface Geocode {
  lat: number | null;
  lng: number | null;
}

export interface PlacePrediction {
  placePrediction: {
    placeId: string;
    types: string[];
    structuredFormat: AddressComponents;
  };
}

export interface Place {
  id: string;
  name: string;
  fullAddress: string;
  types: string[];
  latitude: number | null;
  longitude: number | null;
  raw?: PlacePrediction;
  address_components: AddressComponents;
}

export interface RnUseGooglePlacesAutocompleteProps {
  countries?: string[];
  gcpApiKey: string;
  language?: string;
  autocompUrl?: string;
  geocodingUrl?: string;
  timeoutValue?: number;
}

export type GoogleCountryCode =
  | 'AF'
  | 'AL'
  | 'DZ'
  | 'AS'
  | 'AD'
  | 'AO'
  | 'AI'
  | 'AQ'
  | 'AG'
  | 'AR'
  | 'AM'
  | 'AW'
  | 'AU'
  | 'AT'
  | 'AZ'
  | 'BS'
  | 'BH'
  | 'BD'
  | 'BB'
  | 'BY'
  | 'BE'
  | 'BZ'
  | 'BJ'
  | 'BM'
  | 'BT'
  | 'BO'
  | 'BA'
  | 'BW'
  | 'BR'
  | 'BN'
  | 'BG'
  | 'BF'
  | 'BI'
  | 'KH'
  | 'CM'
  | 'CA'
  | 'CV'
  | 'KY'
  | 'CF'
  | 'TD'
  | 'CL'
  | 'CN'
  | 'CO'
  | 'KM'
  | 'CG'
  | 'CR'
  | 'HR'
  | 'CU'
  | 'CY'
  | 'CZ'
  | 'DK'
  | 'DJ'
  | 'DM'
  | 'DO'
  | 'EC'
  | 'EG'
  | 'SV'
  | 'GQ'
  | 'ER'
  | 'EE'
  | 'ET'
  | 'FJ'
  | 'FI'
  | 'FR'
  | 'GA'
  | 'GM'
  | 'GE'
  | 'DE'
  | 'GH'
  | 'GR'
  | 'GD'
  | 'GT'
  | 'GN'
  | 'GW'
  | 'GY'
  | 'HT'
  | 'HN'
  | 'HK'
  | 'HU'
  | 'IS'
  | 'IN'
  | 'ID'
  | 'IR'
  | 'IQ'
  | 'IE'
  | 'IL'
  | 'IT'
  | 'CI'
  | 'JM'
  | 'JP'
  | 'JO'
  | 'KZ'
  | 'KE'
  | 'KI'
  | 'KR'
  | 'KW'
  | 'KG'
  | 'LA'
  | 'LV'
  | 'LB'
  | 'LS'
  | 'LR'
  | 'LY'
  | 'LI'
  | 'LT'
  | 'LU'
  | 'MO'
  | 'MK'
  | 'MG'
  | 'MW'
  | 'MY'
  | 'MV'
  | 'ML'
  | 'MT'
  | 'MH'
  | 'MR'
  | 'MU'
  | 'MX'
  | 'FM'
  | 'MD'
  | 'MC'
  | 'MN'
  | 'ME'
  | 'MA'
  | 'MZ'
  | 'MM'
  | 'NA'
  | 'NP'
  | 'NL'
  | 'NZ'
  | 'NI'
  | 'NE'
  | 'NG'
  | 'NO'
  | 'OM'
  | 'PK'
  | 'PW'
  | 'PA'
  | 'PG'
  | 'PY'
  | 'PE'
  | 'PH'
  | 'PL'
  | 'PT'
  | 'QA'
  | 'RO'
  | 'RU'
  | 'RW'
  | 'KN'
  | 'LC'
  | 'VC'
  | 'WS'
  | 'SM'
  | 'ST'
  | 'SA'
  | 'SN'
  | 'RS'
  | 'SC'
  | 'SL'
  | 'SG'
  | 'SK'
  | 'SI'
  | 'SB'
  | 'SO'
  | 'ZA'
  | 'ES'
  | 'LK'
  | 'SD'
  | 'SR'
  | 'SZ'
  | 'SE'
  | 'CH'
  | 'SY'
  | 'TW'
  | 'TJ'
  | 'TZ'
  | 'TH'
  | 'TG'
  | 'TO'
  | 'TT'
  | 'TN'
  | 'TR'
  | 'TM'
  | 'UG'
  | 'UA'
  | 'AE'
  | 'GB'
  | 'US'
  | 'UY'
  | 'UZ'
  | 'VU'
  | 'VE'
  | 'VN'
  | 'YE'
  | 'ZM'
  | 'ZW';

export type GoogleLanguageCode =
  | 'af'
  | 'am'
  | 'ar'
  | 'az'
  | 'be'
  | 'bg'
  | 'bn'
  | 'bs'
  | 'ca'
  | 'ceb'
  | 'cs'
  | 'cy'
  | 'da'
  | 'de'
  | 'el'
  | 'en'
  | 'eo'
  | 'es'
  | 'et'
  | 'eu'
  | 'fa'
  | 'fi'
  | 'fr'
  | 'ga'
  | 'gl'
  | 'gu'
  | 'ha'
  | 'haw'
  | 'he'
  | 'hi'
  | 'hmn'
  | 'hr'
  | 'ht'
  | 'hu'
  | 'hy'
  | 'id'
  | 'ig'
  | 'is'
  | 'it'
  | 'ja'
  | 'jv'
  | 'ka'
  | 'kk'
  | 'km'
  | 'kn'
  | 'ko'
  | 'ku'
  | 'ky'
  | 'la'
  | 'lb'
  | 'lo'
  | 'lt'
  | 'lv'
  | 'mg'
  | 'mi'
  | 'mk'
  | 'ml'
  | 'mn'
  | 'mr'
  | 'ms'
  | 'mt'
  | 'my'
  | 'ne'
  | 'nl'
  | 'no'
  | 'ny'
  | 'pa'
  | 'pl'
  | 'ps'
  | 'pt'
  | 'ro'
  | 'ru'
  | 'sd'
  | 'si'
  | 'sk'
  | 'sl'
  | 'sm'
  | 'sn'
  | 'so'
  | 'sq'
  | 'sr'
  | 'st'
  | 'su'
  | 'sv'
  | 'sw'
  | 'ta'
  | 'te'
  | 'tg'
  | 'th'
  | 'tl'
  | 'tr'
  | 'uk'
  | 'ur'
  | 'uz'
  | 'vi'
  | 'xh'
  | 'yi'
  | 'yo'
  | 'zh'
  | 'zu';
