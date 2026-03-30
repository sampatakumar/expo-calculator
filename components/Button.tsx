import { StyleSheet, Text, Pressable } from "react-native";
import { BlurView } from "expo-blur";
import React from "react";

const styles = StyleSheet.create({
  buttonWrapper: {
    flex: 1,
    margin: 5,
    borderRadius: 10,
    overflow: "hidden", // ensures blur respects rounded corners
    borderColor: "#af3a3ae3",
    borderWidth: 2,
  },
  blurContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  buttonText: {
    fontSize: 18,
    color: "#78dd1f",
  },
});

type Props = {
  title: string;
  onPress: () => void;
  style?: any;
  textStyle?: any;
};

export default function Button({ title, onPress, style, textStyle }: Props) {
  return (
    <Pressable style={[styles.buttonWrapper, style]} onPress={onPress}>
      <BlurView intensity={40} tint="dark" style={styles.blurContainer}>
        <Text style={[styles.buttonText, textStyle]}>{title}</Text>
      </BlurView>
    </Pressable>
  );
}
