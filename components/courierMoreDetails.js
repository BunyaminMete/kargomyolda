import { View } from "react-native";
import CurrentLocationMapView from "./currentLocation";
import HeaderArea from "./header";
import PackageStatus from "./packageStatus";

const PackageMoreDetails = ({ navigation }) => {
  return (
    <>
      <View>
        <HeaderArea
          height={150}
          turnBack={true}
          onPress={() => navigation.navigate("KuryeMain")}
        />
        <PackageStatus receiver="Alıcı : Bünyamin Mete" kuryePrice={45} />
        {/* <CurrentLocationMapView setAddress={setAddress} userName="Bünyamin" /> */}
      </View>
    </>
  );
};

export default PackageMoreDetails;
