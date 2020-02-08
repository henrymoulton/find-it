import React from 'react';
import {StyleSheet} from 'react-native';
import AWSAppSyncClient from "aws-appsync";
import Amplify from 'aws-amplify';
import amplify from './aws-exports';
import {ListTodos} from "./ListTodos";
import {ApolloProvider} from 'react-apollo'

const client = new AWSAppSyncClient({
  url: amplify.aws_appsync_graphqlEndpoint,
  region: amplify.aws_appsync_region,
  auth: {
    type: amplify.aws_appsync_authenticationType,
    apiKey: amplify.aws_appsync_apiKey,
  }
});

Amplify.configure(amplify)

export default function App() {

  return (
      <ApolloProvider client={client}>
        <ListTodos/>
      </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
