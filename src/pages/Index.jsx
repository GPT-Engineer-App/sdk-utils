import { useState } from "react";
import { Container, Text, VStack, HStack, Button, Input, Image, IconButton } from "@chakra-ui/react";
import { FaRocket, FaTrash } from "react-icons/fa";

const Index = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">Todo List</Text>
        <HStack width="100%">
          <Input placeholder="Add a new item" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          <Button onClick={addItem} colorScheme="teal" leftIcon={<FaRocket />}>
            Add
          </Button>
        </HStack>
        <VStack spacing={2} width="100%">
          {items.map((item, index) => (
            <HStack key={index} width="100%" justifyContent="space-between">
              <Text>{item}</Text>
              <IconButton aria-label="Remove" icon={<FaTrash />} colorScheme="red" onClick={() => removeItem(index)} />
            </HStack>
          ))}
        </VStack>
        <Image src="https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0b2RvJTIwbGlzdCUyMGlsbHVzdHJhdGlvbnxlbnwwfHx8fDE3MTYzMzY3NDZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Todo List Illustration" />
      </VStack>
    </Container>
  );
};

export default Index;
