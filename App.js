import React from "react";
import {NavigationContainer} from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context';

import {StackNav} from './src/routes/Stack.routes'

export default function App(){
  return(
    <SafeAreaProvider style={{flex:1}}>
      <NavigationContainer>
        <StackNav/>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
