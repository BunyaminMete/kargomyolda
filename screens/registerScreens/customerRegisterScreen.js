import { View, StyleSheet } from "react-native";
import SetButton from "../../components/button";
import CheckBoxComponent from "../../components/checkbox";
import HeaderArea from "../../components/header";
import InputComponent from "../../components/input";
import InfoContainer from "../../components/topContainerInfo";

const RegisterMusteri = () => {
  return (
    <>
      <View style={styles.formContainer}>
        <HeaderArea />
        <View>
          <InfoContainer bottomInfoText="Gönderilerinizi yönetmek için Lütfen kaydolun." />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            margin: 10,
          }}
        >
          <View style={{ marginRight: 30 }}>
            <InputComponent placeholder="İsim" width={160} />
          </View>
          <InputComponent placeholder="Soyisim" width={160} />
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <InputComponent placeholder="E-posta" uzaklik_ayarla={"-5%"} />
          <InputComponent placeholder="Cep Telefonu" uzaklik_ayarla={"-5%"} />
          <InputComponent placeholder="Adres" uzaklik_ayarla={"-5%"} />
          <InputComponent placeholder="Parola" uzaklik_ayarla={"-5%"} />
          <CheckBoxComponent checkboxText="Üyelik gizlilik sözleşmesini okudum ve onaylıyorum" />

          <View>
            <SetButton
              buttonText="Kayıt Ol"
              buttonStyle={{ backgroundColor: "#38BF22", marginTop: 50 }}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default RegisterMusteri;

const styles = StyleSheet.create({
  formContainer: {},
});
