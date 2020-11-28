import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

const List = ({items, removeItem, editItem}) => {
  return (
      <div className='list'>
          {items.map((item)=>{
            const {ID, title} = item
            return(
                <div key={ID} className='list-item border shadow my-3'>
                    <p className='list-title font-weight-bold'>{title}</p>
                    <button 
                        className='edit-button btn btn-success' 
                        type='button'
                        onClick = {() => editItem(ID)}
                    >
                        <FaEdit/>
                    </button>
                    <button 
                        className='delete-button btn btn-danger' 
                        type='button'
                        onClick = {() => removeItem(ID)}
                    >
                        <FaTrash/>
                    </button>
                   
                </div>
            )
          })}
      </div>
  )
  
}

export default List