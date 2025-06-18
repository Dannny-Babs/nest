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
  gradientHeight = '7%',
}: ScreenWithGradientOverlayProps) {
  
  return (
    <View style={styles.container}>
      {children}
      <LinearGradient
        colors={['#ffffff', '#f1f1f1']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 2 }}
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