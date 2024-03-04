import { FlatList, StyleSheet, View, Text, ImageBackground } from 'react-native'
import { useEffect, useState } from 'react'
import ProductByCategory from '../components/ProductByCategory'
import Search from '../components/Search'
import { useGetProductsByCategoryQuery } from '../app/services/shop'

const ProductsByCategory = ({route, navigation}) => {
  const {categorySelected} = route.params
  const {data:products,isError,isLoading,isSuccess,error} = useGetProductsByCategoryQuery(categorySelected)
  const [productsFiltered,setProductsFiltered] = useState([])
  const [keyword,setKeyword] = useState("")

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

  if(isLoading) return  <ImageBackground style={styles.main} source={require("../../assets/fondodefinitivo.png")}><Text>Cargando...</Text></ImageBackground> 


  return (
    <>
      <ImageBackground style={styles.main} source={require("../../assets/fondodefinitivo.png")}>
      <Search handlerKeyword={handlerKeyword}/>
      <View style={styles.view}>
        <FlatList
          data={productsFiltered}
          keyExtractor={item => item.id}
          renderItem={({item}) => <ProductByCategory navigation={navigation} item={item}/>}
        
        />
      </View>
      </ImageBackground> 
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
    }
})