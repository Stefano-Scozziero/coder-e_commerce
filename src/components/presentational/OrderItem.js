import { StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native'
import {Feather} from "@expo/vector-icons"
import colors from '../../utils/globals/colors'
import fonts from '../../utils/globals/fonts'
import React, { useState } from 'react';

const OrderItem = ({order, portrait}) => {

  const [showDetails, setShowDetails] = useState(false);
  const handlePress = () => {
    setShowDetails(!showDetails);
  };

  const renderOrderItems = () => {
    return order.items.map((item, index) => (
      <Text key={index} style={styles.text2}>
        {item.title}
        {index < order.items.length - 1 && ', '}
      </Text>
    ))
  }

  return (
    <View style={[styles.card, !portrait && styles.cardLandscape]}>
      <View style={[styles.textContainer, !portrait && styles.textContainerLandscape]}>
        <Text style={styles.text}>{order.createdAt} </Text>
        <Text style={[styles.text2, !portrait && styles.text2LandScape]}>Total: ${order.total}</Text>
        {showDetails && (
          <View style={[!portrait && styles.PedidoContainerLandscape]}>
          <ScrollView>
            <View style={styles.textContainer}>
              <Text style={styles.text2}>Pedido:</Text>
              {renderOrderItems()}
            </View>
          </ScrollView>
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
  card: {
    flex: 1,
    backgroundColor: colors.lightBlue,
    borderWidth: 2,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center", 
    minHeight:120
  },
  cardLandscape: {
    marginVertical: 5,
    minHeight:50,
    flexGrow: 1,
  },
  textContainer: {
    width: "70%",
    flexGrow: 1,
  },
  textContainerLandscape: {
    flexDirection: 'row',
    width: "70%",
    flexGrow: 1,
  },
  text: {
    fontSize: 17,
    fontFamily: fonts.JosefinSansBold
  },
  text2: {
    fontSize: 19,
    fontFamily: fonts.JosefinSansBold,
  },
  text2LandScape: {
    fontSize: 19,
    fontFamily: fonts.JosefinSansBold,
    left: 20,
    right: 20
  },
  PedidoContainerLandscape: {
    flex: 1,
    flexDirection: 'row',
    width: "70%",
    left: 40
  },
})