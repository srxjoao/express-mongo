# express-mongo

Aplicação de exemplo usando **Express.js** + **MongoDB**, para demonstrar estrutura básica (rotas, modelos, controladores, conexão com banco de dados), renderização de views etc.

---

## 🧰 Estrutura do Projeto

```
express-mongo/
├── controllers/ # Lógica de controle entre rotas e modelos
├── database/ # Configuração da conexão com MongoDB
├── models/ # Modelos / esquemas do MongoDB
├── routes/ # Definição das rotas HTTP/REST
├── views/ # Templates para renderização de páginas (por exemplo, com EJS, Pug, etc.)
├── index.js # Arquivo principal que inicia o servidor
├── package.json # Dependências, scripts, versões
└── .gitignore
````


---

## 🚀 Pré-requisitos

Antes de rodar este projeto, você vai precisar ter instalado:

- Node.js (versão 14+ recomendada)
- MongoDB (local ou uma instância remota) ou acesso a um serviço de banco de dados MongoDB
- npm ou yarn

---

## ⚙️ Instalação & Execução

1. Clone o repositório:

   ```bash
   git clone https://github.com/srxjoao/express-mongo.git
   cd express-mongo

