import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import emailjs from 'emailjs-com';
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';

export default function Contact({ setModal, modal }) {
    const [errors, setErrors] = useState({
        nombre: 'Debe ingresar su nombre',
        email: '',
        mensaje: ''
    })
    const [input, setInput] = useState({
        nombre: '',
        email: '',
        mensaje: ''
    })
    const validador = (inputs) => {
        let validations = {};
        const nameExpresion = /[0-9/'0-9'/,*+._&=():;%$#!|-]/gi;
        const emailExpresion = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!inputs.nombre) {
            validations.nombre = 'Debe ingresar su nombre'
        } else if (nameExpresion.test(inputs.nombre)) {
            validations.nombre = 'Ingrese solo letras'
        } else if (!inputs.email) {
            validations.email = 'Debe ingresar su email'
        }
        else if (!emailExpresion.test(inputs.email)) {
            validations.email = 'Ingrese un email válido'
        } else if (!inputs.mensaje) {
            validations.mensaje = 'Debe ingresar un mensaje'
        }
        return validations
    }

    const handleOnChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        const errores = validador({ ...input, [e.target.name]: e.target.value })
        setErrors(errores)
    }

    const enviarEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_mh8ztbl', 'template_x1mo77o', e.target, 'bDQz4dWQq24jlUuix').then(res => {
            console.log(res);
        })
        // swal('', "¡Enviado exitosamente!", 'success')
        setInput({
            nombre: '',
            email: '',
            mensaje: ''
        })
        setModal(false)
    }
    const handleClose = () => setModal(false);

    return (
        <Modal
            show={modal}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    <i className='modalTitle'>Enviando Email a Marianela</i>
                </Modal.Title>
                <Button variant="secondary" onClick={handleClose}>
                x
              </Button>
            </Modal.Header>
            <form onSubmit={enviarEmail} autoComplete="off">
                <Modal.Body>

                    <div className="form-row">
                        <div className="contenedorInpputss">
                            <label className='tituloInput'><b>Nombre</b></label>
                            <input type="text" onChange={e => handleOnChange(e)} className="formEmail" id="nombre" name="nombre" value={input.nombre} />
                            {errors.nombre ? <p style={{ color: 'red', marginTop: '5px', marginBottom: '0' }}>{errors.nombre}</p> : null}
                        </div>
                        <div className="contenedorInpputss">
                            <label className='tituloInput'><b>Email</b></label>
                            <input type="text" onChange={e => handleOnChange(e)} className="formEmail" id="email" name="email" value={input.email} />
                            {errors.email ? <p style={{ color: 'red', marginTop: '5px', marginBottom: '0' }}>{errors.email}</p> : null}
                        </div>
                    </div>
                    <div className="contenedorInpputss">
                        <label className='tituloInput'><b>Mensaje</b></label>
                        <input type="text" onChange={e => handleOnChange(e)} className="formEmail" name="mensaje" value={input.mensaje}></input>
                        {errors.mensaje ? <p style={{ color: 'red', marginTop: '5px', marginBottom: '0' }}>{errors.mensaje}</p> : null}
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <div className='ContenedorBoton'>
                        {!errors.nombre && !errors.email && !errors.mensaje ?
                            <button variant="primary" type="submit" className="botoncito" style={{ backgroundColor: 'rgba(201, 105, 105, 1)', border: 'none', width: "150px", margin: "0 auto", marginTop: "20px" }}>Enviar</button>
                            : <button variant="primary" type="submit" disabled style={{
                                backgroundColor: 'rgba(175, 175, 175)', border: 'none', width: "150px", margin: "0 auto", marginTop: "20px", color: 'white', borderRadius: '5px',
                                padding: ' 5px 15px'
                            }}>Enviar</button>
                        }
                    </div>
                </Modal.Footer>
            </form>
        </Modal>
    )

}
