import React from "react";
// import Child from "./Child"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Filter from "./Filter";
import Search from "./Search";
import Table from "./Table";
import Navbar from "./Navbar";
import Customer from "./Customer";
import Login from "./Login"
import Rentail from "./Rentail";


class App extends React.Component{
 state={
   movies:[],
   genre:[],
   selectedFilter:"All Genre",
   search:""
   }

   updateSearch=(el)=>{
    this.setState({search:el})
   }


 setFilter=(filter)=>{
   this.setState({selectedFilter:filter})
 }

  toggleLike=(id)=>{
    let index=this.state.movies.findIndex((el)=>{
      return el._id==id;
    })

   let currMovieArr=this.state.movies.map((el)=>el)

    if(currMovieArr[index].liked){
      currMovieArr[index].liked=false;
    }else{
      currMovieArr[index].liked=true;
    }

this.setState({movies:currMovieArr})
    
  }
  
  deleteMovie=(id)=>{
    let arr=this.state.movies.filter((el)=>{
      return el._id!=id
    })

    this.setState({movies:arr})
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
      <Router>
        <div>
        <Navbar/>

        <Switch>
    
      <Route exact  path="/">
      <div className="row">
       <Filter 
       genreData={this.state.genre} 
      selectedFilter={this.state.selectedFilter}
      handleclick={this.setFilter}
      />


<div class="col-9">

<Search
search={this.search}
updateSearch={this.updateSearch}
movies={this.state.movies}/>
<Table 
search={this.state.search}
deleteMovie={this.deleteMovie}
 toggleLike={this.toggleLike}
 genreData={this.state.genre}
  movieData={this.state.movies}
  selectedFilter={this.state.selectedFilter}/>
</div>
       
       </div>
        
      </Route>
      
      <Route exact path="/customer">
       <Customer/>
       </Route>
      
       <Route exact path="/rental">
       <Rentail/>
       </Route>
      

       <Route exact path="/login">
       <Login/>
       </Route>
      

    </Switch>
    </div>

    </Router>
    );
  }

}
export default App;