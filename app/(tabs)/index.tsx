import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import ScreenWithGradientOverlay from "../../components/ScreenWithGradientOverlay";

export default function Index() {
    return (
        <ScreenWithGradientOverlay>
            <SafeAreaView className="flex bg-slate-50 font-rethink">
                <StatusBar style="dark" />
                <View className="flex flex-row px-6 py-2 items-center">
                    <Text className="text-3xl font-rethink-bold text-slate-950 tracking-tight">
                        Today,
                    </Text>
                    <Text className="text-3xl ml-0.5 font-rethink-bold text-gray-500 tracking-tighter">
                        June 17
                    </Text>
                </View>

                <ScrollView className="flex" contentContainerStyle={{ paddingBottom: 100 }} style={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
                    <View className="bg-white rounded-2xl border border-slate-100 m-4 flex flex-row items-center justify-between p-3">
                        {Array.from({ length: 7 }).map((_, index) => (
                            <View key={index} className="flex flex-col items-center">
                                <Text className="text-base font-rethink-semibold text-slate-500">Mon</Text>
                                <View className="w-10 h-10 rounded-xl mt-2 bg-slate-100 flex items-center justify-center">
                                    <Text className="text-lg font-rethink-bold text-slate-950 tracking-tight">{index + 1}</Text>
                                </View>
                            </View>
                        ))}
                    </View>

                    {/* Add more content to demonstrate gradient fade */}
                    {Array.from({ length: 10 }).map((_, index) => (
                        <View key={`content-${index}`} className="bg-white rounded-xl border border-slate-100 mx-4 mb-4 p-4">
                            <Text className="text-lg font-rethink-semibold text-slate-950 mb-2">
                                Content Item {index + 1}
                            </Text>
                            <Text className="text-slate-600 font-rethink">
                                This is some sample content to demonstrate the bottom gradient overlay effect.
                                As you scroll down, content will fade out before reaching the floating tab bar.
                            </Text>
                        </View>
                    ))} 
                </ScrollView>

            </SafeAreaView>
        </ScreenWithGradientOverlay>
    );
} 