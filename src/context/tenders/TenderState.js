import React, { useReducer } from 'react'
import TenderContext from './TenderContext'
import clienteAxios from '../../services/axios'
import{
    LIST_TENDERS, TENDER_DETAILS, CREATE_TENDER,
    ADD_PRODUCT_TENDER, DELETE_PRODUCT_TENDER,
    ADD_VENDOR_TENDER, DELETE_VENDOR_TENDER,
    LIST_PRODS,PUSH_ELEM, LIST_VENDORS, SAVE_VENDOR_TENDER,
    CLOSE_AND_CLEAR_TENDER, NEW_TENDER, SAVE_AND_SEND_TENDER,
    ADD_PRODUCT_TO_LIST
} from '../../types'
import TenderReducer from './TenderReducer'

export default function TenderState (props) {

    
    const initialState = {
        tenderForm: false,
        productsTenForm: false,
        vendorsTenForm: false,
        btnSendTen:false,
        listProducts:[],
        newTenderId:'',
        tenderInfo:[],
        tenders: [],
        tenderVendor: [],
        listvendors: [],
        tenderProds: [],
    }

    const [state, dispatch] = useReducer(TenderReducer, initialState)

    const addProdToList = elem => {
        dispatch({
            type:ADD_PRODUCT_TO_LIST, 
            payload: elem
        })
    }

    const newTender = () => {
        dispatch({
            type: NEW_TENDER
        })
    }

    const closeAndClearTender = () => {
        dispatch({
            type: CLOSE_AND_CLEAR_TENDER
        })
    }

    const saveAndSendTender = () => {
        dispatch({
            type: SAVE_AND_SEND_TENDER
        })
    }
    
    const listProductsInv = async() => {
        try {
            const resSer = await clienteAxios.get('/list-products')
            console.log(resSer.data)
            dispatch({
                type:LIST_PRODS,
                payload: resSer.data
            })
        } catch (error) {
            console.log(error)
        }
    }

    const existVendors = async() => {
        try {
            const resSer = await clienteAxios.get('/list-vendors')
            console.log(resSer.data)
            dispatch({
                type: LIST_VENDORS,
                payload: resSer.data
            })
        } catch (error) {
            console.log(error)
        }
    }


    const listUserTenders = async userId => {
        try {
            console.log(userId)
            let loggedId =  userId._id
            const resSer = await clienteAxios.get(`/profile/user-tenders/${loggedId}`)
            dispatch({
                type:LIST_TENDERS,
                dispatch:resSer.data
            })
        } catch (error) {
            console.log(error)
        }
    }

    const createTender = async form => {
        try {
            const resSer = await clienteAxios.post('/profile/create-tender', form)
            console.log(resSer)
            console.log(resSer.data._id)
            dispatch({
                type:CREATE_TENDER,
                payload: resSer.data
                
            })
        } catch (error) {
            console.log(error)
        }
    }

    const tenderDetails = async (idTender) => {
        try {
            console.log(idTender)
            const resSer = await clienteAxios.get(`/profile/tender-details/${idTender}`)
            console.log(resSer)
            
            dispatch({
                type:TENDER_DETAILS,
                payload: resSer.data
            })
        } catch (error) {
            console.log(error)
        }
    }

    const pushProd = elem =>{
        console.log(typeof elem)
        //tenderProds.push(elem)
        dispatch({
            type: PUSH_ELEM,
            payload: elem
        }) 
    }

    const addProductTender = async (form) => {
        try {
            console.log(form)
            let tenderID = state.newTenderId
            console.log(tenderID)
            const resSer = await clienteAxios.post(`/profile/create-tender/${tenderID}/add-product`, form)
            console.log(resSer)
            dispatch({
                type: ADD_PRODUCT_TENDER,
                payload: resSer.data
            })
        } catch (error) {
            
        }
    }

    const deleteProductTender = idProd => {
        try {
            console.log(idProd)
            dispatch({
                type: DELETE_PRODUCT_TENDER,
                payload: idProd
            })
        } catch (error) {
            console.log(error)
        }
    }



     const saveVendorsOnTender = () => {
        try {
            dispatch({
                type: SAVE_VENDOR_TENDER,
                
            })
        } catch (error) {
            
        }
    } 

    const addVendorTender = async idVendor => {
        try {
            let tenderID = state.newTenderId
            console.log(tenderID)
            console.log(idVendor)
            const resSer = await clienteAxios.put(`/profile/create-tender/${tenderID}/add-vendor/${idVendor}`)
            console.log(resSer.data)
            dispatch({
                type: ADD_VENDOR_TENDER,
                payload: resSer.data
            })
        } catch (error) {
            
        }
    }

    const deleteVendorTender = async idVendor => {
        try {
            let tenderID = state.newTenderId
            const resSer = await clienteAxios.delete(`/profile/create-tender/${tenderID}/delete-vendor/${idVendor}`)
            dispatch({
                type: DELETE_VENDOR_TENDER,
                payload: resSer.data
            })
        } catch (error) {
            
        }
    }

    return(
        <TenderContext.Provider value={{
            tenderForm: state.tenderForm,
            productsTenForm: state.productsTenForm,
            vendorsTenForm: state.vendorsTenForm,
            btnSendTen: state.btnSendTen,
            
            tenderInfo:state.tenderInfo,
            tenders: state.tenders,
            newTenderId: state.newTenderId,
            tenderProds: state.tenderProds,
            tenderVendor: state.tenderVendor,

            listProducts: state.listProducts,
            listvendors: state.listvendors,

            addProdToList,
            saveVendorsOnTender,
            closeAndClearTender,
            newTender,
            saveAndSendTender,
            listUserTenders,
            createTender,
            tenderDetails,
            addProductTender,
            deleteProductTender,
            listProductsInv,
            pushProd,
            addVendorTender,
            deleteVendorTender,
            existVendors,
            
        }}>
            {props.children}
        </TenderContext.Provider>
    )

}