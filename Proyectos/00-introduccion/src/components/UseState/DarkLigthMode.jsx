import React, { useState } from 'react'

const DarkLigthMode = () => {
    const [darkMode, setDarkMode] = useState(false)


    return (
        <>
        <div className={`default ${darkMode ? "dark" : "ligth"}`}>
            <h1>Cambio de color Tema</h1>
            <button onClick={toggleTheme}>
                {darkMode ? "Modo Claro" : "Modo Oscuro"}
            </button>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At quibusdam quos eaque. Consectetur eaque sunt laborum laudantium blanditiis? Sapiente unde dicta veniam facere dolor nulla autem rerum quod nihil tempora!
            </p>
        </div>
        </>
    )
}

export default DarkLigthMode
