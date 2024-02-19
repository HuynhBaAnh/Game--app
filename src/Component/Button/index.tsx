import React from 'react'
import styles from './button.module.scss'

type Props = {
    title: string;
    color?: string;
}

export default function Button({ title, color }: Props) {
    return (
        <button className={color === 'black' ? styles.buttonBlack : styles.button}>
            {title}</button>
    )
}