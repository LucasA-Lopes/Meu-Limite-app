import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  Button,
  Alert
} from 'react-native';

import {
  collection,
  getDocs,
  addDoc
} from 'firebase/firestore';

import { db }
from '../firebase/firebaseConfig';

export default function Login({
  navigation
}) {

  const [usuario, setUsuario] =
    useState('');

  const [senha, setSenha] =
    useState('');

  async function fazerLogin() {

    const querySnapshot =
      await getDocs(
        collection(db, 'usuarios')
      );

    let encontrado = false;

    querySnapshot.forEach((doc) => {

      const dados =
        doc.data();

      if (
        dados.usuario === usuario
      ) {

        encontrado = true;

        if (
          dados.senha === senha
        ) {

          navigation.navigate(
            'Dashboard'
          );

        } else {

          Alert.alert(
            'Erro',
            'Senha incorreta'
          );

        }

      }

    });

    if (!encontrado) {

      await addDoc(
        collection(
          db,
          'usuarios'
        ),
        {
          usuario,
          senha
        }
      );

      Alert.alert(
        'Sucesso',
        'Usuário criado!'
      );

      navigation.navigate(
        'Dashboard'
      );

    }

  }

  return (

    <View style={{
      flex:1,
      justifyContent:'center',
      padding:20
    }}>

      <Text style={{
        fontSize:28,
        textAlign:'center',
        marginBottom:30
      }}>
        Login
      </Text>

      <TextInput
        placeholder="Usuário"
        value={usuario}
        onChangeText={setUsuario}
        style={{
          borderWidth:1,
          padding:12,
          marginBottom:15,
          borderRadius:8
        }}
      />

      <TextInput
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry={true}
        style={{
          borderWidth:1,
          padding:12,
          marginBottom:20,
          borderRadius:8
        }}
      />

      <Button
        title="Entrar / Criar usuário"
        onPress={fazerLogin}
      />

    </View>
  );
}