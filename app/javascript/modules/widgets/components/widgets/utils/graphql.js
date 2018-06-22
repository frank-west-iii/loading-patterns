import gql from "graphql-tag";

export const query = gql`
  query {
    widgets {
      id
      name
    }
  }
`;
