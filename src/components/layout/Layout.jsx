
import "./style.css";

function Layout({setDone, done, todos,setTodos,Delete,onRemove}) {
 
  // const Delete=() => {
  //   setDone(true)
  // }
// const Delete = (el)=>{
//   setTodos(todos => todos.filter(todo => todo.id !== el))
// }
    return(
      done ?<></> :
     ( <div className="layout-container" id="layout">
       <h2 className="working">Working..π₯</h2> 
       <div className="oh">
      {todos.map((todo) => (
      <div key={todo.id} className="todo-container" id="todocontainer">
        <h2 className="todotitle">{todo.title}</h2>
        <div>{todo.comment}</div>
      <div className="layout-wrapper" id="layout"  >
      <div className="btnset">
      <button className="btn1-container" onClick={()=> onRemove(todo.id)} > μ­μ νκΈ° </button>
      <button className="btn2-container" > μλ£ </button> </div>
      </div>
      </div>
      ))}
      </div>
      </div>
      )
    
  )
  }
  export default Layout;