import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { TextInput, Platform, View, Text } from "react-native";

export function Home() {
  const [newSkills, setNewSkills] = useState();
  const [mySkills, setMySkills] = useState([]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Cleyton</Text>

      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkills}
      />

      <TouchableOpacity activeOpacity={0.8} style={styles.button}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>

      <Text style={[styles.title, { marginVertical: 50 }]}>My Skills</Text>

      <TouchableOpacity style={styles.buttonSkills} activeOpacity={0.8}>
        <Text style={styles.textSkills}>Teste</Text>
      </TouchableOpacity>
    </View>
  );
}

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121015",
    paddingVertical: 70,
    width: 360,
    paddingHorizontal: 30,
  },

  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },

  input: {
    backgroundColor: "#1f1e25",
    color: "#fff",
    fontSize: 18,
    padding: Platform.OS === "Windows" ? 10 : 15,
    marginTop: 30,
    borderRadius: 7,
  },

  button: {
    backgroundColor: "#a370f7",
    padding: 15,
    borderRadius: 7,
    alignItems: "center",
    marginTop: 20,
  },

  buttonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
    width: 34,
  },

  buttonSkills: {
    backgroundColor: "#1f1325",
    padding: 15,
    borderRadius: 50,
    alignItems: "center",
  },

  textSkills: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "bold",
  }
});
