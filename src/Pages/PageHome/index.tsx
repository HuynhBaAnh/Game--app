import React from 'react';
import { navigationMenu } from './navigation';
import { FaAlignJustify } from "react-icons/fa";
import Button from '../../Component/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';




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

    //bắt sự kiện chọn ngày
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);
    const handleDateChange = (date: Date) => {
        setSelectedDate(date);
    };
    return (
        <>

            <nav className="bg-slate-900">
                <div className="container mx-auto justify-between grid grid-cols-3 lg:grid-cols-5 xl:grid-cols-3">
                    <div className="grid lg:hidden col-span-1 items-center justify-start pl-5 ">
                        <FaAlignJustify className="w-7 h-7 text-white " onClick={handOnClick} />
                    </div>
                    <div className="flex items-center justify-start col-span-2 ">
                        <span className="text-4xl text-amber-600 font-bold ml-11 py-4 lg:mr-6 lg:py-0" >
                            HOTELIER
                        </span>
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
                                            <a href={child.url} key={child.id} className="flex flex-col px-8 my-3 text-base">
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
            <header className=" relative">
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


                <div className="container mx-auto border grid grid-cols-5">
                    <div className="col-span-5 sm:col-span-1 border mx-1">
                        <DatePicker
                            selected={selectedDate}
                            onChange={handleDateChange}
                            placeholderText="Check in"
                            dateFormat="dd/MM/yyyy"
                            isClearable
                            showYearDropdown
                            scrollableYearDropdown
                        />
                    </div>
                    <div className="col-span-5 sm:col-span-1 border mx-1">
                        <DatePicker
                            selected={selectedDate}
                            onChange={handleDateChange}
                            placeholderText="Check out"
                            dateFormat="dd/MM/yyyy"
                            isClearable
                            showYearDropdown
                            scrollableYearDropdown
                        />
                    </div>
                    <div className="col-span-5 sm:col-span-1 border mx-1">

                    </div>
                    <div className="col-span-5 sm:col-span-1 border mx-1">

                    </div>
                    <div className="col-span-5 sm:col-span-1 border mx-1">

                    </div>
                </div>
            </header>
        </>

    )
}
