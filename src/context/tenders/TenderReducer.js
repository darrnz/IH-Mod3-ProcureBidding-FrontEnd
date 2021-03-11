import{
    LIST_TENDERS, TENDER_DETAILS, CREATE_TENDER,
    ADD_PRODUCT_TENDER, DELETE_PRODUCT_TENDER,
    ADD_VENDOR_TENDER, DELETE_VENDOR_TENDER,
    LIST_PRODS,PUSH_ELEM,LIST_VENDORS, SAVE_VENDOR_TENDER,
    CLOSE_AND_CLEAR_TENDER, NEW_TENDER, SAVE_AND_SEND_TENDER,
    ADD_PRODUCT_TO_LIST
} from '../../types'

export default (state, action) => {
    switch (action.type) {
        case ADD_PRODUCT_TO_LIST:
            return {
                ...state,
                listProducts: [...state.listProducts, action.payload]
            }
        case NEW_TENDER:
            return {
                ...state,
                tenderForm: true,
                productsTenForm: false,
                vendorsTenForm: false,
                btnSendTen:false,
                listProducts:[],
                newTenderId:'',
                tenderVendor: [],
                listvendors: [],
                tenderProds: [],
            }
        case CLOSE_AND_CLEAR_TENDER:
        case SAVE_AND_SEND_TENDER:
            return {
                ...state,
                tenderForm: false,
                productsTenForm: false,
                vendorsTenForm: false,
                listProducts:[],
                newTenderId:'',
                tenderVendor: [],
                listvendors: [],
                tenderProds: [],
                btnSendTen:false,
            }

        case LIST_PRODS: 
                return{
                    ...state,
                    listProducts: [...action.payload]
                }
        case LIST_VENDORS: 
            console.log(action.payload)
                return{
                    ...state,
                    listvendors: [...action.payload]
                }
        case LIST_TENDERS:
                return {
                    ...state,
                    tenders: [...state.tenders, action.payload]
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
                tenders:[...state.tenders, action.payload],
                productsTenForm: true,
                tenderInfo: action.payload
            }
        case PUSH_ELEM:
            console.log(action.payload)
            return {
                ...state,
                tenderProds: [action.payload, ...state.tenderProds ]
            }
        case ADD_PRODUCT_TENDER: 
            return {
                ...state,
                tender:[action.payload],
                productsTenForm: false,
                vendorsTenForm:true
            }
            
        case DELETE_PRODUCT_TENDER:
            return {
                ...state,
                tenderProds: state.tenderProds.filter(elem => elem.idLocal !== action.payload.idLocal),
                listProducts: [action.payload, ...state.listProducts ]
            }
        case ADD_VENDOR_TENDER:
            return {
                ...state,
                tenderVendor: [action.payload, ...state.tenderVendor ],
                listvendors: state.listvendors.filter(elem => elem._id !== action.payload._id)
            }
        case DELETE_VENDOR_TENDER:
            return {
                ...state,
                tenderVendor: state.tenderVendor.filter(elem => elem._id !== action.payload._id),
                listvendors: [action.payload, ...state.listvendors ]
            }

        case SAVE_VENDOR_TENDER:
            return {
                ...state,
                vendorsTenForm: false,
                btnSendTen:true
            }
            
        default:
            return state;
    }
}