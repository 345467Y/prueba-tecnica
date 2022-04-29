export const FileUp = async (file) => {
    //la ruta de la api es la siguiente 
    const urlCloudinary = 'https://api.cloudinary.com/v1_1/academia-yineth/upload'

    const formData = new FormData()

    formData.append('upload_preset', 'amazonas'); //conectar con cloudinary
    formData.append('file', file); // lo que voy a subir 

   const resp= await fetch(urlCloudinary, {
        method: 'POST',
        body: formData
    })
    const data = await resp.json()
    console.log(data)
    console.log(data.secure_url)
    return data.secure_url

}