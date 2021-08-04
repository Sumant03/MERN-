let List=(props)=>{
  return(

    <ul>  {props.tasks.map((ele)=>{
        return <li>{ele}
        <button  onClick={()=>{
        props.deletetask(ele)
        }}>Delete</button>
        </li>
      })}
     </ul>
  )
}

export default List;