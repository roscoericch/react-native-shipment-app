import { Tabs } from 'expo-router';
import React from 'react';
import Shipment from '@/components/icons/Shipment';
import ScanIcon from '@/components/icons/ScanIcon';
import WalletIcon from '@/components/icons/WalletIcon';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import ProfileIcon from '@/components/icons/ProfileIcon';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarStyle:{backgroundColor:"#FFFFFF"},
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Shipments',
          tabBarIcon: ({ color, focused }) => (
            <Shipment color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="scan"
        options={{
          title: 'Scan',
          tabBarIcon: ({ color, focused }) => (
            <ScanIcon color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="wallet"
        options={{
          title: 'wallet',
          tabBarIcon: ({ color, focused }) => (
            <WalletIcon color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <ProfileIcon color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
