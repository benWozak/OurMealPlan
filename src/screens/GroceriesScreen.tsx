import React, { useState } from "react";
import { YStack, XStack, Input, Button, Card, Text, ScrollView } from "tamagui";
import { Plus, Edit2, Trash2 } from "lucide-react-native";
import { CreateListModal } from "../components/groceries/CreateListModal";
import { GroceryList } from "../components/groceries/GroceryList";
import type { GroceryListType } from "../types/groceries";

export const GroceriesScreen = () => {
  const [lists, setLists] = useState<GroceryListType[]>([]);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  return (
    <YStack f={1} backgroundColor="$background">
      <XStack padding="$4" justifyContent="space-between" alignItems="center">
        <Text fontSize="$6" fontWeight="bold" color="$color">
          My Lists
        </Text>
        <Button
          size="$4"
          backgroundColor="$primary"
          icon={Plus}
          onPress={() => setIsCreateModalOpen(true)}
        >
          New List
        </Button>
      </XStack>

      <ScrollView padding="$4">
        <YStack space="$4">
          {lists.map((list) => (
            <GroceryList key={list.id} list={list} />
          ))}
        </YStack>
      </ScrollView>

      <CreateListModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      />
    </YStack>
  );
};
