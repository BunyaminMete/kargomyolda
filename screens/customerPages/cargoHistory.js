import React from "react";
import { View, StyleSheet } from "react-native";
import HeaderArea from "../../components/header";

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
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default MusteriGecmisKargolar;
