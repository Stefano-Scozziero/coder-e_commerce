import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import InputForm from '../components/InputForm'
import SubmitButton from '../components/SubmitButton'
import {useState} from 'react'
import fonts from '../utils/globals/fonts'
import { useRegisterMutation } from '../app/services/auth'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/auth/authSlice'
import { registerSchema } from '../utils/validations/authSchema'
import colors from '../utils/globals/colors'

const Register = ({navigation}) => {

    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [errorEmail, setErrorEmail] = useState("")
    const [errorPassword, setErrorPassword] = useState("")
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("")
    const [triggerRegister] = useRegisterMutation()


    const onSubmit = async () => {
      try {
        registerSchema.validateSync({email, password, confirmPassword})
        const {data} = await  triggerRegister({email,password})
        console.log(data)
        dispatch(setUser({email:data.email,idToken:data.idToken, localId: data.localId}))
      } catch (error) {
        setErrorEmail("")
        setErrorPassword("")
        setErrorConfirmPassword("")
        switch(error.path){
          case "email":
            setErrorEmail(error.message)
            break
          case "password":
            setErrorPassword(error.message)
            break
          case "confirmPassword":
            setErrorConfirmPassword(error.message)
            break
          default:
            break
        }
      }
    }

  return (
    <View style={styles.main}>
      <Image source={require('../../assets/logoHeladeria.png')} style={styles.image} resizeMode='contain'/>
      <Text style={styles.title}>REGISTRO</Text>
      <View style={styles.container}>
        <InputForm
          label="Email"
          value={email}
          onChangeText={(t) => setEmail(t)}
          isSecure={false}
          error={errorEmail}
        />
        <InputForm
          label="Password"
          value={password}
          onChangeText={(t) => setPassword(t)}
          isSecure={true}
          error = {errorPassword}
        />
        <InputForm
          label="Confirmar Password"
          value={confirmPassword}
          onChangeText={(t) => setConfirmPassword(t)}
          isSecure={true}
          error={errorConfirmPassword}
        />
        <SubmitButton onPress={onSubmit} title="CREAR CUENTA"/>
        <Text style={styles.sub}>Ya tenes una cuenta?</Text>
        <Pressable onPress={()=> navigation.navigate("Login")} >
          <Text style={styles.subLink}>INICIAR SESION</Text>
        </Pressable>
      </View>
    </View>
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
      color: colors.lightBlue
    },
    sub:{
      fontSize:14,
      fontFamily:fonts.JosefinSansBold
    },
    subLink:{
      fontSize:14,
      fontFamily:fonts.JosefinSansBold,
      color: colors.pink
    },
    image: {
      width: '100%',
      height: 120,
      bottom: '6.5%'
    },
})