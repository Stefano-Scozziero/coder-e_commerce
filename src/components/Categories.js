import { FlatList, StyleSheet, View } from 'react-native'
import categories from '../utils/data/categories.json'
import CardCategories from './CardCategories'

const Categories = ({selectedCategoryState}) => {
  return (
    <>
        <FlatList
        data={categories}
        keyExtractor={item => item}
        renderItem={({item}) => <CardCategories item={item} selectedCategoryState={selectedCategoryState}/>}
      />
    </>
    
  )
}

export default Categories

const styles = StyleSheet.create({})