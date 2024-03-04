import { StyleSheet, Text, View, FlatList, Pressable, ImageBackground } from 'react-native'
import CartItem from '../components/CartItem'
import fonts from '../utils/globals/fonts'
import colors from '../utils/globals/colors'
import { useSelector } from 'react-redux'

const Cart = () => {

    const cart = useSelector((state) => state.cart)
  return (
    <ImageBackground style={styles.container} source={require("../../assets/fondodefinitivo.png")}>
        <View style={styles.flatList} >
            <FlatList
            style={styles.flatList}
            data={cart.items}
            keyExtractor={(item)=>item.id}
            renderItem={({item})=> <CartItem item={item}/>}
            />
        </View> 
        <View style={styles.confirmContainer}>
                <Pressable style={styles.confirm}>
                    <Text style={styles.confirmText}>Confirmar</Text>
                </Pressable>
                <Text style={styles.confirmText}>Total: $ {cart.total}</Text>
            </View>
    </ImageBackground>
  )
}

export default Cart

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"space-between"
    },
    confirmContainer:{
        flexDirection:"row",
        borderColor: colors.orangeLight,
        borderWidth: 1,
        padding:25,
        bottom: 120,
        justifyContent:"space-between",
        borderRadius: 5,
        alignItems: 'center'
    },
    confirmText:{
        fontFamily:fonts.PlayfairDisplaySCRegular,
        fontSize:18,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    confirm: {
        backgroundColor: colors.orangeLight,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    flatList: {
        height: '75%'
    },
})