import { useEffect, useState } from "react"
import { projectForestore } from "../firebase/config"

export const useFetchFirestore = (collection, id, searchParam) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => { 
        setIsPending(true)
        let unsub;

        if(id != null){ //Fetching a particular recipe
            unsub = projectForestore.collection(collection).doc(id).onSnapshot((doc) => {
                if(doc.exists){
                    setIsPending(false)
                    setData(doc.data())
                }
                else{
                    setIsPending(false)
                    setError('Coudnot find the recipe')
                }
            })
        }
        else { 
             unsub = projectForestore.collection(collection).onSnapshot((snapshot) => {
                if(snapshot.empty){
                    setError('No recipes to load')
                    setIsPending(false)
                }
                else{
                    let results = []
                    snapshot.docs.forEach(doc => {
                        if(searchParam != null ){ //Searched recipes
                            if(doc.data().title.toLowerCase().includes(searchParam.toLowerCase())){
                                results.push({id: doc.id, ...doc.data()})
                            }
                        }
                        else{//Fetching all recipes
                            results.push({ id: doc.id, ...doc.data() })
                        }
                    })
                    setData(results)
                    setIsPending(false)
                }
            }, (err) => {
                setError(err.message)
                setIsPending(false)
            })
        }
        
        
        return () => unsub()
    }, [id])

    return { data, isPending, error }
}