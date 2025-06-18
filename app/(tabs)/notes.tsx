import ScreenWithGradientOverlay from "@/components/ScreenWithGradientOverlay";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



export default function Notes() {
    return (
        <ScreenWithGradientOverlay>
            <SafeAreaView className="flex-1 bg-white">
                <View className="p-6 bg-white">
                    <Text className="text-3xl font-bold text-blue-950 tracking-tight mb-4">
                        Here are your tasks for today
                    </Text> 
                </View>
            </SafeAreaView>
        </ScreenWithGradientOverlay>
    )
}