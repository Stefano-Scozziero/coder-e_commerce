import { StyleSheet, Text, View, Pressable, StatusBar, Platform } from 'react-native'
import colors from '../../utils/globals/colors'
import {AntDesign} from '@expo/vector-icons'
import { OrientationContext } from '../../utils/globals/context'
import { useContext } from 'react'

const Header = ({title= "Ecommerce", navigation}) => {

  const portrait = useContext(OrientationContext)

  return <View style={[styles.container, !portrait && styles.containerLandScape]}>
          {navigation.canGoBack() &&
          <Pressable style={[styles.goBack, !portrait && styles.goBackLandScape]} onPress={() => navigation.goBack()}>
            <AntDesign name='arrowleft' size={30} color="white"/>
          </Pressable>}
          <Text style={[styles.text, !portrait && styles.textLandScape]}>{title}</Text>
         </View>
  
}

export default Header

const styles = StyleSheet.create({

    container:{
      backgroundColor: colors.lightBlue,
      height: 90,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      
    },
    containerLandScape:{
      height: 70,
    },
    text: {
      fontSize: 30,
      color:colors.black
    },
    textLandScape: {
      bottom: 13
    },
    goBack: {
      position: 'absolute',
      left: 15,
      bottom: 9
    },
    goBackLandScape: {
      bottom: 8

    }
})
