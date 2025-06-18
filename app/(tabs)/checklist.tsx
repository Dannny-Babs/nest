import ScreenWithGradientOverlay from "@/components/ScreenWithGradientOverlay";
import { View, Text, Switch } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Checklist() {
    return (
        <ScreenWithGradientOverlay>
            <SafeAreaView className="flex-1 bg-white">
                <View className="p-6 bg-white">
                    <Text className="text-3xl font-bold text-blue-950 tracking-tight mb-4">
                        Here are your tasks for today
                    </Text>
                    <View className="flex-row items-center justify-between p-4 bg-slate-100 rounded-lg mb-4">
                        <Text className="text-lg text-gray-500">Task 1</Text>
                    </View>
                    <View className="flex-row items-center justify-between">
                        <Text className="text-lg text-gray-500">Task 1</Text>
                        <Switch />
                    </View>
                </View>
            </SafeAreaView>
        </ScreenWithGradientOverlay>
    )
}