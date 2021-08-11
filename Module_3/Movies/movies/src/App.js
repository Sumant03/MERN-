import React from "react";
// import Child from "./Child"
import Filter from "./Filter";
import Search from "./Search";
import Table from "./Table";
import Navbar from "./Navbar";

class App extends React.Component{
 state={
   movies:[],
   genre:[],
   selectedFilter:"All Genre"
 }

 setFilter=(filter)=>{
   this.setState({selectedFilter:filter})
 }
 
  componentDidMount(){
  //It will get data here 

 let f=async ()=>{
    let resultGenre=await fetch("/genre");
    let resultMovies=await fetch("/movies");
    
    let moviesJson=await resultMovies.json();
    let genreJson=await resultGenre.json();
  

    this.setState({
    movies:moviesJson,
    genre:genreJson})
 }
  f();

 }

  render() {
    return (
      <div>
        <Navbar/>
       <div className="row">
       <Filter 
       genreData={this.state.genre} 
      selectedFilter={this.state.selectedFilter}
      handleclick={this.setFilter}
      />


<div class="col-9">

<Search/>
<Table  genreData={this.state.genre} movieData={this.state.movies}/>
</div>
       
       </div>
        
      </div>
    );
  }

}
export default App;