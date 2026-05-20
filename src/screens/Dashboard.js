/*import React, {useEffect, useSate} from 'react';
import { View, Text, StyleSheet, Button, TextInput} from 'react-native'; 

/*Função Topo Dashboard*/
/*export function DashboardTxt() {   
  return (
    <View>
      <Text>Meu Limite App</Text>
      <Text>Começa aqui</Text>
      <br></br>
    </View>
  );
}

export default function Dashboard({navigation}) {                           /*Função padrão para conteudo da página, navegação e Botão*/                        
/*  return (
    <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
      <DashboardTxt/>

      <Text>Lista de gastos</Text>
      <br></br>
      <Button
        title='Adicionar Gasto'
        onPress= {() => navigation.navigate('AddExpense')}/>
      
      <br></br>
      
      <Text>Editar gastos</Text>
       <Button
         title='Editar gastos'
          onPress= {() => navigation.navigate('EditExpense')}/>
        


    </View>
  );
}*/

import React, {
  useEffect,
  useState
} from 'react';

import {
  View,
  Text,
  Button,
  FlatList,
  Dimensions
} from 'react-native';

import {
  collection,
  getDocs
} from 'firebase/firestore';

import { db } from '../firebase/firebaseConfig';

import { PieChart }
from 'react-native-chart-kit';

export default function Dashboard({ navigation }) {


  const [gastos, setGastos] = useState([]);     /*Guarda dos Dados*/
  const screenWidth =
  Dimensions.get('window').width;

  async function carregarGastos() {

    const querySnapshot =
      await getDocs(                                            /*Busca dos Dados*/
        collection(db, 'expenses')
      );

    const lista = [];

    querySnapshot.forEach((doc) => {

      lista.push({
        id: doc.id,
        ...doc.data()
      });

    });

    setGastos(lista);

  }

  useEffect(() => {

    const unsubscribe =
      navigation.addListener('focus', () => {

        carregarGastos();

      });

    return unsubscribe;

  }, [navigation]);

  let credito = 0;
  let debito = 0;
  let pix = 0;

  gastos.forEach((item) => {

    const valor =
      parseFloat(item.valor) || 0;

    if(item.pagamento.toLowerCase() === 'crédito' ) {
      credito += valor;
    }

    else if(item.pagamento.toLowerCase() === 'débito') {
      debito += valor;
    }

    else if(item.pagamento.toLowerCase() === 'pix') {
      pix += valor;
    }

  });

  return (

    <View style={{
      flex:1,
      padding:20
    }}>

      <Text style={{
        fontSize:24,
        marginBottom:20
      }}>
        Meu Limite
      </Text>


  <PieChart
    data={[
      {
        name: 'Crédito',
        population: credito,
        color: 'black',
        legendFontColor: '#000',
        legendFontSize: 14
      },

      {
        name: 'Débito',
        population: debito,
        color: 'blue',
        legendFontColor: '#000',
        legendFontSize: 14
      },

      {
        name: 'Pix',
        population: pix,
        color: 'purple',
        legendFontColor: '#000',
        legendFontSize: 14
      }
    ]}

  width={screenWidth - 40}

  height={220}

  chartConfig={{
    color: () => '#000'
  }}

  accessor={'population'}

  backgroundColor={'transparent'}

  paddingLeft={'15'}

  absolute
/>

      <View style={{
      alignItems:'center',
      marginBottom:20
    }}>

</View>

      <Button
        title="Adicionar Gasto"
        onPress={() =>
          navigation.navigate('AddExpense')
        }
      />

      <Text style={{
        marginTop:20,
        marginBottom:10,
        fontSize:18
      }}>
        Lista de Gastos
      </Text>

      <FlatList                                                           /*Mostrar os dados em forma de Lista*/
        data={gastos}

        keyExtractor={(item) => item.id}

        renderItem={({ item }) => (

          <View style={{
            borderWidth:1,
            padding:15,
            marginBottom:10,
            borderRadius:10
          }}>

            <Text>
              Valor: {item.valor}
            </Text>

            <Text>
              Pagamento: {item.pagamento}
            </Text>

            <Text>
              Data: {item.data}
            </Text>
            <Button
              title="Editar"
              onPress={() =>
                navigation.navigate(
                  'EditExpense',
                  { gasto: item }
                )
              }
            />
            
          </View>
          

        )}
      />

    </View>
  );
}



