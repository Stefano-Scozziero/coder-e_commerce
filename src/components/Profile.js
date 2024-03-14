import { StyleSheet, Text, View,Image } from 'react-native'
import AddButton from '../components/AddButton'
import { useSelector } from 'react-redux'
import { useGetImageQuery } from '../app/services/profile'


const Profile = ({navigation}) => {
  const localId = useSelector((state) => state.auth.localId)
  const {data} = useGetImageQuery(localId)
  return (
    <View style={styles.main}>
        <View style={styles.container}>
        <Image
            source={data ? {uri:data.image}:require("../../assets/usuario.png")}
            style={styles.image}
            resizeMode='cover'
        />
        <AddButton title={"Agregar Imagen de perfil"} onPress={()=> navigation.navigate("ImageSelector")}/>
        </View>  
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    main:{
        flex: 1
    },
    container:{
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image:{
        width: 200,
        height: 200
    }
})