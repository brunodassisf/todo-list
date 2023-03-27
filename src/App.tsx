import React from "react";
import Layout from "./common/components/Layout";
import Home from "./pages/Home";
import { TaskContextProvider } from "./util/Context/task";

function App() {
  return (
    <TaskContextProvider>
      <Layout>
        <Home />
      </Layout>
    </TaskContextProvider>
  );
}

export default App;

