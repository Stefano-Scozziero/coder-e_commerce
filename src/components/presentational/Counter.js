import { StyleSheet, View, Alert,Text, Pressable } from 'react-native'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCartItem } from '../../features/cart/cartSlice'
import colors from '../../utils/globals/colors'

const Counter = ({navigation,initialValue, textButton, product}) => {

    const [count,setCount] = useState(initialValue)
    const dispatch = useDispatch()

    const handlerAddCartItem = (quantity) => {
      dispatch(addCartItem({...product,quantity}))
      setCount(1)
      Alert.alert("Se agrego el producto al carrito")
      navigation.navigate("CartStack")
    }

    const handlerDecrement = () => {
      if (!(count <= 1)){
        setCount(count - 1)
      }
    }


  return (
    <View style={styles.counterContainer}>
        <Pressable style={styles.buttonSusInc} onPress={()=> setCount(count + 1)}>
          <Text style={styles.text}>+</Text>
        </Pressable>
        <Text style={styles.text}>{count}</Text>
        <Pressable style={styles.buttonSusInc} onPress={handlerDecrement}>
          <Text style={styles.text}>-</Text>
        </Pressable>
        <Pressable style={styles.buttonCar} onPress={()=>handlerAddCartItem(count)}>
          <Text style={styles.text}>{textButton}</Text>
        </Pressable>
    </View>
  )
}

export default Counter

const styles = StyleSheet.create({
      counterContainer:{
        width:250,
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        
      },
      text:{
        fontSize: 20,
        textAlign:"center"
      },
      buttonSusInc: {
        backgroundColor: colors.lightBlue,
        width:"15%",
        padding:10,
        alignItems:"center",
        borderRadius:10
        
      },
      buttonCar: {
        backgroundColor: colors.lightBlue,
        width:"40%",
        padding:10,
        alignItems:"center",
        borderRadius:10,
      }
})