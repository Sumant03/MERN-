import { prop } from "cheerio/lib/api/attributes";
import Search from "./Search"
import Table from "./Table"

let Filter =(props)=>{
  console.log(props.genreData)
  console.log(props);  
    return(
    <>
          <div class="col-3">
    <ul class="list-group m-4">
        <li 
        onClick={()=>{props.handleclick("All Genre")}}
        class={`list-group-item ${props.selectedFilter=="All Genre"?"active":""}`}
        
        
        >All Genre</li>
        {props.genreData.map((el)=>{
            return <li 
            key={el._id}
            onClick={()=>{props.handleclick(el.name)}}
            class={`list-group-item ${props.selectedFilter==el.name?"active":""}`}
             >{el.name}</li>
        })}
      </ul>
   </div>
          
    </>
    )

    
}

export default Filter;




