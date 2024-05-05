import HeaderArea from "../components/header";
import { View } from "react-native";
import InfoContainer from "../components/topContainerInfo";
import DualButtonContainer from "../components/belgeButton";
import SetButton from "../components/button";

const KuryeBelgeScreen = () => {
  return (
    <>
      <View style={{ height: 700 }}>
        <HeaderArea />
        <InfoContainer bottomInfoText="Kayıt işlemini tamamlamak için istenilen belgeleri yükleyiniz" />
        <DualButtonContainer BelgeLabel="Ehliyet" />
        <DualButtonContainer BelgeLabel="Nüfus Cüzdanı" />
        <DualButtonContainer BelgeLabel="Ruhsat" />
        <DualButtonContainer BelgeLabel="Adli Sicil Kaydı" />
      </View>

      <View>
        <SetButton
          buttonText="Tamamla"
          buttonStyle={{ backgroundColor: "#38BF22" }}
        />
      </View>
    </>
  );
};

export default KuryeBelgeScreen;
