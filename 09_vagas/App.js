import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <ScrollView showsHorizontalScrollIndicator={false} >
          <View style={styles.anuncios}>

            <Text style={styles.titulo}>
              Desenvolvedor Flutter
            </Text>
            <Text>
              Salário: R$ 2.535,00
            </Text>
            <Text>
              Descrição: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Text>
            <Text>
              Contato: 1167874-5612
            </Text>
          </View>

          <View style={styles.anuncios}>
          <Text style={styles.titulo}>
            Programador Java Júnior
            </Text>
            <Text>
              Salário: R$ 3.533,00
            </Text>
            <Text>
              Descrição: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Text>
            <Text>
              Contato: 113474-5612
            </Text>
          </View>
          <View style={styles.anuncios}>
          <Text style={styles.titulo}>
            Analista De Sistemas
            </Text>
            <Text>
              Salário: R$ 3.589,00
            </Text>
            <Text>
              Descrição: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Text>
            <Text>
              Contato: 1199874-5612
            </Text>
          </View>
          <View style={styles.anuncios}>
          <Text style={styles.titulo}>
            Desenvolvedor Front End
            </Text>
            <Text>
              Salário: R$ 3.036,00
            </Text>
            <Text>
              Descrição: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Text>
            <Text>
              Contato: 1199874-5612
            </Text>
          </View>
          <View style={styles.anuncios}>
          <Text style={styles.titulo}>
            Desenvolvedor Front-End
            </Text>
            <Text>
              Salário: R$ 1.532,00
            </Text>
            <Text>
              Descrição: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Text>
            <Text>
              Contato: 11964274-5612
            </Text>
          </View>
        </ScrollView>
      </View>
   );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50
  },
  anuncios: {
    backgroundColor: '#D8D8D8',
    height: 250,
    width: 350, 
    padding: 10,
    alignSelf: 'center',
    marginBottom: 20
  }, 
  titulo: {
    textAlign: 'center',
    color: '#0101DF',
    marginBottom: 20,
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default App;
