import React, { cloneElement } from 'react';



export default props => {

    return (
        <div>
            {
                props.children.map((child, i) => {
                    return cloneElement(child, {...props, key: i});
                })
            }
        </div>
        
    )
}
{/* para quando não se tem acesso direto aos filhos*/ }