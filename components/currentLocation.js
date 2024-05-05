import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Dimensions,
  Image,
} from "react-native";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";
import mapcover from "../assets/mapcover.png";

// const windowWidth = Dimensions.get("window").width;
// const windowHeight = Dimensions.get("window").height;

const CurrentLocationMapView = ({ setAddress }) => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [initialRegion, setInitialRegion] = useState(null);
  //   const [address, setAddress] = useState(null);

  useEffect(() => {
    const getLocation = async () => {
      //Konum erişim isteği gönder
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Konum erişim izni reddedildi.");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setCurrentLocation(location.coords);

      setInitialRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      });

      let addressResult = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
      setAddress(addressResult[0]); // İlk adresi al
    };

    getLocation();
  }, []);

  return (
    <View style={styles.container}>
      {initialRegion && (
        <MapView style={styles.map} initialRegion={initialRegion}>
          {currentLocation && (
            <Marker
              coordinate={{
                latitude: currentLocation.latitude,
                longitude: currentLocation.longitude,
              }}
              title="Konumunuz"
            />
          )}
        </MapView>
      )}
      <Image source={mapcover} style={styles.mapCover} resizeMode="cover" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 240,
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  mapCover: {
    position: "absolute",
    top: "50%",
    width: "100%",
  },
});

export default CurrentLocationMapView;
