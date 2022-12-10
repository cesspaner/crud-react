import React, {useState} from "react"
import {isEmpty, size} from 'lodash'
import shortid from 'shortid'
import 'bootstrap/dist/css/bootstrap.css';

const CrudS = () =>{

  const [ task, setTask] = useState("")
  const [ tasks, setTasks] = useState([])
  const [ editMode, setEditMode] = useState(false)
  const [ id, setId] = useState("")
  const [ error, setError]=useState(null)

  const validForm = ()=>{
    let isValid = true
    setError(null)

    if (isEmpty(task)){
      setError("Favor ingresar una actividad.")
      isValid = false
      }
      return isValid
  }

  const addTask =(e)=>{
    e.preventDefault()
        
        if (!validForm()){
           return
        }
        const newTask = {
          id: shortid.generate(),
          name : task 
        }
      
        setTasks([...tasks, newTask])
        console.log("ok Ingreso datos")
        setTask("")
  }

  

  const saveTask =(e)=>{
    e.preventDefault()
    if (!validForm()){
        return
        }
        const editedTasks = tasks.map(item => item.id === id ? { id, name: task} : item)
        setTasks(editedTasks)
        setEditMode(false)
        setTask("")
        setId("")
  }

  const deletetaks=(id)=>{
   const filteredTasks = tasks.filter(task => task.id !== id)
   setTasks(filteredTasks)
  } 

  const edittaks=(theTask)=>{
    setTask(theTask.name)
    setEditMode(true)
    setId(theTask.id)
   } 

  return (
  <div className="container mt-5">
    <h1>Registro de actividades</h1>
      <hr/>
      <div className="row">

        <div className="col-8">
         <h4 className="text-center"> Lista de actividades</h4>
         {
          size(tasks) == 0 ? (
            <li className="list-group-item" >Aun! , no hay actividades</li>
          ) :(
             <ul className="list-group"> 
             {
              tasks.map((task)=>(
                <li className="list-group-item" key={task.id}>
                 <span className="lead"> {task.name} </span>
                    <button 
                    className="btn btn-danger btn-sm float-right mx-2"
                    onClick= {()=>{ deletetaks(task.id) }}
                    >
                      Eliminar
                    </button>
                    <button 
                    className="btn btn-success btn-sm float-right"
                    onClick= {()=>{ edittaks(task) }}
                    >
                      Editar
                    </button>
                </li>
               ))
              }
             </ul>
           )}
        </div>
        
        <div className="col-4">
         <h4 className="text-center">
          {editMode ? "Modificar actividad" : "Agregar Actividades"}
         </h4>
         <form onSubmit={editMode ? saveTask : addTask}>
          {
            error && <span className="text-danger">{error}</span>
          }
          <input type="text" className="form-control mb-2" placeholder="Ingrese la tarea..."
          onChange={(text)=>setTask(text.target.value)}
          value={task}>
          </input>
          <button className={ editMode ? "btn btn-dark btn-block" : "btn btn-primary btn-block"} type="submit">{editMode ? "Guardar" : "Agregar"}</button>
         </form>
        </div>
      </div>
  </div>
  );
}

export default CrudS;
