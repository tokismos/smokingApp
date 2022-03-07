import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Header";

const FirstScreen = () => {
  return (
    <View style={{ flex: 1, borderColor: "red", borderWidth: 20 }}>
      <Header />
      <Text>FirstScreen</Text>
    </View>
  );
};

export default FirstScreen;

const styles = StyleSheet.create({});
