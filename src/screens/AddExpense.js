import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

export default function AddExpense({ navigation }) {

  const [valor, setValor] = useState('');
  const [pagamento, setPagamento] = useState('');
  const [data, setData] = useState('');

  return (
    <View style={{
      flex:1,
      justifyContent:"center",
      alignItems:"center"
    }}>

      <Text style={{fontSize:20, marginBottom:20}}>
        Adicionar Gasto
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o valor"
        value={valor}
        onChangeText={setValor}
      />

      <TextInput
        style={styles.input}
        placeholder="Crédito / Débito / Pix"
        value={pagamento}
        onChangeText={setPagamento}
      />

      <TextInput
        style={styles.input}
        placeholder="Data"
        value={data}
        onChangeText={setData}
      />

      <Button
        title="Salvar"
        onPress={() => console.log(valor, pagamento, data)}
      />

      <View style={{marginTop:20}}>
        <Button
          title="Voltar"
          onPress={() => navigation.goBack()}
        />
      </View>

    </View>
  );
}

const styles = {
  input: {
    borderWidth:1,
    width:250,
    padding:10,
    marginBottom:15,
    borderRadius:8
  }
};
 /*export function AddExpense1({navigation}){
      return(
        <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
          <Text>voltar</Text>
          
          <Button
            title='Voltar'
            onPress= {() => navigation.navigate('Dashboard')}/>
        </View>
      );
  }*/