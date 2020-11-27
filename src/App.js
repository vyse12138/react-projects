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
  const [alert, setAlert] = useState({
    show:false, 
    msg:'', 
    color:''
  });

  //function called to show alert
  const showAlert = (show=false, msg='', color='') => {
    setAlert({show, msg, color
    });
  }

  const handleOnSubmit = e => {
    e.preventDefault();
    console.log('submitted');

    if(!name){
      //alert warning of empty input
      showAlert(true, 'Please enter the item', 'warning')
    }
    else if (isEditing){
      //editing
    }
    else{
      //add item
      const newItem = {id:name, title:name};
      setList([...list, newItem]);
      setName('');

      //alert success
      showAlert(true, 'Item added', 'success')
    }
  }

  //function of clear list
  const clearList = () =>{
    //clear the list
    setList([]);
    //alert cleared
    showAlert(true, 'List cleared', 'danger')
  }
  return (
    <div className='shopping-buddy container'>
      <h3 className='add-heading text-center'>Shopping Buddy</h3>
      {alert.show && <Alert {...alert} removeAlert={showAlert}/>}
      <form 
        className='add-item input-group'
        onSubmit={handleOnSubmit}
      >
        
        
        <input 
          className='add-text form-control'
          type='text'
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <button className='add-button btn btn-primary ' type='submit'>
          {isEditing ? 'Edit' : 'Add'}
        </button>
      </form>

      {list.length>0 &&(
        <div className='shopping-list'>
        <List items={list}/>
        <button 
          className='list-clear-button btn btn-secondary'
          onClick={() => clearList()}
        >
          clear all
        </button>
      </div>
      )}


    </div>
  );
}

export default App;
