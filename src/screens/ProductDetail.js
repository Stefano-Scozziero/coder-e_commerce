import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import { useContext } from 'react'
import colors from '../utils/globals/colors'
import { OrientationContext } from '../utils/globals/context';
import Counter from '../components/presentational/Counter';
import { useGetProductQuery } from '../app/services/shop'
import LoadingSpinner from '../components/presentational/LoadingSpinner';
import EmptyListComponent from '../components/presentational/EmptyListComponent';
import Error from '../components/presentational/Error';


const ProductDetail = ({navigation, route}) => {
  const {productId} = route.params
  const portrait = useContext(OrientationContext);
  const {data:product, isLoading, isError, isSuccess} = useGetProductQuery(productId)
  
  
  if(isLoading) return <LoadingSpinner/>
  if(isError) return <Error message="¡Ups! Algo salió mal." textButton="Volver" onRetry={()=>navigation.goBack()}/>
  if(isSuccess && product === null) return <EmptyListComponent message="El detalle del producto no esta disponible"/>

  return (
    <>
    <View style={styles.container} >
      <View style={[styles.content, !portrait && styles.contentLandscape]}>
        <Image
          style= {[styles.image, !portrait && styles.imageLandScape]}
          source= {{uri:product?.images ? product.images[0] : null}}
          resizeMode= 'stretch'
        />
        <View style={[styles.containerText, !portrait && styles.containerTextLandscape]}>
          <Text style={styles.title}>{product.title}</Text>
          <Text>{product.description}</Text>
        </View>
        <View style={[styles.containerPrice, !portrait && styles.containerPriceLandscape]}>
          <Text style={styles.price}>$ {product.price}</Text>
          <Counter 
            initialValue={1} 
            product={product} 
            textButton="Agregar"
            navigation={navigation}/>
        </View>
      </View>
    </View>
      
    </>
    
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
  main: {
    height: '100%'
  },
  contentLandscape: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    marginHorizontal: 10
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
    marginHorizontal: 10,
    marginTop:10,
    width: 250,
    height: 250
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