
import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from './TabNavigator'
import AuthStack from './AuthStack'
import { useSelector } from 'react-redux'
import { OrientationContext } from '../utils/globals/context'
import { useContext } from 'react'



const MainNavigator = () => {

    const portrait = useContext(OrientationContext)

    const user = useSelector((state) => state.auth)
    
  return (
    <NavigationContainer >
        {user.idToken ? <TabNavigator portrait={portrait}/> : <AuthStack/>}
    </NavigationContainer>
  )
}

export default MainNavigator