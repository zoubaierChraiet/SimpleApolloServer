import { ApolloServer, gql } from "apollo-server";
import Mongoose from "mongoose";

import { userType } from "./schema/types/user_type.js";

const resolvers = {
  Query: {
    users: () => [
      {
        name: "zouba",
        lastName: "chraiet",
        age: 25,
        email: "zouba.chraiet@yahoo.com"
      }
    ]
  }
};

Mongoose.connect(
  "mongodb://localhost:27017/zouPitch",
  { useNewUrlParser: true, useUnifiedTopology: true },
  err => {
    if (err) {
      console.log(err);
    } else {
      console.log("mongoDB is connected");
    }
  }
);

const server = new ApolloServer({ typeDefs: [userType], resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
