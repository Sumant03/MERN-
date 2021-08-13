let Pagintion =(props)=>{
    //  console.log(props.numberOfPages);
   let arr=[];

   for(let i=1;i<=props.numberOfPages;i++){
     arr.push(i);
   }
   
   
     return(
        <>
        <nav  class="m-4">
        <ul class="pagination">
         
      
          {arr.map((el)=>{
              return(
                  <li
                  
             
                  onClick={()=>{
                    props.selectPage(el);
                    
                  }}
                class={`page-item ${props.currPage==el?"active":""}`} >
                <a class="page-link" >{el}</a>
                </li>
              )
          })}
        </ul>
      </nav>
    </>
    )
}

export default Pagintion;