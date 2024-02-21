import { StyleSheet, Text, View, Platform, StatusBar, Pressable } from 'react-native'
import colors from '../utils/globals/colors'
import {AntDesign} from '@expo/vector-icons'

const Header = ({title= "Ecommerce", navigation}) => {
  return <View style={styles.container}>
          {navigation.canGoBack() &&
          <Pressable style={styles.goBack} onPress={() => navigation.goBack()}>
            <AntDesign name='arrowleft' size={30} color="black"/>
          </Pressable>}
          <Text style={styles.text}>{title}</Text>
          <Pressable style={styles.goCart} onPress={() => navigation.navigate("ShoppingCart")}>
            <AntDesign name='shoppingcart' size={30} color="black"/>
          </Pressable>
         </View>
  
}

export default Header

const styles = StyleSheet.create({

    container:{
      backgroundColor: colors.primary,
      height: 90,
      paddingTop:30,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative'
        
    },
    text: {
      fontSize: 30
    },
    goBack: {
      position: 'absolute',
      left: 15,
      bottom: 13

    },
    goCart: {
      position: 'absolute',
      right: 30,
      bottom: 13

    }
})