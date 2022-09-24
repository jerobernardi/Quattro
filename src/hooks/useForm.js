import { useState } from "react"

/**
 * Store and retrieve the data of a form.
 * @param {field: value} fields 
 */
const useForm = (fields) => {
    const defaults = fields
    const [data, setData] = useState(fields)

    const setField = (field, value) => {
        const form = {...data}
        form[field] = value
        setData(form)
    }    
    const clear = () => setData(defaults)
    return {setField, clear, data}
}

export default useForm