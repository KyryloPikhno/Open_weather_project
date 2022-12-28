import {SearchForm} from "../SearchForm /SearchForm";

const Header = () => {

    return (
        <div>
            <SearchForm/>
            {/*<div className="search">*/}
            {/*    <input*/}
            {/*        value={location}*/}
            {/*        onChange={event => setLocation(event.target.value)}*/}
            {/*        onKeyPress={searchLocation}*/}
            {/*        placeholder='Enter Location'*/}
            {/*        type="text" />*/}
            {/*</div>*/}
        </div>
    );
};

export {Header};