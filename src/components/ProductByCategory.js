import { StyleSheet, Text, Image, Pressable } from 'react-native'
import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'

const ProductByCategory = ({item, navigation}) => {

  return (
    <Pressable onPress={() => navigation.navigate("ProductDetail", {productId:item.id})} style= {styles.container}>
        <Image style= {styles.image} source={{uri:item.thumbnail}} resizeMode='cover'/>
        <Text style= {styles.text}> {item.title}</Text>
    </Pressable>
  )
}

export default ProductByCategory

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        width: '90%',
        marginHorizontal: '5%',
        padding: 10,
        marginVertical: 10,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },
    text: {
        width: '60%',
        fontSize: 16,
        fontFamily: fonts.robotoBold
    },
    image: {
        minWidth: 90,
        minHeight: 90,
        width: '30%',
        borderRadius: 5
    }
})