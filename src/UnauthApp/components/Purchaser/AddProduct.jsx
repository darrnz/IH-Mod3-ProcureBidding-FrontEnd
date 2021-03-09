import React, { useEffect, useState } from 'react'
import { Box, Input, Button, Text, FormControl, FormLabel, FormErrorMessage, FormHelperText, 
    NumberInput,NumberInputField,NumberInputStepper,NumberIncrementStepper,NumberDecrementStepper,
    Select} from '@chakra-ui/react'


export default function AddProduct() {

    const [newProduct, setNewProduct] = useState(
        {
            idLocal: '',
            productDescription: '',
            boxSize: 0,
            uom:'',
            productFamily: '',
        }
    )

    return (
        <>
        <Box as='main'>
            <Text >Detalles de nuevo producto</Text>
            <Box as='form'>
                <FormControl as='fieldset'>

                    <FormControl id="idLocal" mb={5}>
                        <FormLabel>ID</FormLabel>
                        <Input 
                            type='text' 
                            name='idLocal'
                            placeholder='Código de tu inventario'
                        />
                    </FormControl>

                    <FormControl id="description" mb={5}>
                        <FormLabel>Description</FormLabel>
                        <Input 
                            type='text'
                            name='productDescription'
                            placeholder='Descripción: tipo, medidas, color, material, etc.' 
                        />
                        <FormHelperText>Haz una descripción detallada</FormHelperText>
                    </FormControl>

                    <FormControl id="uom" mb={5}>
                        <FormLabel>UDM</FormLabel>
                        <Input 
                            type='text'
                            name='uom'
                            placeholder='Unidad de medida' 
                        />
                    </FormControl>

                    <FormControl id="boxSize">
                        <FormLabel>Cantidad por Unidad</FormLabel>
                        <NumberInput name='boxSize' min={0}>
                            <NumberInputField />
                            <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </FormControl>

                    <FormControl id="productFamily">
                        <FormLabel>Familia del producto</FormLabel>
                        <Select colorScheme='yellow' placeholder="Selecciona el grupo de tu producto" name='productFamily'>
                            <option value='Alimentos y Bebidas'>Alimentos y Bebidas</option>
                            <option value='Equipo Computo'>Equipo Computo</option>
                            <option value='Equipo Construcción'>Equipo Construcción</option>
                            <option value='Suministros Oficina'>Suministros Oficina</option>
                        </Select>
                    </FormControl>

                    <Button>Guardar nuevo producto</Button>
                </FormControl>
            </Box>
        </Box>
        </>
    )
}
