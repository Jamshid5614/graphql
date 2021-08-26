const { gql } = require("apollo-server-express");

// const typeDefs = gql`
//   type Query {
//     getUsers(status: String, limit: Int): UserConnection
//     getUser(_id: ID): User
//   }
//   type User {
//     name: String
//     email: String
//     password: String
//     _id: ID
//   }
//   input UserInput {
//     name: String
//     email: String
//     password: String
//   }
//   type UserConnection {
//     payload: [User]
//   }
//   input updateUserInput {
//     name: String
//     email: String
//     password: String
//   }
//   type Mutation {
//     createUser(data: UserInput): User
//     updateUser(_id: ID, data: updateUserInput): User
//     deleteUser(_id: ID): Boolean
//   }
// `;

const typeDefs = gql`
    type User {
        name: String
        email: String
        password: String
        _id: ID
    }
    type Query {
        getAllUsers: [User]
        getUser(getbyName: getUserByNameInput): [User]
    }
    input getUserByNameInput {
        name: String
    }
    input userInput {
        name: String
        email: String
        password: String
    }
    input updateUserInput {
        name: String
        email: String
        password: String
    }
    type Mutation {
        createUser(data: userInput): User
        updateUser(_id: ID,data: updateUserInput): User
        deleteUser(_id: ID): Boolean
    }
`;

module.exports = typeDefs;
