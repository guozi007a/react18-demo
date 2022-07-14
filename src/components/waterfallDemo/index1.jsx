import React, { useState, useEffect } from 'react'
import './index1.css'
import datas from './datas'
import _ from 'lodash'

const WaterFall = () => {

  const [data1, setData1] = useState([])
  const [data2, setData2] = useState([])

  useEffect(() => {
    function init(num) {
      const imgWidth = 300
      let _data1 = []
      let _data2 = []
      let i = 0
      let totalHeight1 = 0
      let totalHeight2 = 0
      let numsOnePage = 10
      while (i < Math.min(numsOnePage * num, datas.length)) {
        if (totalHeight1 <= totalHeight2) {
          _data1.push(datas[i])
          // 这里要取等比缩放后的高度，因为不同图片即使原始高度相同，缩放后的高度也不一定相同
          totalHeight1 += Math.round(datas[i].height * imgWidth / datas[i].width)
        } else {
          _data2.push(datas[i])
          totalHeight2 += Math.round(datas[i].height * imgWidth / datas[i].width)
        }
        i++
      }
      setData1(_data1)
      setData2(_data2)
    }

    init(1)
    window.addEventListener('scroll', function () {
      let t = document.documentElement.scrollTop
      let h = document.documentElement.clientHeight
      console.log(t, h)
      if (t > h / 2) {
        let debounced = _.debounce(init, 150)
        debounced(Math.ceil(t / h))
      }
    })
  }, [])

  return <div className='waterfall_wrap'>
    <div className='column1'>
      {
        data1.map((item, index) => <img src={item.img} key={index} alt="" />)
      }
    </div>
    <div className='column2'>
      {
        data2.map((item, index) => <img src={item.img} key={index} alt="" />)
      }
    </div>
  </div>
}

export default WaterFall