import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const TagCard = ({ text, iconIndex, selectable = false, selected = false, onPress }) => {

  const iconPaths = [
    require("../../assets/icons/duelIcon.png"), //0 == Duel
    require("../../assets/icons/rankedIcon.png"), // 1 == Ranked
    require("../../assets/icons/forFunIcon.png") // 2 == 4Fun
  ]

  if (iconIndex < 0 || iconIndex > 2) {
    iconIndex == 0
  }

  const muted = selectable && !selected

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={selectable ? 0.7 : 1}>
      <LinearGradient
        colors={["#171F52", "#1D2766"]}
        style={styles.container}
      >
        {selectable && (
          <View style={[styles.indicator, selected && styles.indicatorSelected]} />
        )}
        <View style={styles.imageContainer}>
          <Image
            style={[styles.image, muted && styles.muted]}
            source={iconPaths[iconIndex]}
          ></Image>
        </View>
        <Text style={[styles.text, muted && styles.muted]}>{text}</Text>
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

  indicator: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 14,
    height: 14,
    borderRadius: 7,
    borderWidth: 2,
    borderColor: "#3B4A9C",
  },

  indicatorSelected: {
    backgroundColor: "#E51C44",
    borderColor: "#E51C44",
  },

  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: 64,
    height: 64,
    resizeMode: "contain"
  },

  text: {
    color: "#FFF",
    fontFamily: "Rajdhani_700Bold",
    fontSize: 16,
    textAlign: 'center',
  },

  muted: {
    opacity: 0.45,
  },
})
