let List=(props)=>{
  return(

    <ul>  {props.tasks.map((ele,index)=>{
        return <li key={index}>{ele}
        <button  onClick={()=>{
        props.deletetask(ele)
        }}>Delete</button>
        </li>
      })}
     </ul>
  )
}

export default List;