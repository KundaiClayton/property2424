import React from 'react'
import './Backdrop.css'

const backdrop=props=>(
    <div className="backdrops" onClick={props.click}/>
);

export default backdrop;