import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../utils/globals/colors'

const AddButton = ({title, onPress}) => {
  return (
    <Pressable style= {styles.container} onPress={onPress}>
        <Text style= {styles.text}>{title}</Text>
    </Pressable>
  )
}

export default AddButton

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.lightBlue,
        width: "70%",
        paddingVertical: 8,
        margin: 10,
        bottom: '3.5%',
        borderWidth: 1
    },
    text:{
        color: colors.white,
        textAlign: 'center',
        fontSize: 18
    }
})