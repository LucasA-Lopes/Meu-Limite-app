import React from 'react';
import { View, Text, Button} from 'react-native';

export default function AddExpense({navigation}) {
  return (
    <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
      <Text>Tela Adicionar Gasto</Text>
      <br></br>
      <Button
        title="Voltar"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}