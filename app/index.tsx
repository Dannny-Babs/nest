import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
    return (
        <SafeAreaView className="flex-1 bg-slate-50 font-rethink" >
            <StatusBar style="dark" />
            <View className="flex flex-row px-6 py-2 items-center">
                <Text className="text-3xl font-rethink-bold text-slate-950 tracking-tight ">
                    Today,
                </Text>
                <Text className="text-3xl ml-0.5 font-rethink-bold text-gray-500 tracking-tighter">
                    June 17
                </Text>
            </View>
            <View className=" bg-white rounded-2xl border border-slate-100 m-4  flex flex-row items-center justify-between p-3 ">

                {Array.from({ length: 7 }).map((_, index) => (
                    <View key={index} className="flex flex-col items-center">
                        <Text className="text-base font-rethink-semibold text-slate-500  ">Mon</Text>
                        <View className="w-10 h-10 rounded-xl mt-2  bg-slate-100 flex items-center justify-center">
                            <Text className="text-lg font-rethink-bold text-slate-950 tracking-tight ">{index + 1}</Text>
                        </View>
                    </View>
                ))}

            </View>
            <Link href="/checklist" asChild className="mt-4">
                <TouchableOpacity className="bg-blue-500 px-4 py-2 rounded-lg mt-4 text-xl font-bold">
                    <Text className="text-white font-semibold text-xl">Checklist</Text>
                </TouchableOpacity>
            </Link>
        </SafeAreaView>
    );
} 