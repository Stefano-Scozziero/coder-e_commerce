import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import { fontsCollections } from './src/utils/globals/fonts'
import colors from './src/utils/globals/colors'
import MainNavigator from './src/navigation/MainNavigator'


const App = () => {

  const [fontsLoaded] = useFonts(fontsCollections)

  if(!fontsLoaded) return null

  return (
    <>
      <StatusBar backgroundColor={colors.primary}/>
      <MainNavigator/>
    </>
    
  )
}

export default App