import {Outlet} from "react-router-dom";

import {Header} from "../components";


const MainLayoutPage = () => {

    return (
        <div>
            <div>
                <Header/>
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {MainLayoutPage};