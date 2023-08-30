import "./styles.css"
import { Cont } from "./Cont"
import data from "./stays.json"
export function Sitio() {
    return(
        <div className="margin-page">
            <h1 className="mb-4 ms-5">Stays in Finland</h1>
            <div className="section-cont">
                {data.map( product=>
                    <Cont
                    rating={product.rating}
                    title={product.title}
                    photo={product.photo}
                    superHost={product.superHost}
                    type={product.type}
                    />
                    
                    
                    
                    
                    )}
            </div>
        </div>
    )
}
