import { Editor } from "slate";

export const isBoldMarkActive = (editor:Editor)=>{
  const [match] = Editor.nodes(editor, {
    match: (n: any) => n.bold === true,
    universal: true,
  });
  return match ? true : false;
}

export const isHeadingActive = (editor:Editor)=>{
  const [match] = Editor.nodes(editor, {
    match: (n: any) => n.type === 'heading',
  });
  return match ? true : false;
}

