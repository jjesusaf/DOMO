import React from 'react';
import Image1 from '../assets/img/image1.png'
import Image2 from '../assets/img/image2.png'
import Image3 from '../assets/img/image3.png'
import Image4 from '../assets/img/image4.png'
import Image5 from '../assets/img/image5.png'
const Home = () => {
    return (
        <div>
            <div className='home1'>
                <img src={Image1} alt="" id='img1' />
                <div className='home2'>
                    <p>
                        DOMO integra el mundo de las criptomonedas al mercado inmobiliario, beneficiando a inversionistas, <br /> propietarios y, sobre todo, familias.
                    </p>
                    <button className='btn-registrer'>
                        Regístrate
                    </button>
                </div>
                <div className='text1'>
                    <h2>
                        UTILIZA TUS
                    </h2>
                    <h1>
                        CRIPTOMONEDAS
                    </h1>
                </div>
                <div className='text2'>
                    <h2>
                        Y ACCEDE AL
                    </h2>
                    <h1>
                        MERCADO <br />
                        INMOBILIARIO
                    </h1>
                </div>
            </div>
            <div className='home3'>
                <p>
                    El mercado global de criptomonedas representa más de 3 billones de USD
                </p>
                <p>
                    Actualmente solo el 20% de inversionistas cripto son dueños de un inmueble
                </p>
                <p>
                    Solo el 12.5% de los propietarios en México estarían dispuestos a aceptar criptomonedas como pago por la venta, renta o hipoteca de su inmueble
                </p>
                <p className='t1bold'>
                    El 85% de las personas considera que la compra de un inmueble es sinónimo de inversión.
                </p>
                <img src={Image2} alt="" id='image2' />
            </div>
            <div className='home4'>
                <h1>
                    ¿Qué puedes hacer con DOMO?
                </h1>
                <div className='home4-a'>
                    <div className='home4-a1'>
                        <h1>
                            Si eres inversionista cripto
                        </h1>
                        <h2>
                            Utilizar tus criptomonedas para invertir en NFT´s  representativos de propiedades reales o hipotecas
                        </h2>
                        <p>
                            Obten intereses mensuales
                        </p>
                        <p>
                            Adquiere la totalidad de un inmueble
                        </p>
                        <p>
                            Participa del incremento en valor de plusvalia
                        </p>
                    </div>
                    <div className='home4-a2'>
                        <h1>
                            Si eres propietario de un inmueble
                        </h1>
                        <h2>
                            Accede al mercado internacional de inversionistas que busca participar en el mercado inmobiliario.
                        </h2>
                        <p>
                            Vende tu inmueble en menor tiempo
                        </p>
                        <p>
                            Solicita una hipoteca con una  tasa de interés accesible
                        </p>
                        <p>
                            Sigue usando el inmueble  mediante el pago de una renta
                        </p>
                    </div >
                </div>
                <h2>Invierte de manera estable y segura en el mundo de las finanzas descentralizadas.</h2>
            </div>
            <div className='home5'>
                <div className='home5-a'>
                    <div className='home5-a1'>
                        Transparente
                    </div>
                    <div className='home5-a1'>
                        Fraccionable
                    </div>
                    <div className='home5-a1'>
                        Seguro
                    </div>
                </div>
                <img src={Image4} alt="" id='img4' />
            </div>
            <div className='home6'>
                <div className='home6-a'>
                    <h1>
                        Roadmap
                    </h1>
                    <h2>
                        Próximos pasos para poner en linea DOMO
                    </h2>
                </div>
                <div className='home6-b'>
                    <div className='home6-b1'>
                        <h1>
                            Julio - Agosto 2022
                        </h1>
                        <p>
                            I. Definición y validación de DOMO
                        </p>
                    </div>
                    <div className='home6-b1'>
                        <h1>
                            Octubre 2022
                        </h1>
                        <p>
                            III. Prueba piloto y mejoras
                        </p>
                    </div>
                </div>
                <div className='progreso'>
                    <div className='barra'>
                        <div className='circulo'></div>
                        <div className='circulo'></div>
                        <div className='circulo'></div>
                        <div className='circulo'></div>
                    </div>
                </div>
                <div className='home6-c'>
                    <div className='home6-c1'>
                        <h1>
                            Septiembre 2022
                        </h1>
                        <p>
                            II.Desarrollo de MVP
                        </p>
                    </div>
                    <div className='home6-c2'>
                        <h1>
                            Noviembre 2022
                        </h1>
                        <p>
                            IV.Lanzamiento
                        </p>
                    </div>
                </div>
                <img src={Image5} alt="" id='img5' />
            </div>
            <div className='home7'>
                <h1>
                    Forma parte del futuro
                </h1>
                <div className='home7-a'>
                    <div className='home7-a1'>
                        <h2>
                            Participa en el desarrollo de DOMO
                        </h2>
                    </div>
                    <div className='home7-a2'>
                        <h2>
                            Unete a la comunidad que invertirá en DOMO
                        </h2>
                    </div>
                    <div className='home7-a3'>
                        LOGO
                    </div>
                    <div className='home7-a4'>
                        Putitos
                    </div>
                    <div className='home7-a5'>
                        <h2>
                            Postula tu inmueble para venderlo a través de DOMO
                        </h2>
                        <button className='btn-registrer'>
                            Regístrate
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;