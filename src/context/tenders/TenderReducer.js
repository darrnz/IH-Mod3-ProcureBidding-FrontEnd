import{
    LIST_TENDERS, TENDER_DETAILS, CREATE_TENDER,
    ADD_PRODUCT_TENDER, DELETE_PRODUCT_TENDER,
    ADD_VENDOR_TENDER, DELETE_VENDOR_TENDER,
    LIST_VENDOR_TENDER
} from '../../types'

export default (state, action) => {
    switch (action.type) {
        case LIST_TENDERS:
                return {
                    tenders:[...state, action.payload]
                }
            
        case TENDER_DETAILS:
            return{
                ...state,
                tenderInfo: action.payload
            }
        case CREATE_TENDER:
            return {
                ...state,
                newTenderId: action.payload._id,
                productsTenForm:true,
                tenderInfo: action.payload
            }
        case ADD_PRODUCT_TENDER: 
            return {
                ...state,
                tenderProds: [action.payload, ...state.tenderProds]
            }
        case DELETE_PRODUCT_TENDER:
        case ADD_VENDOR_TENDER:
        case DELETE_VENDOR_TENDER:
        case LIST_VENDOR_TENDER:
            
        default:
            return state;
    }
}