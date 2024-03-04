import { StyleSheet, Text, View, Pressable, ImageBackground } from 'react-native'
import InputForm from '../components/InputForm'
import SubmitButton from '../components/SubmitButton'
import {useState} from 'react'
import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'
import { useRegisterMutation } from '../app/services/auth'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/auth/authSlice'

const Register = ({navigation}) => {

    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [triggerRegister] = useRegisterMutation()


    const onSubmit = async () => {
       const {data} = await  triggerRegister({email,password})
       dispatch(setUser({email:data.email,idToken:data.idToken}))
    }

  return (
    <ImageBackground style={styles.main} source={require("../../assets/fondodefinitivo.png")}>
      <Text style={styles.title}>REGISTRO</Text>
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
                    error = ""
                />
                <InputForm
                    label="Confirmar Password"
                    value={confirmPassword}
                    onChangeText={(t) => setConfirmPassword(t)}
                    isSecure={true}
                    error=""
                />
                <SubmitButton onPress={onSubmit} title="CREAR CUENTA"/>
                <Text style={styles.sub}>ya tenes una cuenta?</Text>
                <Pressable onPress={()=> navigation.navigate("Login")} >
                    <Text style={styles.subLink}>Incio de sesion</Text>
                </Pressable>
            </View>
    </ImageBackground>
  )
}

export default Register

const styles = StyleSheet.create({
    main:{
      flex:1,
      justifyContent:"center",
      alignItems:"center"
    },
    container:{
      width:"90%",
      gap:15,
      borderRadius:10,
      justifyContent:"center",
      alignItems:"center",
      paddingVertical:20
    },
    title:{
      fontFamily:fonts.russoOne,
      fontSize:55,
      color: 'white',
      bottom: 80
    },
    sub:{
      fontSize:14,
      fontFamily:fonts.JosefinSansBold
    },
    subLink:{
      fontSize:14,
      fontFamily:fonts.JosefinSansBold,
      color:"blue"
    }
})