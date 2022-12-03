import redditimage from './Components/Images/logo.png'
import News from './Components/News';
import { useEffect } from 'react';
import { useState } from 'react';
import lamp from './Components/Images/lamp.png'
import refreshicon from './Components/Images/refresh.png'

function App() {


  const [news, setnews] = useState('');
  const [bgcolor, setbgcolor] = useState('');
  const [textcolor, settextcolor] = useState('')

  useEffect(() => {

    fetchnews()

  }, [])


  const togglechange = () => {
    if(bgcolor === "#EEECEC"){
      setbgcolor('black')
      settextcolor('white')
    } else {
      setbgcolor('#EEECEC')
      settextcolor('black')
    }

  }

  

  

  



  async function fetchnews() {

    function rannumber(min, max){
      return Math.floor(Math.random() * (max - min) + min);
    }


    const data = await fetch(`https://www.reddit.com/r/Conservative.json`);
      const res = await data.json()

      var rannum = rannumber(0, 24)
    
    

      for(var x = 0; x < rannum; x++){
        
        
        setnews(res["data"]["children"][rannum]["data"]["title"])
  
      }

    
    

    

    

    
   
    
    

    

    

    

    
    
    
  }

  return (
    <div className="App">
      <div className="background">
        <img src={redditimage} alt="" className='logo'/><h1 className="title">REDNEWS</h1>
      </div>
      
      <div className="container" style={{background: bgcolor}}>
        <button className='btn' onClick={() => togglechange()}><img src={lamp} alt="" /></button>
        <button className='rbtn' onClick={() => fetchnews()}><img src={refreshicon} alt="" /></button>
        <News Text={news} textcolor={textcolor}/>
        <p>Made by Noah</p>
      </div>
    </div>
  );
}

export default App;
