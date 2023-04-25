import React from "react";
import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";


interface CardProps extends TouchableOpacityProps {
  skills: string;
}

export function Card({skills, ...rest}: CardProps) {
  return (
    <TouchableOpacity
      style={styles.buttonSkills}
      activeOpacity={0.8}
      {...rest}
    >
      <Text style={styles.textSkills}>{skills}</Text>
    </TouchableOpacity>
  );
}

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
