import { StyleSheet,FlatList, ImageBackground } from 'react-native'
import orders from '../utils/data/orders.json'
import OrderItem from '../components/OrderItem'

const Orders = () => {
  return (
    <ImageBackground style={styles.main} source={require("../../assets/fondodefinitivo.png")}> 
       <FlatList
      data={orders}
      keyExtractor={(item)=>item.id}
      renderItem={({item})=> <OrderItem order={item}/>}
      />
    </ImageBackground>
   
    
  )
}

export default Orders

const styles = StyleSheet.create({
  main: {
    height: '100%'
  }
})