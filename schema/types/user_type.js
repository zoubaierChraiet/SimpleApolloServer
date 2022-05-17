import { gql } from "apollo-server";

const userType = gql`
  type User {
    name: String
    lastName: String
    age: Int
    email: String
  }

  type Query {
    users: [User]
  }
`;

export { userType };
