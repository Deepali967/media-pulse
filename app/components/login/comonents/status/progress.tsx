import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { globalStyles } from "../../../../../assets/typography/typography";

const ProgressScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.progressText}>
        your application <br /> under progress .......
      </Text>

      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => navigation.navigate("Login" as never)}
      >
        <Text style={styles.buttonText}>home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProgressScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEF2F3",
    alignItems: "center",
    paddingHorizontal: 20,
    justifyContent: "flex-end",
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
  },
  backText: {
    fontSize: 24,
    color: "#1B1B1B",
  },
  instruction: {
    textAlign: "center",
    fontSize: 16,
    color: "#1B1B1B",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 8,
    paddingHorizontal: 15,
    backgroundColor: "#F8F9FA",
    marginBottom: 15,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#0F172A",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  homeButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#D1D5DB",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  progressText: {
    color: "#1B1B1B",
    width: "100%",
    textAlign: "center",
    fontWeight: "bold",
    ...globalStyles.notificationText,
  },
});
