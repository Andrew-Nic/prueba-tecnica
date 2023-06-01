import React, { useEffect, useState } from "react";
import Moveable from 'react-moveable'
import '../index.css'


/**
 * Componente Figura
 * Este componente muestra una imagen y permite realizar manipulaciones interactivas como arrastrar, redimensionar y rotar la imagen.
 */
export default function Figura() {

    // Estados para almacenar la posición, tamaño y rotación de la imagen
    const [position, setPosition] = useState({x:0,y:0})
    const [size, setSize] = useState({width:200, height:200})
    const [rotation, setRotation] = useState(0)

    const [url, setUrl] = useState('')

    /**
     * useEffect para obtener la imagen del servidor al cargar el componente
     */
    useEffect(() => {
        fetch('http://localhost:8000/imagen')
        .then(response => response.blob())
        .then(response=>{
            setUrl(URL.createObjectURL(response))
        }).catch(e => {
            console.log("error al cargar la imagen: "+ e)
        })
    },[])


    /**
     * Manejador de evento para arrastrar la imagen
     * @param {object} event - Objeto de evento del movimiento
     */
    const handleOnDrag = (event) => {
        const [translateX,translateY] = [event.left,event.top]
        setPosition({x:translateX,y:translateY})
    }

    /**
     * Manejador de evento para redimensionar la imagen
     * @param {object} event - Objeto de evento del redimensionamiento
     */
    const handleOnResize = (event) => {
        const [w,h] = [event.width,event.height]
        setSize({width:w,height:h})
    }

    /**
     * Manejador de evento para rotar la imagen
     * @param {object} event - Objeto de evento de la rotación
     */
    const handleOnRotate = (event) => {
        setRotation(event.rotate)
    }

    return (
        <React.Fragment >
            <div className="container">
                <img className="target" src={url} style={{
                    position: 'absolute',
                    top: position.y,
                    left: position.x,
                    width: size.width,
                    height: size.height,
                    transform: `rotate(${rotation}deg)`
                    }}/>
                <Moveable 
                    target={".target"}
                    draggable={true}
                    resizable = {true}
                    rotatable={true}
                    onDrag={handleOnDrag}
                    onResize={handleOnResize}
                    onRotate={handleOnRotate}
                />
            </div>
            
            
        </React.Fragment>
    )
}