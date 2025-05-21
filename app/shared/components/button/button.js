import { View, Text, Pressable, StyleSheet } from "react-native";

const Button = ({ text, callbackFn, customStyle, textStyle }) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={StyleSheet.compose(styles.button, customStyle)}
        onPress={() => callbackFn()}
      >
        <Text style={StyleSheet.compose(styles.buttonText, textStyle)}>
          {text}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Button;
