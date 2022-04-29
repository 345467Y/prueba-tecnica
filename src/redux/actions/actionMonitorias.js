import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore"
import { baseDato } from "../../Firebase/firebaseConfig"
import { typesMonitorias } from "../types/types"

//---------------------Edit-----------//
const nombreColleccion = "monitoriasDB";

export const editAsync = (codigo, monitoria)=>{
    console.log(codigo, monitoria)
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
       await updateDoc(documenRef, monitoria)
        .then(resp => {
            dispatch(editSync(monitoria))
            dispatch(listAsyn())
            console.log(resp)
         })       
        .catch((err) => console.log(err))
 
    }
}


export const editSync = (monitoria)=>{
    return{
        type: typesMonitorias.editSync,
        payload: monitoria
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
        dispatch(listAsyn())
    } 
}

export const deleteSync = (codigo)=>{
    return{
        type: typesMonitorias.delete,
        payload: codigo
    }
   
}

//---------------listar----------------//
export const listAsyn =()=>{
    return async (dispatch)=>{
        const  colleccionTraer = await getDocs(collection(baseDato , nombreColleccion))
        const monitorias = []
        colleccionTraer.forEach((doc)=>{
            monitorias.push({
                ...doc.data()
                

            })
        })
        dispatch(listSync(monitorias))
        
    }
}

export const listSync = (monitoria)=>{
    return{
        type: typesMonitorias.list ,
        payload: monitoria 
    }
   
}

//-------------agregar---------------//
export const addAsync =(monitoria)=>{
    return(dispatch)=>{
        addDoc(collection(baseDato, nombreColleccion), monitoria)
        .then(resp =>{
            dispatch(addSync(monitoria))
            dispatch(listAsyn())
        })
        .catch(error=>{
            console.warn(error);
        })
}
}

export const addSync =(monitoria)=>{
    return{
        type: typesMonitorias.add,
        payload: monitoria,
    }
}