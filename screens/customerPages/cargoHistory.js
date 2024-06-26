import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import HeaderArea from "../../components/header";
import PackageMoreInfo from "../../components/kargoInfo";
import PackageStatus from "../../components/packageStatus";
import VerticalSlider from "../../components/slider";

const MusteriGecmisKargolar = ({ navigation }) => {
  const [visible, setVisible] = useState(false);

  const sliderClose = () => {
    setVisible(false);
  };
  const sliderOpen = () => {
    setVisible(true);
  };
  return (
    <>
      <View>
        <HeaderArea
          height={150}
          turnBack={true}
          onPress={() => navigation.navigate("CustomerMain")}
          titleText="Geçmiş Kargolar"
        />

        <PackageStatus
          onPress={sliderOpen}
          receiver="Bü***** Me**"
          packageAmount="2"
          price="125.00 ₺"
        />

        <PackageStatus
          onPress={sliderOpen}
          receiver="Me*** E*** Po***"
          packageAmount="1"
          price="145.00 ₺"
        />
        {visible == true && (
          <VerticalSlider
            isVisible={visible}
            onClose={sliderClose} // slider kapatma fonksiyonunu doğru şekilde tanımlayın
          >
            {/* Slider içeriği buraya gelecek */}
            <View>
              <TouchableOpacity
                style={{ backgroundColor: "red" }}
                onPress={sliderClose}
              ></TouchableOpacity>
              <PackageMoreInfo onPress={sliderClose} />
            </View>
          </VerticalSlider>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default MusteriGecmisKargolar;
