import { FaAngleDown, FaRegUserCircle } from "react-icons/fa";

function User() {
    return (
        <FaRegUserCircle className="w-7 h-7" />
    );
}

export const navigation = [
    { id: 1, name: 'HOME', icon: null, url: '/' },
    { id: 2, name: 'ABOUT', url: '/about' },
    {
        id: 3, name: 'SERVICES', url: '/services', icon: <FaAngleDown />, child: [
            { id: 4, name: 'BOOKING', url: '/booking' },
            { id: 5, name: 'DINNER BUFFET', url: '/dinner-buffet' },
        ]
    },
    { id: 6, name: 'CONTACT', url: '/contact' },
    {
        id: 7, name: <User />, url: '/User', icon: <FaAngleDown />, child: [
            { id: 8, name: 'User', url: '/User' },
            { is: 9, name: 'Setting', url: '/setting' },
        ]
    }
];