import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

export default function RootLayout() {
  return (
    <>
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
    <StatusBar style='light' backgroundColor="#000"/>
    </>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    color: '#fff',
    backgroundColor: '#000'
  }
})