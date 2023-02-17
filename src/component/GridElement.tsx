import { Box, SimpleGrid } from "@chakra-ui/react";
import { RenderElementProps } from "slate-react";

const GridElement = ({attributes,children}: RenderElementProps) => {

  return ( 
    <SimpleGrid minChildWidth='120px' spacing='40px' {...attributes}>
      {children}
    </SimpleGrid>
  )

}


export { GridElement };