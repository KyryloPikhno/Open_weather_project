import {Route, Routes, Navigate} from "react-router-dom";
import {MainLayoutPage} from "./layouts";


function App() {
  return (
    <Routes path={'/'} element={<MainLayoutPage/>} >
        <Route/>
    </Routes>
  );
}

export default App;
