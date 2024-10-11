import { useState, useCallback } from "react";


const Teste = () => {

    const [name, setName] = useState('Igor');
    const [age, setAge] = useState(26);

    const handleChangeName = useCallback (() => {
        setName(prev => prev === 'Igor' ? 'Jose' : 'Igor');
    },[]);
    const handleChangeAge = useCallback (() => {
        const newAge = 10 * age;
        console.log(newAge);
        setAge(prev => prev === 26 ? 32 : 26);
    },[age]);
 //useCalback Memoriza uma funçao em vez de uma funçao
 //useMemo memoriza uma variavel


    
  return (
    <div>
        <p>
            {age}
        </p>
        <br/>
        <p>
            {name}
        </p>
        <button size={"24px"} onClick={handleChangeName}>Alterar Nome</button>
        <br/>
        <button size={"24px"} onClick={handleChangeAge}>Alterar Idade</button>
    </div>
  )
}

export {Teste};