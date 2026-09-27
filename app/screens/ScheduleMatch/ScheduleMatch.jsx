import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import TagCard from "../../components/TagCard";
import { CategoryMock } from "../../mocks/CategoryData";

const ScheduleMatch = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(0);
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [description, setDescription] = useState("");

  return (
    <LinearGradient
      colors={["#0A1033", "#0E1647"]}
      start={{ x: 0, y: 1 }}
      end={{ x: 0, y: 0 }}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image source={require("../../../assets/icons/backArrow.png")} style={styles.headerIcon} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Agendar partida</Text>
          <View style={styles.headerIcon} />
        </View>

        <KeyboardAvoidingView
          style={styles.flex}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <ScrollView
            contentContainerStyle={styles.content}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <Text style={styles.sectionLabel}>Categoria</Text>
            <FlatList
              data={CategoryMock}
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.categoryList}
              contentContainerStyle={styles.categoryListContent}
              renderItem={({ item }) => (
                <TagCard
                  {...item}
                  selectable
                  selected={item.id === selectedCategoryId}
                  onPress={() => setSelectedCategoryId(item.id)}
                />
              )}
            />

            <TouchableOpacity style={styles.serverSelect}>
              <Image
                source={require("../../../assets/covers/valorant.png")}
                style={styles.serverCover}
              />
              <View style={styles.serverInfo}>
                <Text style={styles.serverName}>Valorosos</Text>
                <Text style={styles.serverGame}>Valorant</Text>
              </View>
              <Text style={styles.chevron}>›</Text>
            </TouchableOpacity>

            <View style={styles.row}>
              <View style={styles.fieldGroup}>
                <Text style={styles.sectionLabel}>Dia e mês</Text>
                <View style={styles.inlineInputs}>
                  <TextInput
                    style={styles.smallInput}
                    keyboardType="number-pad"
                    maxLength={2}
                    value={day}
                    onChangeText={setDay}
                    placeholder="00"
                    placeholderTextColor="#5C639C"
                  />
                  <Text style={styles.inputSeparator}>/</Text>
                  <TextInput
                    style={styles.smallInput}
                    keyboardType="number-pad"
                    maxLength={2}
                    value={month}
                    onChangeText={setMonth}
                    placeholder="00"
                    placeholderTextColor="#5C639C"
                  />
                </View>
              </View>

              <View style={styles.fieldGroup}>
                <Text style={styles.sectionLabel}>Horário</Text>
                <View style={styles.inlineInputs}>
                  <TextInput
                    style={styles.smallInput}
                    keyboardType="number-pad"
                    maxLength={2}
                    value={hour}
                    onChangeText={setHour}
                    placeholder="00"
                    placeholderTextColor="#5C639C"
                  />
                  <Text style={styles.inputSeparator}>:</Text>
                  <TextInput
                    style={styles.smallInput}
                    keyboardType="number-pad"
                    maxLength={2}
                    value={minute}
                    onChangeText={setMinute}
                    placeholder="00"
                    placeholderTextColor="#5C639C"
                  />
                </View>
              </View>
            </View>

            <View style={styles.descriptionHeader}>
              <Text style={styles.sectionLabel}>Descrição</Text>
              <Text style={styles.descriptionLimit}>Max 100 caracteres</Text>
            </View>
            <TextInput
              style={styles.descriptionInput}
              multiline
              maxLength={100}
              value={description}
              onChangeText={setDescription}
              textAlignVertical="top"
              placeholder="Escreva uma descrição para a partida"
              placeholderTextColor="#5C639C"
            />

            <TouchableOpacity style={styles.scheduleButton}>
              <Text style={styles.scheduleButtonText}>Agendar</Text>
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default ScheduleMatch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },

  safeArea: {
    flex: 1,
  },

  flex: {
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

  content: {
    paddingHorizontal: 25,
    paddingTop: 10,
    paddingBottom: 30,
    gap: 25,
  },

  sectionLabel: {
    color: "#FFF",
    fontFamily: "Rajdhani_700Bold",
    fontSize: 16,
    marginBottom: 12,
  },

  categoryList: {
    height: 152,
  },

  categoryListContent: {
    gap: 10,
  },

  serverSelect: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1D2766",
    borderRadius: 15,
    padding: 8,
    gap: 12,
  },

  serverCover: {
    width: 48,
    height: 48,
    borderRadius: 10,
  },

  serverInfo: {
    flex: 1,
  },

  serverName: {
    color: "#FFF",
    fontFamily: "Rajdhani_700Bold",
    fontSize: 16,
  },

  serverGame: {
    color: "#8D93B8",
    fontFamily: "Rajdhani_500Medium",
    fontSize: 13,
  },

  chevron: {
    color: "#8D93B8",
    fontSize: 22,
    paddingRight: 8,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  fieldGroup: {},

  inlineInputs: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  smallInput: {
    width: 60,
    height: 52,
    backgroundColor: "#1D2766",
    borderRadius: 10,
    color: "#FFF",
    fontFamily: "Rajdhani_700Bold",
    fontSize: 18,
    textAlign: "center",
  },

  inputSeparator: {
    color: "#8D93B8",
    fontFamily: "Rajdhani_700Bold",
    fontSize: 18,
  },

  descriptionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: -12,
  },

  descriptionLimit: {
    color: "#8D93B8",
    fontFamily: "Rajdhani_500Medium",
    fontSize: 13,
  },

  descriptionInput: {
    backgroundColor: "#1D2766",
    borderRadius: 15,
    padding: 16,
    minHeight: 110,
    color: "#FFF",
    fontFamily: "Inter_400Regular",
    fontSize: 14,
  },

  scheduleButton: {
    backgroundColor: "#E51C44",
    borderRadius: 15,
    paddingVertical: 20,
    alignItems: "center",
  },

  scheduleButtonText: {
    color: "#FFF",
    fontFamily: "Inter_500Medium",
    fontSize: 16,
  },
});
