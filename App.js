import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import { fontsCollections } from './src/utils/globals/fonts'
import { OrientationProvider } from './src/utils/globals/context';
import colors from './src/utils/globals/colors'
import MainNavigator from './src/navigation/MainNavigator'


const App = () => {

  const [fontsLoaded] = useFonts(fontsCollections)

  if(!fontsLoaded) return null

  return (
    <>
      <OrientationProvider>
        <StatusBar backgroundColor={colors.primary}/>
        <MainNavigator/>
      </OrientationProvider>
    </>
    
  )
}

export default App