import React from 'react'
import '../Breadcrums/Breadcrum.css'
import arrow_icon from '../Assets/arrow2.jpg'

const Breadcrum = (props) => {
    const {product} = props;

  return (
    <div className='breadcrum'>
        HOME <img style={{height:"15px"}} src={arrow_icon} alt=''/> SHOP <img style={{height:"15px"}} src={arrow_icon} alt=''/>
        {product.category} <img style={{height:"15px"}} src={arrow_icon}  alt=''/> {product.name}
    </div>
  )
}

export default Breadcrum