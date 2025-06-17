import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to NativeWind!
      </Text>
      <TouchableOpacity 
        className="bg-blue-500 px-4 py-2 rounded-lg mt-4 text-xl font-bold"
        onPress={() => alert("Button pressed")}
      >
        <Text className="text-white font-semibold text-xl">Click me</Text>
      </TouchableOpacity>
    </View>
  );
} 