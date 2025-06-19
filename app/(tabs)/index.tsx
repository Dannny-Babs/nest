import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import ScreenWithGradientOverlay from "../../components/ScreenWithGradientOverlay";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { CheckmarkCircle02Icon, Task02Icon } from "@hugeicons/core-free-icons";

export default function Index() {
    return (
        <ScreenWithGradientOverlay>
            <SafeAreaView className="flex bg-slate-50 font-rethink">
                <StatusBar style="dark" />
                <View className="flex flex-row justify-between px-6 py-2 items-center">
                    <Text className="text-3xl font-rethink-bold text-slate-950 tracking-tight">
                        Today
                    </Text>
                    <View className="flex flex-row items-center gap-2">
                        <View className="flex flex-row items-center gap-1 bg-slate-200 rounded-full p-2">
                            <HugeiconsIcon icon={Task02Icon} size={20} color="#010101" />
                            <Text className="text-lg font-rethink-medium text-slate-950">
                                12 Tasks
                            </Text>
                        </View>
                        <View className="flex flex-row items-center gap-1 bg-slate-200 rounded-full p-2">
                            <HugeiconsIcon icon={CheckmarkCircle02Icon} size={20} color="#010101" />
                            <Text className="text-lg font-rethink-medium text-slate-950">
                                3 of 5 Habits
                            </Text>
                        </View>
                    </View>
                </View>

                <ScrollView className="flex" contentContainerStyle={{ paddingBottom: 100 }} style={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
                    <View className="bg-white rounded-2xl border border-slate-100 m-4 flex flex-row items-center justify-between p-3">
                        {(() => {
                            const today = new Date();
                            const currentDay = today.getDay(); // 0 = Sunday, 1 = Monday, etc.
                            const currentDate = today.getDate();
                            
                            // Calculate Monday of current week
                            const monday = new Date(today);
                            const daysFromMonday = currentDay === 0 ? 6 : currentDay - 1; // Adjust for Sunday
                            monday.setDate(currentDate - daysFromMonday);
                            
                            const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
                            
                            return Array.from({ length: 7 }).map((_, index) => {
                                const dayDate = new Date(monday);
                                dayDate.setDate(monday.getDate() + index);
                                
                                const isToday = dayDate.toDateString() === today.toDateString();
                                const dayName = dayNames[index];
                                const dayNumber = dayDate.getDate();
                                
                                return (
                                    <View key={index} className="flex flex-col items-center">
                                        <Text className="text-base font-rethink-semibold text-slate-500">{dayName}</Text>
                                        <View className={`w-10 h-10 rounded-xl mt-2 flex items-center justify-center ${isToday ? 'bg-slate-900 ' : 'bg-slate-100 '}`}>
                                            <Text className={`text-lg  tracking-tight ${isToday ? 'font-rethink-bold text-white' : 'font-rethink-semibold text-slate-600'}`}>{dayNumber}</Text>
                                        </View>
                                    </View>
                                );
                            });
                        })()}
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