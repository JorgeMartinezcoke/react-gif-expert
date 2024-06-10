import { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GIFExpertApp = () => {

    // categorias y punto inicial de nuestro estado, es bueno ponerlo si nso 
    // marcara el estado incial como UNDEFINE y despues puede dar problemas
     const [categories, setCategories] = useState( ['Oh I Get It Pinky And The Brain GIF by HULU ']);

     // para agregar el valorant
    const onAddCategory = (newCategory) => {
        // Se llama el setCategories para cambiar las categorias, con los tres
        // puntos se hace una copia y se manda a llamar la categoria y despues
        // de la coma se agrega el nuevo elemento en el arreglo

        if(categories.includes(newCategory)) return;

        // insertar la nueva categoria
        setCategories([newCategory, ...categories ]);

        // console.log(newCategory)
    }

  return (
   <>
   {/* titulo */}
    <h1>GifExpertApp</h1>

    {/* input para agreagr categorias. al componente AddCategory con la propiedad
        setCategory se le manda la referencia setCategory */}
    <AddCategory 
    // setCategories={ setCategories } 
        onNewCategory={ (value) => onAddCategory(value) }
    />
    
        {categories.map( (category) => (
            <GifGrid key={category}
                category={category}
                
            />
        ) 
        )}
   </> 
  )
}
