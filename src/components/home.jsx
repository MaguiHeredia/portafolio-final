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
import fotitoCountries3 from '../img/image3.jpeg'
import fotitoCountries4 from '../img/image4.jpeg'
import fotitoCountries5 from '../img/image0-4.jpeg'
import fotitoFaltaUno3 from '../img/image0-3.jpeg'
import fotitoFaltaUno4 from '../img/image1-1.jpeg'
import fotitoFaltaUno5 from '../img/image2.jpeg'
import Carrusel from './carrusel'



export default function Home() {
    const [modal, setModal] = useState(false)
    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 768px)").matches
    )
    useEffect(() => {
        window
            .matchMedia("(min-width: 768px)")
            .addEventListener('change', e => setMatches(e.matches));
    }, []);

    console.log(modal, 'modalll')
    const abrirModal = (e) => {
        e.preventDefault();
        setModal(true)
    }
    return (
        <div className='todo'>
            {matches ?
                <div>
                    <nav className='nav' style={{ position: 'fixed', width: '100%', display: 'flex', justifyContent: 'center', zIndex: '8' }}>
                        <Link to="section1" spy={true} smooth={true} duration={300} offset={-70} style={{ padding: '0 20px' }} >
                            <button className='boton' >Presentación</button>
                        </Link>
                        <Link to="section2" spy={true} smooth={true} duration={300} offset={-70} style={{ padding: '0 20px' }}>
                            <button className='boton'>Proyectos</button>
                        </Link>
                        <Link to="section3" spy={true} smooth={true} duration={300} offset={-70} style={{ padding: '0 20px' }} >
                            <button className='boton'>Tecnologías</button>
                        </Link>
                        <Link to="section4" spy={true} smooth={true} duration={300} offset={-70} style={{ padding: '0 20px' }}>
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
                            <div id='section1'>
                                <div>
                                    <h3 className='quiensoy' style={{ marginBottom: '25px' }}>Quién soy?</h3>
                                    <div className='contenedorinfo'>
                                        <p className='texto'>  Desarrolladora especializada como Front End Developer. Curiosa, con ganas de aprender siempre cosas nuevas que me ayuden a crecer personal y profesionalmente cada día. Con excelente capacidad resolutiva, siempre buscando maneras rápidas y eficaces de solucionar los problemas, y con buena capacidad de liderazgo.
                                            <br />Inicié mi capacitación en la academia Henry y me sigo capacitando constantemente de manera autodidacta.
                                            <br />Trabajé durante 3 años en atención al público, lo que me ayudo a desarrollar habilidades blandas como la comunicación y el trabajo en equipo.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id='section2'>
                            <div>
                                <h3 className='quiensoy' style={{ marginTop: '30px' }}>Proyectos</h3>

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
                        <div id='section3' style={{ paddingTop: '35px' }}>
                            <div>
                                <h3 className='quiensoy' >Tecnologías</h3>
                                <div className='contenedorTecnologias'>
                                    <OverlayTrigger
                                        key={"bottom"}
                                        placement={'bottom'}
                                        overlay={
                                            <Tooltip id={`tooltip-${"bottom"}`}>
                                                javascript
                                            </Tooltip>}>
                                        <div className='loguitos'>
                                            <img src='https://api.iconify.design/ion:logo-javascript.svg' className='img' />
                                        </div>
                                    </OverlayTrigger>
                                    <OverlayTrigger
                                        key={"bottom"}
                                        placement={'bottom'}
                                        overlay={
                                            <Tooltip id={`tooltip-${"bottom"}`}>
                                                HTML
                                            </Tooltip>}>
                                        <div className='loguitos'>
                                            <img src='https://api.iconify.design/mdi:language-html5.svg' className='img' />
                                        </div>
                                    </OverlayTrigger>
                                    <OverlayTrigger
                                        key={"bottom"}
                                        placement={'bottom'}
                                        overlay={
                                            <Tooltip id={`tooltip-${"bottom"}`}>
                                                CSS
                                            </Tooltip>}>
                                        <div className='loguitos'>
                                            <img src='https://api.iconify.design/teenyicons:css3-solid.svg' className='img' />
                                        </div>
                                    </OverlayTrigger>
                                    <OverlayTrigger
                                        key={"bottom"}
                                        placement={'bottom'}
                                        overlay={
                                            <Tooltip id={`tooltip-${"bottom"}`}>
                                                React
                                            </Tooltip>}>
                                        <div className='loguitos'>
                                            <img src='https://api.iconify.design/akar-icons:react-fill.svg' className='img' />
                                        </div>
                                    </OverlayTrigger>
                                    <OverlayTrigger
                                        key={"bottom"}
                                        placement={'bottom'}
                                        overlay={
                                            <Tooltip id={`tooltip-${"bottom"}`}>
                                                Redux
                                            </Tooltip>}>
                                        <div className='loguitos'>
                                            <img src='https://api.iconify.design/bxl:redux.svg' className='img' />
                                        </div>
                                    </OverlayTrigger>
                                    <OverlayTrigger
                                        key={"bottom"}
                                        placement={'bottom'}
                                        overlay={
                                            <Tooltip id={`tooltip-${"bottom"}`}>
                                                Bootstrap
                                            </Tooltip>}>
                                        <div className='loguitos'>
                                            <img src='https://api.iconify.design/cib:bootstrap.svg' className='img' />
                                        </div>
                                    </OverlayTrigger>
                                    <OverlayTrigger
                                        key={"bottom"}
                                        placement={'bottom'}
                                        overlay={
                                            <Tooltip id={`tooltip-${"bottom"}`}>
                                                Node
                                            </Tooltip>}>
                                        <div className='loguitos'>
                                            <img src='https://api.iconify.design/fa-brands:node.svg' className='img' />
                                        </div>
                                    </OverlayTrigger>
                                </div>
                                <div className='contenedorTecnologias' style={{ marginBottom: '30px' }}>
                                    <OverlayTrigger
                                        key={"bottom"}
                                        placement={'bottom'}
                                        overlay={
                                            <Tooltip id={`tooltip-${"bottom"}`}>
                                                Express
                                            </Tooltip>}>
                                        <div className='loguitos'>
                                            <img src='https://api.iconify.design/simple-icons:express.svg' className='img' />
                                        </div>
                                    </OverlayTrigger>
                                    <OverlayTrigger
                                        key={"bottom"}
                                        placement={'bottom'}
                                        overlay={
                                            <Tooltip id={`tooltip-${"bottom"}`}>
                                                Sequelize
                                            </Tooltip>}>
                                        <div className='loguitos'>
                                            <img src='https://api.iconify.design/file-icons:sequelize.svg' className='img' />
                                        </div>
                                    </OverlayTrigger>
                                    <OverlayTrigger
                                        key={"bottom"}
                                        placement={'bottom'}
                                        overlay={
                                            <Tooltip id={`tooltip-${"bottom"}`}>
                                                PostresSQL
                                            </Tooltip>}>
                                        <div className='loguitos'>
                                            <img src='https://api.iconify.design/akar-icons:postgresql-fill.svg' className='img' />
                                        </div>
                                    </OverlayTrigger>
                                    <OverlayTrigger
                                        key={"bottom"}
                                        placement={'bottom'}
                                        overlay={
                                            <Tooltip id={`tooltip-${"bottom"}`}>
                                                Auth0
                                            </Tooltip>}>
                                        <div className='loguitos'>
                                            <img src='https://img.icons8.com/external-tal-revivo-regular-tal-revivo/24/000000/external-auth0-the-solution-you-need-for-web-mobile-iot-and-internal-applications-logo-regular-tal-revivo.png' className='img' />
                                        </div>
                                    </OverlayTrigger>
                                    <OverlayTrigger
                                        key={"bottom"}
                                        placement={'bottom'}
                                        overlay={
                                            <Tooltip id={`tooltip-${"bottom"}`}>
                                                Git
                                            </Tooltip>}>
                                        <div className='loguitos'>
                                            <img src="https://img.icons8.com/ios-filled/50/000000/git.png" className='img' />
                                        </div>
                                    </OverlayTrigger>
                                    <OverlayTrigger
                                        key={"bottom"}
                                        placement={'bottom'}
                                        overlay={
                                            <Tooltip id={`tooltip-${"bottom"}`}>
                                                Figma
                                            </Tooltip>}>
                                        <div className='loguitos'>
                                            <img src='https://img.icons8.com/ios-glyphs/30/000000/figma.png' className='img' />
                                        </div>
                                    </OverlayTrigger>
                                    <OverlayTrigger
                                        key={"bottom"}
                                        placement={'bottom'}
                                        overlay={
                                            <Tooltip id={`tooltip-${"bottom"}`}>
                                                Trello
                                            </Tooltip>}>
                                        <div className='loguitos'>
                                            <img src="https://img.icons8.com/ios-filled/50/000000/trello.png" className='img' />
                                        </div>
                                    </OverlayTrigger>

                                </div>
                            </div>
                        </div>
                        <div id='section4'>
                            <div>
                                <h3 className='quiensoy'>Contáctame</h3>
                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', width: '100%', justifyContent: 'space-around', marginTop: '25px', marginBottom: '30px' }}>
                                    <div style={{ textAlign: 'start', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', marginLeft: '-100px', alignItems: 'flex-start', marginBottom: '15px' }}>
                                        <h4 className='contacto' style={{ marginLeft: '40px', textAlign: 'start' }}><img src='https://api.iconify.design/carbon:email-new.svg' className='imgContacto' /> maguiherediavaiarini@gmail.com</h4>
                                        <h4 className='contacto' style={{ textAlign: 'start', marginLeft: '40px' }}><img src='https://api.iconify.design/ic:baseline-phone.svg' className='imgContacto' /> (+54)3541-201933</h4>
                                    </div>
                                    <div>
                                        <a href="https://github.com/MaguiHeredia" key='github' target='_BLANCK' style={{ width: '90px' }}><img src="https://img.icons8.com/glyph-neue/128/000000/github.png" style={{ width: '90px' }} /></a>
                                        <a href="https://www.linkedin.com/in/marianela-heredia-" key='linkedin' target='_BLANCK' style={{ width: '90px' }}><img src="https://img.icons8.com/fluency/96/000000/linkedin.png" style={{ width: '90px' }} /></a>
                                        <a href="https://www.instagram.com/magui_heredia17/" key='instagram' target='_BLANCK' style={{ width: '90px' }}><img src="https://img.icons8.com/fluency/96/000000/instagram-new.png" style={{ width: '90px' }} /></a>
                                    </div>
                                </div>
                            </div>
                            <button onClick={(e) => abrirModal(e)} className='enviarEmail'>Enviar Email</button>
                            {/* <Contact></Contact> */}
                        </div>
                    </div>
                    <Contact setModal={setModal} modal={modal} />
                </div>
                :

                <div>
                    <nav style={{ position: 'fixed', width: '100%', display: 'flex', justifyContent: 'center', zIndex: '8', backgroundColor: 'rgba(237, 237, 237, 1)' }}>
                        <Link to="section1" spy={true} smooth={true} duration={300} offset={-60} style={{ padding: '5px 10px' }} >
                            <button style={{fontWeight: '500', fontSize: '11px', border: 'none', backgroundColor: 'rgba(237, 237, 237, 1)', color: 'rgba(95, 113, 97, 1)' }}>Presentación</button>
                        </Link>
                        <Link to="section2" spy={true} smooth={true} duration={300} offset={-60} style={{ padding: '5px 10px' }}>
                            <button style={{fontWeight: '500', fontSize: '11px', border: 'none', backgroundColor: 'rgba(237, 237, 237, 1)', color: 'rgba(95, 113, 97, 1)' }}>Proyectos</button>
                        </Link>
                        <Link to="section3" spy={true} smooth={true} duration={300} offset={-60} style={{ padding: '5px 10px' }} >
                            <button style={{fontWeight: '500', fontSize: '11px', border: 'none', backgroundColor: 'rgba(237, 237, 237, 1)', color: 'rgba(95, 113, 97, 1)' }} >Tecnologías</button>
                        </Link>
                        <Link to="section4" spy={true} smooth={true} duration={300} offset={-60} style={{ padding: '5px 10px' }}>
                            <button style={{fontWeight: '500', fontSize: '11px', border: 'none', backgroundColor: 'rgba(237, 237, 237, 1)', color: 'rgba(95, 113, 97, 1)' }}>Contáctame</button>
                        </Link>
                    </nav>
                    <div className='bodyyyy'>
                        <div style={{ paddingTop: '19px', width: '100%', backgroundColor: 'white' }}>
                            <div style={{ backgroundImage: `url(${foto})`, backgroundSize: '60%', backgroundRepeat: 'no-repeat', backgroundPosition: '100% 25%', width: '100%', backgroundColor: 'white', height: '200px' }}>
                                <div style={{ display: 'flex', justifyContent: 'flex-end', flexDirection: 'column', alignItems: 'flex-start', width: '100%', paddingTop: '50px', paddingLeft: '15px' }}>
                                    <h3 style={{ color: 'rgba(95, 113, 97, 1)', fontWeight: '300', fontSize: '16px', marginBottom: '5', paddingBottom: '0' }}>Mi nombre es</h3>
                                    <h2 style={{ color: 'rgba(95, 113, 97, 1)', fontWeight: '600', fontSize: '19px', marginTop: '0', paddingTop: '0 ', marginBottom: '15px', textShadow: '2px 2px 5px rgb(8, 8, 8, .30)' }}>MARIANELA HEREDIA</h2>
                                    <h3 style={{ backgroundColor: 'rgba(201, 105, 105, 1)', color: 'white', fontWeight: '300', fontSize: '14px', padding: '4px 7px' }}>Soy Full Stack Developer</h3>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div id='section1'>
                                <div>
                                    <h3 className='quiensoy' style={{ marginBottom: '25px', fontSize: '24px', fontWeight: '800', marginBottom: '10px' }}>Quién soy?</h3>
                                    <div className='contenedorinfo' style={{ fontSize: '17px', margin: '0', padding: '0' }}>
                                        <p className='texto' style={{ fontSize: '15px', margin: '0' }}>   Desarrolladora especializada como Front End Developer. Curiosa, con ganas de aprender siempre cosas nuevas que me ayuden a crecer personal y profesionalmente cada día. Con excelente capacidad resolutiva, siempre buscando maneras rápidas y eficaces de solucionar los problemas, y con buena capacidad de liderazgo.
                                            <br />Inicié mi capacitación en la academia Henry y me sigo capacitando constantemente de manera autodidacta.
                                            <br />Trabajé durante 3 años en atención al público, lo que me ayudo a desarrollar habilidades blandas como la comunicación y el trabajo en equipo.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id='section2'>
                            <div>
                                <h3 className='quiensoy' style={{ marginTop: '25px', fontSize: '24px', fontWeight: '800', marginBottom: '10px' }}>Proyectos</h3>

                                <div >
                                    <div >
                                        <div style={{ width: '100%' }}>
                                            <p style={{ fontSize: '16px', color: 'rgba(95, 113, 97, 1)', backgroundColor: 'rgba(237, 237, 237, 1)', margin: '25px', padding: '5px' }}><b style={{ fontWeight: '550' }}>Falta Uno!</b> es una aplicación, realizada en el proyecto grupal de Henry, que busca simplificar el alquiler de canchas de futbol, basquet, tenis y padel, tanto para el consumidor como para el dueño de las mismas. Cuenta con división de perfiles, de dueños y de jugadores, siendo ambas vistas totalmente diferentes y amoldándose a las necesidades de ambos tipos de usuarios.</p>
                                        </div>
                                        <div >
                                            <Carrusel image1={fotitoFaltaUno} image2={fotitoFalta1} image3={fotitoFaltaUno3} image4={fotitoFaltaUno4} image5={fotitoFaltaUno5}></Carrusel>
                                        </div>
                                        <a href="https://falta-uno-henry.vercel.app/" key='faltauno' target='_BLANCK'><button className='botonVisitar' style={{ marginTop: '20px', width: '60%', marginBottom: '40px', fontSize: '20px', padding: '5px 10px' }}>Visitar FaltaUno!</button></a>
                                    </div>
                                    <div >
                                        <div style={{ width: '100%' }}>
                                            <p style={{ fontSize: '16px', color: 'rgba(95, 113, 97, 1)', backgroundColor: 'rgba(237, 237, 237, 1)', margin: '25px', padding: '5px' }}><b style={{ fontWeight: '550', color: 'rgba(95, 113, 97, 1)' }}>Countries App</b> es una Single Page Application realizada como proyecto individual para el bootcamp de Henry.</p>
                                        </div>
                                        <div >
                                            <Carrusel image1={fotitoCountries2} image2={fotitoCountries} image3={fotitoCountries3} image4={fotitoCountries4} image5={fotitoCountries5}></Carrusel>
                                        </div>
                                        <a href="https://countries-app-eta-five.vercel.app/" key='faltauno' target='_BLANCK'><button className='botonVisitar' style={{ marginTop: '20px', width: '60%', marginBottom: '20px', fontSize: '20px', padding: '5px 10px' }}>Visitar Countries App!</button></a>
                                    </div>

                                </div>

                                <div >

                                </div>

                            </div>
                        </div>
                        <div id='section3' style={{ paddingTop: '35px' }}>
                            <div>
                                <h3 className='quiensoy' style={{ marginTop: '25px', fontSize: '24px', fontWeight: '800', marginBottom: '10px' }}>Tecnologías</h3>
                                <div style={{ display: 'flex', flexDirection: 'row', width: '100%', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
                                    <OverlayTrigger
                                        key={"bottom"}
                                        placement={'bottom'}
                                        overlay={
                                            <Tooltip id={`tooltip-${"bottom"}`}>
                                                javascript
                                            </Tooltip>}>
                                        <div className='loguitos' style={{width: '55px', height: '55px', marginBottom: '30px'}}>
                                            <img src='https://api.iconify.design/ion:logo-javascript.svg' className='img' style={{width: '30px', height: '30px'}}/>
                                        </div>
                                    </OverlayTrigger>
                                    <OverlayTrigger
                                        key={"bottom"}
                                        placement={'bottom'}
                                        overlay={
                                            <Tooltip id={`tooltip-${"bottom"}`}>
                                                HTML
                                            </Tooltip>}>
                                        <div className='loguitos' style={{width: '55px', height: '55px', marginBottom: '30px'}}>
                                            <img src='https://api.iconify.design/mdi:language-html5.svg' className='img' style={{width: '30px', height: '30px'}}/>
                                        </div>
                                    </OverlayTrigger>
                                    <OverlayTrigger
                                        key={"bottom"}
                                        placement={'bottom'}
                                        overlay={
                                            <Tooltip id={`tooltip-${"bottom"}`}>
                                                CSS
                                            </Tooltip>}>
                                        <div className='loguitos' style={{width: '55px', height: '55px', marginBottom: '30px'}}>
                                            <img src='https://api.iconify.design/teenyicons:css3-solid.svg' className='img' style={{width: '30px', height: '30px'}}/>
                                        </div>
                                    </OverlayTrigger>
                                    <OverlayTrigger
                                        key={"bottom"}
                                        placement={'bottom'}
                                        overlay={
                                            <Tooltip id={`tooltip-${"bottom"}`}>
                                                React
                                            </Tooltip>}>
                                        <div className='loguitos' style={{width: '55px', height: '55px', marginBottom: '30px'}}>
                                            <img src='https://api.iconify.design/akar-icons:react-fill.svg' className='img' style={{width: '30px', height: '30px'}}/>
                                        </div>
                                    </OverlayTrigger>
                                    <OverlayTrigger
                                        key={"bottom"}
                                        placement={'bottom'}
                                        overlay={
                                            <Tooltip id={`tooltip-${"bottom"}`}>
                                                Redux
                                            </Tooltip>}>
                                        <div className='loguitos' style={{width: '55px', height: '55px', marginBottom: '30px'}}>
                                            <img src='https://api.iconify.design/bxl:redux.svg' className='img' style={{width: '30px', height: '30px'}}/>
                                        </div>
                                    </OverlayTrigger>
                                    <OverlayTrigger
                                        key={"bottom"}
                                        placement={'bottom'}
                                        overlay={
                                            <Tooltip id={`tooltip-${"bottom"}`}>
                                                Bootstrap
                                            </Tooltip>}>
                                        <div className='loguitos' style={{width: '55px', height: '55px', marginBottom: '30px'}}>
                                            <img src='https://api.iconify.design/cib:bootstrap.svg' className='img' style={{width: '30px', height: '30px'}}/>
                                        </div>
                                    </OverlayTrigger>
                                    <OverlayTrigger
                                        key={"bottom"}
                                        placement={'bottom'}
                                        overlay={
                                            <Tooltip id={`tooltip-${"bottom"}`}>
                                                Node
                                            </Tooltip>}>
                                        <div className='loguitos' style={{width: '55px', height: '55px', marginBottom: '30px'}}>
                                            <img src='https://api.iconify.design/fa-brands:node.svg' className='img' style={{width: '30px', height: '30px'}}/>
                                        </div>
                                    </OverlayTrigger>
                                    <OverlayTrigger
                                        key={"bottom"}
                                        placement={'bottom'}
                                        overlay={
                                            <Tooltip id={`tooltip-${"bottom"}`}>
                                                Express
                                            </Tooltip>}>
                                        <div className='loguitos' style={{width: '55px', height: '55px', marginBottom: '30px'}}>
                                            <img src='https://api.iconify.design/simple-icons:express.svg' className='img' style={{width: '30px', height: '30px'}}/>
                                        </div>
                                    </OverlayTrigger>
                                    <OverlayTrigger
                                        key={"bottom"}
                                        placement={'bottom'}
                                        overlay={
                                            <Tooltip id={`tooltip-${"bottom"}`}>
                                                Sequelize
                                            </Tooltip>}>
                                        <div className='loguitos' style={{width: '55px', height: '55px', marginBottom: '30px'}}>
                                            <img src='https://api.iconify.design/file-icons:sequelize.svg' className='img' style={{width: '30px', height: '30px'}}/>
                                        </div>
                                    </OverlayTrigger>
                                    <OverlayTrigger
                                        key={"bottom"}
                                        placement={'bottom'}
                                        overlay={
                                            <Tooltip id={`tooltip-${"bottom"}`}>
                                                PostresSQL
                                            </Tooltip>}>
                                        <div className='loguitos' style={{width: '55px', height: '55px', marginBottom: '30px'}}>
                                            <img src='https://api.iconify.design/akar-icons:postgresql-fill.svg' className='img' style={{width: '30px', height: '30px'}}/>
                                        </div>
                                    </OverlayTrigger>
                                    <OverlayTrigger
                                        key={"bottom"}
                                        placement={'bottom'}
                                        overlay={
                                            <Tooltip id={`tooltip-${"bottom"}`}>
                                                Auth0
                                            </Tooltip>}>
                                        <div className='loguitos' style={{width: '55px', height: '55px', marginBottom: '30px'}}>
                                            <img src='https://img.icons8.com/external-tal-revivo-regular-tal-revivo/24/000000/external-auth0-the-solution-you-need-for-web-mobile-iot-and-internal-applications-logo-regular-tal-revivo.png' className='img' style={{width: '30px', height: '30px'}}/>
                                        </div>
                                    </OverlayTrigger>
                                    <OverlayTrigger
                                        key={"bottom"}
                                        placement={'bottom'}
                                        overlay={
                                            <Tooltip id={`tooltip-${"bottom"}`}>
                                                Git
                                            </Tooltip>}>
                                        <div className='loguitos' style={{width: '55px', height: '55px', marginBottom: '30px'}}>
                                            <img src="https://img.icons8.com/ios-filled/50/000000/git.png" className='img' style={{width: '30px', height: '30px'}}/>
                                        </div>
                                    </OverlayTrigger>
                                    <OverlayTrigger
                                        key={"bottom"}
                                        placement={'bottom'}
                                        overlay={
                                            <Tooltip id={`tooltip-${"bottom"}`}>
                                                Figma
                                            </Tooltip>}>
                                        <div className='loguitos' style={{width: '55px', height: '55px', marginBottom: '30px'}}>
                                            <img src='https://img.icons8.com/ios-glyphs/30/000000/figma.png' className='img' style={{width: '30px', height: '30px'}}/>
                                        </div>
                                    </OverlayTrigger>
                                    <OverlayTrigger
                                        key={"bottom"}
                                        placement={'bottom'}
                                        overlay={
                                            <Tooltip id={`tooltip-${"bottom"}`}>
                                                Trello
                                            </Tooltip>}>
                                        <div className='loguitos' style={{width: '55px', height: '55px', marginBottom: '30px'}}>
                                            <img src="https://img.icons8.com/ios-filled/50/000000/trello.png" className='img' style={{width: '30px', height: '30px'}}/>
                                        </div>
                                    </OverlayTrigger>

                                </div>
                            </div>
                        </div>
                        <div id='section4'>
                            <div>
                                <h3 className='quiensoy' style={{ marginTop: '35px', fontSize: '24px', fontWeight: '800', marginBottom: '0px', paddingBottom: '0' }}>Contáctame</h3>
                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', width: '100%', justifyContent: 'space-around', marginTop: '15px', marginBottom: '30px' }}>
                                    <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: 'column', marginBottom: '20px'}}>
                                        <h4 style={{color: 'rgba(95, 113, 97, 1)'}}><img src='https://api.iconify.design/carbon:email-new.svg' className='imgContacto' style={{marginRight: '0'}}/> maguiherediavaiarini@gmail.com</h4>
                                        <h4 style={{color: 'rgba(95, 113, 97, 1)'}}><img src='https://api.iconify.design/ic:baseline-phone.svg' className='imgContacto' style={{marginRight: '0'}}/> (+54)3541-201933</h4>
                                    </div>
                                    <button onClick={(e) => abrirModal(e)} className='enviarEmail' style={{ marginTop: '0px', width: '60%', marginBottom: '40px', fontSize: '20px', padding: '5px 10px' }}>Enviar Email</button>
                                    <div>
                                        <a href="https://github.com/MaguiHeredia" key='github' target='_BLANCK' style={{ width: '70px' }}><img src="https://img.icons8.com/glyph-neue/128/000000/github.png" style={{ width: '70px' }} /></a>
                                        <a href="https://www.linkedin.com/in/marianela-heredia-" key='linkedin' target='_BLANCK' style={{ width: '70px' }}><img src="https://img.icons8.com/fluency/96/000000/linkedin.png" style={{ width: '70px' }} /></a>
                                        <a href="https://www.instagram.com/magui_heredia17/" key='instagram' target='_BLANCK' style={{ width: '70px' }}><img src="https://img.icons8.com/fluency/96/000000/instagram-new.png" style={{ width: '70px' }} /></a>
                                    </div>
                                </div>
                            </div>
                            {/* <Contact></Contact> */}
                        </div>
                    <Contact setModal={setModal} modal={modal} />
                    </div>
                </div>
            }
        </div>
    )
}