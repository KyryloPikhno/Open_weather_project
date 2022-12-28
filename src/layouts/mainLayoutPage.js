import {Outlet} from "react-router-dom";

import {Header} from "../components";
import css from './mainLayout.module.css'


const MainLayoutPage = () => {

    return (
        <div className={css.container}>
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