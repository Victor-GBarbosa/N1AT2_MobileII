import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={require("./bg.png")} style={styles.bgArt}></Image>
        <Image source={require("./image.png")} style={styles.characterImage}></Image>
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
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },

    bgArt: {
        maxWidth: 200
    },

    characterImage: {
        maxWidth: 200
    }

});
