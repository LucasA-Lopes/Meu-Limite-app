import React, {
  useState
} from 'react';

import {
  View,
  TextInput,
  Button,
  Alert
} from 'react-native';

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth';

import {
  auth
} from '../firebase/firebaseConfig';

export default function Login({
  navigation
}) {
  const [email, setEmail] =
    useState('');

  const [senha, setSenha] =
    useState('');

  async function criar() {
    try {
      await createUserWithEmailAndPassword(
        auth,
        email.trim(),
        senha
      );

      navigation.replace(
        'Welcome'
      );

    } catch (e) {
      Alert.alert(
        'Erro',
        e.message
      );
    }
  }

  async function entrar() {
    try {
      await signInWithEmailAndPassword(
        auth,
        email.trim(),
        senha
      );

      navigation.navigate(
        'Dashboard'
      );

    } catch (e) {
      Alert.alert(
        'Erro',
        e.message
      );
    }
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        padding: 20
      }}
    >
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        style={{
          borderWidth: 1,
          marginBottom: 10,
          padding: 10
        }}
      />

      <TextInput
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        style={{
          borderWidth: 1,
          marginBottom: 10,
          padding: 10
        }}
      />

      <Button
        title="Entrar"
        onPress={entrar}
      />

      <View
        style={{
          height: 10
        }}
      />

      <Button
        title="Criar conta"
        onPress={criar}
      />
    </View>
  );
}