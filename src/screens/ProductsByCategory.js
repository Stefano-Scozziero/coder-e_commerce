import { FlatList, StyleSheet } from 'react-native'
import products from '../utils/data/products.json'
import { useEffect, useState } from 'react'
import ProductByCategory from '../components/ProductByCategory'
import Search from '../components/Search'

const ProductsByCategory = ({route, navigation}) => {
  const {categorySelected} = route.params
  const [productsFiltered, setProductsFiltered] = useState([])
  const [keyWord, setKeyWord] = useState("")

  const handlerKeyWord = (k) => {
    setKeyWord(k)
  }

  useEffect(() => {
    if (categorySelected) setProductsFiltered(products.filter(product => product.category === categorySelected))
    if (keyWord) setProductsFiltered(productsFiltered.filter(product => {
      const productTitleLower = product.title.toLowerCase()
      const keywordLower = keyWord.toLowerCase()
      
      return productTitleLower.includes(keywordLower)
    }))
  }, [categorySelected, keyWord])


  return (
    <>
      <Search handlerKeyWord={handlerKeyWord}/>
      <FlatList
        data={productsFiltered}
        keyExtractor={item => item.id}
        renderItem={({item}) => <ProductByCategory navigation={navigation} item={item}/>}
      
      />
    </>
  )
}

export default ProductsByCategory

const styles = StyleSheet.create({

})