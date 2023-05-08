import './RecepieList.css'

import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import deleteIcon from '../assets/delete-icon.svg'
import { projectForestore } from '../firebase/config'

export default function RecepieList({ recipes }) {

    const { mode } = useTheme()

    if (recipes.length === 0) {
        return <div className="error">No recipes to load...</div>
    }

    const handleClick = (id) => {
        projectForestore.collection('recipes').doc(id).delete()
    }

    return(
        <div className={`recipe-list ${mode}`}>
            {recipes.map(recipe => (
                <div key={recipe.id} className={`card ${mode}`}>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.cookingTime} to make.</p>
                    <p>{recipe.method.substring(0, 100)}....</p>
                    <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
                    <img
                        src={deleteIcon}
                        className='delete'
                        onClick={() => handleClick(recipe.id)}
                    />
                </div>
            ))} 
            
        </div>  
    )
}

