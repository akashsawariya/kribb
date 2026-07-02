import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import { Icon, Label, NativeTabs } from "expo-router/unstable-native-tabs";
import { Platform } from "react-native";

export default function TabLayout() {
  if (Platform.OS === "ios") {
    return (
      <NativeTabs>
        <NativeTabs.Trigger name="index">
          <Label>Home</Label>
          <Icon sf="house.fill" />
        </NativeTabs.Trigger>

        <NativeTabs.Trigger name="search">
          <Label>Search</Label>
          <Icon sf="magnifyingglass" />
        </NativeTabs.Trigger>

        <NativeTabs.Trigger name="saved">
          <Label>Saved</Label>
          <Icon sf="heart.fill" />
        </NativeTabs.Trigger>

        <NativeTabs.Trigger name="profile">
          <Label>Profile</Label>
          <Icon sf="person.fill" />
        </NativeTabs.Trigger>
      </NativeTabs>
    );
  }

  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

// import { Stack } from "expo-router";
// import { Icon, Label, NativeTabs } from "expo-router/unstable-native-tabs";
// import React from "react";

// const TabLayout = () => {
//   return (
//     <>
//       <Stack.Screen
//         options={{
//           headerShown: false,
//         }}
//       />
//       <NativeTabs>
//         <NativeTabs.Trigger name="index">
//           <Label>Home</Label>
//           <Icon sf="house.fill" />
//         </NativeTabs.Trigger>

//         <NativeTabs.Trigger name="search">
//           <Icon sf="magnifyingglass" />
//           <Label>Search</Label>
//         </NativeTabs.Trigger>

//         {/* create property */}

//         <NativeTabs.Trigger name="saved">
//           <Icon sf="heart.fill" />
//           <Label>Saved</Label>
//         </NativeTabs.Trigger>

//         <NativeTabs.Trigger name="profile">
//           <Icon sf="person.fill" />
//           <Label>Profile</Label>
//         </NativeTabs.Trigger>
//       </NativeTabs>
//     </>
//   );
// };

// export default TabLayout;
