import { StyleSheet, View } from 'react-native'

const ShadowPrimary = ({style, children}) => {
  return (
    <View style= {[styles.container, style]}>
      {children}
    </View>
  )
}

export default ShadowPrimary

const styles = StyleSheet.create({
    container: {
        /*IOS*/
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        /*ANDROID*/
        elevation: 10,
    }
})