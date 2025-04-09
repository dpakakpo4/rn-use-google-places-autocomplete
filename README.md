
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
npm install rn-use-google-places-autocomplete
# or
yarn add rn-use-google-places-autocomplete
```

---

## 🛠️ Setup Before Use

Before you start using this package, ensure that you’ve properly set up your Google Cloud Platform (GCP) project and API keys. Here are the steps to follow:

### 1. Create a Google Cloud Project

1. **Access the Google Cloud Console**: Go to [Google Cloud Console](https://console.cloud.google.com/).
2. **Create a New Project**: Click on the project dropdown and select "New Project". Give it a name and create it.

### 2. Enable Billing

1. **Enable Billing for Your Project**: You need to link a billing account to your project. If you don’t have one, create it following the instructions in the console.

*Note: Google Cloud offers a free tier, and you won’t be charged unless your usage exceeds the free tier limits.*

### 3. Enable Required APIs

In order to use Google Places Autocomplete and Geocoding, you must enable the following APIs:

- **Places API**
- **Geocoding API**

#### a. Enable APIs:

1. Go to the [API Library](https://console.cloud.google.com/apis/library) in the Google Cloud Console.
2. **Enable Places API**:
   - Search for "Places API", select it, and click "Enable".
3. **Enable Geocoding API**:
   - Search for "Geocoding API", select it, and click "Enable".

### 4. Create an API Key

1. **Navigate to API Credentials**: In the Google Cloud Console, go to "APIs & Services" > "Credentials".
2. **Create a New API Key**:
   - Click on "Create Credentials" and choose "API Key".
   - Copy the generated key. This key will be used in your app.
3. **Restrict Your API Key** (Recommended):
   - To prevent unauthorized usage, restrict the key to only work with your allowed referrers (such as your domain or mobile app).
   - You can also restrict the key to only the Places and Geocoding APIs.

For a complete guide on setting up your API keys, see [Google’s official documentation](https://developers.google.com/maps/documentation/geocoding/cloud-setup).

---

## 🛠️ Usage

```tsx
import useGooglePlacesAutocomplete from "use-google-places-autocomplete";
import { useGooglePlacesAutocomplete } from 'rn-use-google-places-autocomplete';
import { Text, View, TextInput, FlatList, TouchableOpacity, RefreshControl, } from 'react-native';

export default function App() {
  const { query, setQuery, places, loading, error } =
  useGooglePlacesAutocomplete({
    gcpApiKey: "YOUR_GOOGLE_API_KEY",
    language: "en", // or "fr", etc.
    countries: ["FR", "US"], // Optional country filter
  });

  return(
    <View>
      // Bind `query` to your input and render `places`
      <TextInput
        placeholder="Search a place..."
        value={query}
        onChangeText={setQuery}
      />
      // Render the places
      <FlatList
        refreshControl={
          <RefreshControl 
            onRefresh={() => {}} 
            refreshing={loading} 
          />
        }
        refreshing={loading}
        data={places}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => {}}>
            <Text>{item.name}</Text>
            <Text>{item.fullAddress}</Text>
            <Text>
              Lat : {item.latitude} | Long : {item.longitude}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}
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
| `timeoutValue`    | `number`               | ❌       | Override timeout (default is 1500) |

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

<!-- ### 📸 GIF Preview

<img src="./demo/demo.gif" alt="Demo preview" width="400" /> -->

## 📺 [Demo Video](https://youtube.com/shorts/QhAJsC9ve58)

You can view the demo video by clicking [here](https://youtube.com/shorts/QhAJsC9ve58).

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
