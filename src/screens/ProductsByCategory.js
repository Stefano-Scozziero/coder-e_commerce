import { FlatList, StyleSheet, View, Text } from 'react-native'
import { useEffect, useState, useContext } from 'react'
import ProductByCategory from '../components/presentational/ProductByCategory'
import Search from '../components/presentational/Search'
import { useGetProductsByCategoryQuery } from '../app/services/shop'
import { OrientationContext } from '../utils/globals/context'
import LoadingSpinner from '../components/presentational/LoadingSpinner'
import EmptyListComponent from '../components/presentational/EmptyListComponent'
import Error from '../components/presentational/Error'

const ProductsByCategory = ({route, navigation}) => {
  const {categorySelected} = route.params
  const {data:products,isError,isLoading,isSuccess,error} = useGetProductsByCategoryQuery(categorySelected)
  const [productsFiltered,setProductsFiltered] = useState([])
  const [keyword,setKeyword] = useState("")
  const portrait = useContext(OrientationContext)

  const handlerKeyword = (k) => {
    setKeyword(k)
  }

  useEffect(()=>{
   setProductsFiltered(products)
   if(keyword) setProductsFiltered(products.filter(product => {
    const productTitleLower = product.title.toLowerCase()
    const keywordLower = keyword.toLowerCase()
    return productTitleLower.includes(keywordLower)
  }))
  },[categorySelected,keyword,products])

  if(isLoading) return <LoadingSpinner/>
  if(isError) return <Error message="¡Ups! Algo salió mal." textButton="Volver" onRetry={()=>navigation.goBack()}/>
  if(isSuccess && products.length === 0) return <EmptyListComponent message="El producto no esta disponible"/>


  return (
    <>
      <View style={styles.main}>
      <Search handlerKeyword={handlerKeyword}/>
      <View style={[styles.view, !portrait && styles.viewLandScape]}>
        <FlatList
          data={productsFiltered}
          keyExtractor={item => item.id}
          renderItem={({item}) => <ProductByCategory portrait={portrait} navigation={navigation} item={item}/>}
        
        />
      </View>
      </View> 
    </>
  )
}

export default ProductsByCategory

const styles = StyleSheet.create({
    main: {
      height: '100%'
    },
    view: {
      height: '80%'
    },
    viewLandScape: {
      height: '58%'
    }
})