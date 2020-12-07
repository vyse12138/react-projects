import { useEffect, useState } from 'react';
import List from '../components/ShoppingBuddy/List';
import Alert from '../components/ShoppingBuddy/Alert';
function ShoppingBuddy() {


    const getLocalStorage = () => {
        let list = localStorage.getItem('list');
        if (list) {
            return JSON.parse(list);
        }
        else {
            return [];
        }
    }

    const [name, setName] = useState(''),
        [list, setList] = useState(getLocalStorage()),
        [isEditing, setIsEditing] = useState(false),
        [editID, setEditID] = useState(null),
        [alert, setAlert] = useState({
            show: false,
            msg: '',
            color: ''
        });


    //function called to show alert
    const showAlert = (show = false, msg = '', color = '') => {
        setAlert({
            show, msg, color
        });
    }

    const handleOnSubmit = e => {
        e.preventDefault();

        if (!name) {
            //alert warning of empty input
            showAlert(true, 'Please enter the item', 'warning')
        }
        else if (isEditing) {
            //editing
            setList(list.map((item) => {
                if (item.ID === editID) {
                    return { ID: name, title: name }
                }
                return item

            }))
            setName('');
            setEditID(null);
            setIsEditing(false);
            //alert item changed 
            showAlert(true, 'Item changed', 'success')

        }
        else {
            const newItem = { ID: name, title: name };
            if (list.some(e => e.title === newItem.title)) {
                //alert item inlcuded
                showAlert(true, 'Item exsits in the list', 'warning')
            }
            else {
                //add item
                setList([...list, newItem]);
                setName('');
                //alert success
                showAlert(true, 'Item added', 'success')
            }

        }
    }

    //function of clear list
    const clearList = () => {
        //clear the list
        setList([]);
        //alert list cleared
        showAlert(true, 'all items cleared', 'danger')
    }

    //function of remove item
    const removeItem = (ID) => {

        if (isEditing && editID === ID) {
            //alert is editing
            showAlert(true, 'finish editing first', 'warning');
        }
        else {
            //clear the list
            setList(list.filter(item => item.ID !== ID));
            //alert item removed
            showAlert(true, 'item removed', 'danger')
        }

    }

    //function to edit item
    const editItem = (ID) => {
        const item = list.find((item) => item.ID === ID);
        setIsEditing(true);
        setEditID(ID);
        setName(item.title);
    }

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list));
    })

    return (
        <div className='shopping-buddy container bg-light border-top-0 shadow pb-3'>
            <div className='row no-gutters'>
                <h2 className='add-heading text-left col my-4'>Shopping Buddy</h2>
                {alert.show && <Alert className='col' {...alert} removeAlert={showAlert} />}
            </div>
            <form
                className='add-item input-group'
                onSubmit={handleOnSubmit}
            >
                <input
                    className='add-text form-control'
                    type='text'
                    placeholder='What you want to buy?'
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <button className='add-button btn btn-primary ' type='submit'>
                    {isEditing ? 'Edit' : 'Add'}
                </button>
            </form>

            {list.length > 0 && (
                <div className='shopping-list'>
                    <List items={list} removeItem={removeItem} editItem={editItem} />
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

export default ShoppingBuddy;
