import { useAddNewProductMutation } from "../app/service/dummyData"

function AddNewProduct() {
    const [AddNewProduct,{data,error,isLoading}] = useAddNewProductMutation();
    
    if(error){
        return <h1>Error</h1>
    }
    if(isLoading){
        return <h1>Loading...</h1>
    }

    const handleAddProduct = async() => {
        try{
            const newProductData = {
                id: 1,
                title: "Amazing T-shirt",
                description: 
                "This is the best t-shirt"
            }
            await AddNewProduct(newProductData)
        }
        catch(err){
            console.log(err)
        }
    }

  return (
    <div>
        <h1>{data?.id}</h1>
        <h1>{data?.title}</h1>
        <h1>{data?.description}</h1>

        <button onClick={handleAddProduct} disabled = {isLoading}>Add new product</button>
    </div>
  )
}

export default AddNewProduct