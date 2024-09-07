import { useGetAllProductQuery } from "../app/service/dummyData"

function AllProducts() {
    const {data, isError, isLoading} = useGetAllProductQuery();
    
    if(isError){
        return <h1>Oh noooo we got an error</h1>
    }

    if(isLoading){
        return <h1>Loading...</h1>
    }
  return (
  <div>
    {data?.products.map((p) => (
        <>
        <h1 key={p.id}>{p.title}</h1>
        <p>{p.description}</p>
        </>
    ))}
  </div>
  )
}

export default AllProducts