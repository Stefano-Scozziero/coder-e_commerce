import { StyleSheet,View,Image } from 'react-native'
import AddButton from '../components/AddButton'
import { useGetImageQuery } from '../app/services/profile'
import { OrientationContext } from '../utils/globals/context'
import { useContext } from 'react'
import DeleteButton from './DeleteButton'
import { useDispatch, useSelector } from "react-redux"
import { clearUser } from "../features/auth/authSlice"
import { deleteSession } from "../utils/db"


const Profile = ({navigation}) => {

  const localId = useSelector((state) => state.auth.localId)
  const {data} = useGetImageQuery(localId)
  const portrait = useContext(OrientationContext)
  const dispatch = useDispatch()
  const idToken = useSelector((state) => state.auth.idToken)

  const onLogout = () => {
      dispatch(clearUser())
      deleteSession()
  }

  return (
    <View style={[styles.main, !portrait && styles.mainLandScape]}>
        <View style={[styles.container, !portrait && styles.containerLandScape]}>
            <Image
                source={data ? {uri:data.image}:require("../../assets/usuario.png")}
                style={[styles.image, !portrait && styles.imageLandScape]}
                resizeMode='cover'
            />
            <View style={[styles.Button, !portrait && styles.ButtonLandScape]}>
                <AddButton title={"Agregar Imagen de perfil"} onPress={()=> navigation.navigate("ImageSelector")}/>
                {idToken && (<DeleteButton title={"Cerrar Sesion"} onPress={onLogout}/>)}
            </View>
        </View>  
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    main:{
        flex: 1
    },
    mainLandScape:{
        flexDirection: 'row'
    },
    container:{
        flex: 1,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: '5%',
    },
    containerLandScape:{
        flexDirection: 'row',
        marginTop: 0,
    },
    image:{
        width: 200,
        height: 200,
        marginVertical: 40
    },
    imageLandScape:{
        width: 150,
        height: 150,
        bottom: '4%'
    },
    Button:{
        marginTop: 20,
        alignItems: 'center',
        bottom: '5%',
        width: 300
    },
    ButtonLandScape:{
        flexDirection: 'column',
        marginTop: 0,
        bottom: '3%'
    },
    
})