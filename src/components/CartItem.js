import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import {Entypo} from '@expo/vector-icons'
import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'
import { useDispatch } from 'react-redux'
import { deleteCartItem } from '../features/cart/cartSlice'
import CounterCart from './CounterCart'

const CartItem = ({item}) => {
    const dispatch = useDispatch()

  return (
        <View style={styles.card}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{item.title}</Text>
                <Text style={styles.text2}>{item.brand}</Text>
                <CounterCart item={item} />
                <Text style={styles.text2}>Precio por unidad: ${item.price} </Text>
            </View>
            <View style={styles.containerImage}>
                <Image style= {styles.image} source={{uri:item.thumbnail}} resizeMode='cover'/>
                <Pressable onPress={()=> dispatch(deleteCartItem(item.id))}>
                    <Entypo name="trash" size={30} color="red"/>
                </Pressable>
            </View>
            
            
        </View>
  )
}

export default CartItem

const styles = StyleSheet.create({
    card:{
        backgroundColor:colors.primary,
        padding:20,
        margin:10,
        borderWidth:2,
        borderRadius:10,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    textContainer:{
        width:"70%"
    },
    text:{
        color:colors.black,
        fontSize:19,
        fontFamily:fonts.robotoBold
    },
    text2:{
        color:colors.black,
        fontSize:14,
        fontFamily:fonts.robotoBold
    },
    containerImage:{
        flexDirection: 'row',
        alignItems: 'center',
        right: 20
    },
    image: {
        minWidth: 90,
        minHeight: 90,
        right:50,
        width: '30%',
        borderRadius: 5
    }
})