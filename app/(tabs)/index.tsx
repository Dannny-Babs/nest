import { ArrowDown01Icon, ArrowUp01Icon, FireIcon, Moon02Icon, MoonCloudIcon, Sun01Icon, SunCloud02Icon, Task02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import DailyTimeline from "../../components/DailyTimeline";
import HomeCard from "../../components/HomeCard";
import ScreenWithGradientOverlay from "../../components/ScreenWithGradientOverlay";
import { computeWeeklyStatus } from "../../lib/date";

export default function Index() {
    const [overdueExpanded, setOverdueExpanded] = useState(false);

    // Mock overdue tasks - replace with real data
    const overdueTasks: any[] = [];

    // Mock habits with history dates
    const mockHabits = [
        {
            id: 'h1',
            title: 'Meditate',
            frequency: 'Daily',
            doneToday: false,
            slot: 'Morning',
            historyDates: ['2025-06-16', '2025-06-17', '2025-06-18', '2025-06-19'] // Mon-Thu done
        },
        {
            id: 'h2',
            title: 'Drink Water',
            frequency: 'Daily',
            doneToday: true,
            slot: 'Morning',
            historyDates: ['2025-06-16', '2025-06-17', '2025-06-18', '2025-06-19'] // Mon-Thu done
        },
        {
            id: 'h3',
            title: 'Read a Book',
            frequency: 'Weekly',
            doneToday: false,
            slot: 'Evening',
            historyDates: ['2025-06-16', '2025-06-18'] // Mon, Wed done
        },
        {
            id: 'h4',
            title: 'Stretch',
            frequency: 'Daily',
            doneToday: false,
            slot: 'Morning',
            historyDates: ['2025-06-16', '2025-06-17'] // Mon, Tue done
        },
        {
            id: 'h5',
            title: 'Journal',
            frequency: 'Daily',
            doneToday: true,
            slot: 'Evening',
            historyDates: ['2025-06-16', '2025-06-17', '2025-06-18', '2025-06-19'] // Mon-Thu done
        },
    ];

    // Mock tasks
    const mockTasks = [
        {
            id: 't1',
            title: 'Buy Groceries',
            dateTime: '08:30',
            priority: 'Medium' as const,
            completed: false,
            slot: 'Morning'
        },
        {
            id: 't2',
            title: 'Team Standup',
            dateTime: '10:00',
            priority: 'High' as const,
            completed: true,
            slot: 'Morning'
        },
        {
            id: 't3',
            title: 'Submit Report',
            dateTime: '15:00',
            priority: 'High' as const,
            completed: false,
            slot: 'Afternoon'
        },
        {
            id: 't4',
            title: 'Call Mom',
            // no dateTime: treated as unscheduled
            priority: 'Low' as const,
            completed: false,
            slot: 'Evening'
        },
        {
            id: 't5',
            title: 'Plan Weekend Trip',
            dateTime: '20:00',
            priority: 'Medium' as const,
            completed: false,
            slot: 'Evening'
        },
    ];

    const handleToggle = (id: string, newVal: boolean, type: string) => {
        console.log(`Toggled ${type} ${id} =>`, newVal)
        // update your state here
    }
    const handlePress = (id: string, type: string) => {
        console.log(`Pressed ${type} ${id}`)
        // navigate to detail
    }

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
                                {mockTasks.length} Tasks
                </Text>
            </View>
                        <View className="flex flex-row items-center gap-1 bg-slate-200 rounded-full p-2">
                            <HugeiconsIcon icon={FireIcon} size={20} color="#010101" />
                            <Text className="text-lg font-rethink-medium text-slate-950">
                                5 days
                            </Text>
                        </View>
                    </View>
                </View>

                {/* Overdue Section */}
                {overdueTasks.length > 0 && (
                    <View className="mx-4 ">
                        <TouchableOpacity
                            onPress={() => setOverdueExpanded(!overdueExpanded)}
                            className="flex flex-row items-center justify-between bg-red-50 border border-red-200 rounded-xl p-3"
                        >
                            <View className="flex flex-row items-center gap-2">
                                <View className="w-2 h-2 bg-red-500 rounded-full"></View>
                                <Text className="text-lg font-rethink-semibold text-red-800">
                                    Overdue from yesterday
                                </Text>
                            </View>
                            <View className="flex flex-row items-center gap-2">
                                <Text className="text-lg font-rethink-medium text-red-700">
                                    {overdueTasks.length.toString().padStart(2, '0')}
                                </Text>
                                <HugeiconsIcon
                                    icon={overdueExpanded ? ArrowDown01Icon : ArrowUp01Icon}
                                    size={20}
                                    color="#dc2626"
                                />
                            </View>
                        </TouchableOpacity>

                        {overdueExpanded && (
                            <View className="mt-2 space-y-2 bg-white border border-red-200  rounded-xl ">
                                {overdueTasks.map((task) => (
                                    <View key={task.id} className="p-3 flex flex-row items-center gap-3">
                                        <View className="w-5 h-5 border-2 border-gray-200 rounded-lg"></View>
                                        <View className="flex-1">
                                            <Text className="text-lg font-rethink-medium text-slate-900">
                                                {task.title}
                                            </Text>
                                            <Text className="text-sm font-rethink text-red-600">
                                                {task.category}
                                            </Text>
                                        </View>
                                    </View>
                                ))}
                            </View>
                        )}
                    </View>
                )}

                {/* Daily Timeline */}
                <DailyTimeline />

                <ScrollView contentContainerStyle={{ paddingBottom: 100, marginBottom: 200 }} showsVerticalScrollIndicator={false} >

                    {/* Habits Section */}
                    <View className="mx-6 flex flex-row items-center gap-2 mt-2">
                        <HugeiconsIcon icon={SunCloud02Icon} size={20} color="#010101" />
                        <Text className="text-lg font-rethink-semibold text-slate-700 tracking-tight">
                            Morning
                        </Text>
                    </View>
                    {mockHabits && mockHabits.length > 0 && (
                        <View className="mx-4 mt-2 flex flex-col">
                            {mockHabits
                                .filter(habit => habit.slot === 'Morning')
                                .map(habit => {
                                    const weeklyStatus = computeWeeklyStatus(habit.historyDates);
                                    return (
                                        <HomeCard
                                            key={habit.id}
                                            type="habit"
                                            title={habit.title}
                                            frequency={habit.frequency}
                                            doneToday={habit.doneToday}
                                            weeklyStatus={weeklyStatus}
                                            onToggle={newVal => handleToggle(habit.id, newVal, 'habit')}
                                            onPress={() => handlePress(habit.id, 'habit')}
                                        />
                                    );
                                })}
                        </View>
                    )}
                    {mockTasks.length > 0 && (
                        <View className="mx-4 flex flex-col">
                            {mockTasks
                                .filter(task => {
                                    if (!task.dateTime) return false;
                                    const hour = parseInt(task.dateTime.split(':')[0]);
                                    return hour < 12; // Morning: before 12:00
                                })
                                .map(task => (
                                    <HomeCard
                                        key={task.id}
                                        type="task"
                                        title={task.title}
                                        dateTime={task.dateTime}
                                        priority={task.priority}
                                        completed={task.completed}
                                        onToggle={newVal => handleToggle(task.id, newVal, 'task')}
                                        onPress={() => handlePress(task.id, 'task')}
                                    />
                                ))}
                        </View>
                    )}

                    {/* Afternoon Habits */}
                    <View className="mx-6 my-3 flex flex-row items-center gap-2">
                        <HugeiconsIcon icon={Sun01Icon} size={20} color="#010101" />
                        <Text className="text-lg font-rethink-semibold text-slate-700 tracking-tight">
                            Afternoon
                        </Text>
                    </View>

                    <View className=" mx-4 flex flex-col">
                        {mockTasks
                            .filter(task => {
                                if (!task.dateTime) return false;
                                const hour = parseInt(task.dateTime.split(':')[0]);
                                return hour >= 12 && hour < 17; // Afternoon: between 12:00 and 17:00
                            })
                            .map(task => (
                                <HomeCard
                                    key={task.id}
                                    type="task"
                                    title={task.title}
                                    dateTime={task.dateTime}
                                    priority={task.priority}
                                    completed={task.completed}
                                    onToggle={newVal => handleToggle(task.id, newVal, 'task')}
                                    onPress={() => handlePress(task.id, 'task')}
                                />
                            ))}
                    </View>

                    {/* Evening Habits */}
                    <View className="mx-6 my-3 flex flex-row items-center gap-2">
                        <HugeiconsIcon icon={MoonCloudIcon} size={20} color="#010101" />
                        <Text className="text-lg font-rethink-semibold text-slate-700 tracking-tight">
                            Evening
                        </Text>
                    </View>

                    <View className=" mx-4 flex flex-col">
                        {mockTasks
                            .filter(task => {
                                if (!task.dateTime) return false;
                                const hour = parseInt(task.dateTime.split(':')[0]);
                                return hour >= 17; // Evening: after 17:00
                            })
                            .map(task => (
                                <HomeCard
                                    key={task.id}
                                    type="task"
                                    title={task.title}
                                    dateTime={task.dateTime}
                                    priority={task.priority}
                                    completed={task.completed}
                                    onToggle={newVal => handleToggle(task.id, newVal, 'task')}
                                    onPress={() => handlePress(task.id, 'task')}
                                />
                            ))}
                        {mockHabits
                            .filter(habit => habit.slot === 'Evening')
                            .map(habit => {
                                const weeklyStatus = computeWeeklyStatus(habit.historyDates);
                                return (
                                    <HomeCard
                                        key={habit.id}
                                        type="habit"
                                        title={habit.title}
                                        frequency={habit.frequency}
                                        doneToday={habit.doneToday}
                                        weeklyStatus={weeklyStatus}
                                        onToggle={newVal => handleToggle(habit.id, newVal, 'habit')}
                                        onPress={() => handlePress(habit.id, 'habit')}
                                    />
                                );
                            })}
            </View>
                    <View className="h-40" />
                </ScrollView>
        </SafeAreaView>
        </ScreenWithGradientOverlay >
    );
} 