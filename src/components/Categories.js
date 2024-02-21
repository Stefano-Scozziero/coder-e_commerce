import { FlatList, StyleSheet} from 'react-native'
import categories from '../utils/data/categories.json'
import CardCategories from './CardCategories'

const Categories = ({navigation}) => {
  return (
      <FlatList
        data={categories}
        keyExtractor={item => item}
        renderItem={({item}) => <CardCategories navigation={navigation} item={item}/>}
      />
    
  )
}

export default Categories