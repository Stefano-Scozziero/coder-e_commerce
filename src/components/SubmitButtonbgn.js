import { StyleSheet, Text,Pressable } from 'react-native'
import colors from '../utils/globals/colors'


const SubmitButtonbgn = ({title,onPress}) => {

  return (
        <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.text}>{title}</Text>
        </Pressable>
  )
}


export default SubmitButtonbgn


const styles = StyleSheet.create({
    button:{
        width:"70%",
        borderWidth: 1,
        borderColor: colors.orange,
        padding:10,
        alignItems:"center",
        borderRadius:10
    },
    text:{
        textAlign:"center",
        color:"white",
        fontSize:15
    }
})