import React from "react";
import Pagintion from "./Pagintion";
import "./Table.css"

class Table extends React.Component {
constructor(props){
    super(props);
      this.state={
           currPage:1
       }
    
}


selectPage = (value) => {
    this.setState({ currPage: value });
  };


         

   
 render(){
    let   allMovies=this.props.movieData;
    let currFilter=this.props.selectedFilter;

   



      
  let  filteredMovieArr=allMovies.filter((el) => {
   
        if(currFilter=="All Genre"){
             return el;
         }else if(el.genre.name==currFilter) {
             return el;
         }
     })

  
     filteredMovieArr=filteredMovieArr.filter((el) => {
       let movieTitle=el.title;
       movieTitle=movieTitle.toLowerCase();

       let s=this.props.search.toLowerCase();

       return movieTitle.includes(s);

     })

     let numberOfPages=Math.ceil(filteredMovieArr.length/4);
     
     let startIndex=(this.state.currPage-1)*4;
     let endIndex=Math.min(filteredMovieArr.length,this.state.currPage*4);
     let  arrToBeUsedInTable = filteredMovieArr.slice(startIndex,endIndex);

    // console.log(this.arrToBeUsedInTable);
     return (
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
                      this.props.toggleLike(el._id);
                   }}>
                  {el.liked?(<span class="material-icons-outlined">favorite</span>):(<span class="material-icons-outlined">favorite_border</span>)}
  
  
                   </td>
                   <td>
                       <button  onClick={()=>{
                        this.props.deleteMovie(el._id)
                       }} 
                       className="table-delete-btn" >Delete</button>
                   </td>
  
                  </tr>
              )
          })}
            
           </tbody>
        </table>
         
  
          <Pagintion 
          currPage={this.state.currPage}
          selectPage={this.selectPage}
           numberOfPages={numberOfPages}/>
  </>
     )
 }


}

export default Table;










