import { StyleSheet, Text, View } from 'react-native'
import {Entypo} from '@expo/vector-icons'
import colors from '../utils/globals/colors'

const TabBarIcon = ({title, nameIcon, focused, portrait}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.iconContainer, !portrait && styles.iconContainerLandscape]}>
        <Entypo name={nameIcon} size={25} color={focused ? colors.black:colors.white}/>  
        <Text style={[styles.text, !focused && styles.textFocused]} >{title}</Text>
      </View>
    </View>
  )
}

export default TabBarIcon

const styles = StyleSheet.create({

  container:{
    alignItems: 'center'
  },
  iconContainer:{
    alignItems: 'center'
  },
  iconContainerLandscape:{
    justifyContent: 'center',
    alignItems: 'center',
    width: 100
  },
  text:{
    color:colors.black,
    textAlign:"center",
    fontSize:15
  },
  textFocused:{
    color: colors.white
}

})
