let Pagintion =(props)=>{
     console.log(props.numberOfPages);
    return(
        <>
        <nav  class="m-4">
        <ul class="pagination">
         
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item " aria-current="page">
            <a class="page-link" href="#">2</a>
          </li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
         
        </ul>
      </nav>
    </>
    )
}

export default Pagintion;