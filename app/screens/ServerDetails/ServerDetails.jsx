import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import DiscordButton from "../../components/DiscordButton";

const players = [
  { id: 0, name: "Tiago Luchtenberg", avatar: require("../../../assets/images/pp.png"), online: true },
  { id: 1, name: "Rodrigo Gonçalves", avatar: require("../../../assets/images/pp1.png"), online: false },
  { id: 2, name: "Diego Fernandes", avatar: require("../../../assets/images/pp2.png"), online: false },
];

const ServerDetails = () => {
  return (
    <LinearGradient
      colors={["#0A1033", "#0E1647"]}
      start={{ x: 0, y: 1 }}
      end={{ x: 0, y: 0 }}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Image source={require("../../../assets/icons/backArrow.png")} style={styles.headerIcon} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Detalhes</Text>
          <TouchableOpacity>
            <Image source={require("../../../assets/icons/share.png")} style={styles.headerIcon} />
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.heroContainer}>
            <Image source={require("../../../assets/images/lolBg.png")} style={styles.heroImage} />
            <LinearGradient
              colors={["#0C123B", "#0C123B00"]}
              start={{ x: 0, y: 1 }}
              end={{ x: 0, y: 0 }}
              style={StyleSheet.absoluteFill}
              pointerEvents="none"
            />
            <View style={styles.heroText}>
              <Text style={styles.heroTitle}>Lendários</Text>
              <Text style={styles.heroDescription}>
                É hoje que vamos chegar ao challenger sem perder uma partida da md10
              </Text>
            </View>
          </View>

          <View style={styles.playersSection}>
            <View style={styles.playersHeader}>
              <Text style={styles.playersTitle}>Jogadores</Text>
              <Text style={styles.playersTotal}>Total {players.length}</Text>
            </View>

            {players.map((player) => (
              <View key={player.id} style={styles.playerRow}>
                <Image source={player.avatar} style={styles.playerAvatar} />
                <View style={styles.playerInfo}>
                  <Text style={styles.playerName}>{player.name}</Text>
                  <View style={styles.statusRow}>
                    <View
                      style={[
                        styles.statusDot,
                        { backgroundColor: player.online ? "#32BD50" : "#E61C44" },
                      ]}
                    />
                    <Text
                      style={[
                        styles.statusText,
                        { color: player.online ? "#32BD50" : "#E61C44" },
                      ]}
                    >
                      {player.online ? "Disponível" : "Ocupado"}
                    </Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>

        <View style={styles.footer}>
          <DiscordButton text="Entrar na partida" style={styles.discordButton} />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default ServerDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },

  safeArea: {
    flex: 1,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 25,
    paddingVertical: 15,
  },

  headerIcon: {
    width: 22,
    height: 22,
    resizeMode: "contain",
  },

  headerTitle: {
    color: "#FFF",
    fontFamily: "Rajdhani_700Bold",
    fontSize: 18,
  },

  heroContainer: {
    width: "100%",
    height: 260,
  },

  heroImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  heroText: {
    position: "absolute",
    bottom: 20,
    left: 25,
    right: 25,
    gap: 8,
  },

  heroTitle: {
    color: "#FFF",
    fontFamily: "Rajdhani_700Bold",
    fontSize: 32,
  },

  heroDescription: {
    color: "#FFF",
    fontFamily: "Inter_400Regular",
    fontSize: 14,
  },

  playersSection: {
    paddingHorizontal: 25,
    paddingTop: 25,
  },

  playersHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },

  playersTitle: {
    color: "#FFF",
    fontFamily: "Rajdhani_700Bold",
    fontSize: 18,
  },

  playersTotal: {
    color: "#8D93B8",
    fontFamily: "Rajdhani_500Medium",
    fontSize: 14,
  },

  playerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    paddingVertical: 12,
  },

  playerAvatar: {
    width: 48,
    height: 48,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#243189",
  },

  playerInfo: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#1D2766",
    paddingBottom: 12,
  },

  playerName: {
    color: "#FFF",
    fontFamily: "Rajdhani_700Bold",
    fontSize: 16,
  },

  statusRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 4,
  },

  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },

  statusText: {
    fontFamily: "Rajdhani_500Medium",
    fontSize: 13,
  },

  footer: {
    paddingHorizontal: 25,
    paddingVertical: 20,
  },

  discordButton: {
    width: "100%",
  },
});
