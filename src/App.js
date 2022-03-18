import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Principal from './components/Principal'
import Footer from './components/Footer'
import Crear from './components/Crear'



function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Principal />}></Route>
        <Route path="/solomelicrear" element={<Crear />}></Route>
      </Routes>
    </BrowserRouter>
    <Footer />
    </>
  );
}
export default App;