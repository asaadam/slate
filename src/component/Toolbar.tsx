import { isBlockColumn, isBlockHeadingActive, isBoldMarkActive } from '@/lib/editor-helper';
import { transformBold,  transformColumn, transformHeading } from '@/lib/transformer';
import { Button, HStack } from '@chakra-ui/react';
import { BiBold, BiHeading } from 'react-icons/bi';
import { FaColumns } from 'react-icons/fa';
import { useSlate } from 'slate-react';

const Toolbar = () => {
  const editor = useSlate();
  const isBoldActive = isBoldMarkActive(editor);
  const isHeadingActive = isBlockHeadingActive(editor);
  const isColumnActive = isBlockColumn(editor);



  return (
    <HStack backgroundColor="white" p={4} borderRadius={8}>
      <Button isActive={isBoldActive} onClick={()=>transformBold(editor)}>
        <BiBold />
      </Button>
      <Button isActive={isHeadingActive} onClick={()=>transformHeading(editor)}>
        <BiHeading />
      </Button>
      <Button isActive={isColumnActive} onClick={()=>transformColumn(editor)}>
      <FaColumns/>
      </Button>
    </HStack>
  );
};

export { Toolbar };
