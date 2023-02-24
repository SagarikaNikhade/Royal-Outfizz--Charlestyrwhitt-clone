import { Box ,Center , Image, Stack , Text} from '@chakra-ui/react';
import React from "react";
import { Link as RouterLink } from "react-router-dom";

function ProductCard({id, category , title, image, price, description}){
    return (
        <Center>
            <RouterLink to={`/singleproduct/${id}`}>
                <Box>
                    <Image src={image} h={300} w={250}/>
                    <Stack>
                        <Text>{category}</Text>
                        <Text>{title}</Text>
                        <Text>{price}</Text>
                        <Text>{description}</Text>
                    </Stack>
                </Box>            
            </RouterLink>
        </Center>
    )
}

export default ProductCard;
