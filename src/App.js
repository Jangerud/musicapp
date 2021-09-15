import React from "react";
import { Router } from "react-router";
import { HomeView } from './view/homeView/HomeView'
import {Routes} from './routes/Routes'
import { UserProvider } from "./shared/provider/UserProvider";
import { Navigation } from "./components/navigation/Navigation";

function App() {
  return (
    <UserProvider>
        <Routes>
          <Navigation />
        </Routes>
    </UserProvider>
  );
}

export default App;
