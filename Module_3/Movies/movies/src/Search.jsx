let Search=(props)=>{

return (
<>
<p class="m-2">Search for {props.movies.length} movies in the databse</p>  
    <button type="button" class="btn btn-primary mt-2">New</button>

    <div class="col-4 m-2">
        <input 

        value={props.search}
       onChange={(e)=>{
         props.updateSearch(e.currentTarget.value)
       }}
        type="text" class="form-control mt-2" placeholder="Search..." />
        </div>
    
</>
)


}

export default Search;