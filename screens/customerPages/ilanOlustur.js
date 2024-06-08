import { View, StyleSheet, Alert } from "react-native";
import { useState, useEffect } from "react";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

import HeaderArea from "../../components/header";
import InfoContainer from "../../components/topContainerInfo";
import InputComponent from "../../components/input";
import SetButton from "../../components/button";

const KargoIlanYayinla = ({ navigation }) => {
  const [userUID, setUserUID] = useState("");
  const [weight, setWeight] = useState("");
  const [length, setLength] = useState("");
  const [depth, setDepth] = useState("");
  const [width, setWidth] = useState("");
  const [fullAddress, setFullAddress] = useState("");
  const [receiverName, setReceiverName] = useState("");
  const [receiverPhone, setReceiverPhone] = useState("");
  const [district, setDistrict] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [street, setStreet] = useState("");
  const [doorNumber, setDoorNumber] = useState("");

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        setUserUID(user.uid);
      } else {
        setUserUID("");
      }
    });

    return () => unsubscribe();
  }, []);

  const HandleAddProduct = async () => {
    if (!userUID) {
      Alert.alert("Kullanıcı oturumu açık değil.");
      return;
    }
    if (!weight || !length || !depth || !width || !fullAddress) {
      // Eğer bir veya daha fazla alan boşsa, kullanıcıya bir uyarı göster
      Alert.alert("Lütfen tüm alanları doldurun!");
      return; // Form gönderilmeden çık
    }

    try {
      await firebase.firestore().collection("shipments").add({
        userUID,
        weight,
        length,
        depth,
        width,
        fullAddress,
        receiverName,
        receiverPhone,
        district,
        neighborhood,
        street,
        doorNumber,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
      Alert.alert("Kargo ilanı başarıyla yayınlandı!");
      navigation.navigate("CustomerMain");
    } catch (error) {
      Alert.alert("Bir hata oluştu:", error.message);
    }
  };

  return (
    <>
      <View>
        <HeaderArea
          height={150}
          turnBack={true}
          onPress={() => navigation.navigate("CustomerMain")}
          titleText="Kargo İlanı Ver"
        />
        <View style={{ marginTop: -25 }}>
          <InfoContainer
            welcomeText="Merhaba Admin !"
            bottomInfoText="Kargo ilanı vermek için lütfen aşağıdaki bilgileri eksiksiz doldurunuz."
          />
        </View>

        <View style={styles.rowButtons}>
          <View style={{ marginRight: 25 }}>
            <InputComponent
              placeholder="Ağırlık"
              width={160}
              value={weight}
              onChangeText={setWeight}
              isRequired={true}
            />
          </View>
          <InputComponent
            placeholder="Uzunluk"
            width={160}
            value={length}
            onChangeText={setLength}
            isRequired={true}
          />
        </View>

        <View style={styles.rowButtons}>
          <View style={{ marginRight: 25 }}>
            <InputComponent
              placeholder="Genişlik"
              width={160}
              value={width}
              onChangeText={setWidth}
              isRequired={true}
            />
          </View>
          <InputComponent
            placeholder="Derinlik"
            width={160}
            value={depth}
            onChangeText={setDepth}
            isRequired={true}
          />
        </View>

        <View style={styles.rowButtons}>
          <View style={{ marginRight: 25 }}>
            <InputComponent
              placeholder="Alıcı Adı Soyadı"
              width={160}
              value={receiverName}
              onChangeText={setReceiverName}
            />
          </View>
          <InputComponent
            placeholder="Alıcı Telefon"
            width={160}
            value={receiverPhone}
            onChangeText={setReceiverPhone}
          />
        </View>

        <View style={styles.rowButtons}>
          <View style={{ marginRight: 25 }}>
            <InputComponent
              placeholder="Alıcı İlçe"
              width={160}
              value={district}
              onChangeText={setDistrict}
            />
          </View>
          <InputComponent
            placeholder="Alıcı Mahalle"
            width={160}
            value={neighborhood}
            onChangeText={setNeighborhood}
          />
        </View>

        <View style={styles.rowButtons}>
          <View style={{ marginRight: 25 }}>
            <InputComponent
              placeholder="Alıcı Sokak"
              width={160}
              value={street}
              onChangeText={setStreet}
            />
          </View>
          <InputComponent
            placeholder="Alıcı Kapı No"
            width={160}
            value={doorNumber}
            onChangeText={setDoorNumber}
          />
        </View>
        <InputComponent
          placeholder="Alıcı Tam Adresi"
          value={fullAddress}
          onChangeText={setFullAddress}
          isRequired={true}
        />

        <View style={{ marginTop: 30 }}>
          <SetButton
            onPress={HandleAddProduct}
            buttonText="Yayınla"
            buttonStyle={{ backgroundColor: "#38BF22" }}
          />
        </View>
      </View>
    </>
  );
};

export default KargoIlanYayinla;

const styles = StyleSheet.create({
  rowButtons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: -10,
  },
});
