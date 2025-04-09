# 🗺️ useGooglePlacesAutocomplete

A fully-typed and modern React Native hook for consuming [Google Places API v1](https://developers.google.com/maps/documentation/places/web-service/autocomplete), without `axios` or unnecessary dependencies.

## ✨ Why this package?

The goal was to build a lightweight, developer-friendly and **React Native-compliant** hook that allows you to easily integrate Google Places Autocomplete in your apps, with geolocation support — all **typed**, **simple**, and **production-ready**.

Most existing packages either:
- Use outdated APIs (Place Autocomplete v1 is recommended)
- Rely on `axios`, which bloats your bundle
- Aren’t tailored for React Native
- Lack proper TypeScript support

This solves all that in one clean, open-source package 🚀

---

## 📦 Installation

```bash
npm install use-google-places-autocomplete
# or
yarn add use-google-places-autocomplete
```

---

## 🛠️ Usage

```tsx
import useGooglePlacesAutocomplete from "use-google-places-autocomplete";

const { query, setQuery, places, loading, error } = useGooglePlacesAutocomplete({
  gcpApiKey: "YOUR_GOOGLE_API_KEY",
  language: "en", // or "fr", etc.
  countries: ["FR", "US"], // Optional country filter
});

// Bind `query` to your input and render `places`
```

---

## 🧠 Features

- ✅ Fully typed (TypeScript ready)
- ✅ Google Places API v1 compatible
- ✅ Geocoding (lat/lng) included
- ✅ Customizable endpoints (for advanced use)
- ✅ Designed for **React Native**
- ✅ No external dependencies

---

## 📄 API

### `useGooglePlacesAutocomplete(props)`

| Prop              | Type                   | Required | Description |
|-------------------|------------------------|----------|-------------|
| `gcpApiKey`       | `string`               | ✅       | Your Google Cloud API Key with Places and Geocoding enabled |
| `language`        | `string`               | ❌       | Language code (default is `'fr'`) |
| `countries`       | `string[]`             | ❌       | Country restriction (e.g., `['FR', 'US']`) |
| `autocompUrl`     | `string`               | ❌       | Override autocomplete endpoint |
| `geocodingUrl`    | `string`               | ❌       | Override geocoding endpoint |

### Returns

| Field      | Type              | Description |
|------------|-------------------|-------------|
| `query`    | `string`          | The current user input |
| `setQuery` | `function`        | Update the query string |
| `places`   | `Place[]`         | List of place suggestions with metadata |
| `loading`  | `boolean`         | Whether a request is in progress |
| `error`    | `string \| null`  | Any API or fetch error |

### `Place` Object Structure

```ts
interface Place {
  id: string;
  name: string;
  fullAddress: string;
  types: string[];
  latitude: number | null;
  longitude: number | null;
  address_components: {
    mainText: { text: string };
    secondaryText: { text: string };
  };
  raw?: PlacePrediction; // Full Google prediction object
}
```

---

## 🚀 Demo

### 📸 GIF Preview

<img src="./demo/demo.gif" alt="Demo preview" width="400" />

### 📺 Demo Video

> _Coming soon..._

---

## 🤝 Contribute

PRs are welcome! If you’d like to add features (like place detail fetch), feel free to open an issue or contribute directly.

---

## 💬 Need a custom React Native component?

I build production-grade mobile experiences, MVPs and complex app architectures.  
📧 Contact me at [contact@devops-office.com](mailto:contact@devops-office.com)

---

## 📄 License

MIT – Free for personal and commercial use.