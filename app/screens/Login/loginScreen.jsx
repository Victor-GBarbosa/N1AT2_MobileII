import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import DiscordIcon from "../../components/DiscordIcon";

const LoginScreen = () => {
  return (
    <LinearGradient
      colors={["#0A1033", "#0E1647"]}
      start={{ x: 0, y: 1 }}
      end={{ x: 0, y: 0 }}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.heroImage}>
          <Image source={require("./bg.png")} style={styles.bgArt}></Image>
          <Image
            source={require("./image.png")}
            style={styles.characterImage}
          ></Image>
          <LinearGradient
            colors={["#0C123B", "#0C123B00"]}
            start={{ x: 0, y: 1 }}
            end={{ x: 0, y: 0 }}
            style={StyleSheet.absoluteFill}
            pointerEvents="none"
          />
        </View>

        <View style={styles.container2}>
          <View style={styles.textContainer}>
            <Text style={[styles.whiteText, styles.title]}>
              Conecte-se e organize suas jogatinas
            </Text>
            <Text style={[styles.whiteText, styles.subTitle]}>
              Crie Grupos para jogar seus games favoritos com seus amigos
            </Text>
          </View>
          <TouchableOpacity style={[styles.button]}>
            <View style={styles.iconContainer}>
              <DiscordIcon color="#FFF" />
            </View>
            <Text style={[styles.whiteText, styles.buttonText]}>
              Entrar com Discord
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  whiteText: {
    color: "#FFF",
  },
  container: {
    flex: 1,
    width: "100%",
  },

  safeArea: {
    flex: 1,
  },

  heroImage: {
    padding: 0,
    margin: 0,
    height: "50%",
  },

  bgArt: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },

  characterImage: {
    width: "80%",
    height: "100%",
    resizeMode: "contain",
    position: "absolute",
    alignSelf: "center",
    bottom: 0,
  },

  textContainer: {
    width: "80%",
    alignSelf: "center",
    gap: 15,
  },

  title: {
    fontSize: 48,
    textAlign: "center",
    fontFamily: "Rajdhani_700Bold",
    lineHeight: 48,
  },

  subTitle: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "200",
  },

  button: {
    backgroundColor: "#E51C44",
    width: "80%",
    alignSelf: "center",
    marginTop: 50,
    flexDirection: "row",
    borderRadius: 15,
    overflow: "hidden",
  },

  iconContainer: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRightColor: "#991F36",
    borderRightWidth: 2,
  },

  buttonText: {
    flex: 1,
    paddingVertical: 20,
    textAlign: "center",
    alignSelf: "center",
    fontFamily: "Inter_500Medium",
  },
});
