import {Route, Routes, Navigate} from "react-router-dom";

import {WeatherDetailsPage} from "./pages";
import {MainLayoutPage} from "./layouts";


function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayoutPage/>}>
                <Route index element={<Navigate to={'/weather'}/>}/>
                <Route path={'/weather'} element={<WeatherDetailsPage/>}/>
            </Route>
        </Routes>
    );
}



export default App;
