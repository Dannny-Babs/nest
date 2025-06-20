import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import HomeCard from "../../components/HomeCard";
import ListCard from "../../components/ListCard";
import ScreenWithGradientOverlay from "../../components/ScreenWithGradientOverlay";
import { List } from "../../types/list";
import { Task } from "../../types/task";


export default function Checklist() {
    // Mock data - replace with real data from hooks
    const mockTasks: Task[] = [
        {
            id: 't1',
            title: 'Buy Groceries',
            dateTime: '08:30',
            priority: 'Medium',
            completed: false,
            dueDate: '2025-01-20',
            overdue: false
        },
        {
            id: 't2',
            title: 'Team Standup',
            dateTime: '10:00',
            priority: 'High',
            completed: true,
            dueDate: '2025-01-20',
            overdue: false
        },
        {
            id: 't3',
            title: 'Submit Report',
            dateTime: '15:00',
            priority: 'High',
            completed: false,
            dueDate: '2025-01-19',
            overdue: true
        },
        {
            id: 't4',
            title: 'Call Mom',
            priority: 'Low',
            completed: false,
            dueDate: '2025-01-22',
            overdue: false
        },
        {
            id: 't5',
            title: 'Plan Weekend Trip',
            dateTime: '20:00',
            priority: 'Medium',
            completed: false,
            dueDate: '2025-01-25',
            overdue: false
        },
    ];

    const mockLists: List[] = [
        {
            id: 'l1',
            title: 'Packing List',
            items: [
                { id: 'i1', title: 'Passport', completed: true },
                { id: 'i2', title: 'Toothbrush', completed: true },
                { id: 'i3', title: 'Charger', completed: false },
                { id: 'i4', title: 'Clothes', completed: false },
            ]
        },
        {
            id: 'l2',
            title: 'Shopping List',
            items: [
                { id: 'i5', title: 'Milk', completed: true },
                { id: 'i6', title: 'Bread', completed: true },
                { id: 'i7', title: 'Eggs', completed: true },
                { id: 'i8', title: 'Bananas', completed: false },
                { id: 'i9', title: 'Coffee', completed: false },
            ]
        },
        {
            id: 'l3',
            title: 'Home Maintenance',
            items: [
                { id: 'i10', title: 'Change air filter', completed: false },
                { id: 'i11', title: 'Clean gutters', completed: false },
                { id: 'i12', title: 'Test smoke alarms', completed: false },
            ]
        }
    ];

    // Group tasks by category
    const overdueTasks = mockTasks.filter(task => task.overdue);
    const todayTasks = mockTasks.filter(task => 
        task.dueDate === '2025-01-20' && !task.overdue
    );
    const upcomingTasks = mockTasks.filter(task => 
        task.dueDate !== '2025-01-20' && !task.overdue && !task.overdue
    );
    const unscheduledTasks = mockTasks.filter(task => !task.dueDate);

    const totalItems = mockTasks.length + mockLists.length;

    const handleToggleTask = (taskId: string, newValue: boolean) => {
        console.log(`Toggled task ${taskId} =>`, newValue);
        // Update task completion
    };

    const handleToggleList = (listId: string, newValue: boolean) => {
        console.log(`Toggled list ${listId} =>`, newValue);
        // Update list completion
    };

    const handlePressTask = (taskId: string) => {
        console.log(`Pressed task ${taskId}`);
        // Navigate to task detail
    };

    const handlePressList = (listId: string) => {
        console.log(`Pressed list ${listId}`);
        // Navigate to list detail
    };

    const renderTaskSection = (title: string, tasks: Task[], showOverdue = false) => {
        if (tasks.length === 0) return null;

        return (
            <View className="mb-6">
                <View className="mx-6 mb-3">
                    <Text className="text-lg font-rethink-semibold text-slate-700 tracking-tight">
                        {title}
                    </Text>
                </View>
                <View className="mx-4">
                    {tasks.map(task => (
                        <HomeCard
                            key={task.id}
                            type="task"
                            title={task.title}
                            dateTime={task.dateTime}
                            priority={task.priority}
                            completed={task.completed}
                            onToggle={newVal => handleToggleTask(task.id, newVal)}
                            onPress={() => handlePressTask(task.id)}
                        />
                    ))}
                </View>
            </View>
        );
    };

    const renderListsSection = () => {
        if (mockLists.length === 0) {
            return (
                <View className="mx-6 mt-8 items-center">
                    <Text className="text-gray-500 text-center">
                        No lists yet. Tap + to create one.
                    </Text>
                </View>
            );
        }

        return (
            <View className="mb-6">
                <View className="mx-6 mb-3">
                    <Text className="text-lg font-rethink-semibold text-slate-700 tracking-tight">
                        Lists
                    </Text>
                </View>
                <View className="mx-4">
                    {mockLists.map(list => (
                        <ListCard
                            key={list.id}
                            list={list}
                            onToggle={newVal => handleToggleList(list.id, newVal)}
                            onPress={() => handlePressList(list.id)}
                        />
                    ))}
                </View>
            </View>
        );
    };

    const renderEmptyState = () => (
        <View className="flex-1 justify-center items-center px-6">
            <Text className="text-gray-500 text-center text-lg">
                No tasks or lists. Tap + to add.
            </Text>
        </View>
    );

    return (
        <ScreenWithGradientOverlay>
            <SafeAreaView className="flex bg-slate-50 font-rethink">
                <StatusBar style="dark" />
                
                {/* Header */}
                <View className="h-2"/> 
                <View className="flex flex-row items-center gap-2 px-6 py-2 ">
                    <Text className="text-3xl font-rethink-bold text-slate-950 tracking-tight">
                        Tasks & Lists
                    </Text>
                    <View className="bg-slate-200 rounded-full px-2 ml-6 ">
                        <Text className="text-lg font-rethink-medium text-slate-700">
                            {totalItems}
                        </Text>
                    </View>
                </View>
                <View className="h-2"/> 

                <ScrollView 
                    contentContainerStyle={{ paddingBottom: 100 }} 
                    showsVerticalScrollIndicator={false}
                >
                    {/* Show everything in one flow */}
                    {renderTaskSection('Overdue Tasks', overdueTasks, true)}
                    {renderTaskSection('Today', todayTasks)}
                    {renderTaskSection('Upcoming', upcomingTasks)}
                    {renderTaskSection('Unscheduled Tasks', unscheduledTasks)}
                    
                    {/* Separator */}
                    <View className="mx-6 my-6 border-t border-slate-200" />
                    
                    {renderListsSection()}

                    {/* Empty state if no content */}
                    {mockTasks.length === 0 && mockLists.length === 0 && renderEmptyState()}

                    <View className="h-20" />
                </ScrollView>
            </SafeAreaView>
        </ScreenWithGradientOverlay>
    );
}