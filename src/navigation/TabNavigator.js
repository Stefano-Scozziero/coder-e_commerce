import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import ShopStack from './ShopStack'
import CartStack from './CartStack'
import OrdersStack from './OrdersStack'
import TabBarIcon from '../components/presentational/TapBarIcon';
import colors from '../utils/globals/colors';
import ProfileStack from './ProfileStack';

const Tab = createBottomTabNavigator();

const TabNavigator = ({portrait}) => {
    
  return (
    
            <Tab.Navigator
            initialRouteName='ShopStack'
            screenOptions={{
                headerShown:false,
                tabBarShowLabel:false,
                tabBarStyle: [styles.tabBar, !portrait && styles.tabBarLandScape]

            }}>
                
                <Tab.Screen
                name='ShopStack'
                component={ShopStack}
                options={{
                    tabBarIcon: ({focused}) => 
                    <TabBarIcon title="Productos" nameIcon="home" focused={focused}/>
                }}
                />
                <Tab.Screen 
                    name='CartStack' 
                    component={CartStack}
                    options={{
                        tabBarIcon: ({focused}) => 
                        <TabBarIcon title="Carrito" nameIcon="shopping-cart" focused={focused}/>
                    }}

                />
                <Tab.Screen 
                    name='OrdersStack' 
                    component={OrdersStack}
                    options={{
                        tabBarIcon: ({focused}) => <TabBarIcon title="Ordenes" nameIcon="list" focused={focused}/>
                    }}
                />
                <Tab.Screen 
                    name='ProfileStack' 
                    component={ProfileStack}
                    options={{
                        tabBarIcon: ({focused}) => <TabBarIcon title="Perfil" nameIcon="user" focused={focused}/>
                    }}
                />
           </Tab.Navigator>
  )
}

export default TabNavigator

const styles = StyleSheet.create({
    tabBar:{
        backgroundColor:colors.lightBlue,
        height:80,
        position:"absolute",
        marginHorizontal: 20,
        bottom:20,
        borderRadius:15,
        elevation:4,
        /*Shadow IOS*/
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62, 
    },
    tabBarLandScape:{
      backgroundColor:colors.lightBlue,
      height:60,
      position:"absolute",
      marginHorizontal: 40,
      bottom:10,
      borderRadius:15,
      elevation:4,
      /*Shadow IOS*/
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62, 
  }
})