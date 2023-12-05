import { combineReducers } from "redux";
import { getProductById, getProductList, updateProduct} from "./productReducers";
import { addProduct } from "./productReducers";

const reducers=combineReducers({
    allproducts:getProductList,
    product:addProduct,
    selectedproduct:getProductById,
    updateproduct:updateProduct
});
export default reducers;