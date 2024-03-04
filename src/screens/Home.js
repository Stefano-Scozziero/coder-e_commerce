import { ImageBackground, StyleSheet } from 'react-native'
import Categories from '../components/Categories'


const Home = ({navigation}) => {
  return (
    <>
      <ImageBackground style={styles.main} source={require("../../assets/fondodefinitivo.png")}>
        <Categories navigation={navigation}/>
      </ImageBackground>
      
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