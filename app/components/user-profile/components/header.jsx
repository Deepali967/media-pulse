import React from "react";
import { View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const naviation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => naviation.goBack()}>
        <Image
          style={{ height: 48, width: 48 }}
          source={require("../../../../assets/images/profile-back.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => naviation.navigate("Creator")}>
        <Image
          style={{ height: 48, width: 48 }}
          source={require("../../../../assets/images/edit.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
    paddingHorizontal: 16,
  },
});

export default Header;
