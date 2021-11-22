import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';

class App extends Component  {
constructor(props) {
  super(props);
  this.state = {
    numero: 0,
    resultado: ''
  };

  this.numero = this.numero.bind(this);
  this.resultado = this.resultado.bind(this);
}


resultado() {
  random =  Math.floor(Math.random() * 10) + 1;
  if (random == this.state.numero) {
    this.setState({
      resultado: 'Você ACERTOU!!! Você informou o número: ' + this.state.numero + 
      ' e o número do jogo é: ' + random
    })
  } else {
    this.setState({
      resultado: 'Você errou ): Você informou o número: ' + this.state.numero + 
      ' e o número do jogo é: ' + random
    })
  }
}


numero (numero) {
  this.setState({
    numero: numero
  });
}


  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Jogo do número aleatório
        </Text>


        <TextInput
          placeholder="Informe o número"
          style={styles.input}
          onChangeText={this.numero}
        />

        <Button 
          title="Descobrir"
          onPress={this.resultado}
        />

      <Text>
        {this.state.resultado}
      </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    height: 45,
    borderWidth: 1,
    borderColor: 'blue',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  text: {
    fontSize: 25,
    marginBottom: 20
  }
});

export default App;
