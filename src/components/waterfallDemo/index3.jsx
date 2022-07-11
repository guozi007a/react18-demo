import React, { useState, useEffect } from 'react'
import './index3.css'
import datas from './datas'

const WaterFall = () => {

  const imgRate = 0.4 // 图片等比缩放的比例
  const showNum = 10 // 单页显示条数

  const [data1, setData1] = useState([])
  const [data2, setData2] = useState([])
  const [totalHeight, setTotalHeight] = useState(0)
  const [totalHeight1, setTotalHeight1] = useState(0)
  const [totalHeight2, setTotalHeight2] = useState(0)

  useEffect(() => {
    // 获取所有数据排列好之后 左右列表各自总高度
    let i = 0
    let _totalHeight1 = 0
    let _totalHeight2 = 0
    while (i < datas.length) {
      _totalHeight1 <= _totalHeight2
        ? _totalHeight1 += Math.round(datas[i].height * imgRate)
        : _totalHeight2 += Math.round(datas[i].height * imgRate)
      i++
    }
    setTotalHeight1(_totalHeight1)
    setTotalHeight2(_totalHeight2)
    setTotalHeight(Math.max(_totalHeight1, _totalHeight2))
  }, [])

  return <div className='waterfall_wrap'>
    <div className='column1' style={{height: totalHeight1}}>
      {
        data1.map((item, index) => <img src={item.img} key={index} alt="" />)
      }
    </div>
    <div className='column2' style={{height: totalHeight2}}>
      {
        data2.map((item, index) => <img src={item.img} key={index} alt="" />)
      }
    </div>
  </div>
}

export default WaterFall