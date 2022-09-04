import { useState } from "react"

/**
 * Store and retrieve the data of a form.
 * @param {field: value} fields 
 */
const useForm = (fields) => {
    const [data, setData] = useState(fields)

    const setField = (field, value) => {
        const form = {...data}
        form[field] = value
        setData(form)
    }
    const getField = (field) => data[field]
    console.log(data)
    return {getField, setField}
}

export default useForm