import { useParams } from "react-router-dom";
import {useState , useEffect} from "react";
import { Link} from '@chakra-ui/react';

const getData = (url) => {
    return fetch(url)
    .then((res)=> res.json())
  }

function SingleProduct(){
  const [loading , setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [single , setSingle] = useState([]);
  const {id} = useParams();

  const fetchAndRender = () => {
      setLoading(true);
      getData(`http://localhost:8080/cloths/${id}`)
      .then((res)=> {
        console.log(res)
        setSingle(res)
      })
      .catch((err)=>{
         console.log(err)
         setError(true)
      })
      .finally(()=> setLoading(false));
     };

     useEffect(()=>{
      fetchAndRender();
  },[]);
  console.log(single)


  return loading ? (
    <h1>Loading.....</h1>
) : error ?(
    <h1>Something went wrong...</h1>
) : (
    <>
    <h1>SingleProduct Page</h1>
    {/* if data={ data=[{},{} ] } */}
    {single?.data?.map((item)=>(
      <div style={{margin:"10px" , border:"1px solid black"}}>
        <img src={item.image} alt={item.title} />
        <p>{`${item.title} `}</p>
         <Link to={`/single/${item.id}`}>More Info</Link>
      </div>
    ))}
    </>
);
}

export default SingleProduct;
