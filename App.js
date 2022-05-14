import React from 'react';
import {StatusBar, SafeAreaView} from 'react-native';

import {Cesta} from './src/telas/Cesta';
import {cesta} from './src/mocks/cesta';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta {...cesta} />
    </SafeAreaView>
  );
}
