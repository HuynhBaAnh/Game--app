import React from 'react'
import styles from './title.module.scss'

type Props = {
    title: string;
    color?: string;
}

export default function Title({ title, color }: Props) {
    return (
        <span className={color == 'black' ? styles.blackTitle : styles.Title}>
            {title}
        </span>
    )
}