import { useUpdateProductMutation } from "../app/service/dummyData"

function UpdateProduct({productId}) {
    const [updateProduct, {data, error,isLoading}] = useUpdateProductMutation()
  if(error){
    return <h1>{error}</h1>
  }
  if(isLoading){
    return <h1>Loading</h1>
  }

  const handleUpdateProduct = async() => {
    try{
        const UpdatedProductData = {
            title: "Title updated",
        }
        await updateProduct({id: productId,updateProduct: UpdatedProductData})
    } catch(err){
        console.err("Error updating product:",err)
    }
  }
  
    return (
    <div>
        <h1>{data?.title}</h1>
        <button onClick={handleUpdateProduct} disabled={isLoading}>Update</button>
    </div>
  )
}

export default UpdateProduct