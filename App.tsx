/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView, TextInput} from 'react-native';
import {VimeoPlayer} from './src/VimeoPlayer';
import tw from 'twrnc';

function App(): JSX.Element {
  const [id, setId] = useState('347119375');
  const [width, setWidth] = useState(400);
  const [height, setHeight] = useState(300);
  return (
    <SafeAreaView>
      <TextInput style={tw`border`} value={id} onChangeText={setId} />
      <TextInput
        style={tw`border`}
        value={width.toString()}
        onChangeText={value => setWidth(parseInt(value, 10))}
      />
      <TextInput
        style={tw`border`}
        value={height.toString()}
        onChangeText={value => setHeight(parseInt(value, 10))}
      />
      <VimeoPlayer id={id} width={width} height={height} />
    </SafeAreaView>
  );
}

export default App;
