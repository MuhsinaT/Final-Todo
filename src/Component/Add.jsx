import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import './Add.css'

function Add() {


  const [tasks, setTasks] = useState(() => 
    {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });


  const [show, setShow] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleClose = () => {
    setShow(false);
    setTitle('');
    setDescription('');
  };

  const handleShow = () => {
    setShow(true);
  };

  const handleAdd = () => {
    if (title && description) {
      setTasks([
        ...tasks,
        { id: Date.now(), title, description, completed: false },
      ]);
      handleClose();
    }
    else {
        alert("Please provide both title and description.");
      }
  };

  const toggleCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <>
      <h1 className='todo-h1'>To-Do App</h1>
      <Button variant="danger" className='todo-btn' onClick={handleShow}>
        Add Todo
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="taskTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter task title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="taskDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter task description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddTask}>
            Add Task
          </Button>
        </Modal.Footer>
      </Modal>



      <div className="task-section">
        <h2>Pending Tasks</h2>
        {tasks
          .filter((task) => !task.completed)
          .map((task) => (
            <div key={task.id} className="task-card">
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <button onClick={() => toggleCompletion(task.id)} className='btn-complete'>
                Mark as Completed
              </button>
              <button onClick={() => deleteTask(task.id)}  className='btn-delete'>Delete</button>
            </div>
          ))}



        <h2>Completed Tasks</h2>
        {tasks
          .filter((task) => task.completed)
          .map((task) => (
            <div key={task.id} className="task-card completed">
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <button onClick={() => toggleCompletion(task.id)} className='btn-complete'>
                Mark as Pending
              </button>
              <button onClick={() => deleteTask(task.id)} className='btn-delete'>Delete</button>
            </div>
          ))}
      </div>
    </>
  );
}

export default Add;
