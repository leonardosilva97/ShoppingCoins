# json-server-auth/json-server-auth/README.md

# JSON Server Auth

Este projeto simula a autenticação de usuários utilizando o json-server. Ele permite que você envie um e-mail e senha para obter um token e os dados do usuário logado.

## Estrutura do Projeto

```
json-server-auth
├── src
│   ├── server.js        # Ponto de entrada do servidor JSON
│   └── db.json          # Dados simulados do banco de dados
├── package.json          # Configuração do npm
└── README.md             # Documentação do projeto
```

## Instalação

1. Clone o repositório:
   ```
   git clone <URL_DO_REPOSITORIO>
   cd json-server-auth
   ```

2. Instale as dependências:
   ```
   npm install
   ```

## Execução

Para iniciar o servidor, execute o seguinte comando:

```
npm start
```

O servidor estará disponível em `http://localhost:3000`.

## Endpoints

### Login

- **URL**: `/login`
- **Método**: `POST`
- **Corpo da Requisição**:
  ```json
  {
    "email": "usuario@example.com",
    "senha": "sua_senha"
  }
  ```

- **Resposta**:
  ```json
  {
    "token": "seu_token_aqui",
    "usuario": {
      "nome": "Leonardo",
      "foto": "url_da_foto_de_perfil"
    }
  }
  ```

## Contribuição

Sinta-se à vontade para contribuir com melhorias ou correções. Faça um fork do repositório e envie um pull request.