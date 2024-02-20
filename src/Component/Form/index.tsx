import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './form.module.scss';


const form = yup.object({
    adult: yup.number().required(),
    child: yup.number().required(),
    checkIn: yup.date().required(),
    checkOut: yup.date()
        .required("Check-out date is required")
        .min(yup.ref('checkIn'), 'Error'),
}).required();


interface typeForm {
    adult: number;
    child: number;
    checkIn: Date;
    checkOut: Date;
}

export default function Form() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(form),
    });

    const onSubmit = (data: typeForm) => {
        console.log(data);
    };

    return (
        <form className="container mx-auto border grid grid-cols-10" onSubmit={handleSubmit(onSubmit)}>
            <div className="col-span-8 sm:col-span-2 border mx-1">
                <input type="date" id="checkIn" {...register("checkIn")} placeholder='Check in' />
            </div>
            <div className="col-span-10 sm:col-span-2 border mx-1 relative">
                <input type="date" id="checkOut" {...register("checkOut")} placeholder='Check out' className={styles.input} />
                {errors.checkOut &&
                    <div className={styles.error}>{errors.checkOut?.message}</div>
                }
            </div>
            <div className="col-span-1o sm:col-span-2 border mx-1">
                <input type="text" placeholder='Adult' {...register("adult")} id='Adult' className={styles.input} />
            </div>
            <div className="col-span-1o sm:col-span-2 border mx-1">
                <input type="text" placeholder='Child' {...register("child")} id='Child' className={styles.input} />
            </div>
            <div className="col-span-10 sm:col-span-2 border mx-1">
                <button type="submit" className={`bg-orange-500 ${styles.button}`}>Submit</button>
            </div>
        </form >
    );
}
