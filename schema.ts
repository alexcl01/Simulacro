export const typeDefs = `#graphql
type Query {
    character(id: ID!): Character
    charactersByIds(ids: [ID!]!): [Character]
}

type Character {
   id: ID!
   name: String!
   episode: [Episode!]!
}

type Episode {
  id: ID!
  name: String!
  characters: [Character!]!
}

`;