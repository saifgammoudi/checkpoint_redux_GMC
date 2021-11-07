import React, {useState} from 'react'
import {  Modal } from 'react-bootstrap';
import {FiEdit } from 'react-icons/fi'
import { useDispatch} from 'react-redux';
import{editTodo} from './js/actions/action'

const EditTask = ({el,editToDo}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [editInput, setEditInput] = useState(el.name);
    const dispatch = useDispatch();
    
  // fonction edit to do
  const edit =(e ) => {
    dispatch(editTodo({
      id: el.id,
      text: editInput,
    }))
    e.preventDefault();
   
    handleClose();
  }

  
    return (
      <>
      {/* ------------------------- icon edit ------------------- */}
        <FiEdit   onClick={handleShow} />
       {/* ------------------------- modal ------------------- */}
        <Modal show={show} onHide={handleClose} animation={false} >
          <Modal.Header closeButton  style={{backgroundColor:'  rgb(1 35 90)'}}>
               <Modal.Title style={{color:'white'}}>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{backgroundColor:'  rgb(1 35 90)'}}>
       {/* ------------------------- input edit ------------------- */}
          <input
                  type='text'
                  placeholder='edit todo'
                  value={editInput}
                  required
                  className='todo-input'
                  onChange={(e)=> setEditInput(e.target.value)}
                  />
       {/* ------------------------- bouton edit ------------------- */}
                <button className='todo-button' 
                      onClick={(editInput.trim()!==''? edit : editInput )  } > 
                  Edit ToDo
                </button>
          </Modal.Body>
          <Modal.Footer style={{backgroundColor:'  rgb(1 35 90)'}} >
        {/* ------------------------- bouton cansel ------------------- */}
               <button className='todo-button'  style={{borderRadius:'4px', padding:'10px '}} onClick={ handleClose}> 
                  Cancel
                </button>
            
          </Modal.Footer>
        </Modal>
      </>
    );
  }


  
export default EditTask;
