import React from 'react'


type Props = {
    title: string;
    size?: string;
    fontFamily?: string;
    fontWeigh?: string;
    color?: string;
    textShadow?: string;
}

export default function Title({ title, size, fontFamily, fontWeigh, color, textShadow }: Props) {
    return (
        <p style={{ fontSize: size, fontFamily: fontFamily, fontWeight: fontWeigh, color: color, textShadow: textShadow }}>
            {title}
        </p>
    )
}