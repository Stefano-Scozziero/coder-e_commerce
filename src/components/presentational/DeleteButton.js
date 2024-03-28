import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../utils/globals/colors'
import {Feather} from "@expo/vector-icons"

const DeleteButton = ({title, onPress}) => {
  return (
    <Pressable style= {styles.container} onPress={onPress}>
      <Feather name="log-out" size={25} color="white" />
      <Text style= {styles.text}>{title}</Text>
    </Pressable>
  )
}

export default DeleteButton

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'red',
        justifyContent: 'center',
        width: "70%",
        paddingVertical: 8,
        bottom: '3.5%',
        borderWidth: 1
    },
    text:{
        color: colors.white,
        textAlign: 'center',
        marginHorizontal: 5,
        fontSize: 18
    }
})