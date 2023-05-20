import React from 'react';
import "./Dom.css"
import { Link } from 'react-router-dom';

export const Dom = () => {
  return (

    <div className='horizontal'>

      <ul>
        <li>  <Link to="/main">Main</Link></li>
        <li>  <Link to="/">Home</Link></li>
        
        <li style={{float:"right"}}><Link to ="/content">Content</Link></li>
    </ul>
 
    </div>
    
  )
}
