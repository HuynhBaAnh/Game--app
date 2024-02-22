import React from 'react';
import styles from './home.module.scss'
import { navigationMenu } from './navigation';
import { FaAlignJustify, FaAngleRight, FaMailBulk, FaMapMarked, FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, A11y, Autoplay, Virtual } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'react-datepicker/dist/react-datepicker.css';
import Form from '../../Component/Form';
import Topic from '../../Component/Content-Topic';
import Title from '../../Component/Title';
import Images from '../../Component/Imagess';
import { product } from './product';
import UlLi from '../../Component/Footer-ul';





export default function HomePage() {
    //click menu
    const [clickID, setClickID] = React.useState<number | null>(null);
    const handeOnClickID = (itemID: number) => {
        setClickID(clickID == itemID ? null : itemID);
    };

    const [click, setClick] = React.useState(false);
    const handOnClick = () => {
        setClick(!click);
    };

    //bắt sự kiện slide thay đổi 
    const [changeSlide, setchangeSlide] = React.useState(true)
    const handleChange = () => {
        changeSlide === true ? setchangeSlide(false) : setchangeSlide(true)
    }



    return (
        <>

            <nav className="bg-slate-900" >
                <div className="container mx-auto justify-between grid grid-cols-3 lg:grid-cols-5 xl:grid-cols-3">
                    <div className="grid lg:hidden col-span-1 items-center justify-start pl-5 ">
                        <FaAlignJustify className="w-7 h-7 text-white " onClick={handOnClick} />
                    </div>
                    <div className="flex items-center justify-start col-span-2 ">
                        <Title title='HOTELIER' size='28pt' fontWeigh='800' color='rgb(217 119 6 )' />
                    </div>

                    <ul className={`items-center col-span-3 lg:col-span-3 xl:col-span-1 lg:grid grid-cols-4 ${click ? 'flex-col' : 'hidden'}  `}>
                        {navigationMenu.map((item) => (
                            <li key={item.id} className="grid grid-cols-2 lg:flex text-white font-bold text-xl relative py-3 lg:py-8 lg:col-span-1 lg:justify-center lg:border-none border-slate-800 border-solid border-2 rounded m-1 ">
                                <a href={item.url} className="col-span-1 px-4 lg:px-0.5">
                                    {item.name}
                                </a>
                                {item.child && item.child.length > 0 ? (
                                    <span className="lg:flex grid items-center lg:pl-0.5 text-lg col-span-1 justify-end " onClick={() => handeOnClickID(item.id)}
                                        style={clickID === item.id ? { transform: "scaleY(-1)", transition: "0.5s" } : { transition: "0.5s" }}>
                                        {item.icon}
                                    </span>
                                ) : null}
                                {item.child && item.child.length > 0 ? (

                                    <div className={` hidden text-white lg:z-10 bg-slate-800 lg:w-44 py-2 font-bold  lg:top-full lg:absolute container mx-auto col-span-2 mt-4 lg:mt-1`}
                                        style={{ display: clickID === item.id ? 'block' : 'none', transition: '0.5s' }}
                                    >
                                        {item.child.map((child) => (
                                            <a href={child.url} key={child.id} className="flex flex-col px-6 my-3 text-base">
                                                {child.name}
                                            </a>
                                        ))}
                                    </div>
                                ) : null}
                            </li>
                        ))}
                    </ul>
                    <div>
                    </div>
                </div>
            </nav>
            <div className="h-0.5 bg-orange-500"></div>
            <header className={` ${styles.header}`}>
                <Swiper
                    modules={[Navigation, Pagination, A11y, Autoplay]}
                    spaceBetween={1}
                    slidesPerView={1}
                    navigation
                    loop={true}
                    direction={'horizontal'}
                    pagination={{ clickable: true }}

                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false
                    }}
                    onSlideChange={() => { handleChange() }}
                >
                    <SwiperSlide><img src="public/1.avif" alt="" style={{ width: '100%' }} /></SwiperSlide>
                    <SwiperSlide><img src="public/2.avif" alt="" style={{ width: '100%' }} /></SwiperSlide>
                </Swiper>

                <div className={`w-11/12 lg:w-4/5 mx-auto sm:top-full ${styles.form}`}>
                    <Form />
                </div>
            </header>

            <div className={`container mx-auto mt-2 md:mt-12 `}>
                <div className="pt-4">
                    <Topic title='Welcome to ' />
                    <Topic title='HOTELIER' color='black' />
                    <div className={`grid grid-cols-2 items-center`}>
                        <div className={`col-span-2 md:col-span-1 `}>
                            <div className={`text-center`}>
                                <Title title='5 STARS LUXURY HOTEL AND SERVICED RESIDENCE FOR LONG AND SHORT TERM STAY IN SAIGON'
                                    size='20pt' fontWeigh='400' />
                                <Title title='The Hotelier is not simply a place, it is a lifestyle.' fontWeigh='350' size='18pt' />
                                <Title title='Located in the heart of Ho Chi Minh City in the leafy and historic District 3, The Hotelier Saigon
                         is a stylish and sophisticated 5 stars all-suite hotel and serviced residence with
                          its impeccable facilities and services. It is designed for you to live life the way you want.' size='12pt' fontWeigh='250' />
                            </div>
                        </div>
                        <div className={`grid grid-cols-2 gap-1 col-span-2 md:col-span-1 `}>
                            <div className="grid col-span-1 justify-items-end">
                                <Images src='public/about-1.jpg' width='210px' />
                                <Images src='public/about-2.jpg' width='180px' paddingt='5px' />
                            </div>

                            <div className=" grid col-span-1 justify-start ">
                                <Images src='public/about-3.jpg' width='170px' paddingb='2px' />
                                <Images src='public/about-4.jpg' width='220px' />
                            </div>

                        </div>
                    </div>
                </div>

                <div className="pt-4">
                    <Topic title='Explore Our ' />
                    <Topic title='ROOMS' color='black' />
                    <div className='p-2'>
                        <Swiper modules={[Virtual, Autoplay]}
                            spaceBetween={40}
                            slidesPerView={3}
                            virtual
                            loop
                            autoplay={{ delay: 3000 }}
                        >
                            {product.map((slideContent) => (
                                <SwiperSlide key={slideContent.id} virtualIndex={slideContent.id}>
                                    <img className="w-full py-2" src={slideContent.url} alt="" />
                                    <Title title={slideContent.title} size='12pt' fontWeigh='250' />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>

            <footer className="bg-slate-900">
                <div className="container mx-auto grid grid-cols-4 ">
                    <div className="col-span-4 md:col-span-1 text-center">
                        <Title title='HOTELIER' size='28pt' fontWeigh='800' color='rgb(248, 217, 195)' textShadow='-5px 5px 6px rgb(217 119 6 )' />
                    </div>
                    <div className="col-span-4 md:col-span-1 ">
                        <div className="text-center">
                            <Title title='CONTACT' size='14pt' fontWeigh='750' color='rgb(217 119 6 )' />
                        </div>
                        <ul className="grid justify-center">
                            <UlLi icon={<FaMapMarked className="w-5 h-5" />} title='HO CHI MINH CITY' />
                            <UlLi icon={<FaPhoneAlt className="w-5 h-5" />} title='+012 345 67890' />
                            <UlLi icon={<FaMailBulk className="w-5 h-5" />} title='info@example.com' />
                        </ul>
                    </div>
                    <div className="col-span-4 md:col-span-1">
                        <div className="text-center">
                            <Title title='SERVICES' size='14pt' fontWeigh='750' color='rgb(217 119 6 )' />
                        </div>
                        <ul className="grid justify-center">
                            <UlLi icon={<FaAngleRight className="w-5 h-5" />} title='Food & Drink' />
                            <UlLi icon={<FaAngleRight className="w-5 h-5" />} title='Spa & Fitness' />
                        </ul>
                    </div>
                    <div className="col-span-4 md:col-span-1">
                        <div className="text-center">
                            <Title title='COMPANY ' size='14pt' fontWeigh='750' color='rgb(217 119 6 )' />
                        </div>
                        <ul className="grid justify-center">
                            <UlLi icon={<FaFacebook className="w-5 h-5 ml-9" />} title='https://www.facebook.com/anhhuynh0311' />
                        </ul>
                    </div>
                </div>
            </footer>

        </>

    )
}
