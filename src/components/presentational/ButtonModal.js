import { StyleSheet, Text, Pressable } from 'react-native'
import colors from '../../utils/globals/colors'


const SubmitButton = ({title,onPress}) => {

  return (
        <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.text}>{title}</Text>
        </Pressable>
  )
}


export default SubmitButton


const styles = StyleSheet.create({
    button:{
        width:"50%",
        backgroundColor: colors.white,
        padding:15,
        alignItems:"center",
        borderRadius:10
    },
    text:{
        textAlign:"center",
        color:colors.lightBlue,
        fontSize:15
    }
})