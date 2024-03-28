import { StyleSheet, Text, View , ImageBackground, Image, Pressable, } from 'react-native'
import InputForm from '../components/presentational/InputForm'
import SubmitButton from '../components/presentational/SubmitButton'
import SubmitButtonbgn from '../components/presentational/SubmitButtonbgn'
import {useState} from 'react'
import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'
import { useLoginMutation } from '../app/services/auth'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/auth/authSlice'
import { loginSchema } from '../utils/validations/authSchema'
import { deleteSession, insertSession } from '../utils/db'
import ModalMessage from '../components/presentational/ModalMessage'

const Login = ({navigation}) => {

    const dispatch = useDispatch()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [errorEmail, setErrorEmail] = useState("")
    const [errorPassword, setErrorPassword] = useState("")
    const [triggerLogin] = useLoginMutation()
    const [modalVisible, setModalVisible] = useState(false)

    const handlerCloseModal = () => {
      setModalVisible(false)
    }

    const onSubmit = async () => {
      try {
        loginSchema.validateSync({email, password})
        const {data, error} = await  triggerLogin({email,password})
        
        if(error){
          //console.log(error.data.error.message)
          setModalVisible(true)
        }
        deleteSession()
        insertSession(data)
        dispatch(setUser({email:data.email,idToken:data.idToken, localId: data.localId}))
      } catch (error) {
        setErrorEmail("")
        setErrorPassword("")

        switch(error.path){
          case "email":
            setErrorEmail(error.message)
            break
          case "password":
            setErrorPassword(error.message)
            break
          default:
            break
        }
      }
    }

  return (
    <>
      <View style={styles.main}>
        <Image source={require('../../assets/logoHeladeria.png')} style={styles.image} resizeMode='contain'/>
            <Text style={styles.title}>HELADERIA</Text>
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
                  error={errorPassword}
              />
              <SubmitButton  onPress={onSubmit} title="INICIAR SESION"/>
              <SubmitButtonbgn onPress={()=> navigation.navigate("Register")} title="REGISTRESE AQUI"/>
              <Pressable>
                <Text style={styles.btnText}>Olvido su contraseña?</Text>
              </Pressable> 
            </View>
            <View style={styles.containerImages}>
              <Pressable style={styles.btnImages}>
                <Image source={require('../../assets/facebook.png')} style={styles.images} resizeMode='contain'/>
                <Text style={styles.btnText}>Facebook</Text>
              </Pressable>
              <Pressable style={styles.btnImages}>
                <Image source={require('../../assets/google.png')} style={styles.images} resizeMode='contain'/>
                <Text style={styles.btnText}>Google</Text>
              </Pressable> 
            </View>
      </View>
      <ModalMessage 
      textButton='Volver a intentar' 
      text="Email o Contraseña invalido" 
      modalVisible={modalVisible} 
      onclose={handlerCloseModal}/>
    </>
  )
}

export default Login

const styles = StyleSheet.create({
    main:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    container:{
      width:"70%",
      gap:15,
      borderRadius:10,
      justifyContent:"center",
      alignItems:"center"
    },
    containerImages:{
      flexDirection: 'row',
      justifyContent:"center",
      alignItems:"center",
      width: '80%',
      top: '20%'
    },
    title:{
      fontFamily:fonts.russoOne,
      fontSize:55,
      textAlign: 'center',
      color: colors.lightBlue,
      bottom: 30
    },
    image: {
      width: '100%',
      height: 130,
      bottom: '8%'
    },
    images: {
      width: 40,
      height: 40,
      marginHorizontal: 10
    },
    btnImages: {
        width:"45%",
        borderWidth: 1,
        flexDirection: 'row',
        borderColor: colors.lightBlue,
        marginHorizontal: 5,
        padding:5,
        alignItems:"center",
        justifyContent: 'center',
        borderRadius:10,
        bottom: '30%'
    },
    btnText: {
      fontSize: 15,
      color: colors.lightBlue
    }
})