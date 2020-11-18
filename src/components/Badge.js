import React from 'react';
import confLogo from '../images/badge-header.svg';
import "./styles/Badge.css"

class Badge extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <img src={confLogo} alt="Logo conferencia"/>
                </div>

                <div>
                    <img src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar"></img>
                    <h1>Angel <br/> Cilfone</h1>
                </div>

                <div>
                    <p>Engineer</p>
                    <p>@cilfo_</p>
                </div>

                <div>
                    #platziconf
                </div>
            </div>
        )
    }
}

export default Badge;