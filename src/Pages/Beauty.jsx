import React from 'react'
import Item from '../Components/Items/Item'
import './CSS/Beauty.css'
import beauty_collections from '../Components/Assets/beauty'

const Beauty = () => {
  return (
   <div className='new-collections'>
        <h1>Some Beauty Items</h1>
        <hr />
        <div className="collections">
            {beauty_collections.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price = {item.new_price} old_price={item.old_price}/>

})}

        </div>
    </div>
  )
}

export default Beauty