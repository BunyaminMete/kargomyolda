import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";

import CurrentLocationMapView from "../../components/currentLocation";
import HeaderArea from "../../components/header";
import LocationInfo from "../../components/locationInfo";
import MenuContainer from "../../components/bottomMenu";

import kargomyolda from "../../assets/kargoyoldaText.png";
import ProductList from "../../components/couierPackageButton";

const CourierMainPageScreen = ({ navigation }) => {
  const [address, setAddress] = useState(null);
  const nearbyPackages = [
    {
      "Sana Olan Uzaklık": "1.2 km",
      "Taşınacak Mesafe": "6 km",
      Ağırlık: "0.25 kg",
      Uzunluk: "0.45 m",
      Derinlik: "0.30 m",
      Genişlik: "0.15 m",
    },
    {
      "Sana Olan Uzaklık": "2 km",
      "Taşınacak Mesafe": "6 km",
      Ağırlık: "1 kg",
      Uzunluk: "2 m",
      Derinlik: "0.1 m",
      Genişlik: "0.2 m",
    },
    {
      "Sana Olan Uzaklık": "2 km",
      "Taşınacak Mesafe": "6 km",
      Ağırlık: "1 kg",
      Uzunluk: "2 m",
      Derinlik: "0.1 m",
      Genişlik: "0.2 m",
    },
  ];

  return (
    <>
      <ScrollView style={{ backgroundColor: "#fff" }}>
        <HeaderArea
          height={105}
          backgroundColor="#2AA2E6"
          source={kargomyolda}
        />

        {/* CurrentLocationMapView propsunu global state olmadan locationinfo componentine aktararak adres bilgisini ekrana basma işlemi */}
        <LocationInfo address={address} />
        <CurrentLocationMapView setAddress={setAddress} userName="Bünyamin" />
        <Text style={{ fontSize: 26, fontWeight: "bold", marginLeft: 20 }}>
          Yakınındaki Paketler
        </Text>
        <ProductList packageInfo={nearbyPackages} packagePrice={45} />
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
        <ProductList packageInfo={nearbyPackages} />
        <MenuContainer />
      </ScrollView>
    </>
  );
};

export default CourierMainPageScreen;
