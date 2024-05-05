import { View, StyleSheet } from "react-native";
import HeaderArea from "../../components/header";
import InfoContainer from "../../components/topContainerInfo";
import InputComponent from "../../components/input";
import SetButton from "../../components/button";

const KargoIlanYayinla = ({ navigation }) => {
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
            <InputComponent placeholder="Ağırlık" width={160} />
          </View>
          <InputComponent placeholder="Uzunluk" width={160} />
        </View>

        <View style={styles.rowButtons}>
          <View style={{ marginRight: 25 }}>
            <InputComponent placeholder="Genişlik" width={160} />
          </View>
          <InputComponent placeholder="Derinlik" width={160} />
        </View>

        <View style={styles.rowButtons}>
          <View style={{ marginRight: 25 }}>
            <InputComponent placeholder="Alıcı Adı Soyadı" width={160} />
          </View>
          <InputComponent placeholder="Alıcı Telefon" width={160} />
        </View>

        <View style={styles.rowButtons}>
          <View style={{ marginRight: 25 }}>
            <InputComponent placeholder="Alıcı İlçe" width={160} />
          </View>
          <InputComponent placeholder="Alıcı Mahalle" width={160} />
        </View>

        <View style={styles.rowButtons}>
          <View style={{ marginRight: 25 }}>
            <InputComponent placeholder="Alıcı Sokak" width={160} />
          </View>
          <InputComponent placeholder="Alıcı Kapı No" width={160} />
        </View>
        <InputComponent placeholder="Alıcı Tam Adresi" />

        <View style={{ marginTop: 30 }}>
          <SetButton
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
