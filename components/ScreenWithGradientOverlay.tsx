import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, View } from 'react-native';

interface ScreenWithGradientOverlayProps {
    children: React.ReactNode;
    gradientHeight?: number | string;
    gradientColors?: string[];
}

export default function ScreenWithGradientOverlay({
    children,
    gradientHeight = '10%',
}: ScreenWithGradientOverlayProps) {

    return (
        <View style={styles.container}>
            {children}
                <LinearGradient
                    colors={['rgba(255, 255, 255, 0.45)', '#ffffff']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    style={[
                        styles.gradientOverlay,
                        {
                            height: gradientHeight as any,
                            bottom: 0,
                        }
                    ]}
                    pointerEvents="none"
                />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
    gradientOverlay: {

        position: 'absolute',
        left: 0,
        right: 0,
        zIndex: 1,
    },
}); 