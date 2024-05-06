import { View } from "react-native";
import InfoContainer from "../../components/topContainerInfo";
import creditCard from "../../assets/creditcardlogo.png";
import HeaderArea from "../../components/header";
import InputComponent from "../../components/input";
import SetButton from "../../components/button";

const CustomerCardDetails = ({ navigation }) => {
  return (
    <>
      <View>
        <HeaderArea
          height={150}
          turnBack={true}
          titleText="Hesap Bilgileri"
          onPress={() => navigation.navigate("CustomerMain")}
        />
        <InfoContainer
          welcomeText="Merhaba Admin !"
          containerLogo={creditCard}
          bottomInfoText="Taşıma ücretlerini ödemek için kart bilgilerinizi 
          lütfen eksiksiz doldurunuz."
        />
        <View style={{ marginTop: 40 }}>
          <InputComponent placeholder="Kart Numarası" />
          <InputComponent placeholder="Kart Üzerindeki İsim" />
          <View style={{ marginRight: 160 }}>
            <InputComponent placeholder="Son Kullanma Tarihi" width={200} />
          </View>
        </View>
        <View style={{ marginTop: 70 }}>
          <SetButton
            buttonText="Kaydet"
            buttonStyle={{ backgroundColor: "#38BF22" }}
          />
        </View>
      </View>
    </>
  );
};

export default CustomerCardDetails;
