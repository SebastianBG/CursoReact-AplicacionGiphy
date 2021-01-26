import { useState,useEffect } from "react"
import { getGif } from "../helpers/GetGifs";

export const useFetchGifs = (category) => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect(()=>{ //si el segundo parametro es un arreglo vacio le digo que los involucrados dentro de la función solo se ejecuten una unica vez independientemende de los demas componentes, se le puede meter un parametro para indicar que si esta cbia entonces vovler  correr la funcion
        getGif(category)
            .then(imgs => setTimeout(() => {
                setstate({
                    data: imgs,
                    loading: false
                 })
            }, 1000)
             )
    }, [category]);



    return state;
}
