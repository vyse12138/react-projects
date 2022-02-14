import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

const List = ({ items, removeItem, editItem }) => {
  return (
    <div className='list'>
      {items.map(item => {
        const { ID, title } = item
        return (
          <div
            key={ID}
            className=' row justify-content-between no-gutters list-item border shadow py-2 my-3'
          >
            <h5 className=' list-title align-bottom ml-2 mt-1'>{title}</h5>
            <div className='btns'>
              <button
                className='edit-button btn btn-success mr-2'
                type='button'
                onClick={() => editItem(ID)}
              >
                <FaEdit />
              </button>
              <button
                className='delete-button btn btn-danger mr-2'
                type='button'
                onClick={() => removeItem(ID)}
              >
                <FaTrash />
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default List
