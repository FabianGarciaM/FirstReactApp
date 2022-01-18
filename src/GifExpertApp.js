import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {
    //const categories = ['One Punch', 'Dragonball', 'Samurai X']
    const [categorys, setcategorys] = useState(['Goku'])
    
    
    // const handelAdd = ()=>{
    //     //Modificando el estado inicial del COmponente
           //considerar el operador spret (...), para poder agregar datos al arreglo sin borrar el estado inicial
    //     //setcategorys([...categorys , 'Clarens'])
    //     setcategorys(categ => [...categ, 'Clarens'] )
    // }

    return (
        <>
            <h2>GIF EXPERT APP</h2>
            <AddCategory setcategorys={setcategorys}/>
            <hr/>
           
            <ol>
                {
                    categorys.map((category) =>
                        <GifGrid 
                        key={category} 
                        category={category} />
                    )
                }
            </ol>
            
        </>
    )
}






