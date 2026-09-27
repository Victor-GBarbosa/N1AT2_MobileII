import { StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { CategoryMock } from "../../mocks/CategoryData";
import { MatchMock } from "../../mocks/MatchData";
import TagCard from "../../components/TagCard";
import MatchCard from "../../components/MatchCard";

const Home = () => {

 const nome = "Tiago"

  return (
    <LinearGradient
      colors={["#0A1033", "#0E1647"]}
      start={{ x: 0, y: 1 }}
      end={{ x: 0, y: 0 }}
      style={styles.containerGradient}

    >
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.header}>
            <View style={[styles.userInfo]}>
            <TouchableOpacity style={styles.headerButtons}>

            {/* <Image></Image> */}
            </TouchableOpacity>
            <View >
              <Text style={[styles.whiteText, {fontSize: 20}]}>Olá,<Text style={{
                fontFamily: "Rajdhani_700Bold"
              }}> {nome} </Text></Text>
              <Text style={styles.whiteText}>Hoje é dia de vitoria</Text>
            </View>
            </View>
            <TouchableOpacity style={styles.headerButtons}><Text style={{color: "#fff", fontWeight: "300", fontSize: 32}}>+</Text></TouchableOpacity>
          </View>
          <FlatList
            data={CategoryMock}
            renderItem={({ item }) => <TagCard {...item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.categoryList}
            contentContainerStyle={styles.categoryListContent}
          />

          <View style={styles.matchHeader}>
            <Text style={styles.matchHeaderTitle}>Partidas agendadas</Text>
            <Text style={styles.matchHeaderTotal}>Total {MatchMock.length}</Text>
          </View>

          <FlatList
            data={MatchMock}
            renderItem={({ item }) => <MatchCard {...item} />}
            scrollEnabled={false}
            removeClippedSubviews={false}
            contentContainerStyle={styles.matchList}
          />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Home;

const styles = StyleSheet.create({
  containerGradient: {
    flex: 1,
    width: "100%"
  },

  container: {
    paddingHorizontal: 25,
    paddingTop: 25
  },

  safeArea: {
    flex: 1,
  },

  whiteText: {
    color: "#FFF",
    fontFamily: "Rajdhani_400Regular"
  },

  header: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30
  },

  userInfo :{
    flexDirection: "row",
    gap: 16
  },

  headerButtons : {
        width: 48,
    height: 48,
    backgroundColor: "#E51C44",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5
  },

  categoryList: {
    height: 152,
    marginBottom: 30,
  },

  categoryListContent: {
    gap: 10
  },

  matchHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },

  matchHeaderTitle: {
    color: "#FFF",
    fontFamily: "Rajdhani_700Bold",
    fontSize: 18,
  },

  matchHeaderTotal: {
    color: "#8D93B8",
    fontFamily: "Rajdhani_500Medium",
    fontSize: 14,
  },

  matchList: {
    gap: 16,
    paddingBottom: 25,
  },

});
