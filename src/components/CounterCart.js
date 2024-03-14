import { StyleSheet, View, Pressable, Text } from 'react-native'
import { useDispatch } from 'react-redux'
import { addCartItem } from '../features/cart/cartSlice'
import colors from '../utils/globals/colors'

const CounterCart = ({item}) => {

    const dispatch = useDispatch()

    const handlerDecrement = () => {
      if (!(item.quantity <= 1)){
        dispatch(addCartItem({...item,quantity:-1}))
      }
    }

  return (
    <View style={styles.counterContainer}>
        <Pressable style={styles.buttonSusInc} onPress={()=> dispatch(addCartItem({...item,quantity:1})) }>
          <Text style={styles.text}>+</Text>
        </Pressable>
        <Text style={styles.text}>{item.quantity}</Text>
        <Pressable style={styles.buttonSusInc} onPress={handlerDecrement}>
          <Text style={styles.text}>-</Text>
        </Pressable>  
    </View>
  )
}

export default CounterCart

const styles = StyleSheet.create({
    counterContainer:{
        width:100,
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        margin:10
      },
      text:{
        width:50,
        textAlign:"center",
        color: colors.black
      },
      buttonSusInc: {
        backgroundColor: colors.lightBlue,
        width:"30%",
        padding:10,
        alignItems:"center",
        borderRadius:10
        
      }
})