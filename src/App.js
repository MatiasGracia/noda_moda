import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Principal from './components/Principal'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Principal />}></Route>
      </Routes>
    </BrowserRouter>
    <Footer />
    </>
  );
}
export default App;