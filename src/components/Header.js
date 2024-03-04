import { StyleSheet, Text, View, Pressable } from 'react-native'
import colors from '../utils/globals/colors'
import {AntDesign} from '@expo/vector-icons'

const Header = ({title= "Ecommerce", navigation}) => {
  return <View style={styles.container}>
          {navigation.canGoBack() &&
          <Pressable style={styles.goBack} onPress={() => navigation.goBack()}>
            <AntDesign name='arrowleft' size={30} color="white"/>
          </Pressable>}
          <Text style={styles.text}>{title}</Text>
          
         </View>
  
}

export default Header

const styles = StyleSheet.create({

    container:{
      backgroundColor: colors.black,
      height: 90,
      paddingTop:30,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative'
        
    },
    text: {
      fontSize: 30,
      color:colors.lightGray
    },
    goBack: {
      position: 'absolute',
      left: 15,
      bottom: 13

    }
})