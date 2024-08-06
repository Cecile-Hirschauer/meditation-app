import { Image, StyleSheet, Platform, View, Text } from "react-native";


export default function HomeScreen() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text>Hello World !</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})