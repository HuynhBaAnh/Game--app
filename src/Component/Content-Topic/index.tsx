import React from 'react'
import styles from './topic.module.scss'

type Props = {
    title: string;
    color?: string;
}

export default function Topic({ title, color }: Props) {
    return (
        <span className={color == 'black' ? styles.blackTitle : styles.Title}>
            {title}
        </span>
    )
}