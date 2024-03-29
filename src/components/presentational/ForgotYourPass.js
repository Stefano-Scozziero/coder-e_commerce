import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import InputForm from './InputForm'
import fonts from '../../utils/globals/fonts'
import colors from '../../utils/globals/colors'
import SubmitButton from './SubmitButton'

const ForgotYourPass = ({navigation}) => {
  const [email,setEmail] = useState("")

  const onSubmit = async () => {

  }

  return (
    <>
    
    <View style={styles.main}>
      <Image source={require('../../../assets/logoHeladeria.png')} style={styles.image} resizeMode='contain'/>
      <View style={styles.container}>
        <InputForm
          label="Email"
          value={email}
          onChangeText={(t) => setEmail(t)}
          isSecure={false}
        />
        <SubmitButton onPress={onSubmit} title="RESTABLECER"/>
        <Pressable onPress={()=> navigation.navigate("Login")} >
          <Text style={styles.subLink}>VOLVER AL LOGIN</Text>
        </Pressable>
      </View>
    </View>
  </>
  )

}

export default ForgotYourPass

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
    height: 130,
    bottom: '6.5%'
  },
})