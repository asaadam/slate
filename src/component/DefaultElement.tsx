import { RenderElementProps } from 'slate-react';
import * as React from 'react';
import { Text } from '@chakra-ui/react';

export function ParagraphElement({ attributes, children }: RenderElementProps) {
  return <Text {...attributes}>{children}</Text>;
}
