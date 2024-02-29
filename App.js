import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import { fontsCollections } from './src/utils/globals/fonts'
import { OrientationProvider } from './src/utils/globals/context';
import { useContext } from 'react';
import { store } from './src/app/store'
import { Provider } from 'react-redux'
import colors from './src/utils/globals/colors'
import MainNavigator from './src/navigation/MainNavigator'


const App = () => {

  const [fontsLoaded] = useFonts(fontsCollections)
  const portrait = useContext(OrientationProvider)

  if(!fontsLoaded) return null

  return (
    <>
      <OrientationProvider>
        <StatusBar backgroundColor={colors.primary}/>
        <Provider store={store}>
          <MainNavigator portrait={portrait}/>
        </Provider>
      </OrientationProvider>
    </>
    
  )
}

export default App