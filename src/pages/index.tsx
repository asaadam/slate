import { ParagraphElement } from '@/component/DefaultElement';
import { HeadingElement } from '@/component/HeadingElement';
import { Leaf } from '@/component/LeafElement';
import { transformBold, transformHeading } from '@/lib/transformer';
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
    <div>
      <div>
        <Slate
          editor={editor}
          value={inputValue}
          onChange={(value) => {
            setInputValue(value);
          }}
        >
          <Editable
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
      </div>
    </div>
  );
}
