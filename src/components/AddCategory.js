import React , {useState}from 'react'
import PropTypes from 'prop-types';


//                          Desestructuracion de Componente Padre
export const AddCategory = ({setcategorys}) => {

    const [InputValue, setInputValue] = useState('')

    const handleInputChanged = ((e)=>{
        //console.log(e.target.value);
        setInputValue(e.target.value);
    })

    const handleSubmit=((e)=>{
        e.preventDefault();//previene que el boton de submitRefresque la pagina completa
        if(InputValue.trim().length > 2){
            //                   ... Operador Spred para clonar un obj
            // y se manda a llamar al objeto del comp padre para agregarle un valor  
            setcategorys(categ => [InputValue, ...categ]);
            setInputValue('');
        }else{
            console.log("No puede ser vacio el campo , por favor valida la informacion")
        }
    })

    
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={InputValue}
                onChange={handleInputChanged} />
        </form>
    )
}

AddCategory.propTypes={
    //agregando la propiedad requerida de setCategoris
    setcategorys:PropTypes.func.isRequired
}
