import {useSearchParams} from "react-router-dom";
import {joiResolver} from "@hookform/resolvers/joi";
import {useForm} from "react-hook-form";

import {cityNameValidator} from "../../validators";
import css from './SearchForm.module.css';


const SearchForm = () => {
    const [query, setQuery] = useSearchParams();

    const {handleSubmit, register, reset, formState: {errors, isValid}} = useForm({
        resolver: joiResolver(cityNameValidator),
        mode: 'all'
    })

    const submit = ({query}) => {
        if (query) {
            setQuery({q: query})
        } else {
            setQuery('')
        }
        reset()
    };

    return (
        <div className={css.container}>
            <form onSubmit={handleSubmit(submit)} className={css.search}>
                <input type="text"
                       placeholder={'Enter Location...'} {...register('query')}/>
                {errors.query && <span>{errors.query.message}</span>}
            </form>
        </div>
    );
};

export {SearchForm};