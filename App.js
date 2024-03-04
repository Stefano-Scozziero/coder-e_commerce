import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import { fontsCollections } from './src/utils/globals/fonts'
import { OrientationProvider } from './src/utils/globals/context';
import { useContext, useEffect } from 'react';
import { store } from './src/app/store'
import { Provider } from 'react-redux'
import MainNavigator from './src/navigation/MainNavigator'


const App = () => {

  const portrait = useContext(OrientationProvider)

  let [fontsLoaded] = useFonts(fontsCollections);

  if (!fontsLoaded) {
    return null;
  }

  if(!fontsLoaded) return null

  return (
    <>
      <OrientationProvider>
        <StatusBar backgroundColor='black' style='light'/>
        <Provider store={store}>
          <MainNavigator portrait={portrait}/>
        </Provider>
      </OrientationProvider>
    </>
    
  )
}

export default App