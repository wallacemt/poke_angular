# 📘 Pokédex - Angular + Ionic + Tailwind
Uma Pokédex interativa feita com **Angular**, **Ionic** e **TailwindCSS**, consumindo dados diretamente da **PokeAPI**.  
Aqui você pode listar, pesquisar e visualizar os detalhes dos Pokémon de forma responsiva e com uma interface amigável.


## 🚀 Tecnologias Utilizadas

- [Angular 17](https://angular.io/)
- [Ionic Framework](https://ionicframework.com/)
- [TailwindCSS](https://tailwindcss.com/)
- [RxJS](https://rxjs.dev/)
- [PokeAPI](https://pokeapi.co/)

---

## 🛠️ Como Rodar Localmente

### Pré-requisitos:

- Node.js (versão recomendada: `18.x.x` ou superior)
- Angular CLI (`npm install -g @angular/cli`)
- Ionic CLI (`npm install -g @ionic/cli`)

### Passos:

```bash
# 1. Clonar o repositório:
git clone https://github.com/wallacemt/poke_angular

# 2. Navegar até a pasta do projeto:
cd poke_angular

# 3. Instalar as dependências:
npm install

# 4. Rodar o projeto:
ng serve

# 5. Acessar no navegador:
http://localhost:4200
```

## 📌 Abordagem e Estilo de Codificação

Durante o desenvolvimento deste projeto, segui uma abordagem focada em **componentização**, visando criar componentes reutilizáveis e de fácil manutenção. A lógica de negócio foi concentrada em **serviços (services)**, seguindo o princípio de **separação de responsabilidades**.

Adotei o padrão **standalone components** do Angular 16+, evitando a criação de módulos desnecessários. Também apliquei conceitos de **Clean Code**, com nomes de variáveis, métodos e classes claros e descritivos.

O projeto segue o padrão de organização de pastas em **core**, **shared**, **pages** e **components**, visando escalabilidade futura. As chamadas à API foram centralizadas no serviço `PokeApiService`, garantindo o **princípio DRY (Don't Repeat Yourself)**.

Adicionalmente, implementei **tratamento de estados de carregamento e erro**, usando variáveis como `isLoading` para controlar a UI de forma reativa. Também utilizei **utilitários próprios** (`PokemonUtilsService`) para centralizar lógica comum como favoritos e cores de tipos.

Por fim, criei **testes unitários** focados nas partes de lógica central (services e utils), garantindo a confiabilidade das principais funções do projeto.

## 📸 Imagens do Projeto

> Screenshots do projeto:

### Lista de Pokémon

<div style="display: flex; justify-content: center;">
  <img src="https://res.cloudinary.com/dg9hqvlas/image/upload/v1750444240/list_q4nvtm.gif" style="width:50%;" alt="Pokemon Details"/>
</div>

### Detalhes de um Pokémon

<div style="display: flex; justify-content: center;">
  <img src="https://res.cloudinary.com/dg9hqvlas/image/upload/v1750444241/details_vpyieo.gif" style="width:50%;" alt="Pokemon Details"/>
</div>

### Pokemon Favorito

<div style="display: flex; justify-content: center;">
  <img src="https://res.cloudinary.com/dg9hqvlas/image/upload/v1750444239/favorite_ppq8mz.gif" style="width:50%;" alt="Pokemon Details"/>
</div>

### Pokemon Search

<div style="display: flex; justify-content: center;">
  <img src="https://res.cloudinary.com/dg9hqvlas/image/upload/v1750444230/search_tfgaau.gif" style="width:50%;" alt="Pokemon Details"/>
</div>

# 🧪 Testes Unitários

O projeto conta com testes unitários utilizando o Karma + Jasmine, cobrindo partes importantes da lógica:

- ✅ Componentização (exemplo: Header, PokemonCard)
- ✅ Lógica de filtragem e pesquisa
- ✅ Navegação entre telas
- ✅ Renderização condicional de componentes

Como rodar os testes:

```bash
ng test
```

Isso abrirá um navegador com os resultados dos testes em tempo real.

📂 Estrutura de Pastas Principal

```bash

src/
├── app/
│   ├── core/          # Serviços (ex: PokeAPI Service)
│   ├── models/        # Models (interfaces)
│   ├── shared/        # Componentes reutilizáveis (Header, PokemonCard)
│   ├── pages/         # Páginas principais (List, Details, Favorites)
│   └── ...
├── assets/            # Imagens, ícones
├── environments/      # Variáveis de ambiente
└── ...
```

# ✅ Funcionalidades

- ✅ Listagem de Pokémon com paginação

- ✅ Pesquisa por nome

- ✅ Detalhes de cada Pokémon

- ✅ Favoritar Pokémon

- ✅ Navegação entre telas

- ✅ Responsividade com Tailwind

- ✅ Componentes reutilizáveis (Header, Cards, etc)

- ✅ Testes unitários básicos

# 📌 Requisitos Técnicos Atendidos (Desafio)

- ✅ Estrutura em Angular

- ✅ Componentização e reutilização de código

- ✅ Uso de serviços com HttpClient

- ✅ Consumo de API externa (PokeAPI)

- ✅ Testes Unitários básicos

- ✅ Responsividade

- ✅ Estilização moderna (Tailwind)

- ✅ Boa organização de pastas e módulos


> Feito com 💙 por Wallace Santana [LinkedIn](https://www.linkedin.com/in/wallace-santanak0/) • [Github](https://github.com/wallacemt)
