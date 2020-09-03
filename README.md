# Busca CEP - RestFul API

Essa é uma API RestFul, ou seja, segue os padrãos Rest de design de APIs.

## Objetivo

- Dado um CEP válido, a API deve retornar o endereço correspondente.
- Dado um CEP válido, que não exista endereço, deve substituir o dígito, da direita para esquerda por 0, até que o endereço seja localizado. (Ex. Dado 22333999, tentar com 22333990, 22333900 ...)
- Dado um CEP inválido, deve retornar a mensagem 'CEP Inválido'

## Tecnologia

A tecnologia escolhida foi NodeJS pois, através do JavaScript, conseguimos utilizar essa plataforma na grande maioria das aplicações.
Além de ser necessário menos códigos em muitos casos, NodeJS trabalha com ***single-threads***, deixando a aplicação mais rápida.
Por não exigir um padrão de arquitetura, conseguimos mais liberdade para organizar e estruturar as aplicações utilizando NodeJS.

## Endpoints

* `GET /api-docs/v1`: Rota de documentação da aplicação.
* `GET /api/v1`: Rota de retorno de ping na aplicação.
* `POST /api/v1/busca-cep`: Rota de retorno dos dados apartir de um CEP.

## Utilização

```
$ yarn install     // Para instalar todas as dependências
$ yarn start       // Para iniciar a aplicação no modo de produção
$ yarn dev         // Para iniciar a aplicação no modo de desenvolvimento
$ yarn test        // Para rodar os testes automatizados da aplicação
```