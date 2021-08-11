import Pagintion from "./Pagintion";


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
       {filteredMovieArr.map((el)=>{
           return(
               <tr key="el._id">
                <td>{el.title}</td>
                <td>{el.genre.name}</td>
                <td>{el.numberInStock}</td>
                <td>{el.dailyRentalRate}</td>
                
                <td key={el._id}>Like</td>
                <td>
                    <button   style={{backgroundColor:"red"}}>Delete</button>
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