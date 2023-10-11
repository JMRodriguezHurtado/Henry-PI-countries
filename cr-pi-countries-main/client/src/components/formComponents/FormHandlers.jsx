import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { createActivity, getAllCountries } from '../../redux/action';
import { validateForm, validateSubmit } from './Validation/validations';

export default function FormHandlers() {

    const dispatch = useDispatch()
    const activities = useSelector(state => state.activities)

    const [form, setForm] = useState({
        name: '',
        difficulty:'',
        duration:'',
        season:'',
        Countries:[]
    })

    const [errors, setErrors] = useState({})

    useEffect(() => {
        dispatch(getAllCountries())
    },[])

    useEffect(() => {

        setErrors(validateForm(form))

    },[form])


    const submitHandler = (event) => {
        event.preventDefault()
        console.log(activities)
        console.log(form.Countries)
        console.log(form.name)

        if(!validateSubmit(form)){
            setForm({
                ...form,
                difficulty: Number(form.difficulty),
                duration: Number(form.duration),
    
            })
            dispatch(createActivity(form))

            setForm({
                name:'',
                difficulty:'',
                duration:'',
                season:'',
                rating:'',
                image:'',
                Countries:[]
            })
        }else{
            alert('You must complete the form correctly')
        } 
    }
     return {
        form,
        errors,
        submitHandler,
    };
}


