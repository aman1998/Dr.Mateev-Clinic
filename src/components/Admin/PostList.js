import React from 'react'
import { List, Datagrid, TextField, DateField, EditButton, DeleteButton } from "react-admin"

const PostList = (props) => {
 return (
  <List {...props}>
    <Datagrid>
      <TextField source='name' />
      <TextField source='text' />
      {/* <DateField source='publishedAt' /> */}
      <EditButton basePath='/blog'/>
      <DeleteButton basePath='/blog' />
    </Datagrid>
  </List>
 )
}

export default PostList