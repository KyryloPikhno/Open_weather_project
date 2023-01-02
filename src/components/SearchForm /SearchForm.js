import {useSearchParams} from "react-router-dom";
import {joiResolver} from "@hookform/resolvers/joi";
import {useForm} from "react-hook-form";
import { FiSearch } from 'react-icons/fi'

import {queryValidator} from "../../validators";
import css from './SearchForm.module.css';


const SearchForm = () => {
    const [query, setQuery] = useSearchParams();

    const {handleSubmit, register, reset, formState: {errors}} = useForm({
        resolver: joiResolver(queryValidator),
        mode: 'all'
    })

    console.log(query.get('q'));

    const submit = ({query}) => {
        if (query) {
            setQuery({q: query})
        } else {
            setQuery('')
        }
        reset();
    };

    return (
        <div className={css.container}>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text"
                       placeholder={'Enter Location...'} {...register('query')}/>
                <button><FiSearch/></button>
            </form>
            {errors.query && <span className={css.error}>{errors.query.message}</span>}
        </div>
    );
};


export {SearchForm};