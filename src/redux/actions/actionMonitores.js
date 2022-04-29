import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore"
import { baseDato } from "../../Firebase/firebaseConfig"
import { typesMonitores } from "../types/types"

//---------------------Edit-----------//
const nombreColleccion = "monitoresDB";

export const editAsync = (codigo, monitor)=>{
    console.log(codigo, monitor)
    return async (dispatch)=>{
        const  colleccionTraer = collection(baseDato, nombreColleccion)
        const q = query(colleccionTraer, where("codigo", "==", codigo))
        const traerDatosQ = await getDocs(q)
        let id
        traerDatosQ.forEach( async (docu)=>{
            id= docu.id
        })
        console.log(id)
        const documenRef = doc(baseDato, nombreColleccion, id)
       await updateDoc(documenRef, monitor)
        .then(resp => {
            dispatch(editSync(monitor))
            dispatch(listMonitoresAsyn())
            console.log(resp)
         })       
        .catch((err) => console.log(err))
 
    }
}


export const editSync = (monitor)=>{
    return{
        type: typesMonitores.edit,
        payload: monitor
    }
   
}

//-------------------delete--------------------//
export const deleteAsync = (codigo)=>{
  
    return async (dispatch)=>{
        const  colleccionTraer = collection(baseDato , nombreColleccion)
        const q = query(colleccionTraer, where("codigo", "==", codigo))
        const traerDatosQ = await getDocs(q)
        traerDatosQ.forEach((docum =>{
            deleteDoc(doc(baseDato, nombreColleccion, docum.id))
        }))
        dispatch(deleteSync(codigo))
        dispatch(listMonitoresAsyn())
    } 
}

export const deleteSync = (codigo)=>{
    return{
        type: typesMonitores.delete,
        payload: codigo
    }
   
}

//---------------listar----------------//
export const listMonitoresAsyn =()=>{
    return async (dispatch)=>{
        const  colleccionTraer = await getDocs(collection(baseDato , nombreColleccion))
        const monitores = []
        colleccionTraer.forEach((doc)=>{
            monitores.push({
                ...doc.data()
                

            })
        })
        dispatch(listSync(monitores))
        
    }
}

export const listSync = (monitor)=>{
    return{
        type: typesMonitores.list ,
        payload: monitor 
    }
   
}

//-------------agregar---------------//
export const addAsync =(monitor)=>{
    return(dispatch)=>{
        addDoc(collection(baseDato, nombreColleccion), monitor)
        .then(resp =>{
            dispatch(addSync(monitor))
            dispatch(listMonitoresAsyn())
        })
        .catch(error=>{
            console.warn(error);
        })
}
}

export const addSync =(monitor)=>{
    return{
        type: typesMonitores.add,
        payload: monitor,
    }
}