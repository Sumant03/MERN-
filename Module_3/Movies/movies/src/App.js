import React from "react";
// import Child from "./Child"
import Filter from "./Filter";

class App extends React.Component{
 state={
   movies:[],
   genre:[]
 }
 
  hcomponentDidMount(){
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
       <div className="row">
       <Filter genreData={this.state.genre} />
       </div>
        
      </div>
    );
  }

}
export default App;