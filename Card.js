import React from 'react';

function BootstrapCard(props) {
    return(
        <div className="card" style={{width: "100%", marginBottom: "24px"}}>
            {props.hasHeader && 
                <div className="card-header">
                    <strong>{props.headerContent}</strong>
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