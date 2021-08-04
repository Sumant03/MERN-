let List=(props)=>{
  return(

    <ul>  {props.tasks.map((ele)=>{
        return <li>{ele}
        {/* <button  onClick={()=>{
          let curTaskArr=this.state.tasks;
          let filteredArr=curTaskArr.filter((el)=>{
            return ele!=el
          })
          this.setState({tasks:filteredArr})
        }}>Delete</button> */}
        </li>
      })}
     </ul>
  )
}

export default List;