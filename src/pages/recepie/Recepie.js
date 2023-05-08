//Styles
import './Recepie.css';

import { useParams } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import { useFetchFirestore } from '../../hooks/useFetchFirestore';

export default function Recepie () {
    const { id } = useParams();
    const {data: recipe, isPending, error } = useFetchFirestore('recipes', id)

    const { mode } = useTheme()

    return (
        <div className={`recipe ${mode}`}>  
            {isPending && <p className='loading'>Loading...</p>}
            {error && <p className='error'>{error}</p>}
            {recipe && (
                <>
                    <h2 className={`page-title ${mode}`}>{recipe.title}</h2>
                    <p>Takes {recipe.cookingTime} to cook.</p>
                    <ul>
                        {recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
                    </ul>
                    <p className="method">{recipe.method}</p>
                </>
            )}
        </div>
    )
};

