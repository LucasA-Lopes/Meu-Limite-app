/*import React from 'react';
import { View, Text, Button} from 'react-native';

export default function AddExpense({navigation}) {
  return (
    <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
      <Text>Tela Adicionar Gasto</Text>
      <Button
        title="Voltar"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}*/

import React, {
  useState
} from 'react';

import {
  View,
  Text,
  Button,
  TextInput
} from 'react-native';

import {
  doc,
  updateDoc,
  deleteDoc
} from 'firebase/firestore';

import { db } from '../firebase/firebaseConfig';

export default function EditExpense({
  navigation,
  route
}) {

  const { gasto } = route.params;

  const [valor, setValor] =
    useState(gasto.valor);

  const [pagamento, setPagamento] =
    useState(gasto.pagamento);

  const [data, setData] =
    useState(gasto.data);

  async function atualizarGasto() {

    const gastoRef =
      doc(db, 'expenses', gasto.id);

    await updateDoc(gastoRef, {
      valor,
      pagamento,
      data
    });

    navigation.goBack();

  }

  async function deletarGasto() {

    const gastoRef =
      doc(db, 'expenses', gasto.id);

    await deleteDoc(gastoRef);

    navigation.goBack();

  }

  return (

    <View style={{
      flex:1,
      justifyContent:"center",
      alignItems:"center"
    }}>

      <Text style={{
        fontSize:20,
        marginBottom:20
      }}>
        Editar Gasto
      </Text>

      <TextInput
        style={styles.input}
        value={valor}
        onChangeText={setValor}
      />

      <TextInput
        style={styles.input}
        value={pagamento}
        onChangeText={setPagamento}
      />

      <TextInput
        style={styles.input}
        value={data}
        onChangeText={setData}
      />

      <Button
        title="Atualizar"
        onPress={atualizarGasto}
      />

      <View style={{marginTop:20}}>

        <Button
          title="Deletar"
          onPress={deletarGasto}
        />

      </View>

      <View style={{marginTop:20}}>

        <Button
          title="Voltar"
          onPress={() =>
            navigation.goBack()
          }
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