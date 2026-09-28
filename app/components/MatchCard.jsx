import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import HostIcon from './HostIcon'

const MatchCard = ({ title, date, tag, isHost, gameCoverIndex, onPress }) => {

  const gameCoverArray = [
    require("../../assets/covers/R6.png"), // 0 == R6
    require("../../assets/covers/cs2.png"), // 1 == CS2
    require("../../assets/covers/gtaOnline.png"), // 2 == GTA Online
    require("../../assets/covers/rdr2.png"), // 3 == RDR2
    require("../../assets/covers/rl.png"), // 4 == Rocket League
    require("../../assets/covers/valorant.png") // 5 == Valorant
  ]

  if (!Number.isInteger(gameCoverIndex) || gameCoverIndex > 5 || gameCoverIndex < 0) {
    gameCoverIndex = 0
  }

  const hostColor = isHost ? "#E61C44" : "#32BD50"
  const hostLabel = isHost ? "Anfitrião" : "Visitante"

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.coverContainer}>
        <Image style={styles.cover} source={gameCoverArray[gameCoverIndex]}></Image>
      </View>
      <View style={styles.info}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>
            {title}
          </Text>
          <Text style={styles.tag}>{tag}</Text>
        </View>
        <View style={styles.detailsRow}>
          <View style={styles.detailItem}>
            <Image style={styles.calendarIcon} source={require("../../assets/icons/calendar.png")}></Image>
            <Text style={styles.date}>{date}</Text>
          </View>
          <View style={styles.detailItem}>
            <HostIcon color={hostColor} />
            <Text style={[styles.hostLabel, { color: hostColor }]}>{hostLabel}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default MatchCard

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    gap: 16,
  },

  coverContainer: {
    width: 64,
    height: 64,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#3B4A9C",
    overflow: "hidden",
  },

  cover: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  info: {
    flex: 1,
    gap: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#1D2766",
    paddingVertical: 7
  },

  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    color: "#FFF",
    fontFamily: "Rajdhani_700Bold",
    fontSize: 16,
  },

  tag: {
    color: "#8D93B8",
    fontFamily: "Rajdhani_400Regular",
    fontSize: 12,
  },

  detailsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  detailItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  calendarIcon: {
    width: 12,
    height: 12,
    resizeMode: "contain",
  },

  date: {
    color: "#FFF",
    fontFamily: "Inter",
    fontSize: 12,
  },

  hostLabel: {
    fontFamily: "Rajdhani_400Regular",
    fontSize: 12,
  },
})
