# 2022-BeeS
Assignment for the 2022 edition of the "Web Development and the Semantic Web" course, by Ângelo Mendonca Frechiani, Juliane Azeredo Ferreira, Luana Gabriele de Sousa Costa, Raphael Machado Monteiro and Tiago da Cruz Santos

## Desenvolvedor
1. Criação do arquivo .env no diretório de backend [bees-backend]. Há um arquivo .env.example que mostra o padrão de criação deste.
2. Para subir o banco de dados deve-se rodar o comando no diretório de backend:

    ```docker-compose up -d db```
3. Para criar as tabelas do banco de dados, rodar o comando:

    ```yarn typeorm-ts-node-commonjs migration:run -d ./ormconfig.ts```
4. Rodar o comando de instalação de dependências:

    ```yarn install```
5. Para iniciar o servidor de desenvolvimento, rodar o comando:

    ```yarn dev```
    
## Produção
1. Criação do arquivo .env no diretório de backend [bees-backend]. Há um arquivo .env.example que mostra o padrão de criação deste.

2. Para subir o banco de dados deve-se rodar o comando no diretório de backend:

    ```docker-compose up -d```