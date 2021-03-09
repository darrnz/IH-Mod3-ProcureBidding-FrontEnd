import React, { useReducer } from 'react'
import TenderContext from './TenderContext'
import clienteAxios from '../../services/axios'
import axios from 'axios'
import{
    LIST_TENDERS, TENDER_DETAILS, CREATE_TENDER,
    ADD_PRODUCT_TENDER, DELETE_PRODUCT_TENDER,
    ADD_VENDOR_TENDER, DELETE_VENDOR_TENDER,
    LIST_VENDOR_TENDER
} from '../../types'
import TenderReducer from './TenderReducer'

export default function TenderState (props) {

    const initialState = {
        //tenderForm: false,
        productsTenForm: false,
        vendorsTenForm: false,
        newTenderId:'',
        tenderInfo:[],
        tenders: [],
        tenderProds: [],
        tenderVendor: [],
        vendors: []
    }

    const [state, dispatch] = useReducer(TenderReducer, initialState)

    const listUserTenders = async userId => {
        try {
            const resSer = await clienteAxios.get()
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

    const deleteProductTender = async idProd => {
        try {
            const resSer = clienteAxios.delete()
            dispatch({
                type: DELETE_PRODUCT_TENDER,
                payload: idProd
            })
        } catch (error) {
            
        }
    }

    const listVendors = async () => {
        try {
            const resSer = clienteAxios.get('')
            dispatch({
                type: LIST_VENDOR_TENDER,
                payload: resSer.data
            })
        } catch (error) {
            
        }
    }

    const addVendorTender = async infoVendor => {
        try {
            const resSer = await clienteAxios.post('')
            dispatch({
                type: ADD_VENDOR_TENDER,
                payload: infoVendor
            })
        } catch (error) {
            
        }
    }

    const deleteVendorTender = async idVendor => {
        try {
            const resSer = await clienteAxios.delete('')
            dispatch({
                type: DELETE_VENDOR_TENDER,
                payload: idVendor
            })
        } catch (error) {
            
        }
    }

    return(
        <TenderContext.Provider value={{
            tenderForm: state.tenderForm,
            productsTenForm: state.productsTenForm,
            vendorsTenForm: state.vendorsTenForm,
            tenderInfo:state.tenderInfo,
            tenders: state.tenders,
            tenderProds: state.tenderProds,
            tenderVendor: state.tenderVendor,
            vendors: state.vendors,
            newTenderId: state.newTenderId,
            listUserTenders,
            createTender,
            tenderDetails,
            addProductTender,
            deleteProductTender,
            
        }}>
            {props.children}
        </TenderContext.Provider>
    )

}