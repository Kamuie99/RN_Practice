import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import AuthStackNavigator from './src/navigations/stack/AuthStackNavigator';
import RootNavigator from './src/navigations/root/RootNavigator';

function App() {
  const [name, setName] = useState('');

  const handleChangeInput = (text: string) => {
    console.log(text);
    setName(text);
  };

  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}


export default App;
