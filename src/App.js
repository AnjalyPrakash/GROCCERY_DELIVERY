import { Route, Routes } from 'react-router-dom';
import './App.css';
import Grocceries from './Component/Grocceries';
import Header from './Common/Header';
import Footer from './Common/Footer';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Grocceries />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
