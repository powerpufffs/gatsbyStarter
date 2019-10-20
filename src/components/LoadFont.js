import React, { useEffect } from 'react'

const LoadFont = () => {
    useEffect(() => {
        const WebFont = require('webfontloader')
        WebFont.load({
            google: { families: ['Work+Sans:400,700', 'Righteous', 'sans-serif'] }
        })
    }, [])
    return <div />
}

export default LoadFont