import Pagintion from "./Pagintion";


let Table =(props)=>{
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
       {}
          
        </tbody>
      </table>
       

       <Pagintion/>
</>
    )
}

export default Table;