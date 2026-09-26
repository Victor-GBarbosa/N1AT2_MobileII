import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

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
          <Image source={require("./image.png")} style={styles.characterImage}></Image>
          <LinearGradient
            colors={["#0C123B", "#0C123B00"]}
            start={{ x: 0, y: 1 }}
            end={{ x: 0, y: 0 }}
            style={StyleSheet.absoluteFill}
            pointerEvents="none"
          />
        </View>
        <View>
          <Text>Conecte-se e organize suas jogatinas</Text>
          <Text>Crie Grupos para jogar seus games favoritos com seus amigos</Text>
        </View>
        <TouchableOpacity>
          <Image source={require("../../../assets/icons/discord.svg")}></Image>
          <Text>Entrar com Discord</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    safeArea: {
        flex: 1,
    },

    heroImage: {
        padding: 0,
        margin: 0,
        height: "50%",
        overflow: "hidden",
    },

    bgArt: {
        width: '100%',
        height: "100%",
        resizeMode: 'contain'
    },

    characterImage: {
        width: "80%",
        height: "100%",
        resizeMode: 'contain',
        position: "absolute",
        alignSelf: "center",
        bottom: 0,
    }

});
