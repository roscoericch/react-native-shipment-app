import React, { useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';
import TopLogo from './icons/TopLogo';
import BottomLogo from './icons/BottomLogo';

const SplashScreen = ({ onFinish }: { onFinish: () => void }) => {
  const scaleValue = useRef(new Animated.Value(1)).current;
  const translateYValueTop = useRef(new Animated.Value(0)).current;
  const translateYValueBottom = useRef(new Animated.Value(0)).current;
  const backgroundColor = useRef(new Animated.Value(0)).current;
  
  useEffect(() => {
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 2,
        duration: 1000,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
      Animated.parallel([
        Animated.timing(translateYValueTop, {
          toValue: -40,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(translateYValueBottom, {
          toValue: -35,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
      Animated.parallel([
        Animated.timing(scaleValue, {
          toValue: 0.5,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(backgroundColor, {
          toValue: 1,
          duration: 800,
          useNativeDriver: false,
        }),
      ]),
    ]).start(() => {
        onFinish();
    });
  }, [onFinish, scaleValue, translateYValueTop, translateYValueBottom, backgroundColor]);

  const bgColor = backgroundColor.interpolate({
    inputRange: [0, 1],
    outputRange: ['#FFFFFF', '#2F50C1']
  });

  return (
    <Animated.View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: bgColor }}>
      <Animated.View style={{ transform: [{ scale: scaleValue }, { translateY: translateYValueTop }] }}>
        <BottomLogo />
      </Animated.View>
      <Animated.View style={{ transform: [{ scale: scaleValue }, { translateY: translateYValueBottom }] }}>
        <TopLogo />
      </Animated.View>
    </Animated.View>
  );
};

export default SplashScreen;
