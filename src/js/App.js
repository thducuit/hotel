import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import  { Content, ContentHeader, Breadcrumb }  from 'K300';
import DefaultHeader from "./components/container/DefaultHeader.jsx";
import DefaultSidebar from "./components/container/DefaultSidebar.jsx";
import DefaultContent from "./components/container/DefaultContent.jsx";
import DefaultMenu from "./components/container/DefaultMenu.jsx";
import routes from './routes';

const App = () => {
  return (
    <div id="wrapper">
      <Router>
        <DefaultHeader />
        <DefaultSidebar>
          <DefaultMenu routes={routes} />
        </DefaultSidebar>

        <Content>
            <ContentHeader>
              <Breadcrumb/>
            </ContentHeader>
            <DefaultContent routes={routes} />
        </Content>
      </Router>
    </div>
  );
};
export default App;
ReactDOM.render(<App />, document.getElementById("app"));