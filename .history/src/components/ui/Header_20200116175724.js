import React from 'react';
import PropTypes from 'prop-types';
const Header = ({titulo}) => {
    return (
      <header>
<h1 className="text-center"> {titulo}</h1>
      </header>
    );
};

.propTypes = {
    titulo: PropTypes.strind.isRequired
}

export default Header;


rcc