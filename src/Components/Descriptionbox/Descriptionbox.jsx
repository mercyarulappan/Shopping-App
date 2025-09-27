import React from 'react'
import './Descriptionbox.css'

const Descriptionbox = () => {
  return (
    <div className='descriptionbox'>
        <div className="discriptionbox-navigator">
            <div className="discriptionbox-nav-box">
                Description
            </div>
            <div className="discriptionbox-nav-box fade">
                Reviews (122)
            </div>
        </div>
        <div className="discriptionbox-description">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, sed. Ipsum velit optio provident est natus! Excepturi omnis ut, amet delectus quisquam praesentium at totam sit iusto adipisci ad labore!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam voluptates repellendus omnis, quod deserunt perferendis dolorum corrupti dignissimos. Animi, quia.
            </p>
        </div>
    </div>
  )
}

export default Descriptionbox