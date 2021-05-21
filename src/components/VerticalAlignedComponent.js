import React from 'react';


const VerticalAlignedComponent = BaseComponent => props => {


    console.log("HOF", props);
    return (
        <div className="vertical-center">
            <BaseComponent
                {...props}
                style={{
                    border: '1px solid rgba(0, 0, 0, 0.05)',
                    color: 'green'
                }}
            />
        </div>
    );
};


export default VerticalAlignedComponent;
