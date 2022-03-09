import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Principal from './components/Principal'
import Footer from './components/Footer'
import Categoria from './components/Categoria'
function App() {
  return (
    <>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Principal />}></Route>
        <Route path="categoria" element={<Categoria />}>
          <Route path=":id" element={<Categoria />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <Footer />
    </>
  );
}
export default App;