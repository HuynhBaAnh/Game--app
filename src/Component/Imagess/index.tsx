import React from 'react'


type Props = {
    src: string;
    width?: string;
    paddingt?: string;
    paddingb?: string;
}


export default function Images({ src, width, paddingt, paddingb }: Props) {
    return (
        <img src={src} alt=""
            style={{ maxWidth: width, width: "100%", paddingTop: paddingt, paddingBottom: paddingb, boxShadow: "-3px 3px 3px black" }} />
    )
}