import { FlatList, StyleSheet, View} from 'react-native'
import { useGetCategoriesQuery } from '../../app/services/shop'
import CardCategories from '../presentational/CardCategories'
import { useContext} from 'react';
import { OrientationContext } from '../../utils/globals/context';
import LoadingSpinner from '../presentational/LoadingSpinner';
import EmptyListComponent from '../presentational/EmptyListComponent';
import Error from '../presentational/Error';

const Categories = ({navigation}) => {

  const {data:categories, isLoading, isError, isSuccess} = useGetCategoriesQuery()
  const portrait = useContext(OrientationContext);

  if(isLoading) return <LoadingSpinner/>
  if(isError) return <Error message="¡Ups! Algo salió mal." textButton="Recargar" onRetry={onRetry}/>
  if(isSuccess && categories === null) return <EmptyListComponent message="Las categorias no estan disponibles"/>
  
  const onRetry = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    })
  }

  return (
    <View style={[styles.flatList, !portrait && styles.flatListLandScape]}>
      <FlatList
        data={categories}
        keyExtractor={item => item.title}
        renderItem={({item}) => <CardCategories navigation={navigation} item={item}/>}
      />
    </View>
      
    
  )
}

export default Categories

const styles = StyleSheet.create({
  flatListLandScape: {
    height: '60%'
  },
  flatList: {
    height: '87%'
  }
})