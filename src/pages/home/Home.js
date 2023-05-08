//Styles
import './Home.css';

//Components and hooks
import RecepieList from '../../components/RecepieList'
import { useFetchFirestore }  from '../../hooks/useFetchFirestore';

export default function Home () {
    const { data, isPending, error } = useFetchFirestore('recipes')

    return (
        <div className='home'> 
            {isPending && <p className='loading'>Loading....</p>} 
            {error && <p className='error'>{error}</p>}
            {data && <RecepieList recipes={data} />} 
        </div>
    )
};
