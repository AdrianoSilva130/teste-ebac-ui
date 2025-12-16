🧪 Automação de Testes UI – Projeto EBAC
📌 Visão Geral

Este repositório contém um projeto de automação de testes de interface (UI), desenvolvido com o objetivo de validar funcionalidades de uma aplicação web, aplicando boas práticas de QA, organização de testes e integração contínua (CI) por meio de um Jenkinsfile.

O projeto demonstra conhecimento prático em automação de testes web, versionamento de código e execução automatizada em pipeline CI/CD.

🎯 Objetivo do Projeto

Automatizar testes de interface web

Validar fluxos funcionais da aplicação

Reduzir testes manuais repetitivos

Integrar a automação a um pipeline de CI/CD

Demonstrar conhecimento técnico para recrutadores

💡 Tecnologias e Ferramentas Utilizadas
🧠 Linguagem

JavaScript (Node.js)

🧪 Automação de Testes UI

Cypress (ou outro framework, conforme o projeto)

Testes funcionais de interface

Cenários positivos e negativos

🔄 Integração Contínua (CI/CD)

Jenkins

Jenkinsfile para definição do pipeline

Execução automática dos testes a cada build

⚙️ Infraestrutura

npm – Gerenciamento de dependências

Git / GitHub – Versionamento de código

🚀 Como Executar o Projeto
🔹 Pré-Requisitos

✔️ Node.js (v16 ou superior)
✔️ npm
✔️ Jenkins instalado (opcional para CI)

🔹 Instalação
git clone https://github.com/AdrianoSilva130/teste-ebac-ui.git
cd teste-ebac-ui
npm install

🔹 Executar os Testes Localmente
npm test


Ou, dependendo da configuração:

npx cypress run

🤖 Execução via Jenkins (CI/CD)

Este projeto possui um Jenkinsfile, responsável por automatizar a execução dos testes em um pipeline de CI.

Etapas do Pipeline (exemplo):

Checkout do repositório

Instalação das dependências

Execução dos testes automatizados

Exibição do status do build (sucesso ou falha)

Exemplo de execução:

A cada commit ou build manual no Jenkins

Testes são executados automaticamente

Falhas quebram o pipeline

📁 Estrutura do Projeto
├── cypress/
│   ├── e2e/                # Casos de teste UI
│   ├── fixtures/           # Dados de teste
│   └── support/            # Commands e configurações
├── Jenkinsfile             # Pipeline de CI/CD
├── package.json            # Dependências e scripts
└── README.md               # Documentação

🧪 Exemplos de Cenários Automatizados

Login com dados válidos

Validação de mensagens de erro

Fluxos principais da aplicação

Cenários negativos

Validação de elementos da UI

🧠 Competências Demonstradas

✔️ Automação de testes de interface web
✔️ Uso de Cypress
✔️ Criação de pipelines com Jenkinsfile
✔️ Integração contínua (CI/CD)
✔️ Boas práticas de QA
✔️ Versionamento com Git/GitHub
