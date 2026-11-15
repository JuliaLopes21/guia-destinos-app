import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, SafeAreaView, ScrollView, Alert } from 'react-native';
import Cabecalho from '../components/Cabecalho';
import Botao from '../components/Botao';

export default function Formulario({ navigation }) {
  const [nome, setNome] = useState('');
  const [pais, setPais] = useState('');
  const [descricao, setDescricao] = useState('');
  const [avaliacao, setAvaliacao] = useState('');

  const handleSalvar = () => {
    if (!nome.trim() || !pais.trim() || !descricao.trim() || !avaliacao.trim()) {
      Alert.alert('Atenção', 'Por favor, preencha todos os campos do formulário.');
      return;
    }
    const novoDestino = { id: Date.now().toString(), nome, pais, descricao, avaliacao };
    navigation.navigate('Home', { novoDestino });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Cabecalho titulo="Novo Destino" subtitulo="Adicione um novo local ao guia" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.formularioContainer}>
          <Text style={styles.label}>Nome do Destino</Text>
          <TextInput style={styles.input} placeholder="Ex: Bariloche, Argentina" placeholderTextColor="#888" value={nome} onChangeText={setNome} />
          <Text style={styles.label}>País</Text>
          <TextInput style={styles.input} placeholder="Ex: Argentina" placeholderTextColor="#888" value={pais} onChangeText={setPais} />
          <Text style={styles.label}>Descrição</Text>
          <TextInput style={[styles.input, styles.inputArea]} placeholder="Breve descrição..." placeholderTextColor="#888" multiline numberOfLines={4} value={descricao} onChangeText={setDescricao} />
          <Text style={styles.label}>Avaliação (Ex: 4.9)</Text>
          <TextInput style={styles.input} placeholder="Ex: 4.9" placeholderTextColor="#888" keyboardType="numeric" value={avaliacao} onChangeText={setAvaliacao} />
          <Botao rotulo="Salvar Destino" aoPressionar={handleSalvar} corFundo="#28A745" />
          <Botao rotulo="Cancelar" aoPressionar={() => navigation.goBack()} corFundo="#DC3545" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7FA' },
  scrollContent: { padding: 16 },
  formularioContainer: { backgroundColor: '#FFFFFF', borderRadius: 12, padding: 20, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 },
  label: { fontSize: 14, fontWeight: '600', color: '#333333', marginBottom: 6, marginTop: 12 },
  input: { backgroundColor: '#FAFAFA', borderWidth: 1, borderColor: '#CCCCCC', borderRadius: 8, paddingHorizontal: 12, paddingVertical: 10, fontSize: 16, color: '#333333' },
  inputArea: { height: 100, textAlignVertical: 'top' },
});