import { fetchProductCatalog } from "./apiSimulator"
import { fetchProductReviews } from "./apiSimulator"
import { fetchSalesReport } from "./apiSimulator"
import { DataError } from "./apiSimulator"

try{

    fetchProductCatalog()
    .then((product) => {
        console.log(product)
    })
    .catch((error) => console.error(error))
    
    fetchProductReviews(1)
    .then((reviews) =>{
        const review = reviews.filter((el) => el.productId === 1)
        console.log(review)
    })
    .catch((error) => console.error(error))
    
    
    fetchSalesReport(1).then((report) =>{
        console.log(report)
    }).catch((error) => console.error(error))
}catch(error : unknown){
    if (error instanceof DataError) {
            console.error('Data error:', error.message);
    }else {
    console.error('Unknown error:', error);
    }
}finally{
    console.log("All API calls have been tempted.")
}