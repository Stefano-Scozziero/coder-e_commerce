import { View, StyleSheet } from 'react-native'
import Categories from '../components/logical/Categories'


const Home = ({navigation}) => {
  return (
    <>
      <View style={styles.main}>
        <Categories navigation={navigation}/>
      </View>
      
    </>

  )
}

export default Home

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%'
  }
})