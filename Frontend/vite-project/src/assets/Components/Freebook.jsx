import React from 'react'
import list from "../../../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';

function Freebook() {
 const filterData = list.filter((data) => data.catgory === "free");
 console.log(filterData);
  console.log(filterData);
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
       {filterData.map((item) => (
        <Cards item = {item} key = {item.id}/>
       ))}
      </Slider>
    </div>
    </div>
    </>
  )
}

export default Freebook