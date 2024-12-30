import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { GroceriesScreen } from "../screens/GroceriesScreen";
import { MealPlanScreen } from "../screens/MealPlanScreen";
import { RecipesScreen } from "../screens/RecipesScreen";
import { FamilyScreen } from "../screens/FamilyScreen";
import { ShoppingCart, Menu, Book, Users } from "lucide-react-native";
import { useTheme } from "tamagui";
import type { RootStackParamList } from "./types";

const Tab = createBottomTabNavigator<RootStackParamList>();

export const NavBar = () => {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: theme.background.val,
          borderTopColor: theme.borderColor.val,
          paddingBottom: 8,
          height: 60,
        },
        tabBarActiveTintColor: theme.primary.val,
        tabBarInactiveTintColor: theme.color.val,
        headerStyle: {
          backgroundColor: theme.background.val,
        },
        headerTintColor: theme.color.val,
        tabBarLabelStyle: {
          fontSize: 12,
          paddingBottom: 4,
        },
      }}
    >
      <Tab.Screen
        name="Groceries"
        component={GroceriesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <ShoppingCart size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={MealPlanScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Menu size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Recipes"
        component={RecipesScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Book size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Family"
        component={FamilyScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Users size={size} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};
