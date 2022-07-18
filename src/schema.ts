import { gql } from 'apollo-server';
import { typeDefsСollection } from './utils.js';

export const typeDefs = gql`
  ${await typeDefsСollection()}
`;