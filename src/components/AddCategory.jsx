 import { useState } from "react";
// creacion del nuevo componente
export const AddCategory = ({onNewCategory}) => {

    // para manejar el estado de lo que valla escribiendo la persona
     const [inputValue, setInputValue] = useState('');

     const onInputChange = ({target}) => {
        setInputValue (target.value);
     }

     const onSubmit = (event) =>{
        event.preventDefault();//
        if( inputValue.trim().length <= 1 ) return;

        // evento enter
      onNewCategory(inputValue.trim()); 
      setInputValue('');   
         
     }

  return (
         //  
    <form onSubmit={onSubmit}>
        <input  
        // tipo de caracteres
        type="text"
        //  lo que se vera dentro del cuadro de busqueda
        placeholder="Buscar Gifs"
        // para tener el valor del inputpor defecto
        value={inputValue}
        // para poder cambiar el value se ultiliza el onChange
        onChange={ onInputChange }
    />
    </form>
  )
}
