import {BrowserRouter , Routes , Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';
import Home from "./Pages/Home"
import Resume from "./Pages/Resume"
import Contact from "./Pages/Contact"
import Header from "./Pages/Header";
import Footer from "./Pages/Footer";
import Projects from "./Pages/Projects";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/resume" element={<Resume />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="*" element={<div>NOT FOUND</div>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
