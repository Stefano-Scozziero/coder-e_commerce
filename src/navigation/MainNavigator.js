
import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from './TabNavigator'
import AuthStack from './AuthStack'
import { useSelector } from 'react-redux'



const MainNavigator = ({portrait}) => {

    const user = useSelector((state) => state.auth)

  return (
    <NavigationContainer>
        {user.idToken ? <TabNavigator portrait= {portrait}/> : <AuthStack/>}
    </NavigationContainer>
  )
}

export default MainNavigator