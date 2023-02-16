import { Heading } from '@chakra-ui/react';
import { RenderElementProps } from 'slate-react';

const HeadingElement = ({attributes,children}: RenderElementProps) => {
  return <Heading {...attributes}>{children}</Heading>;
};

export { HeadingElement };
