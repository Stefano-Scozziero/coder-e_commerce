import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/Login'
import Register from '../screens/Register'
import ForgotYourPass from '../components/presentational/ForgotYourPass'

const Stack = createNativeStackNavigator()

const AuthStack = () => {
  return (
    <Stack.Navigator
        initialRouteName='Login'
        
        screenOptions={({navigation,route})=>{
          
            return {
                header: () => {}
            }
        }}
    >
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Register' component={Register} />
        <Stack.Screen name='ForgotYourPass' component={ForgotYourPass} />
    </Stack.Navigator>
  )
}

export default AuthStack