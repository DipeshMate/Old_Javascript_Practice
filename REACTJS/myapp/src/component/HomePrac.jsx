import React from 'react'
import { useContext ,useEffect,useRef} from 'react'
import { Context } from '../App'

const Row = () => {
    const data = useContext(Context)
    console.log(data);

    const contextRef = useRef(null);
    console.log(contextRef);

    useEffect(() => {
      console.log(contextRef.current);  
    },[])

    return(
    <div ref={contextRef}>
        {data}
        </div>
    )
}

const HomePrac = ({data}) => {
    
    return (
        <div>
            <Row/>
    </div>
  )
}

export default HomePrac
