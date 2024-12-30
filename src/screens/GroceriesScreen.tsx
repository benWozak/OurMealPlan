import React from "react";
import { YStack, Text } from "tamagui";

export const GroceriesScreen = () => {
  return (
    <YStack
      f={1}
      backgroundColor="$background"
      padding="$4"
      justifyContent="center"
      alignItems="center"
    >
      <Text color="$color">Groceries Screen</Text>
    </YStack>
  );
};
