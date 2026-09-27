import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const TagCard = ({ text, iconIndex }) => {

  const iconPaths = [
    require("../../assets/icons/duelIcon.png"), //0 == Duel
    require("../../assets/icons/rankedIcon.png"), // 1 == Ranked
    require("../../assets/icons/forFunIcon.png") // 2 == 4Fun
  ]

  if (iconIndex < 0 || iconIndex > 2) {
    iconIndex == 0
  }

  return (
    <TouchableOpacity>
      <LinearGradient
        colors={["#171F52", "#1D2766"]}
        style={styles.container}
      >
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={iconPaths[iconIndex]}></Image>
        </View>
        <Text style={{
          color: "#FFF",
          fontFamily: "Rajdhani_700Bold",
          fontSize: 16,
          textAlign: 'center'
        }}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  )
}

export default TagCard

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: 128,
    height: 152,
    borderRadius: 10,
    borderColor: "#1D2766",
    borderWidth: 2,
    overflow: "hidden",
    gap: 15
  },

  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: 64,
    height: 64,
    resizeMode: "contain"
  }
})
