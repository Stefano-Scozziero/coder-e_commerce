import { StyleSheet, Text, View ,Pressable, ImageBackground, Image } from 'react-native'
import InputForm from '../components/InputForm'
import SubmitButton from '../components/SubmitButton'
import {useState} from 'react'
import fonts from '../utils/globals/fonts'
import { useLoginMutation } from '../app/services/auth'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/auth/authSlice'
import SubmitButtonbgn from '../components/SubmitButtonbgn'

const Login = ({navigation}) => {

    const dispatch = useDispatch()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [triggerLogin] = useLoginMutation()

    const onSubmit = async () => {
        const {data} = await  triggerLogin({email,password})
        dispatch(setUser({email:data.email,idToken:data.idToken}))
     }

  return (
        <ImageBackground style={styles.main} source={require("../../assets/fondodefinitivo.png")}>
            <Image source={require('../../assets/logo.png')} style={styles.image} resizeMode='contain'/>
            <Text style={styles.title}>PRODESCO</Text>
            <View style={styles.container}>
              <InputForm
                  label="Email"
                  value={email}
                  onChangeText={(t) => setEmail(t)}
                  isSecure={false}
                  error=""
              />
              <InputForm
                  label="Password"
                  value={password}
                  onChangeText={(t) => setPassword(t)}
                  isSecure={true}
                  error=""
              />
              <SubmitButton onPress={onSubmit} title="INICIAR SESION"/>
              <SubmitButtonbgn onPress={()=> navigation.navigate("Register")} title="REGISTRESE AQUI"/>
            </View>
        </ImageBackground>
  )
}

export default Login

const styles = StyleSheet.create({
    main:{
      flex:1,
      justifyContent:"center",
      alignItems:"center"
    },
    container:{
      width:"70%",
      gap:15,
      borderRadius:10,
      justifyContent:"center",
      alignItems:"center",
      bottom: 50
    },
    title:{
      fontFamily:fonts.russoOne,
      fontSize:55,
      color: 'white',
      bottom: 80
    },
    image: {
      width: '100%',
      height: 120,
      bottom: 100
    }
})