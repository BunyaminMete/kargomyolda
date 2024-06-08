import React, { useState, useEffect } from "react";
import { ScrollView, Text, RefreshControl } from "react-native";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

import CurrentLocationMapView from "../../components/currentLocation";
import HeaderArea from "../../components/header";
import LocationInfo from "../../components/locationInfo";
import MenuContainer from "../../components/bottomMenu";

import kargomyolda from "../../assets/kargoyoldaText.png";
import ProductList from "../../components/couierPackageButton";

const CourierMainPageScreen = ({ navigation }) => {
  const [address, setAddress] = useState(null);
  const [nearbyPackages, setNearbyPackages] = useState([]);
  const [pastPackages, setPastPackages] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [refreshed, setRefreshed] = useState(false);

  const fetchShipments = async () => {
    try {
      const snapshot = await firebase.firestore().collection("shipments").get();
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNearbyPackages(data);
      console.log("Fetched shipments:", data);
    } catch (error) {
      console.error("Error fetching shipments:", error);
    }
  };

  const fetchPastShipments = async () => {
    try {
      const snapshot = await firebase
        .firestore()
        .collection("pastShipments")
        .get();
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPastPackages(data);
      console.log("Fetched past shipments:", data);
    } catch (error) {
      console.error("Error fetching past shipments:", error);
    }
  };

  useEffect(() => {
    fetchShipments();
    fetchPastShipments();
  }, [refreshed]);

  const onRefresh = () => {
    setRefreshing(true);
    setRefreshed((prev) => !prev); // Durumu değiştirerek yeniden fetch işlemini tetikle
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  return (
    <ScrollView
      style={{ backgroundColor: "#fff" }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <HeaderArea height={105} backgroundColor="#2AA2E6" source={kargomyolda} />
      <LocationInfo address={address} />
      <CurrentLocationMapView setAddress={setAddress} userName="Bünyamin" />
      <Text style={{ fontSize: 26, fontWeight: "bold", marginLeft: 20 }}>
        Yakınındaki Paketler
      </Text>
      <ProductList
        showButton={true}
        packageInfo={nearbyPackages}
        navigateTo={() => navigation.navigate("PackageDetails")}
        onRefresh={onRefresh} // onRefresh fonksiyonunu ProductList bileşenine geç
      />
      <Text
        style={{
          fontSize: 26,
          fontWeight: "bold",
          marginLeft: 20,
          marginTop: 20,
        }}
      >
        Geçmiş Paketler
      </Text>
      <ProductList packageInfo={pastPackages} onRefresh={onRefresh} />
      {/* onRefresh fonksiyonunu ProductList bileşenine geç */}
      <MenuContainer />
    </ScrollView>
  );
};

export default CourierMainPageScreen;
