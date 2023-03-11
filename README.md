# Visão Geral

Essa aplicação foi desenvolvida para teste técnico da empresa NDM. Uma aplicação de e-spots

# Documentação da API

Para documentação completa acesse: https://

## Tabela de Conteúdos

- [Visão Geral](#1-visão-geral)
- [Diagrama ER](#2-diagrama-er)
- [Comandos](#3-Comandos)
- [Variáveis de Ambiente](#4-variáveis-de-ambiente)
- [Migrations](#5-migrations)
- [Endpoints](#7-endpoints)

---

## 1. Visão Geral

Visão geral do projeto, um pouco das tecnologias usadas.

- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript)
- [NodeJS](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- [Express](https://expressjs.com/pt-br/)
- [PostgreSQL](https://www.postgresql.org/)
- [Yup](https://www.npmjs.com/package/yup)

A URL base da aplicação:
https://

---

## 2. Diagrama ER
[ Voltar para o topo ](#tabela-de-conteúdos)


Diagrama ER da API definindo bem as relações entre as tabelas do banco de dados.

![DER](der.jfif)



### 3 - Comandos

 - Instalando Dependências

Clone o projeto em sua máquina e instale as dependências com o comando:

```shell
yarn install
```

- Para rodar a aplicação use o comando:

```shell
yarn dev
```

- Para rodar testes use o comando:

```shell
yarn test
```

## 4 - Variáveis de Ambiente

Em seguida, crie um arquivo **.env**, copiando o formato do arquivo **.env.example**:
```
cp .env.example .env
```

Configure suas variáveis de ambiente com suas credenciais do Postgres e uma nova database da sua escolha.

## 5 - Migrations

Execute as migrations com o comando:

```
yarn typeorm migration:run -d src/data-source.ts
```

---

## 6 - Endpoints

- [/jogador]
    - [POST   - /jogador](Criação de jogador)
    - [GET    - /jogador](Listar os jogadores)
	- [GET    - /jogador/:id](Listar joagor)
	- [PATH   - /jogador/:id](Atualizar jogador)
	- [DELETE - /jogador/:id](Deletar jogador)
- [/time]
    - [GET    - /jobs](Listar times)
	- [GET    - /jobs/companies/:id](Listar jogadores por time)
	- [PATH   - /jobs/:id](Atualizar time)
	- [DELETE - /jobs/:id](Deletar time)


---
##  **jogador**

O objeto Jogador é definido como:

| Campo      | Tipo   | Descrição                                     		|
| -----------|--------|-----------------------------------------------------|
| id         | inteiro| Identificador único do jogador                  	|
| nome       | string | O nome do jogador.                              	|
| idade      | string | A idade do jogador.                             	|
| time_id    | string | O time que o jogador pertence                    	|

##  **time**

O objeto Jogador é definido como:

| Campo      | Tipo   | Descrição                                     		|
| -----------|--------|-----------------------------------------------------|
| id         | inteiro| Identificador único do time.                     	|
| nome       | string | O nome do time.                              	|


### Possíveis Erros:
| Status | Descrição 	|
|--------|--------------|
|   409  | Conflict 	|
|   401  | Unauthorized |
|   404  | Not found 	|
|   403  | Forbidden 	|

---



