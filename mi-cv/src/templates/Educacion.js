import React, { Component } from 'react';

export default class Educacion extends Component {
    render() {

        const title = <EduTitle text="Mi formación" />;
        const batx = <Estudios id="batx"
            titulo="Bachillerato tecnológico"
            centro="Institut Lauro"
            inicio="2017"
            final="2019"
            imagen="https://www.lesfranqueses.cat/noticies/resources/cache/franqweb/40382-800x800.jpg"
            web="https://blocs.xtec.cat/inslauro/"
        />
        const grado = <Estudios id="grado"
            titulo="Grado en Ingeniería de Tecnologías y Servicios de Telecomunicación"
            centro="Universitat Politècnica de Catalunya, Campus Nord"
            inicio="2019"
            final="actualidad"
            imagen="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.alliancevending.es%2Fwp-content%2Fuploads%2F2019%2F03%2F42227371-1a91-4977-b73a-97615e8162c0.jpeg&f=1&nofb=1"
            web="https://telecos.upc.edu/es"
        />
        return (
            <nav className="educacion">
                { title }
                <ul>
                    <li>
                        { batx }
                    </li>
                </ul>
                <ul>
                    <li>
                        { grado }
                    </li>
                </ul>
            </nav >
        );
    }
}

function EduTitle(props) {
    return (
        <h1 className="eduTitle">
            { props.text}
        </h1>
    )
}

function Estudios(props) {
    return (
        <div className="estudios" id={props.id}>
            <h2>{props.titulo}:</h2>
            <p><a href={props.web}>{props.centro}</a>, ({props.inicio}-{props.final})</p>
            <img src={props.imagen} alt={props.centro}></img>
        </div>
    )
}