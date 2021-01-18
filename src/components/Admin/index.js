import React from "react"
import { Admin, Resource } from "react-admin"
import restProvider from 'ra-data-simple-rest'
import PostList from "./PostList";

const AdminPage = () => {
  return (
    <Admin dataProvider={restProvider('https://api.arenagames.io')} >
      <Resource name='rates' list={PostList} />
    </Admin>
  );
}

export default AdminPage
