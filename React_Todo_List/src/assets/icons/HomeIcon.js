import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon';

function Icon(props) {
    return (
        <div>
            <SvgIcon {...props} className="icons">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </SvgIcon>
            
        </div>
    )
}


export default Icon;