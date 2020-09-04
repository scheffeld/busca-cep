# Busca CEP - RestFul API

Essa é uma API RestFul, ou seja, segue os padrãos Rest de design de APIs.

## Objetivo

1. Expor um serviço de BUSCA DE CEP: Eu, como usuário, quero informar o meu CEP e obter o nome da minha Rua, Bairro, Cidade e Estado para preencher meus dados de cadastro de forma automática:

- Dado um CEP válido, a API deve retornar o endereço correspondente.
- Dado um CEP válido, que não exista endereço, deve substituir o dígito, da direita para esquerda por 0, até que o endereço seja localizado. (Ex. Dado 22333999, tentar com 22333990, 22333900 ...)
- Dado um CEP inválido, deve retornar a mensagem 'CEP Inválido'

## Tecnologia

A tecnologia utilizada foi NodeJS.

Foi escolhida essa tecnologia por utilizar uma linguagem que estudo e que já desenvolvi pequenos projetos para faculdade e projetos de estudo na RocketSeat (OmniStack & NextLevelWeek), que utiliza a Stack JavaScript.

## Endpoints

* `GET /api-docs/v1`: Rota de documentação da aplicação.
* `GET /api/v1`: Rota de retorno de ping na aplicação.
* `GET /api/v1/token`: Rota de retorno de token válido.
* `POST /api/v1/busca-cep`: Rota de retorno dos dados apartir de um CEP.

## Utilização

```
$ yarn install     // Para instalar todas as dependências
$ yarn start       // Para iniciar a aplicação no modo de produção
$ yarn dev         // Para iniciar a aplicação no modo de desenvolvimento
$ yarn test        // Para rodar os testes automatizados da aplicação
```