import React, {useState, Fragment} from'react';


const Contador = () => {

    const [numero, setNumero] = useState(0);

    
    return ( 
        <Fragment>
            <h3>First Componente {numero}</h3>
        <button onClick={}>Acceptar</button>
        </Fragment>
     );
}
 
export default Contador;