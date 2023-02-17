import { ParagraphElement } from '@/component/DefaultElement';
import { HeadingElement } from '@/component/HeadingElement';
import { Leaf } from '@/component/LeafElement';
import { Toolbar } from '@/component/Toolbar';
import { transformBold, transformHeading } from '@/lib/transformer';
import { Box, VStack } from '@chakra-ui/react';
import * as React from 'react';
import type { Descendant } from 'slate';
import { createEditor } from 'slate';
import { Editable, RenderElementProps, Slate, withReact } from 'slate-react';

const initialValue: Descendant[] = [
  {
    type: 'paragraph',
    children: [{ text: 'A line of text in a paragraph.' }],
  },
];

export default function RichTextEditor() {
  const [inputValue, setInputValue] =
    React.useState<Descendant[]>(initialValue);
  const [editor] = React.useState(() => withReact(createEditor()));

  const renderElement = React.useCallback((props: RenderElementProps) => {
    switch (props.element.type) {
      case 'heading': {
        return <HeadingElement {...props} />;
      }
      case 'paragraph': {
        return <ParagraphElement {...props} />;
      }
      default: {
        return <ParagraphElement {...props} />;
      }
    }
  }, []);

  return (
    <Box padding={16} minH={'100vh'} minW={'100vw'} backgroundColor="gray.100">
      <Box  >
        <Slate
          editor={editor}
          value={inputValue}
          onChange={(value) => {
            setInputValue(value);
          }}
        >
                <Toolbar/>
          <Editable
            style={{
              marginTop: 20,
              minHeight: 460,
              width: '100%',
              borderRadius: 8,
              backgroundColor: 'white',
              paddingLeft: 14,
              paddingRight: 14,
              paddingTop: 8,
              paddingBottom: 8,
            }}
            renderLeaf={(props) => <Leaf {...props} />}
            renderElement={renderElement}
            placeholder="Type anything here..."
            onKeyDown={(event) => {
              if (event.ctrlKey) {
                event.preventDefault();
                if (event.key === 'h') {
                  transformHeading(editor);
                }
                if (event.key === 'b') {
                  transformBold(editor);
                }
              }
            }}
          />
        </Slate>
      </Box>
    </Box>
  );
}
