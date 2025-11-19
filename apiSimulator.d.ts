interface Products {
    id: number;
    name: string;
    price: number;
}
interface Reviews {
    productId: number;
    review: string;
}
interface Report {
    productId: number;
    totalSales: number;
    unitSold: number;
    averagePrice: number;
}
export declare const fetchProductCatalog: () => Promise<Products[]>;
export declare const fetchProductReviews: (productId: number) => Promise<Reviews[]>;
export declare const fetchSalesReport: (productId: number) => Promise<Report[]>;
export {};
//# sourceMappingURL=apiSimulator.d.ts.map