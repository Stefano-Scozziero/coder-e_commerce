import { Pressable, StyleSheet, Text, Image, ImageBackground } from 'react-native'
import ShadowPrimary from '../wrappers/ShadowPrimary'
import fonts from '../../utils/globals/fonts'

const CardCategories = ({item, navigation}) => {
  return (

      <Pressable onPress={() => navigation.navigate("ProductsByCategory", {categorySelected:item.title})}>
        <ShadowPrimary style={styles.container}>
          <ImageBackground source={{uri:item.thumbnail}} style={styles.background}>
            <Text style={styles.text}>{item.title}</Text>
          </ImageBackground>
        </ShadowPrimary>
      </Pressable>
    
  )
}

export default CardCategories

const styles = StyleSheet.create({

    container: {
        width: '80%',
        height: 170,
        marginHorizontal: '10%',
        marginVertical: 10,
        alignItems: 'center',
        borderRadius: 5,
        overflow: 'hidden'
    },
    text: {
        fontSize: 30,
        fontFamily: fonts.robotoBold,
        color: 'white'
    },
    background: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      alignItems: 'center',
      justifyContent: 'center'
    }
})