import Pagintion from "./Pagintion";
import "./Table.css"

let Table =(props)=>{
    console.log(props.movieData);
   let allMovies=props.movieData;
   let currFilter=props.selectedFilter;
         
   let filteredMovieArr=allMovies.filter((el) => {
   
   if(currFilter=="All Genre"){
        return el;
    }else if(el.genre.name==currFilter) {
        return el;
    }
})
     
let arrToBeUsedInTable = filteredMovieArr.slice(0, 4);

    return(
   <>
     <table class="table m-2 p-2">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Genre</th>
            <th scope="col">Stock</th>
            <th scope="col">Rate</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
       {arrToBeUsedInTable.map((el)=>{
           return(
               <tr key="el._id">
                <td>{el.title}</td>
                <td>{el.genre.name}</td>
                <td>{el.numberInStock}</td>
                <td>{el.dailyRentalRate}</td>
                
                <td onClick={()=>{
                    props.toggleLike(el._id);
                }}>
               {el.liked?(<span class="material-icons-outlined">favorite</span>):(<span class="material-icons-outlined">favorite_border</span>)}


                </td>
                <td>
                    <button className="table-delete-btn" >Delete</button>
                </td>

               </tr>
           )
       })}
          
        </tbody>
      </table>
       

       <Pagintion/>
</>
    )
}

export default Table;