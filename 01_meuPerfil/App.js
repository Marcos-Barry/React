import { auto } from 'async';
import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';


class App extends Component {
  render() {
    let img = 'https://avatars.githubusercontent.com/u/55248963?v=4';
    let name = 'Marcos Vinicius';
    return (
      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Text style={{color:'#836FFF', fontSize: 30, marginTop: 100}}>
        {name}
        </Text>
        <Image
          source={{uri: img}}
          style= {{width: 300, height: 300, borderRadius: 200, margin: 20}}
        />
        <Text>
          Idade: 28
        </Text>
        <Text>
          Formação: Sistemas para Internet (em formação)
        </Text>
        <Text>
          Signo: Peixes 
        </Text>
        <Text>
          Analista de Sistemas
        </Text>
        <Text>
          Algns projetos feitos: https://github.com/Marcos-Vinicius-Sousa
        </Text>
      </View>
    )
  }
}

export default App;