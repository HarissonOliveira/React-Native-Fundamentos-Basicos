import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Simples from './componentes/simples';
import ParImpar from './componentes/parImpar';
import { Inverter, MegaSena } from './componentes/multi';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Text style={styles.f20}>App!</Text> */}
        <Simples texto='Flexivel!!!!!' />
        <ParImpar numero={32} />
        <Inverter texto='React Nativo!' />
        <MegaSena numeros={6} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  f20: {
    fontSize: 40
  }
});