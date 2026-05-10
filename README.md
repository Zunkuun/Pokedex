<!-- Grupo: Carlos Henrique de Andrade, Higor Claro -->

# Pokédex

Aplicação React simples que permite buscar informações de um Pokémon usando a API pública PokeAPI. A interface oferece busca por nome, tratamento de erros e exibição de um cartão com dados básicos (imagem, altura e peso).

## Funcionalidades
- Buscar um Pokémon por nome.
- Exibir indicador de carregamento enquanto a busca está em andamento.
- Exibir mensagem de erro quando o Pokémon não for encontrado ou quando a entrada for inválida.
- Mostrar um cartão com nome, imagem, altura (m) e peso (kg).

## Como funciona (visão geral técnica)
- O estado global e a lógica de busca estão centralizados em [Project/src/contexts/PokemonContext.jsx](Project/src/contexts/PokemonContext.jsx).
- Componentes principais:
	- [Project/src/components/SearchBar.jsx](Project/src/components/SearchBar.jsx): campo de busca e botão de envio.
	- [Project/src/components/ErrorMessage.jsx](Project/src/components/ErrorMessage.jsx): exibe mensagens de erro.
	- [Project/src/components/PokemonList.jsx](Project/src/components/PokemonList.jsx): lista/coleção de resultados.
	- [Project/src/components/PokemonCard.jsx](Project/src/components/PokemonCard.jsx): cartão com detalhes do Pokémon.
- O ponto de entrada é [Project/src/main.jsx](Project/src/main.jsx), que envolve a árvore de componentes com `PokemonProvider`.

## Estrutura relevante
- [Project/src/](Project/src/) — código-fonte da aplicação (React + Vite).
- [Project/package.json](Project/package.json) — scripts e dependências.

## Executando localmente
1. Abra o terminal na pasta do projeto:

```bash
cd Project
npm install
npm run dev
```

2. Abra o navegador em `http://localhost:5173` (ou a porta indicada pelo Vite).

## Observações
- A aplicação consome a API pública `https://pokeapi.co/api/v2/pokemon/{nome}` pelo `fetch` no `PokemonContext`.
- O campo de busca exige pelo menos um caractere; em branco a aplicação retorna mensagem solicitando entrada.

## Autores
- Carlos Henrique de Andrade
- Higor Claro