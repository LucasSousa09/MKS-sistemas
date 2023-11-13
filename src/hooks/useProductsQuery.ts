import { api } from "@/pages/api/axios";
import { useQuery } from "react-query";

export function useProductsQuery(){
    const response = useQuery({
        queryFn: () => api.get('',{params: {page: 1, rows: 8, sortBy: 'id', orderBy: 'DESC'}}),
        queryKey: ["qproducts"]
    })
    return response
}