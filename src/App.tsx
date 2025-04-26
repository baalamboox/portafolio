import { Routes, Route, BrowserRouter } from "react-router"

import MasterLayout from "./layouts/MasterLayout"
import Home from "./pages/Home"
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";

const App = () => <MasterLayout>
    <BrowserRouter>
        <Routes>
            <Route index element={ <Home /> } />
            <Route path="/experiencia" element={ <Experience /> } />
            <Route path="/habilidades" element={ <Skills /> } />
            <Route path="/proyectos" element={ <Projects /> } />
        </Routes>
    </BrowserRouter>
</MasterLayout>

export default App;
