interface Products {
    id: number; 
    name: string; 
    price: number
}

interface Reviews {
    productId : number,
    review : string
}

interface Report {
    productId : number,
    totalSales : number,
    unitSold : number,
    averagePrice : number
}


export const fetchProductCatalog = (): Promise<Products[]> => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() < 0.8) {
            resolve([
                { id: 1, name: "Laptop", price: 1200 } ,
                { id: 2, name: "Headphones", price: 200 },
            ]);
        } else {
        reject("Failed to fetch product catalog");
        }
    }, 1000);
    });
};


export const fetchProductReviews = (productId : number): Promise<Reviews[]> => {
    return new Promise((resolve , reject) =>{
        setTimeout(() =>{
            if (Math.random() < 0.6) {
                resolve([
                    {productId : 1, review: "Awesome"},
                    {productId : 1, review: "Awesome"},
                    {productId : 2, review: "Awesome"},
                    {productId : 2, review: "Awesome"}
                ])
            }else{
                reject(`Failed to fetch reviews for product ID ${productId}"`)
            }
        }, 1500)
    })
}
export const fetchSalesReport = (productId : number): Promise<Report[]> => {
    return new Promise((resolve , reject) =>{
        setTimeout(() =>{
            if (Math.random() < 0.6) {
                resolve([
                    {productId : 1 , totalSales : 8 , unitSold : 1500 , averagePrice : 75.95},
                    {productId : 2 , totalSales : 8 , unitSold : 1500 , averagePrice : 75.95},
                ])
            }else{
                reject("Failed to fetch sales report")
            }
        }, 1000)
    })
}