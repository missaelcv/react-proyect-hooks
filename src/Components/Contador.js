import React, {useState, Fragment} from'react';


const Contador = () => {

    const [numero, setNumero] = useState(0);

    const aumentar = () => {
        console.log('Se Pulso El CLic')
        setNumero(numero + 1);
    }
    return ( 
        <Fragment>
            <h3>First Componente {numero}</h3>
        <button onClick={aumentar}>Acceptar</button>
        </Fragment>
     );
}
 
export default Contador;