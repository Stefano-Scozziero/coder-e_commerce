import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import {Feather} from "@expo/vector-icons"
import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'
import React, { useState } from 'react';

const OrderItem = ({order}) => {

  const [showDetails, setShowDetails] = useState(false);

  const handlePress = () => {
    setShowDetails(!showDetails);
  };

  return (
    <View style={styles.card}>
        <View style={styles.textContainer}>
        <Text style={styles.text}>{order.createdAt}</Text>
        <Text style={styles.text2}>$ {order.total}</Text>
        {showDetails && (
          <View>
            <Text>Descripción:</Text>
            <Text>{order.items[0].title}</Text>
          </View>
        )}
        </View>
        <TouchableOpacity onPress={handlePress}>
            <Feather name="search" size={30} color="black" />
        </TouchableOpacity>
        
    </View>
  )
}

export default OrderItem

const styles = StyleSheet.create({
    card:{
        backgroundColor:colors.lightBlue,
        borderWidth:2,
        margin:10,
        padding:10,
        borderRadius:10,
        flexDirection:"row",
        justifyContent:"space-between",
        height:120,
        alignItems:"center"
        
    },
    textContainer:{
        width:"70%"
    },
    text:{
        fontSize:17,
        fontFamily:fonts.JosefinSansBold
    },
    text2:{
        fontSize:19,
        fontFamily:fonts.JosefinSansBold,
    }

})