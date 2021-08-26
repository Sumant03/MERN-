
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import './App.css';

function App() {
  let state=useSelector((state)=>state);
   console.log(state);
  let dispatch=useDispatch();
  return (
    <>
    <button onClick={()=>{
      dispatch(fetchUser)
    }}>Click Me</button>
    </>
  );
}

export default App;
