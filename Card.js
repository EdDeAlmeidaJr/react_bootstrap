import React from 'react';

function BootstrapCard(props) {
    return(
        <div className="card" style={{width: "100%"}}>
            {props.hasHeader && 
                <div className="card-header">
                    {props.headerContent}
                </div>
            }
            <div className="card-body">
                {props.bodyContent}
            </div>
            {props.hasFooter && 
                <div className="card-footer">
                    {props.footerContent}
                </div>
            }
        </div>
    )
}

export default BootstrapCard;