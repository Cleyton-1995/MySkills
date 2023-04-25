import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export function Button() {
  return (
      <TouchableOpacity
      //   onPress={handleAddNewSkills}
        activeOpacity={0.8}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
  );
}

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
});