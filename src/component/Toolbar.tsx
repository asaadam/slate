import { isBlockHeadingActive, isBoldMarkActive } from '@/lib/editor-helper';
import { transformBold, transformHeading } from '@/lib/transformer';
import { Button, HStack } from '@chakra-ui/react';
import { BiBold, BiHeading } from 'react-icons/bi';
import { useSlate } from 'slate-react';

const Toolbar = () => {
  const editor = useSlate();
  const isBoldActive = isBoldMarkActive(editor);
  const isHeadingActive = isBlockHeadingActive(editor);


  return (
    <HStack backgroundColor="white" p={4} borderRadius={8}>
      <Button isActive={isBoldActive} onClick={()=>transformBold(editor)}>
        <BiBold />
      </Button>
      <Button isActive={isHeadingActive} onClick={()=>transformHeading(editor)}>
        <BiHeading />
      </Button>
    </HStack>
  );
};

export { Toolbar };
