import React from 'react'
import './index1.css'
import datas from './datas'

const WaterFall = () => {
  return <div className='waterfall'>
    {
      datas.map((item, index) => <img key={index} src="" alt="" />)
    }
  </div>
}

export default WaterFall