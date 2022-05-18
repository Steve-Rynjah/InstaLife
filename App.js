import React from "react";
import {NavigationContainer} from '@react-navigation/native'

import {StackNav} from './src/routes/Stack.routes'

export default function App(){
  return(
    <NavigationContainer>
        <StackNav/>
    </NavigationContainer>
  )
}
