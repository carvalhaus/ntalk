# ntalk

Este é um projeto inspirado no exemplo utilizado como didática no livro: Aplicações web real-time com Node.js (https://casadocodigo.refersion.com/l/630.1389) da editora Casa do Código (http://www.casadocodigo.com.br)

## Requisitos do projeto

- [] O usuário deve criar, editar ou excluir um contato
- [] O usuário deve se logar informando seu nome e e-mail
- [] O usuário deve conectar ou desconectar no chat
- [] O usuário deve enviar e receber mensagens no chat somente entre os contatos online

## Tecnologias

- Node.js: Backend do projeto;
- Express: Framework para aplicações web;
- Redis: Banco de dados NoSQL para estruturas de chave-valor;
- MongoDB: Banco de dados NoSQL orientado a documentos;
- MongooseJS: ODM (Object Data Mapper) MongoDB para Node.js;
- Socket.IO: Módulo para comunicação real-time;
- Node Redis: Cliente Redis para Node.js;
- Mocha: Framework para testes automatizados;
- SuperTest: Módulo para emular requisições que será utilizado no teste de integração;
- Nginx: Servidor Web de alta performance para arquivos estáticos;

## Estrutura de projeto

- Exemplo de possível estrutura do projeto

```bash
ntalk/
├── db/
│   └── config.js
├── controllers/
│   ├── authController.js
│   └── userController.js
├── middleware/
│   ├── authMiddleware.js
│   └── errorHandler.js
├── models/
│   └── User.js
├── routes/
│   ├── authRoutes.js
│   └── userRoutes.js
├── utils/
│   └── helper.js
├── .env
├── .gitignore
├── app.js
├── package.json
└── README.md
```
