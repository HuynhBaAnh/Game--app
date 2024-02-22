import React from 'react'

type Props = {
    title?: string;
    icon?: React.ReactNode;
}

export default function UlLi({ title, icon }: Props) {
    return (
        <li className="grid grid-cols-6 text-white items-center py-1">
            <p className="col-span-1 mr-2">
                {icon}
            </p>
            <p className="col-span-5 ">
                {title}
            </p>

        </li>
    )
}