import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { TextInput, Platform, View, Text } from "react-native";

export function Home() {
  const [newSkills, setNewSkills] = useState();
  const [mySkills, setMySkills] = useState([]);

  function handleAddNewSkills() {
    setMySkills((oldState) => [...oldState, newSkills]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Cleyton</Text>

      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkills}
      />

      <Button/>
      
      <Text style={[styles.title, { marginVertical: 50 }]}>My Skills</Text>

      {mySkills.map((skills) => (
        <TouchableOpacity key={skills} style={styles.buttonSkills} activeOpacity={0.8}>
          <Text style={styles.textSkills}>{skills}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

import { StyleSheet } from "react-native";
import { Button } from "../../components/Button";

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

  buttonSkills: {
    backgroundColor: "#1f1325",
    padding: 15,
    borderRadius: 50,
    alignItems: "center",
    marginVertical: 10,
  },

  textSkills: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "bold",
  },
});
