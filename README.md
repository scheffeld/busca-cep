# Busca CEP - RestFul API

A API tem como objetivo retornar os dados de correspondência apartir de um CEP. Essa é uma API RestFul, ou seja, segue os padrãos Rest de design de APIs.

## Endpoints

* `GET /api/v1`: Um simples teste do estado do servidor da aplicação
* `POST /api/busca-cep`: Retorna os dados de corrêspondencia apartir do CEP informado.
* `null`: Rota padrão, retorna 404 se o endpoint informado não existir.

## Utilização

```
yarn install     // Para instalar todas as dependências
yarn start       // Para iniciar a aplicação no modo de produção
yarn dev         // Para iniciar a aplicação no modo de desenvolvimento
yarn test        // Para rodar os testes automatizados da aplicação
```
