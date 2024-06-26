import React from 'react'

const Student = (props) => {
  return (
    <div className="Student">
        <p className='Student.p'>Name:{props.name}</p>
        <p className='Student.p'>Age:{props.age}</p>
        <p className='Student.p'>Student:{props.isStudent ? "Yes":"No"}</p>

    </div>
  )
}

export default Student 