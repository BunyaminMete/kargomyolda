import React from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import HeaderArea from "../../components/header";
import InfoContainer from "../../components/topContainerInfo";
import SetButton from "../../components/button";
import profil from "../../assets/profilephoto.png";
import InputComponent from "../../components/input";
import { useNavigation } from "@react-navigation/native";

const MusteriProfilAyarlari = ({}) => {
  const navigation = useNavigation();
  return (
    <>
      <View>
        <HeaderArea
          height={150}
          turnBack={true}
          onPress={() => navigation.navigate("CustomerMain")}
          titleText="Profilini Düzenle"
        />
        <View style={styles.container}>
          <Image source={profil} style={styles.image} />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Dosya Seç</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rowButtons}>
          <View style={{ marginRight: 40 }}>
            <InputComponent placeholder="Ad" width={160} />
          </View>
          <InputComponent placeholder="Soyad" width={160} />
        </View>
        <View style={styles.rowButtons}>
          <View style={{ marginRight: 40 }}>
            <InputComponent placeholder="Parola" width={160} />
          </View>
          <InputComponent placeholder="Parola" width={160} />
        </View>
        <View style={{ marginTop: -10 }}>
          <InputComponent placeholder="Cep Telefonu" />
        </View>
        <View style={{ marginTop: -10 }}>
          <InputComponent placeholder="E-posta" />
        </View>
        <View style={{ marginTop: -10 }}>
          <InputComponent placeholder="Adres" />
        </View>
        <View style={{ marginTop: 30 }}>
          <SetButton
            buttonText="Kaydet"
            buttonStyle={{ backgroundColor: "#38BF22" }}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 80,
    marginTop: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  button: {
    backgroundColor: "#70BD55",
    width: 120,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
  },
  rowButtons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: -10,
  },
});

export default MusteriProfilAyarlari;
