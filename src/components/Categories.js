import { FlatList} from 'react-native'
import { useGetCategoriesQuery } from '../app/services/shop'
import CardCategories from './CardCategories'

const Categories = ({navigation}) => {

  const {data:categories} = useGetCategoriesQuery()

  return (
      <FlatList
        data={categories}
        keyExtractor={item => item}
        renderItem={({item}) => <CardCategories navigation={navigation} item={item}/>}
      />
    
  )
}

export default Categories