import {
  View,
  Text,
  FlatList,
  Pressable,
  ImageBackground,
  StyleSheet,
} from "react-native";
import React from "react";
import AppGradient from "@/components/AppGradient";
import { StatusBar } from "expo-status-bar";

import MEDITATION_IMAGES from "@/constants/meditation-images";

import { MEDITATION_DATA, MeditationType } from "@/constants/MeditationData";
import { LinearGradient } from "expo-linear-gradient";

export default function NatureMeditate() {
  return (
    <View className="flex-1">
      <AppGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
        <View className="mb-6">
          <Text className="text-gray-200 text-4xl font-bold text-left mb-4">
            Welcome
          </Text>
          <Text className="text-indigo-100 text-xl font-medium">
            Start your meditation practice today
          </Text>
        </View>
      <View>
        <FlatList
          data={MEDITATION_DATA}
          keyExtractor={(item) => item.id.toString()}
          className="mb-20"
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => console.log("press")}
              className="h-48 rounded-md my-3 overflow-hidden"
            >
              <ImageBackground
                source={MEDITATION_IMAGES[item.id - 1]}
                resizeMode="cover"
                className="flex-1 rounded-lg justify-center"
              >
                <LinearGradient 
                colors={["transparent", "rgba(0, 0, 0, 0.8)"]}
                className="flex-1 justify-center items-center"
                >
                  <Text className="text-gray-100 text-center font-bold text-3xl">
                    {item.title}
                  </Text>
                </LinearGradient>
              </ImageBackground>
            </Pressable>
          )}
        />
      </View>
      </AppGradient>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    borderRadius: 10,
    justifyContent: "center",
  },
  gradient: {
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
    width: "100%",
  },
  list: {
    paddingBottom: 150,
  },
});
