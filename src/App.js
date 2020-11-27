import './App.css';
import './bootstrap.min.css'
import { useState } from 'react';
import List from './components/List';
import Alert from './components/Alert';
function App() {

  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({show:false, msg:'', color:''});

  const handleOnSubmit = e => {
    e.preventDefault();
    console.log('submitted');

    if(!name){
      //display error alert
    }
    else if (name && isEditing){
      //editing
    }
    else{
      //add item
      //alert success
      const newItem = {id:name, title:name};
      setList([...list, newItem]);
      setName('');
    }
  }
  return (
    <div className='shopping-buddy container'>
      <form 
        className='add-item'
        onSubmit={handleOnSubmit}
      >
        {alert.show && <Alert/>}
        <h3 className='add-heading'>Shopping Buddy</h3>
        <input 
          className='add-text'
          type='text'
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <button className='add-button btn btn-primary' type='submit'>
          {isEditing ? 'Edit' : 'Add'}
        </button>
      </form>
      <div className='shopping-list'>
        <List items={list}/>
        <button className='list-clear-button btn btn-secondary'>clear all</button>
      </div>
    </div>
  );
}

export default App;
