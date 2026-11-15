import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Cabecalho from '../components/Cabecalho';
import Botao from '../components/Botao';

export default function Detalhes({ route, navigation }) {
  const { item } = route.params || {};

  if (!item) {
    return (
      <SafeAreaView style={styles.container}>
        <Cabecalho titulo="Detalhes" subtitulo="Informação não encontrada" />
        <View style={styles.centro}>
          <Text style={styles.textoErro}>Nenhum detalhe disponível para este item.</Text>
          <Botao rotulo="Voltar" aoPressionar={() => navigation.goBack()} />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Cabecalho titulo={item.nome} subtitulo={`País: ${item.pais}`} />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.cartaoDetalhe}>
          <Text style={styles.rotuloSecao}>Sobre o Destino:</Text>
          <Text style={styles.descricao}>{item.descricao}</Text>
          <View style={styles.linhaInfo}>
            <Text style={styles.rotuloInfo}>Avaliação Geral:</Text>
            <Text style={styles.valorInfo}>{item.avaliacao}</Text>
          </View>
          <View style={styles.linhaInfo}>
            <Text style={styles.rotuloInfo}>ID do Registro:</Text>
            <Text style={styles.valorInfo}>#{item.id}</Text>
          </View>
        </View>
        <Botao
          rotulo="Voltar para a Lista"
          aoPressionar={() => navigation.goBack()}
          corFundo="#6C757D"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7FA' },
  scrollContent: { padding: 16 },
  cartaoDetalhe: { backgroundColor: '#FFFFFF', borderRadius: 12, padding: 20, marginBottom: 20, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 },
  rotuloSecao: { fontSize: 16, fontWeight: 'bold', color: '#0066CC', marginBottom: 8 },
  descricao: { fontSize: 16, color: '#444444', lineHeight: 24, marginBottom: 16 },
  linhaInfo: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: '#EEEEEE' },
  rotuloInfo: { fontSize: 14, color: '#666666', fontWeight: '600' },
  valorInfo: { fontSize: 14, color: '#333333', fontWeight: 'bold' },
  centro: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 },
  textoErro: { fontSize: 16, color: '#CC0000', marginBottom: 16, textAlign: 'center' },
});