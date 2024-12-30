import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { TamaguiProvider } from "tamagui";
import config from "./tamagui.config";
import { NavigationContainer } from "@react-navigation/native";
import { NavBar } from "@/navigation/NavBar";

export default function App() {
  return (
    <TamaguiProvider config={config}>
      <SafeAreaProvider>
        <StatusBar style="auto" />
        <NavigationContainer>
          <NavBar />
        </NavigationContainer>
      </SafeAreaProvider>
    </TamaguiProvider>
  );
}
