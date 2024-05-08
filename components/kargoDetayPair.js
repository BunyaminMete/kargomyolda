import { View, Text, StyleSheet } from "react-native";

const KargoInfoPairs = ({ leftTitle, rightTitle }) => {
  return (
    <>
      {/* Key : value ilişkisine benzer UI tasarımında, kargo paket detaylarını sergilemek için kullanılır. Database geldiği zaman tıklanan paket bilgisine göre datadan
     veriler çekilip yerleştirilecektir */}
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <View style={styles.subLeftContainer}>
            <Text style={styles.textLeftContainer}>{leftTitle}</Text>
          </View>
          <View style={styles.subRightContainer}>
            <Text style={styles.textRightContainer}>{rightTitle}</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default KargoInfoPairs;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    width: 380,
    marginLeft: 10,
  },
  subContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  subLeftContainer: {
    backgroundColor: "#2AA2E6",
    height: 40,
    padding: 10,
    borderRadius: 10,
    flexShrink: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 18,
  },

  subRightContainer: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    width: 180,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 18,
  },
  textLeftContainer: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "700",
    width: 120,
  },
  textRightContainer: {
    textAlign: "center",
    color: "#000",
    fontWeight: "700",
    width: 160,
  },
});
