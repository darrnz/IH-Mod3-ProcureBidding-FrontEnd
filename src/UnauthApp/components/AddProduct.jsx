import React from 'react'
import { Box, Input, Button, Text, FormControl, FormLabel, FormErrorMessage, FormHelperText, 
    NumberInput,NumberInputField,NumberInputStepper,NumberIncrementStepper,NumberDecrementStepper,
    Select} from '@chakra-ui/react'


export default function AddProduct() {
    return (
        <Box as='main'>
            <Text >Add your product</Text>
            <Box as='form'>
                <FormControl as='fieldset'>
                    <FormControl id="description" mb={5}>
                        <FormLabel>ID</FormLabel>
                        <Input 
                            type='text' 
                            name='idLocal'
                            placeholder='Code for your inventory'
                        />
                    </FormControl>

                    <FormControl id="description" mb={5}>
                        <FormLabel>Description</FormLabel>
                        <Input 
                            type='text'
                            name='productDescription'
                            placeholder='Description: type, weight, color, material, etc.' 
                        />
                        <FormHelperText>The more descriptive the best</FormHelperText>
                    </FormControl>

                    <FormControl id="amount">
                        <FormLabel>Amount</FormLabel>
                        <NumberInput name='boxSize' max={50} min={10}>
                            <NumberInputField />
                            <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </FormControl>

                    <FormControl id="country">
                        <FormLabel>Product Family</FormLabel>
                        <Select colorScheme='yellow' placeholder="Select country" name='productFamily'>
                            <option value='Food & Beverage'>Food & Beverage</option>
                            <option value='Computer Equipment'>Computer Equipment</option>
                            <option value='Construction Equipment'>Construction Equipment</option>
                            <option value='Office supplies'>Office supplies</option>
                        </Select>
                    </FormControl>

                    <Button>AddProduct</Button>
                </FormControl>
            </Box>
        </Box>
    )
}
