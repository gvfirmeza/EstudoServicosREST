# Estudo de Serviços Rest com Java

## O que é REST :

REST (Representational State Transfer) é um estilo arquitetural para desenvolvimento de aplicações web, que utiliza os protocolos HTTP para troca de dados. Ele se baseia no uso do protocolo HTTP para transferência de dados entre clientes e servidores, onde cada recurso do sistema é representado por uma URI (Uniform Resource Identifier) e é acessado utilizando os métodos padrão do HTTP (GET, POST, PUT, etc.).

## Objetivo de uma REST :

O objetivo da REST é permitir que diferentes sistemas possam se comunicar de forma padronizada e interoperável.

## Aonde Desenvolver :

Uma das formas mais comuns é utilizando o framework Spring Boot. O Spring é uma plataforma para desenvolvimento de aplicações Java, que inclui diversos módulos e ferramentas para construção de serviços REST.

## Funcionamento de uma REST :

Uma REST em Java utiliza o protocolo HTTP para implementar a comunicação entre cliente e servidor. O cliente envia uma requisição HTTP para o servidor, especificando o recurso desejado e os parâmetros da operação que deseja realizar. O servidor processa a requisição e retorna uma resposta HTTP, contendo o resultado da operação.

Os recursos em uma REST são representados por URLs, que são compostas por conjuntos de recursos. Para acessar um recurso, o cliente envia uma requisição HTTP ao servidor, contendo a URL correspondente ao recurso desejado.

## Métodos de uma REST :

- GET: usado para obter recursos de um servidor. Esse método deve ser usado quando a operação não causa alterações no servidor.
- POST: usado para criar um novo recurso no servidor. Este método envia dados para o servidor, que armazena as informações recebidas em um novo recurso.
- PUT: usado para atualizar um recurso existente no servidor. Este método substitui completamente o recurso existente pelos dados enviados.
- PATCH: semelhante ao PUT, mas é usado para atualizar parcialmente um recurso. Ou seja, apenas os campos especificados no pedido serão atualizados.
- DELETE: usado para excluir um recurso do servidor.

---

## `Materiais para Estudo:`

- Videos
    - [`Rest em 6 minutos`](https://www.youtube.com/watch?v=cRHF4trs318&ab_channel=CanalTI)
    - [`O que é Spring Framework?`](https://www.youtube.com/watch?v=5XPojnx9bb8&ab_channel=Alura)
    - [`REST // Dicionário do Programador`](https://www.youtube.com/watch?v=S7MduKwvVGk&ab_channel=CódigoFonteTV)
    - [`What is the Spring framework really all about?`](https://www.youtube.com/watch?v=gq4S-ovWVlM&ab_channel=JavaBrains)`
- Artigos
    -  [`Conceitos e Fundamentos do REST`](https://www.alura.com.br/artigos/rest-conceito-e-fundamentos?gclid=CjwKCAjwjMiiBhA4EiwAZe6jQxMGa9ZG-Np58LXSdGmw6nbMyG1nR6-8hyxyZ4BT3_ghytmcoARKQxoC_aQQAvD_BwE)
    -  [`Documentação Spring Boot`](https://spring.io/projects/spring-boot)
    
---

## `Anotações :`

    
   **CRUD** →  (Create, Read, Update, Delete). São as quatro operações básicas do desenvolvimento de uma aplicação, sendo utilizadas em bases de dados relacionais fornecidas aos utilizadores do sistema. 
    
   **DTO** → (Data Transfer Object) é um padrão de software voltado para a transferência de dados entre as camadas de uma aplicação. Ele consiste basicamente no entendimento de como as informações trafegam dentro de um sistema.
    
   **Record** → É um recurso que permite representar uma classe imutável, contendo apenas atributos, construtor e métodos de leitura, de uma maneira muito simples e enxuta. Esse tipo de classe se encaixa perfeitamente para representar classes DTO, já que seu objetivo é apenas representar dados que serão recebidos ou devolvidos pela API, sem nenhum tipo de comportamento.
    
   **JPA** → (Java Persistence API) é uma API padrão da linguagem Java que descreve uma interface comum para frameworks de persistência de dados. A JPA define um meio de mapeamento objeto-relacional para objetos Java simples e comuns, denominados beans de entidade.
    
   **DAO** → (Data Access Object) é um padrão para aplicações que utilizam persistência de dados, onde tem a separação das regras de negócio das regras de acesso a banco de dados.
    
   **Bean Validation** → A validação de bean define um modelo de metadados e uma API para validação de JavaBean. A fonte de metadados são anotações, com a capacidade de substituir e estender os metadados por meio do uso de descritores de validação XML.
