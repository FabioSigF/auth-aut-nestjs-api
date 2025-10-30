# API NestJS - Autenticação e Autorização

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

## Introdução

API desenvolvida com **NestJS** e **Prisma**, utilizando **JWT** para autenticação e **bcrypt** para criptografia de senhas.

## Requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- Node.js (versão 18 ou superior)

- npm (ou yarn, opcionalmente)

- PostgreSQL (ou outro banco configurado no schema.prisma)

- Nest CLI (instalação global opcional):

```bash
npm install -g @nestjs/cli
```


## Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/auth-aut-nestjs-api.git
```

### 2. Acesse o diretório do projeto:

```bash
cd auth-aut-nestjs-api
```

### 3. Instale as dependências

```bash
npm install
```


## Configuração do Banco de Dados (Prisma)

### 1. Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```bash
DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_do_banco?schema=public"
AUTH_JWT_SECRET="chave-secreta-segura"
AUTH_JWT_ISSUER="mobile-auth-service"
AUTH_JWT_AUDIENCE="mobile-api-users"
```

### 2. Gere o cliente Prisma e execute as migrações:

```bash
npx prisma generate
npx prisma migrate dev
```

## Rode o projeto

### Desenvolvimento

```bash
npm run start:dev
```

Inicia o servidor com hot reload (modo desenvolvimento).

### Produção

```bash
npm run build
npm run start:prod
```

Compila e inicia a aplicação em modo de produção.
