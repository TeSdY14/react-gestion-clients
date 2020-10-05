import React, {useState} from 'react';

const Counter = () => {
    const [compteur, setCompteur] = useState(1)
    const handleChange = () => {
        setCompteur(compteur+1)
    }

    return <div>
        <button onClick={handleChange}> Incrémenter : "{compteur}" </button>
    </div>
}

export default Counter
