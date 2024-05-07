import React from "react";
import { View, StyleSheet } from "react-native";
import HeaderArea from "../../components/header";
import PackageStatus from "../../components/packageStatus";

const MusteriGecmisKargolar = ({ navigation }) => {
  return (
    <>
      <View>
        <HeaderArea
          height={150}
          turnBack={true}
          onPress={() => navigation.navigate("CustomerMain")}
          titleText="Geçmiş Kargolar"
        />
        <PackageStatus />
        <PackageStatus />
        <PackageStatus />
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default MusteriGecmisKargolar;
