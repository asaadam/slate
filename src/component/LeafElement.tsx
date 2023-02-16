import { As, Text } from '@chakra-ui/react';
import { RenderLeafProps } from 'slate-react';

const Leaf = ({ attributes, children, leaf }: RenderLeafProps) => {
  const as: As = leaf.bold ? 'strong' : 'span';

  return (
    <Text as={as} {...attributes}>
      {children}
    </Text>
  );
};

export { Leaf };
