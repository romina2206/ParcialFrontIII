import { useState } from 'react';
import Card from './Card';
import '../Styles/Card.css';
import '../Styles/Formulario.css';



const Formulario = () => {
    const [cliente, setCliente] = useState({
        nombre: '',
        marca: ''
    });
    const [show, setShow] = useState(false);
    const [error, setError] = useState(false);
    const [respuestaVisible, setRespuestaVisible] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (cliente.nombre.length > 3 && cliente.marca.length > 5 && !cliente.marca.includes(' ')) {
            setShow(true);
            setError(false);
            setRespuestaVisible(true);
        } else {
            setError(true);
            setRespuestaVisible(true);
        }
    }

    return (
        <div>
            <div className="formulario-container">
                <form onSubmit={handleSubmit}>
                <label>Piloto Favorito</label>
                    <input
                        type="text"
                        value={cliente.nombre}
                        onChange={(event) =>
                            setCliente({ ...cliente, nombre: event.target.value.trimStart() })
                        }
                        placeholder="Ingresa el nombre de tu piloto favorito" 
                    />
                <label htmlFor="nombre">Escuderia Favorita</label>
                    <input
                        type="text"
                        value={cliente.marca}
                        onChange={(event) =>
                            setCliente({ ...cliente, marca: event.target.value.trimStart() })
                        }
                        placeholder="Ingresa tu escuderia favorita" 
                    />
                    <button>ENVIAR</button>
                </form>
            </div>
            {respuestaVisible && (
                <div className="respuesta-container">
                    <Card show={show} nombre={cliente.nombre} marca={cliente.marca} error={error} />
                </div>
            )}
        </div>
    )
}

export default Formulario;
