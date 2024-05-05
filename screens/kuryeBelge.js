import HeaderArea from "../components/header";
import { View } from "react-native";
import InfoContainer from "../components/topContainerInfo";
import DualButtonContainer from "../components/belgeButton";

const KuryeBelgeScreen = () => {
  return (
    <>
      <View>
        <HeaderArea />
        <InfoContainer bottomInfoText="Kayıt işlemini tamamlamak için istenilen belgeleri yükleyiniz" />
        <DualButtonContainer BelgeLabel="Ehliyet" />
        <DualButtonContainer BelgeLabel="Nüfus Cüzdanı" />
        <DualButtonContainer BelgeLabel="Ruhsat" />
        <DualButtonContainer BelgeLabel="Adli Sicil Kaydı" />
      </View>
    </>
  );
};

export default KuryeBelgeScreen;
