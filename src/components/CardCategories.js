import { Pressable, StyleSheet, Text } from 'react-native'
import ShadowPrimary from './wrappers/ShadowPrimary'
import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'

const CardCategories = ({item, navigation}) => {
  return (

      <Pressable onPress={() => navigation.navigate("ProductsByCategory", {categorySelected:item})}>
        <ShadowPrimary style={styles.container}>
          <Text style={styles.text}>{item}</Text>
        </ShadowPrimary>
      </Pressable>
    
  )
}

export default CardCategories

const styles = StyleSheet.create({

    container: {
        width: '80%',
        backgroundColor: colors.lightBlue,
        marginHorizontal: '10%',
        marginVertical: 10,
        padding: 20,
        alignItems: 'center',
        borderRadius: 5
    },
    text: {
        fontSize: 16,
        fontFamily: fonts.robotoBold,
        color: 'black'
    }
})