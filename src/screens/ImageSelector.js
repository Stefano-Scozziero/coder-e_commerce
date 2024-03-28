import {useEffect, useState, useContext } from 'react'
import { StyleSheet, Image, View } from 'react-native'
import AddButton from '../components/AddButton'
import * as ImagePicker from 'expo-image-picker'
import { useGetImageQuery, usePutImageMutation } from '../app/services/profile'
import { useSelector } from 'react-redux'
import { OrientationContext } from '../utils/globals/context'


const ImageSelector = ({navigation}) => {
    const portrait = useContext(OrientationContext)
    const [image,setImage] = useState("")
    const [triggerImage] = usePutImageMutation()
    const localId = useSelector((state)=>state.auth.localId)
    const {data,isSuccess} = useGetImageQuery(localId)

    useEffect(()=>{
        if(isSuccess && data) setImage(data.image)
    },[isSuccess,data])

    const pickImage = async () => {

       const {granted} = await ImagePicker.requestCameraPermissionsAsync()
        
       if(granted){
         let result = await ImagePicker.launchCameraAsync({
            allowsEditing:true,
            aspect:[6,4],
            quality:0.3,
            base64:true
         })

         if(!result.canceled){
            setImage('data:image/jpeg;base64,' + result.assets[0].base64)
         }
       }
    }

    const confirmImage = () => {
        triggerImage({image,localId})
        navigation.goBack()
    }


  return (
    <View style={[styles.main, !portrait && styles.mainLandScape]}>
    <View style={[styles.container, !portrait && styles.containerLandScape]}>
       <Image
            source={image ? {uri:image}: require("../../assets/usuario.png")}
            style={[styles.image, !portrait && styles.imageLandScape]}
            resizeMode='cover'
        />
        <View style={[styles.Button, !portrait && styles.ButtonLandScape]}>
            <AddButton title="Tomar foto" onPress={pickImage} />
            <AddButton title="Confirm photo" onPress={confirmImage} />
        </View>
    </View>
    </View>
  )
}


export default ImageSelector


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