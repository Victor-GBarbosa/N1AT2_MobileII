import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import DiscordIcon from "./DiscordIcon";

const DiscordButton = ({ text = "Entrar com Discord", onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <View style={styles.iconContainer}>
        <DiscordIcon color="#FFF" />
      </View>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default DiscordButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#E51C44",
    flexDirection: "row",
    borderRadius: 15,
  },

  iconContainer: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    justifyContent: "center",
    borderRightColor: "#991F36",
    borderRightWidth: 2,
  },

  buttonText: {
    flex: 1,
    paddingVertical: 20,
    textAlign: "center",
    fontFamily: "Inter_500Medium",
    color: "#FFF",
  },
});
