import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from "axios";


function Freebook() {

  const [book, setBook] = useState([]);
  useEffect(() =>
  {
    const getBook = async() =>
      {
        try{
          const res = await axios.get("book-store-api-nu.vercel.app/book");
          const data = res.data.filter((data) => data.catgory === "free");
          console.log(data);
          setBook(data);

        }catch{
          console.log(err);

        }
      }
      getBook();
  }, [])
//   const filterData = list.filter((data) => data.catgory === "free");
// //  console.log(filterData);
//   console.log(filterData);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md: px-20 px-4 text-black dark:text-white'>
      <div>
      <h1 className='font-semibold text-xl pb-2'>Free offered Courses</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum consectetur expedita, rem fuga reprehenderit corrupti, ut voluptate nesciunt sequi omnis odio id laborum officia tempore consequuntur modi non. Atque, magnam?</p>
      </div>
    
    <br />

    <div className='slider-container text-black'>
    <Slider {...settings}>
       {book.map((item) => (
        <Cards key = {item.id} item = {item}/>
       ))}
      </Slider>
    </div>
    </div>
    </>
  )
}

export default Freebook
