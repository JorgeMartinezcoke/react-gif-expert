import { GifItems } from "./GifItems";   
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({category}) => {

  // custom hook
  const { images, isLoading  } = useFetchGifs(category);

  // console.log({images, isLoading}); 

  return (
    <>

    <h3>{category}</h3>
  
    <div className="card-grid">
          {/* imagenes .map */}
          {
            images.map( (image) => (
              <GifItems
                key={image.id}
                {...image}
              
              />  
            )) 
          }
    </div>      
          
    </>
  )
} 