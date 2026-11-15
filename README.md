# Guia de Destinos App

## Descrição
Aplicativo mobile acadêmico desenvolvido em React Native com Expo SDK 58 que permite aos usuários explorar, buscar e cadastrar destinos turísticos internacionais e nacionais com avaliações detalhadas.

## Aluno
Nome: Estudante Exemplo  
RGM: 12345678

## Telas
- **Home**: Tela principal contendo barra de busca, indicador de carregamento, lista dinâmica (`FlatList`) de destinos utilizando componentes reutilizáveis de card, e acesso rápido ao cadastro.
- **Detalhes**: Exibe informações completas e detalhadas do destino selecionado recebidas via parâmetros de navegação (`route.params`).
- **Formulário**: Tela de cadastro com campos controlados por `useState` para inclusão de novos destinos na lista.

## Fonte de dados
Dados locais estruturados com suporte a requisições HTTP preparadas com Axios (`services/api.js`).

## Onde estão os requisitos
- Componentes: components/Card.js, components/Botao.js, components/Cabecalho.js
- Props com callback: components/Botao.js e components/Card.js (utilizando aoPressionar)
- useState: Utilizado em Home.js (busca, carregamento e lista) e Formulario.js (campos controlados)
- useEffect: Utilizado em Home.js (simulação de carregamento inicial e atualização de novos itens via params)
- Navegação com parâmetros: Implementada entre Home.js e Detalhes.js (navigation.navigate('Detalhes', { item }))

## Vídeo de demonstração
demo/demo.mp4

## Como executar
npm install
npx expo start