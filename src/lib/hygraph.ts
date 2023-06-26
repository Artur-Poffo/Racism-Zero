import { GraphQLClient } from 'graphql-request'

export const hygraph = new GraphQLClient(
  process.env.CONTENT_API ? process.env.CONTENT_API : '',
)
