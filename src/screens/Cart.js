import { StyleSheet, Text, View, FlatList, Pressable, ImageBackground } from 'react-native'
import CartItem from '../components/presentational/CartItem'
import fonts from '../utils/globals/fonts'
import colors from '../utils/globals/colors'
import { useSelector,useDispatch} from 'react-redux'
import { usePostOrderMutation } from '../app/services/orders'
import { deleteCart } from '../features/cart/cartSlice'
import { useContext} from 'react';
import { OrientationContext } from '../utils/globals/context';

const Cart = ({navigation}) => {

    const dispatch = useDispatch()
    const cart = useSelector((state)=> state.cart)
    const localId = useSelector((state)=> state.auth.localId)
    const [triggerAddOrder] = usePostOrderMutation()
    const portrait = useContext(OrientationContext);

    const handlerAddOrder = async () => {
        const createdAt = new Date().toLocaleString()
        const order = {
            createdAt,
            ...cart
        }
         await triggerAddOrder({localId,order})
         dispatch(deleteCart())
         navigation.navigate("OrdersStack")
    }
    
  return (
    <View style={[styles.container, !portrait && styles.containerLandScape]}>
        <View style={[styles.flatList, !portrait && styles.flatListLandScape]} >
            <FlatList
            data={cart.items}
            keyExtractor={(item)=>item.id}
            renderItem={({item})=> <CartItem item={item} portrait={portrait}/>}
            />
        </View> 
        <View style={[styles.confirmContainer, !portrait && styles.confirmLandScape]}>
            <Pressable style={styles.confirm} onPress={handlerAddOrder}>
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
        justifyContent:"space-between"
    },
    containerLandScape:{
        flexDirection: 'row',
        justifyContent:'center',

    },
    confirmLandScape:{
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 35,
        right: 35
    },
    confirmContainer:{
        flexDirection:"row",
        borderColor: colors.lightBlue,
        borderWidth: 1,
        padding:25,
        marginHorizontal: 20,
        bottom: 120,
        justifyContent:"space-between",
        borderRadius: 15,
        alignItems: 'center'
    },
    confirmLandScape:{
        flexDirection:"column",
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 35,
        padding:0,
        marginHorizontal: 0,
        borderColor: colors.lightBlue,
        borderWidth: 0,
    },
    confirmText:{
        fontFamily:fonts.PlayfairDisplaySCRegular,
        fontSize:18,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    confirm: {
        backgroundColor: colors.lightBlue,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    flatList: {
        height: '70%'
    },
    flatListLandScape: {
        width: '65%',
    },
})