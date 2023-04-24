import React from "react";
import { TouchableOpacity } from "react-native";
import { TextInput, Platform, View, Text } from "react-native";

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Cleyton</Text>

      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
      />

      <TouchableOpacity activeOpacity={0.8} style={styles.button} >
         <Text style={styles.buttonText} >Add</Text>
      </TouchableOpacity>

      <Text style={[styles.title, {marginTop: 50}]} >
         My Skills
      </Text>
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
   width: 34
  },
});
