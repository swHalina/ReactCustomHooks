import { useState, useEffect } from "react";

export const useAjax = (url, id) => {

    //console.log({ url, id });

    const [estado, setEstado] = useState({
        datos: null,
        cargando: true
    })

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'eeb6e2abecmshc7c3f78cf23be28p133187jsn09f12ef43aad',
            'X-RapidAPI-Host': 'covid-193.p.rapidapi.com',
            'Content-Type': 'application/json'
        },
    };
    // funcion remplaza keys dentro de un objeto
    const replaceKeysInObj = (obj, oldKey, newKey, newObj = {}) => {
        if (typeof obj !== "object") return obj;
        for (let key in obj) {
            newObj[key === oldKey ? newKey : key] = replaceKeysInObj(obj[key], oldKey, newKey);
        }
        return newObj;
    };

    const getData = async () => {

        setEstado({
            datos: null,
            cargando: true
        })
        setTimeout(async () => {
            const peticion = await fetch(url, options);
            const { data } = await peticion.json();

            //console.log(data);

            // for (let i = 0; i < data.length; i++) {
            //     console.log(data[id])
            // }

            for (var key in data) {
                if (data[key]['id'] === id) {
                    let inter = [data[key]['id'], data[key]['name']];

                    //console.log(inter);
                    inter = replaceKeysInObj(inter, "0", "id")
                    inter = replaceKeysInObj(inter, "1", "name")

                    //console.log(inter);

                    setEstado({
                        datos: inter,
                        cargando: false
                    })

                }
            }

            //console.log(Object.hasOwn(data.id, id));
            //console.log(Object.values(data));
            //const found = data.find(element => element < 1);
            //const datosFinales = data.map(dataPre => dataPre.id === id);
            // //const result = data.filter(datofinal => datofinal.id === id);
            //console.log(found);

            // if (datosFinales) {
            //     setUsuario({
            //         datos: data
            //     })
            // }

            //console.log(estado.datos);

            // setTimeout(async () => {



        }, 1000)

    }
    useEffect(() => {
        getData();
    }, [url, id])

    return {
        datos: estado.datos,
        cargando: estado.cargando
    }

}