import { CustomEditor } from "@/types/editor";
import { Editor } from "slate";

export const isBoldMarkActive = (editor:CustomEditor)=>{
  const [match] = Editor.nodes(editor, {
    match: (n: any) => n.bold === true,
    universal: true,
  });
  return match ? true : false;
}

export const isBlockHeadingActive = (editor:CustomEditor)=>{
  const [match] = Editor.nodes(editor, {
    match: (n: any) => n.type === 'heading',
  });
  return match ? true : false;
}

export const isBlockColumn = (editor:CustomEditor)=>{
  const [match] = Editor.nodes(editor, {
    match: (n:any) => n.type === 'grid',
  });
  return match ? true : false;
}

