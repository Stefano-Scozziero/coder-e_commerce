import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import { fontsCollections } from './src/utils/globals/fonts'
import { OrientationProvider} from './src/utils/globals/context';
import { store } from './src/app/store'
import { Provider } from 'react-redux'
import MainNavigator from './src/navigation/MainNavigator'
import colors from './src/utils/globals/colors';
import { init } from './src/utils/db'

init()

const App = () => {

  let [fontsLoaded] = useFonts(fontsCollections);

  if (!fontsLoaded) {
    return null;
  }

  if(!fontsLoaded) return null

  return (
    <>
      <OrientationProvider>
        <StatusBar backgroundColor={colors.black} style='light'/>
        <Provider store={store}>
          <MainNavigator/>
        </Provider>
      </OrientationProvider>
    </>
    
  )
}

export default App