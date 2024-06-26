import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Orders from '../screens/Orders'
import Header from '../components/presentational/Header'

const Stack = createNativeStackNavigator()

const OrdersStack = () => {
  return (
    <Stack.Navigator
        initialRouteName='Orders'
        screenOptions={({navigation})=>{
            return {
                header: () => {
                    return <Header title='Ordenes' navigation={navigation}/> 
                }
            }
        }}
    >
        <Stack.Screen name='Orders' component={Orders}/>
    </Stack.Navigator>
  )
}

export default OrdersStack