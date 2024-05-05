import { Image, TouchableOpacity, View, Text, StyleSheet } from "react-native";
import IconCover from "../assets/locationiconcover.png";
import IconHome from "../assets/homeicon.png";

const LocationInfo = ({ address }) => {
  return (
    <>
      <View>
        <TouchableOpacity disabled={true} style={styles.container}>
          <Image source={IconCover} style={styles.icon} />
          <Image source={IconHome} style={styles.homeicon} />
          <Text numberOfLines={1} style={styles.buttonText}>
            {address && (
              <Text style={styles.addressText}>
                {address.name}, {address.street}, {address.city},{" "}
                {address.region}, {address.country}
              </Text>
            )}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    height: 55,
  },
  icon: {
    width: 60,
    marginRight: 10,
    marginTop: -3,
    marginLeft: 0,
  },
  homeicon: {
    position: "absolute",
    left: 12,
    top: 12,
  },
  buttonText: {
    paddingTop: 20,
    fontSize: 15,
    color: "#86869E",
    width: "84%",
  },
});

export default LocationInfo;
