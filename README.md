# Banco Web Tests

Projeto de testes automatizados para a aplicação web do Banco usando Cypress e JavaScript.

## Objetivo

Este projeto foi criado para mostrar aos alunos da Mentoria 2.0 como automatizar testes de front-end com Cypress. O foco é validar fluxos principais da aplicação web do banco e demonstrar boas práticas de organização usando Custom Commands e geração de relatórios.

## Componentes do projeto

- `package.json`
  - define dependências e scripts de execução
- `cypress/e2e/`
  - `login.cy.js` — testes do fluxo de login
  - `transferencias.cy.js` — testes de transferências
- `cypress/fixtures/`
  - `credenciais.json` — dados de login e fixtures usados nos testes
  - `example.json` — exemplo de fixture
- `cypress/support/`
  - `commands.js` — arquivo principal que carrega os Custom Commands
  - `e2e.js` — configuração de suporte global do Cypress
  - `commands/`
    - `common.js` — comandos reutilizáveis
    - `login.js` — comandos relacionados a ações de login
    - `transferencia.js` — comandos relacionados a transferências
- `cypress/reports/`
  - relatórios gerados pelo `cypress-mochawesome-reporter`
- `screenshots/` e `videos/`
  - artefatos gerados pelo Cypress durante a execução

## Pré-requisitos

Antes de executar os testes, certifique-se de que:
- a API esteja em execução: `https://github.com/juliodelimas/banco-api`
- a aplicação web esteja em execução: `https://github.com/juliodelimas/banco-web`

## Instalação

No diretório do projeto, execute:

```bash
npm install
```
