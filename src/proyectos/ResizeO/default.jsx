import React from 'react'
import './styles.css'

const ResizeO = () => {

  const box = document.querySelector('textarea');

  // Observador
  const ro = new ResizeObserver( (entries)=>{
    for (const entry of entries) {
      box.value = `${entry.contentRect.width} x ${entry.contentRect.height} px`
    }
  })

  ro.observe(box) //Observado

  return (
    <div className='contain'>
      <h1>Example Resize</h1>
      <textarea resize className='textarea' name="area" id="area" cols="30" rows="10"></textarea>
    </div>
  )
}

export default ResizeO