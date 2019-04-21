import React from 'react';
import PropTypes from 'prop-types';

/**
 * Represents a vectorial icon.
 *
 * @param size {number} - size of the icon (width and height)
 * @param icon {string} - path the icon follows
 * @param color (string} - color to apply on the vectorial element as css
 * @param viewBox {number} - viewport of the icon
 */
const Icon = ({ size, icon, color, viewBox }) => {
    // Sets some default styling to the icon component
    const styles = {
        svg: {
            display: 'inline-block',
            margin: 'auto',
            verticalAlign: 'middle',
        },
        path: { fill: color },
    };

    return (
        <svg
            style={ styles.svg }
            width={ `${size}px` }
            height={ `${size}px` }
            viewBox={ `0 0 ${viewBox} ${viewBox}` }
        >
            <path
                style={ styles.path }
                d={ icon }
            />
        </svg>
    );
};

Icon.propTypes = {
    color: PropTypes.string,
    icon: PropTypes.string.isRequired,
    size: PropTypes.number,
    viewBox: PropTypes.number,
};

Icon.defaultProps = {
    size: 20,
    viewBox: 24,
};

export default Icon;
