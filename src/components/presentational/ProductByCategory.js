import { StyleSheet, Text, Image, Pressable } from 'react-native'
import colors from '../../utils/globals/colors'
import fonts from '../../utils/globals/fonts'

const ProductByCategory = ({item, navigation, portrait}) => {

  return (
    <Pressable onPress={() => navigation.navigate("ProductDetail", {productId:item.id})} style={[styles.container, !portrait && styles.containerLandScape]}>
        <Image style={[styles.image, !portrait && styles.imageLandScape]} source={{uri:item.thumbnail}}/>
        <Text style= {styles.text}> {item.title}</Text>
    </Pressable>
  )
}

export default ProductByCategory

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.lightBlue,
        width: '90%',
        marginHorizontal: '5%',
        padding: 10,
        marginVertical: 10,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },
    containerLandScape: {
        flex: 1,
        height: 70,
        marginVertical: 5,
    },
    text: {
        width: '60%',
        fontSize: 16,
        fontFamily: fonts.robotoBold
    },
    image: {
        minWidth: 100,
        minHeight: 100,
        width: '30%',
        borderRadius: 5,
        resizeMode: 'stretch'
    },
    imageLandScape: {
        minWidth: 25,
        minHeight: 25,
        width: 100,
        height: 60,
        borderRadius: 5,
        resizeMode: 'stretch'
    }
})