import { ParagraphElement } from '@/component/DefaultElement';
import { GridElement } from '@/component/GridElement';
import { HeadingElement } from '@/component/HeadingElement';
import { Leaf } from '@/component/LeafElement';
import { Toolbar } from '@/component/Toolbar';
import { isBlockColumn } from '@/lib/editor-helper';
import {
  transformBold,
  transformColumn,
  transformHeading,
} from '@/lib/transformer';
import { Box, VStack } from '@chakra-ui/react';
import * as React from 'react';
import { Descendant, Editor, Path } from 'slate';
import { createEditor, Transforms } from 'slate';
import { withHistory } from 'slate-history';
import {
  Editable,
  ReactEditor,
  RenderElementProps,
  Slate,
  withReact,
} from 'slate-react';

const initialValue: Descendant[] = [
  {
    type: 'paragraph',
    children: [{ text: 'A line of text in a paragraph.' }],
  },
];

export default function RichTextEditor() {
  const [inputValue, setInputValue] =
    React.useState<Descendant[]>(initialValue);
  const [editor] = React.useState(() => withReact(withHistory(createEditor())));

  const renderElement = React.useCallback((props: RenderElementProps) => {
    switch (props.element.type) {
      case 'heading': {
        return <HeadingElement {...props} />;
      }
      case 'paragraph': {
        return <ParagraphElement {...props} />;
      }
      case 'grid': {
        return <GridElement {...props} />;
      }

      default: {
        return <ParagraphElement {...props} />;
      }
    }
  }, []);

  return (
    <Box padding={16} minH={'100vh'} minW={'100vw'} backgroundColor="gray.100">
      <Box>
        <Slate
          editor={editor}
          value={inputValue}
          onChange={(value) => {
            setInputValue(value);
          }}
        >
          <Toolbar />
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
                if (event.key === 'c') {
                  transformColumn(editor);
                }
              }
              if (event.key === 'Enter' && event.shiftKey) {
                event.preventDefault();
                if (isBlockColumn(editor)) {
                  // handle new line while in grid
                  Transforms.insertNodes(
                    editor,
                    {
                      type: 'paragraph',
                      children: [{ text: '' }],
                    },
                    { at: [editor.children.length] }
                  );
                  Transforms.select(editor, [editor.children.length - 1, 0]);
                }
              }
            }}
          />
        </Slate>
      </Box>
    </Box>
  );
}
