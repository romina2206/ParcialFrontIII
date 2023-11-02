import React from 'react';
import '../Styles/Card.css';

const Card = (props) => {
    return (
        <div className="card">
            {props.show ? (
                <div className="enviado">
                    <p>Hola {props.nombre}!</p>
                    {props.marca ? (
                        <div>
                            <p>Sabemos que tu marca favorita es:</p>
                            <p className="marca-text">{props.marca}</p>
                        </div>
                    ) : null}
                </div>
            ) : (
                props.error && (
                    <div className="error"> 
                        <p>Por favor, verifique que los datos sean correctos</p>
                    </div>
                )
            )}
        </div>
    );
};

export default Card;
