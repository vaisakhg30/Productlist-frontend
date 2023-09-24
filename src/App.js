import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProductList from './components/ProductList';
import Add from './components/Add';
import AddSub from './components/AddSub';
import View from './components/View';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<ProductList/>}/>
        <Route path='/add' element={<Add/>}/>
        <Route path='/addsub' element={<AddSub/>}/>
        <Route path='/view' element={<View/>}/>





      </Routes>
     
    </div>
  );
}

export default App;
