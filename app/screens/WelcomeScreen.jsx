import React from "react";

import { View, Image, Text, ImageBackground, StyleSheet } from "react-native";

import colors from "../config/colors";

export default function WelcomeScreen() {
  const background = require("../assets/background.jpg");
  const logo = require("../assets/logo-red.png");

  return (
    <>
      <ImageBackground style={styles.background} source={background}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={logo} />
          <Text>Sell What You Don't Need</Text>
        </View>

        <View style={styles.loginButton}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </View>
        <View style={styles.registerButton}>
          <Text style={styles.buttonText}>REGISTER</Text>
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  logo: {
    maxWidth: 100,
    maxHeight: 100,
    alignSelf: "center",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignSelf: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.secondary,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "800",
  },
});
