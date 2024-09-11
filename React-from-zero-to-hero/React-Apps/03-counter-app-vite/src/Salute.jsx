import PropTypes from 'prop-types';

// const getResult = (a, b) => { return a + b; }


export const DanielSalute = ({ title, subtitle }) => {

    return (
        <>
            <h1>
                {title}
            </h1>
            <p>{subtitle}</p>
        </>
    )
}

DanielSalute.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
};

DanielSalute.defaultProps = {
    title: 'No hay ningún título',
    subtitle: 'No hay ningún subtítulo'
};