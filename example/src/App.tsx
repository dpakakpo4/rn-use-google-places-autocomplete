import { useGooglePlacesAutocomplete } from 'rn-use-google-places-autocomplete';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  RefreshControl,
} from 'react-native';

export default function App() {
  const { query, setQuery, places, loading, error } =
    useGooglePlacesAutocomplete({
      language: 'en',
      gcpApiKey: 'YourApiCode',
    });

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.params}>Language : {'EN'} </Text>
        <TextInput
          style={styles.input}
          placeholder="Search a place..."
          value={query}
          onChangeText={setQuery}
        />
      </View>
      {error && <Text style={styles.error}>Error : {error}</Text>}
      <FlatList
        refreshControl={
          <RefreshControl onRefresh={() => { }} refreshing={loading} />
        }
        refreshing={loading}
        data={places}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => { }}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.address}>{item.fullAddress}</Text>
            <Text style={styles.address}>
              Lat : {item.latitude} | Long : {item.longitude}
            </Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingTop: 56,
    paddingHorizontal: 32,
  },
  input: {
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    color: 'black',
    fontSize: 18,
    backgroundColor: 'white',
    marginBottom: 32,
  },
  loading: {
    marginTop: 8,
    color: 'blue',
  },
  params: {
    borderWidth: 1,
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: '#FFF',
    borderRadius: 4,
    marginBottom: 16,
  },
  error: {
    marginTop: 8,
    color: 'red',
  },
  item: {
    backgroundColor: '#FFF',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#FFF',
    marginBottom: 6,
    borderRadius: 4,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 2,
  },
  address: {
    color: '#999',
    fontSize: 14,
  },
});
