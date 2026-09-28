import { StyleSheet, View, Image, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import DiscordButton from "../../components/DiscordButton";

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
          <DiscordButton
            text="Entrar com Discord"
            style={styles.discordButton}
            onPress={() => router.replace("/home")}
          />
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

  discordButton: {
    width: "80%",
    alignSelf: "center",
    marginTop: 50,
  },
});
