// const express = require('express');
const { ApolloServer, gql } = require('apollo-server');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');
const port = process.env.PORT || 8003;

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }
  input Bookinput {
    title: String
    author: String
  }
  type Query {
    book: [Book]
  }
  type Mutation {
    createBook(title: String, author: String): Book
  }
`;

const books = [{ title: "Salom", author: "Sanjar" }]
console.log(books)
const resolvers = {
  Query: {
    book: () => books
  },
  Mutation: {
    createBook(parent, args, context, info) {
      const create = (args) => {
        books.push({ ...args })
        const result = books.find((book) => {
          return book.title === args.title
        })
        console.log(books)
        return result;
      }
      return create(args)

    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  // context
  plugins: [
    ApolloServerPluginLandingPageGraphQLPlayground(),
  ],
})

server.listen(port, () => {
  console.log(`app is running on ${port}`)
})