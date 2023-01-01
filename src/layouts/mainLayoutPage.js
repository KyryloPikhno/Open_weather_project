import {Outlet} from "react-router-dom";

import css from './mainLayout.module.css'


const MainLayoutPage = () => {

    return (
        <div className={css.container}>
                <Outlet/>
        </div>
    );
};

export {MainLayoutPage};