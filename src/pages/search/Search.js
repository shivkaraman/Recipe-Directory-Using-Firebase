//Styles
import './Search.css';

import { useLocation  } from 'react-router-dom';

import RecepieList from '../../components/RecepieList';
import { useFetchFirestore } from '../../hooks/useFetchFirestore';

export default function Search () {
    const queryString = useLocation().search
    const queryParams = new URLSearchParams(queryString)
    const query = queryParams.get("q")

    const { data, isPending, error} = useFetchFirestore('recipes', null, query)

    return (
        <div>
            <h2 className="page-title">Recipes including "{query}"</h2>
            {error && <p className="error">{error}</p>}
            {isPending && <p className="loading">Loading...</p>}
            {data && <RecepieList recipes={data} />}
        </div>
    )
};
