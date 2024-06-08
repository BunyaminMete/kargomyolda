import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";

import SetButton from "../../components/button";
import CheckBoxComponent from "../../components/checkbox";
import HeaderArea from "../../components/header";
import InputComponent from "../../components/input";
import InfoContainer from "../../components/topContainerInfo";
import { useNavigation } from "@react-navigation/native"; // navigation importu
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const RegisterMusteri = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordMatching, setPasswordMatching] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const navigation = useNavigation(); // navigation hook

  const handleRegister = async () => {
    if (password !== passwordMatching) {
      Alert.alert("Parolalar eşleşmiyor");
      return;
    }

    try {
      const userCredential = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      if (userCredential) {
        await firebase
          .firestore()
          .collection("users")
          .doc(userCredential.user.uid)
          .set({
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNumber: phoneNumber,
            address: address,
            role: "musteri",
          });
        console.log("Kullanıcı başarıyla kaydedildi!");
        Alert.alert("Kayıt işlemi başarılı");
        navigation.navigate("Login");
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <View style={styles.formContainer}>
      <HeaderArea />
      <InfoContainer bottomInfoText="Gönderilerinizi yönetmek için Lütfen kaydolun." />
      <View style={styles.inputRow}>
        <View style={styles.inputWrapper}>
          <InputComponent
            placeholder="İsim"
            width={160}
            value={firstName}
            onChangeText={setFirstName}
          />
        </View>
        <InputComponent
          placeholder="Soyisim"
          width={160}
          value={lastName}
          onChangeText={setLastName}
        />
      </View>
      <View style={styles.centeredView}>
        <InputComponent
          placeholder="E-posta"
          uzaklik_ayarla={"-5%"}
          value={email}
          onChangeText={setEmail}
        />
        <InputComponent
          placeholder="Cep Telefonu"
          uzaklik_ayarla={"-5%"}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
        <InputComponent
          placeholder="Adres"
          uzaklik_ayarla={"-5%"}
          value={address}
          onChangeText={setAddress}
        />
        <InputComponent
          placeholder="Parola"
          uzaklik_ayarla={"-5%"}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <InputComponent
          placeholder="Parola Tekrar"
          uzaklik_ayarla={"-5%"}
          value={passwordMatching}
          onChangeText={setPasswordMatching}
          secureTextEntry
        />
        <CheckBoxComponent checkboxText="Üyelik gizlilik sözleşmesini okudum ve onaylıyorum" />
        <SetButton
          buttonText="Kayıt Ol"
          buttonStyle={styles.registerButton}
          onPress={handleRegister}
        />
      </View>
    </View>
  );
};

export default RegisterMusteri;

const styles = StyleSheet.create({
  formContainer: {},
  inputRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  inputWrapper: {
    marginRight: 30,
  },
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
  },
  registerButton: {
    backgroundColor: "#38BF22",
    marginTop: 50,
  },
});
