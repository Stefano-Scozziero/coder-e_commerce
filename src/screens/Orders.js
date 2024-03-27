import { StyleSheet,FlatList, View } from 'react-native'
import OrderItem from '../components/OrderItem'
import { useSelector } from 'react-redux'
import { useGetOrdersQuery } from '../app/services/orders'
import { OrientationContext } from '../utils/globals/context'
import { useContext } from 'react'

const Orders = () => {
  const portrait = useContext(OrientationContext)
  const localId = useSelector((state) => state.auth.localId)
  const {data:orders} = useGetOrdersQuery(localId)
  return (
    <View style={[styles.flatList, !portrait && styles.flatListLandscape]}>
      <FlatList
        data={orders}
        keyExtractor={(item)=>item.id}
        renderItem={({item})=> <OrderItem order={item} portrait={portrait}/>}
      />
    </View>
      
  )
}

export default Orders

const styles = StyleSheet.create({
  
    flatList: {
        height: '82%'
    },
    flatListLandscape: {
      height: '65%'
    },
})