import { Component } from 'react';

export default class Experiencia extends Component{
    render(){
        const terrats=<Trabajo 
            id="terrats"
            titulo="Trabajo como ayudante de almacén"
            web="https://www.terratsmedical.com/"
            empresa="Terrats Medical"
            inicio="jul 2018"
            final="ago 2018"
            comentario="Empresa de implantes dentales en la que trabajé dos veranos, durante mis vacaciones."
            logo="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.terratsmedical.com%2Fwp-content%2Fuploads%2F2017%2F03%2Flogo-terratsmedical-trans-246x150.png&f=1&nofb=1"
        />;
        return(
            <nav className="experiencia">
                { terrats }
            </nav>
        );
    }
}

function Trabajo(props) {
    return(
        <div className="trabajo" id={props.id}>
            <h2>{props.titulo}:</h2>
            <p><a href={props.web}>{props.empresa}</a>, ({props.inicio}-{props.final})</p>
            <p>{props.comentario}</p>
            <img src={props.logo} alt={props.empresa} />
        </div>
    );
}