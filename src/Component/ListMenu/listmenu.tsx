import React from 'react'
import styles from './listmenu.module.scss'

type Props = {
    title: string;
}

export default function Listmenu({ title }: Props) {
    return (
        <li className={styles.list}>
            {title}
        </li>
    )
}