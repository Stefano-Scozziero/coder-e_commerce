import { FlatList, StyleSheet, View} from 'react-native'
import { useGetCategoriesQuery } from '../app/services/shop'
import CardCategories from './CardCategories'
import { useContext} from 'react';
import { OrientationContext } from '../utils/globals/context';

const Categories = ({navigation}) => {

  const {data:categories} = useGetCategoriesQuery()
  const portrait = useContext(OrientationContext);
  
  return (
    <View style={[!portrait && styles.flatList]}>
      <FlatList
        data={categories}
        keyExtractor={item => item}
        renderItem={({item}) => <CardCategories navigation={navigation} item={item}/>}
      />
    </View>
      
    
  )
}

export default Categories

const styles = StyleSheet.create({
  flatList: {
    height: '60%'
  }
})