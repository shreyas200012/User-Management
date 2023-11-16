import axios from "axios"
import { useEffect, useState } from "react"



const UseFetch = (url: string) => {
    const [value, setValue] = useState<any>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<any>(null)

    useEffect(() => {
        setIsLoading(true)
        const fetchData = async () => {
            try {
                const res = await axios.get(url);
                setValue(res.data)
                setIsLoading(false)
            }
            catch (err) {
                setError(err)
                setIsLoading(false)
            }
        }

        fetchData()
    }, [url])

    return { value, isLoading, error }
}


export default UseFetch