import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

interface IconWithActiveCircleProps {
    focused: boolean;
    icon: React.ReactNode;
}

export default function IconWithActiveCircle({ focused, icon }: IconWithActiveCircleProps) {
    const scaleAnim = useRef(new Animated.Value(1)).current;
    const opacityAnim = useRef(new Animated.Value(0.6)).current;

    useEffect(() => {
        Animated.parallel([
            Animated.timing(scaleAnim, {
                toValue: focused ? 1.1 : 1,
                duration: 200,
                useNativeDriver: true,
            }),
            Animated.timing(opacityAnim, {
                toValue: focused ? 1 : 0.6,
                duration: 200,
                useNativeDriver: true,
            }),
        ]).start();
    }, [focused, scaleAnim, opacityAnim]);

    return (
        <Animated.View
            style={{
                width: focused ? 44 : 40,
                height: focused ? 44 : 40,
                borderRadius: focused ? 24 : 20,
                backgroundColor: focused ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
                alignItems: 'center',
                justifyContent: 'center',
                transform: [{ scale: scaleAnim }],
                opacity: opacityAnim,
            }}
        >
            {icon}
        </Animated.View>
    );
}
  
