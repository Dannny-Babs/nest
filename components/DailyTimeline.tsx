import { Text, View } from "react-native";

export default function DailyTimeline() {
    return (
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
    )
}