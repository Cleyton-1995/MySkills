import React, { useState } from "react";
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
        <Card/>
      ))}
    </View>
  );
}

import { StyleSheet } from "react-native";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";

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
});
