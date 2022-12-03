import React from 'react'


const News = ({Text, textcolor}) => {
  return (
    <div>
      <p className='titletext' style={{color: textcolor}}>Random News Generator</p>
      <h3 className='news'>{Text}</h3>
    </div>
  )
}

export default News
