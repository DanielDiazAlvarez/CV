import React, { Component } from 'react';

export default class Navbar extends Component {
    render() {
        const title=<NavTitle text="Mi Currículum Vitae" />
        return (
            <nav className="navbar">
                { title }
                <NavElement text="Educación" />
                <NavElement text="Experiencia laboral" />
                <NavElement text="Habilidades" />
                <NavElement text="Intereses" />
                <NavElement text="Contacto" />
            </nav>
        );
    }
}

function NavTitle(props) {
    return(
        <h1 className="navTitle">
            { props.text }
        </h1>
    );
}

function NavElement(props){
    return(
        <button className="navElement">
            { props.text }
        </button>
    )
}
