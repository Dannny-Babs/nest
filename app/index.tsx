import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
    return (
        <SafeAreaView className="flex-1 bg-slate-100" >
            <StatusBar style="dark" />
            <View className="flex flex-row bg-slate-100 p-6 items-center">
                <Text className="text-3xl font-semibold text-slate-950 tracking-tight mb-4">
                    Today,
                </Text>
                <Text className="text-3xl ml-0.5 font-semibold text-gray-500 tracking-tight mb-4">
                    June 17
                </Text>
            </View>
            <Link href="/checklist" asChild className="mt-4">
                <TouchableOpacity className="bg-blue-500 px-4 py-2 rounded-lg mt-4 text-xl font-bold">
                    <Text className="text-white font-semibold text-xl">Checklist</Text>
                </TouchableOpacity>
            </Link>
        </SafeAreaView>
    );
} 