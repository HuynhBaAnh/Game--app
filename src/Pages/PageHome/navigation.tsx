import { FaAngleDown } from "react-icons/fa";
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
];