import React from 'react';
import { useForm } from "react-hook-form";


const AddService = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = 'https://blooming-scrubland-04859.herokuapp.com/service';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                alert('service added');
            })
    }

    return (
        <div className='mx-auto w-50'>
            <h1>please add a service</h1>
            <form className='d-flex flex-column gap-2' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='service name' {...register("name", { required: true, maxLength: 20 })} />
                <input placeholder='service description' {...register("description")} />
                <input placeholder='service price' type="number" {...register("price")} />
                <input placeholder='image url' type="text" {...register("img")} />
                <input type="submit" value='Add Service' />
            </form>
        </div>
    );
};

export default AddService;