import React from 'react';
import ApolloCLient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Post from './Posts/Post';
import Posts from './Posts/Posts';
import NewPost from './Posts/NewPost';
import './App.css';

// Connecting site to GraphQL
const client = new ApolloCLient({
  uri: 'https://api-uswest.graphcms.com/v1/cjkldz47x0jl801dltj3tafk3/master',
});

// client
//   .query({
//     query: testQuery,
//   })
//   .then(res => console.log(res));

// ApolloProvider is attached to the client
const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <h1 className="App-title">GraphQL is Awesome!</h1>
          </Link>
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Posts} />
            <Route exact path="/post/new" component={NewPost} />
            <Route path="/post/:id" component={Post} />
          </Switch>
        </main>
      </div>
    </Router>
  </ApolloProvider>
);

export default App;
