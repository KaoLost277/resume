import Navbar from './components/navbar';
import Page from './components/page'
import Sendmail from './components/sendemail';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Page/>} />
          <Route path="/sendemail" element={<Sendmail/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
