export const subirArchivo = async (archivo) => {
    const url = 'https://api.cloudinary.com/v1_1/defok5em4/upload';
    const formData = new FormData();
    formData.append('upload_preset', 'Journal');
    formData.append('file', archivo);

    try {
        const respuesta = await fetch(url, {
            method: 'POST',
            body: formData,
        })
        if(respuesta.ok){
            const datos = await respuesta.json();
            return datos.secure_url
        }else{
            throw await respuesta.json();
        }
        
    } catch (error) {
        console.log(error)
    }

}