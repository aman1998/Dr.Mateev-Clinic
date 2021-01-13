import React from "react"
import { Admin, Resource } from "react-admin"
import restProvider from 'ra-data-simple-rest'
import PostList from "./PostList";

const AdminPage = () => {
  return (
    <Admin dataProvider={restProvider('http://192.168.88.83:3001')} >
      <Resource name='blogs' list={PostList} />
    </Admin>
  );
}

export default AdminPage
