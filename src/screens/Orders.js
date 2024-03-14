import { StyleSheet,FlatList, View } from 'react-native'
import orders from '../utils/data/orders.json'
import OrderItem from '../components/OrderItem'

const Orders = () => {
  return (
    <View style={styles.main}> 
       <FlatList
      data={orders}
      keyExtractor={(item)=>item.id}
      renderItem={({item})=> <OrderItem order={item}/>}
      />
    </View>
   
    
  )
}

export default Orders

const styles = StyleSheet.create({
  main: {
    height: '100%'
  }
})