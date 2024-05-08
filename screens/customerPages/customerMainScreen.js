import React, { useState } from "react";
import { View } from "react-native";

import CurrentLocationMapView from "../../components/currentLocation";
import HeaderArea from "../../components/header";
import LocationInfo from "../../components/locationInfo";
import OptionContainer from "../../components/optionContainer";
import MenuContainer from "../../components/bottomMenu";

import AddIcon from "../../assets/ilanverIcon.png";
import FeedBackIcon from "../../assets/feedbackIcon.png";
import returnIcon from "../../assets/returnIcon.png";
import kargomyolda from "../../assets/kargoyoldaText.png";

const CustomerMainPageScreen = ({ navigation }) => {
  const [address, setAddress] = useState(null);

  return (
    <>
      <View style={{ backgroundColor: "#fff" }}>
        <HeaderArea
          height={105}
          backgroundColor="#2AA2E6"
          source={kargomyolda}
        />

        {/* CurrentLocationMapView propsunu global state olmadan locationinfo componentine aktararak adres bilgisini ekrana basma işlemi */}
        <LocationInfo address={address} />
        <CurrentLocationMapView setAddress={setAddress} userName="Bünyamin" />
        <OptionContainer
          ImageSource={AddIcon}
          Title="Kargo İlanı Ver"
          Subtitle="Kargolarını hızlı ve kolayca gönder"
          onPress={() => navigation.navigate("IlanVer")}
        />
        <OptionContainer
          ImageSource={returnIcon}
          Title="Geçmiş Kargolar"
          Subtitle="Geçmiş kargo hareketlerini görüntüleyin"
          onPress={() => navigation.navigate("MusteriKargo")}
        />
        <OptionContainer
          ImageSource={FeedBackIcon}
          Title="Geri Bildirim"
          Subtitle="Deneyimlerinizle alakalı geri bildirimde bulunun"
          onPress={() => navigation.navigate("MusteriGeriBildirim")}
        />
        <MenuContainer />
      </View>
    </>
  );
};

export default CustomerMainPageScreen;
