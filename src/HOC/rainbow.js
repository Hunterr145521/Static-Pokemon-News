import React from 'react';

const Rainbow = (WrappedComponent) => {
    const colour = ['red','pink','purple','indigo','blue','green','lime','orange','yellow','brown','black'];
    const colorSelector = colour[Math.floor(Math.random()*10)];
    const className = colorSelector + '-text';

    return(props) => {
        return(
            <div className={className}>
                <WrappedComponent {...props}/>
            </div>
        )
    }
}
export default Rainbow;