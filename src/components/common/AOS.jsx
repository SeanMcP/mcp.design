import React from 'react'
import PropTypes from 'prop-types'

const AOS = ({ children, easing = "ease-in-out", mirror = false, type }) => (
    <div data-aos={type} data-aos-easing={easing} data-aos-mirror={mirror}>
        {children}
    </div>
)

AOS.propTypes = {
    type: PropTypes.oneOf([
        'fade',
        'fade-up',
        'fade-down',
        'fade-left',
        'fade-right',
        'fade-up-right',
        'fade-up-left',
        'fade-down-right',
        'fade-down-left',
        'flip-up',
        'flip-down',
        'flip-left',
        'flip-right',
        'slide-up',
        'slide-down',
        'slide-left',
        'slide-right',
        'zoom-in',
        'zoom-in-up',
        'zoom-in-down',
        'zoom-in-left',
        'zoom-in-right',
        'zoom-out',
        'zoom-out-up',
        'zoom-out-down',
        'zoom-out-left',
        'zoom-out-right',
    ])
}

export default AOS