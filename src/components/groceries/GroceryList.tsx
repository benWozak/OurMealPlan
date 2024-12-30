import React from "react";
import { Card, YStack, XStack, Text, Button } from "tamagui";
import { Edit2, Trash2 } from "lucide-react-native";
import type { GroceryListType } from "../../types/groceries";

type Props = {
  list: GroceryListType;
};

export const GroceryList = ({ list }: Props) => {
  return (
    <Card bordered padding="$4">
      <XStack justifyContent="space-between" alignItems="center">
        <Text fontSize="$5" fontWeight="bold" color="$color">
          {list.name}
        </Text>
        <XStack space="$2">
          <Button
            size="$3"
            backgroundColor="$secondary"
            icon={Edit2}
            onPress={() => {
              /* TODO: Implement edit */
            }}
          />
          <Button
            size="$3"
            backgroundColor="$secondary"
            icon={Trash2}
            onPress={() => {
              /* TODO: Implement delete */
            }}
          />
        </XStack>
      </XStack>
    </Card>
  );
};
