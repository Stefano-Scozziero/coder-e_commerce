import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import CartItem from '../components/CartItem'
import fonts from '../utils/globals/fonts'
import colors from '../utils/globals/colors'
import { useSelector } from 'react-redux'

const Cart = () => {

    const cart = useSelector((state) => state.cart)
  return (
    <View style={styles.container}>
        
        <FlatList
        data={cart.items}
        keyExtractor={(item)=>item.id}
        renderItem={({item})=> <CartItem item={item}/>}
        />
        <View style={styles.confirmContainer}>
            <Pressable style={styles.confirm}>
                <Text style={styles.confirmText}>Confirmar</Text>
            </Pressable>
            <Text style={styles.confirmText}>Total: $ {cart.total}</Text>
        </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"space-between",
        marginBottom:130
    },
    confirmContainer:{
        flexDirection:"row",
        backgroundColor:colors.primary,
        padding:25,
        justifyContent:"space-between",
    },
    confirmText:{
        fontFamily:fonts.PlayfairDisplaySCRegular,
        fontSize:18
    },
    confirm: {
        backgroundColor: colors.gray,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5
      },
})