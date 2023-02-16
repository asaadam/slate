import * as React from 'react';
import type { BaseEditor, Descendant } from 'slate';
import { createEditor } from 'slate';
import { Editable, ReactEditor, Slate, withReact } from 'slate-react';


export type CustomText = { text: string; bold?: true }

export type ParagraphElement = {
  type: 'paragraph'
  children: CustomText[]
}

export type CustomEditor = BaseEditor & ReactEditor 

export type CustomElement = ParagraphElement 


declare module 'slate' {
  interface CustomTypes {
    Editor: CustomEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}

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
            placeholder="Type anything here..."
          />
        </Slate>
      </div>
   
    </div>
  );
}
