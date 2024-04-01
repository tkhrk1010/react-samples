import {
  Admin,
  Resource,
  // ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { dataProvider } from "./dataProvider";
// import { PostList } from "./posts";
// import { PostList, PostEdit } from "./posts";
import { PostList, PostEdit, PostCreate } from "./posts";
import { UserList } from "./users";
import { Dashboard } from './Dashboard';
import { authProvider } from './authProvider';
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";

export const App = () => <Admin authProvider={authProvider} dataProvider={dataProvider} dashboard={Dashboard}>
  {/* This component guesses the configuration to use for the list (column names and types) based on the data fetched from the API. */}
  {/* <Resource name="users" list={ListGuesser} /> */}
  {/* <Resource name="posts" list={ListGuesser} /> */}
  {/* <Resource name="posts" list={PostList} /> */}
  {/* <Resource name="posts" list={PostList} edit={EditGuesser} /> */}
  {/* <Resource name="posts" list={PostList} edit={PostEdit} /> */}
  {/* <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} /> */}
  {/* <Resource name="users" list={UserList} /> */}
  {/* <Resource name="users" list={UserList} recordRepresentation="name" /> */}
  {/* <Resource name="users" list={UserList} show={ShowGuesser} recordRepresentation="name" /> */}
  <Resource 
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
      icon={PostIcon}
  />
  <Resource
      name="users"
      list={UserList}
      show={ShowGuesser}
      recordRepresentation="name"
      icon={UserIcon}
  />
</Admin>;
