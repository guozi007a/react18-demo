/**
 * swiper@8.0.1 demo
 * 为了解决低版本swiper在react18的strictMode模式下不能使用的问题
 */
import React from 'react'
import './index.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

const SwiperComponent = () => {
  return <div className='wrap'>
    <Swiper
      modules={[Autoplay, Pagination]}
      // direction='vertical'
      style={{ width: '100%' }}
      autoplay
      loop
      pagination={{
        clickable: true,
        bulletClass: 'my-bullet',
        bulletActiveClass: 'my-bullet-active',
      }}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  </div>
}

export default SwiperComponent