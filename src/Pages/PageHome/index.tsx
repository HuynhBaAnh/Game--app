import React from 'react';
import { navigation } from './navigation';


export default function Navigation() {
    const [click, setClick] = React.useState(false);
    const handeOnClick = () => {
        click ? setClick(false) : setClick(true);
    }
    return (
        <nav className="bg-slate-900">
            <div className="container mx-auto flex justify-between">
                <span className="flex items-center text-4xl text-amber-600 font-bold">
                    HOTELIER
                </span>
                <ul className="flex items-center">
                    {navigation.map((item) => (
                        <li key={item.id} className="flex px-5 text-white font-bold relative py-8">
                            <a href={item.url}>
                                {item.name}
                            </a>
                            {item.child && item.child.length > 0 ? (
                                <span className="flex items-center px-1 text-lg" onClick={handeOnClick}
                                    style={click ? { transform: "scaleY(-1)", transition: "0.5s" } : { transition: "0.5s" }}>
                                    {item.icon}
                                </span>
                            ) : null}
                            {item.child && item.child.length > 0 ? (

                                <div className=" hidden text-white absolute z-1 bg-slate-800 w-44 py-2 font-bold top-full "
                                    style={{ display: click ? 'block' : 'none', transition: 'height 0.5s' }}
                                >
                                    {item.child.map((child) => (
                                        <a href={child.url} key={child.id} className="flex flex-col px-2 my-2">
                                            {child.name}
                                        </a>
                                    ))}
                                </div>
                            ) : null}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}
