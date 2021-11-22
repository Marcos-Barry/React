import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
 
 
export default function Pessoal() {
  let img = 'https://avatars.githubusercontent.com/u/55248963?v=4';
  let name = 'Marcos Vinicius';
 return (
    <View style={styles.container}>
        <Text style={{marginBottom: 30}}>Pessoal</Text>

        <Image
          source={{uri: img}}
          style= {{width: 300, height: 300, borderRadius: 200, margin: 20}}
        />

        <Text>
          Nome: {name}
        </Text>
        <Text>
          Idade: 30
        </Text>
        <Text>
          Formação: Sistemas para Internet (em formação)
        </Text>
        <Text>
          Signo: Peixes.
        </Text>
        <Text>
          Analista de Sistemas.
        </Text>
        <Text style={{marginBottom: 30}}>
          Algns projetos feitos: https://github.com/Marcos-Vinicius-Sousa
        </Text>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }
  })