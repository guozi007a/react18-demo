import React, { useEffect, useRef } from 'react'
import './index3.css'
import datas from './datas'

let height1 = 0
let height2 = 0
let minHeight = 0
let page = 1
let data = []
const showNum = 10
const seeHeight = 800
const f1 = document.createDocumentFragment()
const f2 = document.createDocumentFragment()

const WaterFall = () => {

  const wrap = useRef(null)
  const column1 = useRef(null)
  const column2 = useRef(null)

  function addImage() {
    data = datas.slice((page - 1) * showNum, page * showNum)
    if(data.length === 0) return
    for (let i = 0; i < data.length; i++) {
      const img = new Image()
      img.src = data[i].img
      if (height1 <= height2) {
        f1.appendChild(img)
        height1 += Math.round(data[i].height * 200 / data[i].width)
      } else {
        f2.appendChild(img)
        height2 += Math.round(data[i].height * 200 / data[i].width)
      }
    }
    console.log('f1: ', f1)
    console.log('height1: ', height1, 'height2: ', height2)
    column1.current.appendChild(f1)
    column2.current.appendChild(f2)
    minHeight = Math.min(height1, height2)
    page++
  }

  useEffect(() => {
    addImage()
    wrap.current.addEventListener('scroll', function () {
      const t = this.scrollTop
      if (t + seeHeight >= minHeight - 100) {
        console.log('t: ', t, '  ', 'minHeight: ', minHeight)
        addImage()
      }
    })
  }, [])
  return <div className='wrap' ref={wrap}>
    <div className='column1' ref={column1}></div>
    <div className='column2' ref={column2}></div>
  </div>
}

export default WaterFall