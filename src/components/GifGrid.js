import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
//import { getGif } from '../helpers/GetGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const { data: imgs, loading } = useFetchGifs(category);
    
    return (
        <>
            <h3 className="animate__animated animate__zoomIn">{category}</h3>
            {loading && <p className ="animate__animated animate__flash">Loading...</p>}
            <div className="card-grid">   
                {
                    imgs.map(img=>
                    <GifGridItem 
                    key={img.id}
                    {...img} />//madar cada una de las propiedades de las imagenes de manera independiente usando el operador spread
                    )
                }
            </div>
        </>
    )
}
    // const [images, setImages] = useState([]);
    // useEffect(()=>{ //si el segundo parametro es un arreglo vacio le digo que los involucrados dentro de la función solo se ejecuten una unica vez independientemende de los demas componentes, se le puede meter un parametro para indicar que si esta cbia entonces vovler  correr la funcion
    //     getGif(category)
    //         .then(setImages);
    // }, [category]);
