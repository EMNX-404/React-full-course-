import { useState } from "react";
import React from 'react'

const useCounter = (initialvalue = 0 ) => {
    const [ count ,usecount] = useState(initialvalue)
       
    function increament()
    {
        setcount ( count + 1);
    }

      function increament()
    {
        setcount ( count + 1);
    }

    return[count , increament, decreament];
};

export default useCounter;