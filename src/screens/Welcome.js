import React from 'react';

import {
  View,
  Text,
  Button
} from 'react-native';

export default function Welcome({
  navigation
}) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        padding: 25
      }}
    >
      <Text
        style={{
          fontSize: 28,
          fontWeight: 'bold',
          marginBottom: 20,
          textAlign: 'center'
        }}
      >
        Bem-vindo ao Meu Limite
      </Text>

      <Text
        style={{
          fontSize: 18,
          lineHeight: 28,
          textAlign: 'center',
          marginBottom: 35
        }}
      >
        Aqui você acompanha seus gastos
        de forma simples e clara.

        {'\n\n'}

        O objetivo é te ajudar a
        visualizar melhor seu dinheiro,
        criar mais controle financeiro
        e tomar decisões com mais
        segurança no dia a dia.
      </Text>

      <Button
        title="Vamos continuar"
        onPress={() =>
          navigation.replace(
            'Dashboard'
          )
        }
      />
    </View>
  );
}