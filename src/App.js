
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Views/Home.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import ComponentTest from './Components/ComponentTest.jsx';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:storeId' element={<ComponentTest />} />

      </Routes>
    </BrowserRouter>

  );
}

export default App;
