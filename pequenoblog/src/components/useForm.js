import React ,{ useEffect, useState } from "react";

const useForm = (initialFieldValues) => {
    
    const [values, setVales] = useState(initialFieldValues)
    const [errors, setErrors] = useState({})


    const handleInputChange = e => {

        const { name, value } = e.target
        setVales({
            ...values,
            [name]: value
        })

    }
     return {
         values,
         setVales,
         errors,
         setErrors,
         handleInputChange
     };
}

export default useForm;