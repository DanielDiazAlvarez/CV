import {Component} from 'react';

export default class Habilidades extends Component{
    render(){

    }
}

function Habilidad(props){
    return(
        <div className="habilidad">
           <img src={props.darkimg} />
        </div>
    );
}