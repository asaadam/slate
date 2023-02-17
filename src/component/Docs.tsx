import { Box, Heading, Kbd, Text } from '@chakra-ui/react';

const Docs = () => {
  return (
    <Box p={4} backgroundColor="green.50" mb={4}>
      <Heading as={'h1'} size="lg">
        Shortcuts Available
      </Heading>
      <Text>
        <span>
          <Kbd>ctrl</Kbd> + <Kbd>B</Kbd> :{' '}
        </span>
        Bold
      </Text>
      <Text>
        <span>
          <Kbd>ctrl</Kbd> + <Kbd>H</Kbd> :{' '}
        </span>
        Heading
      </Text>
      <Text>
        <span>
          <Kbd>ctrl</Kbd> + <Kbd>C</Kbd> :{' '}
        </span>
        Column
      </Text>
      <Text>
        <span>
          <Kbd>shift</Kbd> + <Kbd>Enter</Kbd> :{' '}
        </span>
        New line while in column
      </Text>
    </Box>
  );
};

export { Docs };
