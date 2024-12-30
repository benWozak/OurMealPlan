import React, { useState } from "react";
import { Sheet, Input, Button, YStack, Text } from "tamagui";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const CreateListModal = ({ isOpen, onClose }: Props) => {
  const [name, setName] = useState("");

  const handleCreate = async () => {
    // TODO: Implement create list API call
    onClose();
  };

  return (
    <Sheet
      modal
      open={isOpen}
      onOpenChange={onClose}
      snapPoints={[40]}
      position={0}
    >
      <Sheet.Overlay />
      <Sheet.Frame padding="$4">
        <YStack space="$4">
          <Text fontSize="$6" fontWeight="bold">
            Create New List
          </Text>
          <Input
            size="$4"
            placeholder="List Name"
            value={name}
            onChangeText={setName}
          />
          <Button size="$4" backgroundColor="$primary" onPress={handleCreate}>
            Create List
          </Button>
        </YStack>
      </Sheet.Frame>
    </Sheet>
  );
};
