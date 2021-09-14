import React from "react";
import { Router } from "react-router";
import { HomeView } from './view/homeView/HomeView'
import {Routes} from './routes/Routes'
import { UserProvider } from "./shared/provider/UserProvider";

function App() {
  return (
    <UserProvider>
        <Routes>
          
        </Routes>
    </UserProvider>
  );
}

export default App;
