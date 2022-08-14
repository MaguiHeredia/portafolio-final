import React, { useEffect, useState } from 'react'
import foto from '../img/IMG_6302.jpg'
import './home.css'
import fotitoCountries from '../img/fotitoCountries.png'
import fotitoCountries2 from '../img/image0-2.jpeg'
import fotitoFaltaUno from '../img/image0-1.jpeg'
import fotitoFalta1 from '../img/image1.jpeg'
import { Link, animateScroll as scroll } from "react-scroll";
import OverlayTrigger from 'react-bootstrap/esm/OverlayTrigger';
import Tooltip from 'react-bootstrap/esm/Tooltip';
import Contact from './contact'

export default function Home() {
    const [modal, setModal] = useState(false)
    console.log(modal, 'modalll')
    const abrirModal = (e) => {
        e.preventDefault();
        setModal(true)
    }
    return (
        <div className='todo'>
            <nav className='nav' style={{ position: 'fixed', width: '100%', display: 'flex', justifyContent: 'center', zIndex: '8' }}>
                <Link to="section1" spy={true} smooth={true} duration={300} offset={-70} style={{padding: '0 20px'}} >
                    <button className='boton' >Presentación</button>
                </Link>
                <Link to="section2" spy={true} smooth={true} duration={300} offset={-70} style={{padding: '0 20px'}}>
                    <button className='boton'>Mis proyectos</button>
                </Link>
                <Link to="section3" spy={true} smooth={true} duration={300} offset={-70} style={{padding: '0 20px'}} >
                    <button className='boton'>Tecnologías</button>
                </Link>
                <Link to="section4" spy={true} smooth={true} duration={300} offset={-70} style={{padding: '0 20px'}}>
                    <button className='boton'>Contáctame</button>
                </Link>
            </nav>
            <div className='bodyy'>
                <div className='contenedorPresentacion' style={{ backgroundImage: `url(${foto})`, backgroundPosition: '100% 25%', backgroundSize: '800px', backgroundRepeat: 'no-repeat', height: '640px', width: '100%', backgroundColor: 'white' }}>
                    <div className='presentacion'>
                        <div className='nombre'>
                            <h3 className='titulo'>Mi nombre es</h3>
                            <h2 className='tituloNombre' id='magui'>MARIANELA HEREDIA</h2>
                            <h3 className='subtitulo'>Soy Desarrolladora Web Full Stack</h3>
                        </div>
                    </div>
                    {/* <div className='imagenn'>
                        <img src={foto} alt='imagen' className='foto' />
                        </div> */}
                </div>
                <div>
                    <div title='section1' id='section1'>
                        <div>
                            <h3 className='quiensoy' style={{marginBottom: '25px'}}>Quién soy?</h3>
                            <div className='contenedorinfo'>
                                <p className='texto'>  Soy una desarrolladora apasionada por crecer personalmente cada día. Inicié mi capacitación en la academia Henry y me sigo capacitando constantemente de manera autodidacta. Me considero una persona con buena capacidad resolutiva, siempre buscando maneras rápidas y eficaces de solucionar los problemas.
                                    <br />   Deseo trabajar en una empresa que me permita crecer personalmente y como desarrolladora web, un lugar donde pueda aprender del equipo de trabajo y aportar mis conocimientos.
                                    <br />   Trabajé durante 3 años en atención al público, lo que me ayudo a desarrollar habilidades blandas como la comunicación y el trabajo en equipo.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div title='section2' id='section2'>
                    <div>
                        <h3 className='quiensoy' style={{marginTop: '30px'}}>Mis proyectos</h3>

                        <div className='contenedorrr'>
                            <div >
                                <p className='tituloProyectos'><b style={{ fontWeight: '550' }}>Countries App</b> es una Single Page Application realizada como proyecto individual para el bootcamp de Henry.</p>
                                <div style={{ width: '50%', marginTop: '0' }}>
                                    <img src={fotitoCountries2} style={{ width: '650px', marginLeft: '-100px', position: 'absolute', zIndex: '5' }}></img>
                                </div>
                            </div>
                            <div style={{ display: 'flex', justifyConten: 'flex-end', marginTop: '0', flexDirection: 'column', width: '80%' }}>
                                <img src={fotitoCountries} style={{ width: '750px', zIndex: '1', marginLeft: '50px' }}></img>
                                <a href="https://countries-app-eta-five.vercel.app/" key='faltauno' target='_BLANCK'><button className='botonVisitar' style={{ width: '400px' }}>Visitar Countries App!</button></a>
                            </div>
                        </div>

                        <div className='contenedorrr' style={{ marginTop: '35px', alignItems: 'flex-start' }}>
                            <div>
                                <p className='tituloProyectos' style={{ width: '550px', marginLeft: '60px', marginRight: '20px', marginBottom: '0', marginTop: '0' }}><b style={{ fontWeight: '550' }}>Falta Uno!</b> es una aplicación, realizada en el proyecto grupal de Henry, que busca simplificar el alquiler de canchas de futbol, basquet, tenis y padel, tanto para el consumidor como para el dueño de las mismas. Cuenta con división de perfiles, de dueños y de jugadores, siendo ambas vistas totalmente diferentes y amoldándose a las necesidades de ambos tipos de usuarios.</p>
                                <div style={{ width: '50%', marginTop: '0' }}>
                                    <img src={fotitoFaltaUno} style={{ width: '680px', marginLeft: '-120px', position: 'absolute', zIndex: '6' }}></img>
                                </div>
                            </div>
                            <div style={{ display: 'flex', justifyConten: 'flex-end', marginTop: '0', flexDirection: 'column', width: '80%' }}>
                                <img src={fotitoFalta1} style={{ width: '750px', zIndex: '2', marginLeft: '-10px' }}></img>
                                <a href="https://falta-uno-henry.vercel.app/" key='faltauno' target='_BLANCK'><button className='botonVisitar' style={{ marginTop: '80px', width: '400px', marginBottom: '120px' }}>Visitar FaltaUno!</button></a>
                            </div>
                        </div>

                    </div>
                </div>
                <div title='section3' id='section3' style={{ paddingTop: '35px' }}>
                    <div>
                        <h3 className='quiensoy' >Tecnologías</h3>
                        <div className='contenedorTecnologias'>
                            <div className='loguitos'>
                                <OverlayTrigger
                                    key={"bottom"}
                                    placement={'bottom'}
                                    overlay={
                                        <Tooltip id={`tooltip-${"bottom"}`}>
                                            javascript
                                        </Tooltip>}>
                                    <img src='https://api.iconify.design/ion:logo-javascript.svg' className='img' />
                                </OverlayTrigger>
                            </div>
                            <div className='loguitos'>
                            <OverlayTrigger
                                    key={"bottom"}
                                    placement={'bottom'}
                                    overlay={
                                        <Tooltip id={`tooltip-${"bottom"}`}>
                                            HTML5
                                        </Tooltip>}>
                                <img src='https://api.iconify.design/mdi:language-html5.svg' className='img' />
                                </OverlayTrigger>
                            </div>
                            <div className='loguitos'>
                            <OverlayTrigger
                                    key={"bottom"}
                                    placement={'bottom'}
                                    overlay={
                                        <Tooltip id={`tooltip-${"bottom"}`}>
                                            CSS3
                                        </Tooltip>}>
                                <img src='https://api.iconify.design/teenyicons:css3-solid.svg' className='img' />
                                </OverlayTrigger>
                            </div>
                            <div className='loguitos'>
                            <OverlayTrigger
                                    key={"bottom"}
                                    placement={'bottom'}
                                    overlay={
                                        <Tooltip id={`tooltip-${"bottom"}`}>
                                            React
                                        </Tooltip>}>
                                <img src='https://api.iconify.design/akar-icons:react-fill.svg' className='img' />
                                </OverlayTrigger>
                            </div>
                            <div className='loguitos'>
                            <OverlayTrigger
                                    key={"bottom"}
                                    placement={'bottom'}
                                    overlay={
                                        <Tooltip id={`tooltip-${"bottom"}`}>
                                            Redux
                                        </Tooltip>}>
                                <img src='https://api.iconify.design/bxl:redux.svg' className='img' />
                                </OverlayTrigger>
                            </div>
                            <div className='loguitos'>
                            <OverlayTrigger
                                    key={"bottom"}
                                    placement={'bottom'}
                                    overlay={
                                        <Tooltip id={`tooltip-${"bottom"}`}>
                                            Bootstrap
                                        </Tooltip>}>
                                <img src='https://api.iconify.design/cib:bootstrap.svg' className='img' />
                                </OverlayTrigger>
                            </div>
                            <div className='loguitos'>
                            <OverlayTrigger
                                    key={"bottom"}
                                    placement={'bottom'}
                                    overlay={
                                        <Tooltip id={`tooltip-${"bottom"}`}>
                                            Node
                                        </Tooltip>}>
                                <img src='https://api.iconify.design/fa-brands:node.svg' className='img' />
                                </OverlayTrigger>
                            </div>
                        </div>
                        <div className='contenedorTecnologias' style={{marginBottom: '30px'}}>
                            <div className='loguitos'>
                            <OverlayTrigger
                                    key={"bottom"}
                                    placement={'bottom'}
                                    overlay={
                                        <Tooltip id={`tooltip-${"bottom"}`}>
                                            Express
                                        </Tooltip>}>
                                <img src='https://api.iconify.design/simple-icons:express.svg' className='img' />
                                </OverlayTrigger>
                            </div>
                            <div className='loguitos'>
                            <OverlayTrigger
                                    key={"bottom"}
                                    placement={'bottom'}
                                    overlay={
                                        <Tooltip id={`tooltip-${"bottom"}`}>
                                            Sequelize
                                        </Tooltip>}>
                                <img src='https://api.iconify.design/file-icons:sequelize.svg' className='img' />
                                </OverlayTrigger>
                            </div>
                            <div className='loguitos'>
                            <OverlayTrigger
                                    key={"bottom"}
                                    placement={'bottom'}
                                    overlay={
                                        <Tooltip id={`tooltip-${"bottom"}`}>
                                            PostresSQL
                                        </Tooltip>}>
                                <img src='https://api.iconify.design/akar-icons:postgresql-fill.svg' className='img' />
                                </OverlayTrigger>
                            </div>
                            <div className='loguitos'>
                            <OverlayTrigger
                                    key={"bottom"}
                                    placement={'bottom'}
                                    overlay={
                                        <Tooltip id={`tooltip-${"bottom"}`}>
                                            Auth0
                                        </Tooltip>}>
                                <img src='https://img.icons8.com/external-tal-revivo-regular-tal-revivo/24/000000/external-auth0-the-solution-you-need-for-web-mobile-iot-and-internal-applications-logo-regular-tal-revivo.png' className='img' />
                                </OverlayTrigger>
                            </div>
                            <div className='loguitos'>
                            <OverlayTrigger
                                    key={"bottom"}
                                    placement={'bottom'}
                                    overlay={
                                        <Tooltip id={`tooltip-${"bottom"}`}>
                                            Git
                                        </Tooltip>}>
                                <img src="https://img.icons8.com/ios-filled/50/000000/git.png" className='img' />
                                </OverlayTrigger>
                            </div>
                            <div className='loguitos'>
                            <OverlayTrigger
                                    key={"bottom"}
                                    placement={'bottom'}
                                    overlay={
                                        <Tooltip id={`tooltip-${"bottom"}`}>
                                            Figma
                                        </Tooltip>}>
                                <img src='https://img.icons8.com/ios-glyphs/30/000000/figma.png' className='img' />
                                </OverlayTrigger>
                            </div>
                            <div className='loguitos'>
                            <OverlayTrigger
                                    key={"bottom"}
                                    placement={'bottom'}
                                    overlay={
                                        <Tooltip id={`tooltip-${"bottom"}`}>
                                            Trello
                                        </Tooltip>}>
                                <img src="https://img.icons8.com/ios-filled/50/000000/trello.png" className='img' />
                                </OverlayTrigger>
                            </div>

                        </div>
                    </div>
                </div>
                <div title='section4' id='section4'>
                    <div>
                        <h3 className='quiensoy'>Contáctame</h3>
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', width: '100%', justifyContent: 'space-around', marginTop: '25px', marginBottom: '30px'}}>
                        <div style={{textAlign: 'start', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', marginLeft: '-100px', alignItems: 'flex-start', marginBottom: '15px'}}>
                        <h4 className='contacto' style={{marginLeft: '40px', textAlign: 'start'}}><img src='https://api.iconify.design/carbon:email-new.svg' className='imgContacto'/> maguiherediavaiarini@gmail.com</h4>
                        <h4 className='contacto' style={{ textAlign: 'start', marginLeft: '40px'}}><img src='https://api.iconify.design/ic:baseline-phone.svg' className='imgContacto'/> (+54)3541-201933</h4>
                        </div>
                        <div>
                        <a href="https://github.com/MaguiHeredia" key='github' target='_BLANCK' style={{width: '90px'}}><img src="https://img.icons8.com/glyph-neue/128/000000/github.png" style={{width: '90px'}}/></a>
                        <a href="https://www.linkedin.com/in/marianela-heredia-" key='linkedin' target='_BLANCK' style={{width: '90px'}}><img src="https://img.icons8.com/fluency/96/000000/linkedin.png" style={{width: '90px'}}/></a>
                        <a href="https://www.instagram.com/magui_heredia17/" key='instagram' target='_BLANCK' style={{width: '90px'}}><img src="https://img.icons8.com/fluency/96/000000/instagram-new.png" style={{width: '90px'}}/></a>
                        </div>
                        </div>
                    </div>
                    <button onClick={(e) => abrirModal(e)} className='enviarEmail'>Enviar Email</button>
                    {/* <Contact></Contact> */}
                </div>
            </div>
            <Contact setModal={setModal} modal={modal}/>
        </div>
    )
}