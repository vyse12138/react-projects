import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

const List = ({items}) => {
  return (
      <div className='list'>
          {items.map((item)=>{
            const {id, title} = item
            return(
                <div key={id} className='list-item border shadow my-3'>
                    <p className='list-title font-weight-bold'>{title}</p>
                    <button className='edit-button btn btn-success' type='button'>
                        <FaEdit/>
                    </button>
                    <button className='delete-button btn btn-danger' type='button'>
                        <FaTrash/>
                    </button>
                   
                </div>
            )
          })}
      </div>
  )
  
}

export default List