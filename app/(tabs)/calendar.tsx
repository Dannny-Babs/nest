import ScreenWithGradientOverlay from "@/components/ScreenWithGradientOverlay";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Calendar() {
    return (
        <ScreenWithGradientOverlay>
            <SafeAreaView className="flex-1 bg-white">
                <Text>Calendar</Text>
                <View className="flex flex-row items-center justify-between">
                    <Text>Calendar</Text>
                    <Text>Calendar</Text>
                </View>
            </SafeAreaView>
        </ScreenWithGradientOverlay>
    );
}

