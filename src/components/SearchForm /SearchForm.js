import {useSearchParams} from "react-router-dom";
import {joiResolver} from "@hookform/resolvers/joi";
import {useForm} from "react-hook-form";

import {cityNameValidator} from "../../validators";


const SearchForm = () => {
    const [query, setQuery] = useSearchParams();

    const {handleSubmit, register, reset, formState: {errors, isValid}} = useForm({
        resolver: joiResolver(cityNameValidator),
        mode: 'all'
    })

    const submit = ({query}) => {
        if(query){
        setQuery({q: query})
        }else{
            setQuery('')
        }
        // reset()
    };

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text"
                       placeholder={'Enter movie...'} {...register('query')}/>
                <button
                    disabled={!isValid}>Search
                </button>
                {errors.query && <span>{errors.query.message}</span>}
            </form>
        </div>
    );
};

export {SearchForm};