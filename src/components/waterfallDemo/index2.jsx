import React, { useState, useEffect } from 'react'
import './index2.css'
import datas from './datas'
// import _ from 'lodash'
// import onloadingImg from './onloading....gif'

const WaterFall = () => {

  const [data1, setData1] = useState([])
  const [data2, setData2] = useState([])

  useEffect(() => {
    const imgWidth = 200
    let numsOnePage = 25
    let currentPage = 1
    let list = []

    function init() {
      let _data1 = []
      let _data2 = []
      let i = 0
      let totalHeight1 = 0
      let totalHeight2 = 0
      if (!datas[(currentPage - 1) * numsOnePage]) return
      list = datas.slice((currentPage - 1) * numsOnePage, currentPage * numsOnePage)
      while (i < list.length) {
        if (totalHeight1 <= totalHeight2) {
          _data1.push(list[i])
          // 这里要取等比缩放后的高度，因为不同图片即使原始高度相同，缩放后的高度也不一定相同
          totalHeight1 += Math.round(list[i].height * imgWidth / list[i].width)
        } else {
          _data2.push(list[i])
          totalHeight2 += Math.round(list[i].height * imgWidth / list[i].width)
        }
        i++
      }
      setData1(_data1)
      setData2(_data2)
    }

    init()

    window.addEventListener('scroll', function () {
      const t = document.documentElement.scrollTop
      const h = document.documentElement.clientHeight
      const s = document.documentElement.scrollHeight
      console.log(t, h , s)
      if (t + h >= s) {
        console.log('触底了')
        document.documentElement.scrollTop = 1
        currentPage++
        init()
        console.log('currentPage: ', currentPage)
      }
      if (t === 0) {
        console.log('回弹了')
        if (currentPage > 1) {
          document.documentElement.scrollTop = s / 2
          currentPage--
          init()
          console.log('currentPage: ', currentPage)
        }
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