import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import products from '../utils/data/products.json'
import { useEffect, useState, useContext } from 'react'
import colors from '../utils/globals/colors'
import { OrientationContext } from '../utils/globals/context';

const ProductDetail = ({route}) => {
  const {productId} = route.params
  const [product, setProduct] = useState({})
  const portrait = useContext(OrientationContext);

  useEffect(()=> {
    const productFinded = products.find(product => product.id === productId)
    setProduct(productFinded)
  }, [productId])
  return (
    <View style={styles.container}>
      <View style={[styles.content, !portrait && styles.contentLandscape]}>
        <Image
          style= {[styles.image, !portrait && styles.imageLandScape]}
          source= {{uri:product?.images ? product.images[0] : null}}
          resizeMode= 'contain'
        />
        <View style={[styles.containerText, !portrait && styles.containerTextLandscape]}>
          <Text style={styles.title}>{product.title}</Text>
          <Text>{product.description}</Text>
        </View>
        <View style={[styles.containerPrice, !portrait && styles.containerPriceLandscape]}>
          <Text style={styles.price}>$ {product.price}</Text>
          <Pressable style={styles.buyNow}>
            <Text style={styles.buyNowText}>Comprar Ahora</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default ProductDetail

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    width: '100%'
  },
  contentLandscape: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    marginVertical: 15
  },
  image: {
    width: '100%',
    height: 350
  },
  containerText:{
    gap: 25,
    paddingHorizontal: 5,
    paddingVertical: 25
  },
  backgroundImage: {
    width: '100%',
    height: 300,
    backgroundColor: 'white'
  },
  imageLandScape: {
    marginHorizontal: 20,
    width: 300,
    height: 300
  },
  goBack: {
    width: '100%',
    backgroundColor: colors.primary,
    padding: 10,
    paddingStart: 40
  },
  containerTextLandscape: {
    width: '30%',
    flexDirection: 'column'
  },
  containerText: {
    gap: 25,
    paddingHorizontal: 5,
    paddingVertical: 25
  },
  containerPriceLandscape: {
    width: '30%',
    flexDirection: 'column'
  },
  containerPrice: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  price: {
    fontSize: 30
  },
  buyNow: {
    backgroundColor: colors.primary,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5
  },
  buyNowText: {
    color: 'black',
  }
})