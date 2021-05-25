import './App.css';
import {Admin, Resource} from "react-admin";
import restProvider from 'ra-data-simple-rest';
import PostList from './components/PostList';
import PostCreate from './components/PostCreate';
import PostEdit from './components/PostEdit';
import React from "react";

function App() {
  return (
    <Admin dataProvider={restProvider('http://localhost:3000')}>
      <Resource name="posts"
                list={PostList}
                create={PostCreate}
                edit={PostEdit} />
    </Admin>
  );
}

export default App;
