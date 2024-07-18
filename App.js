import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import GameSTartScreen from "./screens/GameStartScreen";

export default function App() {
  return (
    <View style={styles.rootScreen}>
      <GameSTartScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: "#ddb52f",
  },
});
