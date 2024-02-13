import { StyleSheet, StatusBar, SafeAreaView, Platform, useWindowDimensions } from 'react-native'
import Home from './src/screens/Home'
import ProductDetail from './src/screens/ProductDetail'
import ProductsByCategory from './src/screens/ProductsByCategory'
import { useEffect, useState } from 'react'
import { useFonts } from 'expo-font'
import { fontsCollections } from './src/utils/globals/fonts'



const App = () => {

  const [fontsLoaded] = useFonts(fontsCollections)
  const [categorySelected, setCategorySelected] = useState("")
  const [productId, setProductId] = useState(0)
  const {width, height} = useWindowDimensions()
  const [portrait, setPortrait] = useState(true)

  useEffect(()=> {
    if (width > height) setPortrait(false) 
    else setPortrait(true)
  }, [width, height])

  if(!fontsLoaded) return null

  const selectedCategoryState = (category) => {
    setCategorySelected(category)
  }

  const selectedProductId = (id) => {
    setProductId(id)
  }

  return (
    <>
      <StatusBar/>
      <SafeAreaView style={styles.container}>
        {categorySelected ?
          productId ?
            <ProductDetail
              productId = {productId}
              portrait= {portrait}
            />
            :
            <ProductsByCategory 
              selectedProductId= {selectedProductId}
              categorySelected={categorySelected}
            /> 
          : 
          <Home 
            selectedCategoryState={selectedCategoryState}
          />
        }
      </SafeAreaView>
    </>
    
      
    
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})