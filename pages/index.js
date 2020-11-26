import { useState } from 'react'

function Home() {
    const [contador , setContador] = useState(1);

    function adcCounter() {
        setContador(contador + 1);
    }

    return <div>
            <h1>Home : {contador} </h1>
            <button onClick={adcCounter}>Contar</button>
           </div>
}

export default Home