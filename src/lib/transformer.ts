import { CustomEditor } from '@/types/editor';
import { Transforms, Editor, Text } from 'slate';
import {
  isBlockColumn,
  isBlockHeadingActive,
  isBoldMarkActive,
} from './editor-helper';

export function transformHeading(editor: CustomEditor) {
  const active = isBlockHeadingActive(editor);
  Transforms.setNodes(
    editor,
    { type: active ? 'paragraph' : 'heading' },
    { match: (n) => Editor.isBlock(editor, n) }
  );
}

export function transformBold(editor: CustomEditor) {
  const active = isBoldMarkActive(editor);
  Transforms.setNodes(
    editor,
    { bold: active ? undefined : true },
    { match: (n) => Text.isText(n), split: true }
  );
}

export function transformColumn(editor: CustomEditor) {
  const active = isBlockColumn(editor);
  if (active) {
    Transforms.unwrapNodes(editor, { match: (n:any) => n.type === 'grid' });
    return;
  }

  Transforms.insertNodes(editor, [
    {
      type: 'grid',
      //@ts-ignore
      children: [
        { type: 'paragraph', children: [{ text: 'A' }] },
        { type: 'paragraph', children: [{ text: 'B' }] },
      ],
    },
  ]);
}
