import { Pressable, StyleSheet, Text, TextInput, View, Keyboard } from 'react-native'
import { useState } from 'react'
import {AntDesign} from '@expo/vector-icons'
import colors from '../utils/globals/colors'

const Search = ({handlerKeyWord}) => {

    const [input, setInput] = useState("")
    const [error, setError] = useState("")
    const handlerInput = (t) => setInput(t)

    const handleInputChange = (text) => {
        setInput(text)
        handlerKeyWord(text)
        const expression = /[!@#$%^&*(),.?":{}|<>]/
        if (expression.test(text)){
            setError("Caracteres no Validos")
            return
        }
        setError("")
      }

    const search = () => {
        const expression = /[!@#$%^&*(),.?":{}|<>]/
        if (expression.test(input)){
            setError("Caracteres no Validos")
            return
        }
        setError("")
        handlerKeyWord(input)
        Keyboard.dismiss()
    }
    const resetSearch = () => {
        handlerKeyWord("")
        handlerInput("")
        setError("")
    }

  return (
        <View>
            <View style= {styles.container}>
                <TextInput
                    placeholder='Buscar'
                    value={input}
                    onChangeText={handlerInput}
                    style= {styles.input}
                />
                <Pressable onPress={search}>
                    <AntDesign name='search1' size={30} color = 'black'/>
                </Pressable>
                <Pressable onPress={resetSearch}>
                    <AntDesign name='closecircle' size={30} color = 'black'/>
                </Pressable>
            </View>
            {error ? <Text style= {styles.text}>{error}</Text> : null}
        </View>
  )
}

export default Search

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: colors.primary,
        padding: 10,
        alignItems: 'center'
    },
    input: {
        flex: 1,
        borderWidth: 2,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius:5,
    },
    text: {
        color: 'red',
        paddingHorizontal: 10
    }

})