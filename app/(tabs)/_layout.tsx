import { Add01Icon, BodyPartMuscleIcon, Calendar03Icon, CheckmarkSquare04Icon, Home01Icon, Home02Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Tabs } from 'expo-router';
import React from 'react';
import { Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import IconWithActiveCircle from '../../components/IconWithActiveCircle';

export default function TabsLayout() {
    const insets = useSafeAreaInsets();
    const { width } = Dimensions.get('window');
    const tabBarWidth = Math.min(width - 120, 500); // Responsive width with max constraint\

    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#fff',
                tabBarInactiveTintColor: 'rgba(255,255,255,0.6)',
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: 'transparent',
                    position: 'absolute',
                    bottom: insets.bottom,
                    paddingTop: 5,
                    left: 80,
                    right: 80,
                    width: tabBarWidth,
                    height: 56,
                    marginHorizontal: 60,
                    borderRadius: 32,
                    borderWidth: 1,
                    borderColor: '#f1f1f1a',
                    elevation: 8,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.3,
                    shadowRadius: 8,
                },
                tabBarBackground: () => (
                    <LinearGradient
                        colors={['#2a2a2a', '#11111a']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0.5, y: 0.5 }}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            borderRadius: 32,
                        }}
                    />
                ),
                tabBarItemStyle: {
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 1,
                    paddingVertical: 8,
                },
            }}
        >
            <Tabs.Screen name="index"
                options={{
                    headerShown: false, animation: "fade", title: "Home", tabBarIcon: ({ focused, color, size }) => {
                        return <IconWithActiveCircle focused={focused} icon={
                            <HugeiconsIcon icon={Home01Icon} altIcon={Home02Icon} size={22} color={color} showAlt={focused} />
                        } />
                    },
                    tabBarLabel: "Home"
                }} />
            <Tabs.Screen name="checklist"
                options={{
                    headerShown: false,
                    animation: "fade",
                    title: "Checklist",
                    tabBarIcon: ({ focused, color, size }) => {
                        return <IconWithActiveCircle focused={focused} icon={
                            <HugeiconsIcon icon={CheckmarkSquare04Icon} size={22} color={color} />
                        } />
                    },
                    tabBarLabel: "Checklist"
                }} />
            <Tabs.Screen name="calendar"
                options={{
                    headerShown: false,
                    animation: "fade",
                    title: "Calendar",
                    tabBarIcon: ({ focused, color, size }) => {
                        return <IconWithActiveCircle focused={focused} icon={
                            <HugeiconsIcon icon={Calendar03Icon} size={22} color={color} />
                        } />
                    },
                    tabBarLabel: "Calendar"
                }} />
            <Tabs.Screen name="workout"
                options={{
                    headerShown: false,
                    animation: "fade",
                    title: "Workout",
                    tabBarIcon: ({ focused, color, size }) => {
                        return <IconWithActiveCircle focused={focused} icon={
                            <HugeiconsIcon icon={BodyPartMuscleIcon} size={22} color={color} />
                        } />
                    },
                    tabBarLabel: "Workout"
                }} />
            <Tabs.Screen name="add"
                options={{
                    headerShown: false,
                    animation: "fade",
                    title: "Add",
                    tabBarIcon: ({ focused, color, size }) => {
                        return <IconWithActiveCircle focused={focused} icon={
                            <HugeiconsIcon icon={Add01Icon} size={22} color={color} />
                        } />
                    },
                    tabBarLabel: "Add"
                }} />
        </Tabs>
    );
}
