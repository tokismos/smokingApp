import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { height } from "../consts/consts";
import MoneySvg from "../assets/moneySVG.svg";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../consts/colors";

const Header = () => {
  return (
    <View style={{ height: height * 0.15 }}>
      <View style={styles.headerComponents}>
        <View style={styles.infoHeaderComponent}>
          <View style={styles.icon}>
            <AntDesign name="heart" size={40} color={COLORS.red} />
          </View>
          <View style={{ width: "70%", marginLeft: 5 }}>
            <Text style={styles.nbr}>167</Text>
            <Text style={{ fontSize: 13, color: "white" }}>minutes gagées</Text>
          </View>
        </View>
        <View style={styles.infoHeaderComponent}>
          <View style={styles.icon}>
            <MoneySvg width={120} height={40} fill={COLORS.red} />
          </View>
          <View style={{ width: "70%", marginLeft: 5 }}>
            <Text style={styles.nbr}>18.60</Text>
            <Text style={{ fontSize: 13, color: "white" }}>chf economisés</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          height: "30%",
          justifyContent: "center",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: COLORS.gray,
            width: "75%",
            height: "30%",
            borderRadius: 20,
          }}
        >
          <View
            style={{
              width: "70%",
              backgroundColor: COLORS.lightBlue,
              flex: 1,
              borderRadius: 20,
            }}
          ></View>
        </View>

        <View style={{ marginLeft: 10 }}>
          <Text
            style={{ fontWeight: "bold", fontSize: 16, color: COLORS.gray }}
          >
            Level 2
          </Text>
          <Text style={{ color: COLORS.gray, fontWeight: "bold" }}>
            24/50 XP
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  infoHeaderComponent: {
    backgroundColor: COLORS.gray,
    width: "47%",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    paddingLeft: 5,
  },
  headerComponents: {
    flexDirection: "row",
    height: "60%",
    width: "100%",
    alignSelf: "center",
    padding: 10,
    justifyContent: "space-between",
  },
  nbr: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  icon: {
    width: "30%",
    alignItems: "center",
  },
});
