import { useCallback, useEffect, useState } from 'react';
import { Alert, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { getAddress } from '../util/location';

function Map({ handleaddress, handleLoc }) {
  const [selectedLocation, setSelectedLocation] = useState();

  const region = {
    latitude: 17.430241,
    longitude: 78.444967,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  function selectLocationHandler(event) {
    const lat = event.nativeEvent.coordinate.latitude;
    const lng = event.nativeEvent.coordinate.longitude;

    setSelectedLocation({ lat: lat, lng: lng });
  }
  useEffect(() => {
  async function handleLocation() {
    if (selectedLocation) {
      const address = await getAddress(
        selectedLocation.lat,
        selectedLocation.lng
      );
      handleLoc({lat:selectedLocation.lat, lng:selectedLocation.lng});
      handleaddress(address);
    }
  }

  handleLocation();
}, [selectedLocation, handleaddress, handleLoc]);


  const savePickedLocationHandler = useCallback(() => {
    if (!selectedLocation) {
      Alert.alert(
        'No location picked!',
        'You have to pick a location (by tapping on the map) first!'
      );
      return;
    }

    // navigation.navigate('AddPlace', {
    //   pickedLat: selectedLocation.lat,
    //   pickedLng: selectedLocation.lng,
    // });
  }, [selectedLocation]);

//   useLayoutEffect(() => {
//     navigation.setOptions({
//       headerRight: ({ tintColor }) => (
//         <IconButton
//           icon="save"
//           size={24}
//           color={tintColor}
//           onPress={savePickedLocationHandler}
//         />
//       ),
//     });
//   }, [navigation, savePickedLocationHandler]);

  return (
    <MapView
      style={styles.map}
      initialRegion={region}
      onPress={selectLocationHandler}
    >
      {selectedLocation && (
        <Marker
          title="Picked Location"
          coordinate={{
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng,
          }}
        />
      )}
    </MapView>
  );
}

export default Map;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});