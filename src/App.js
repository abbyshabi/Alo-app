import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router} from 'react-router-dom';
import BaseRouter from './routes'; 
import 'antd/dist/antd.css';
import './App.css';
import CustomLayout from './containers/Layouts';

function App() {
  return (
    <div className="">
    
       <Router>
        <CustomLayout>
          <BaseRouter/>
       </CustomLayout>
      </Router>
    </div>
  );
}

export default App;
