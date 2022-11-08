import React, { useEffect } from 'react';

const useTitle = title => {
    useEffect(()=>{
        document.title=`${title} - Mildlife Journey`;
    },[title])
};

export default useTitle;