import React from 'react';
import PropTypes from 'prop-type';
const Header = ({titulo}) => {
    return (
      <header>
<h1 className="text-center"> {titulo}</h1>
      </header>
    );
};

Header.propTypes = {
    titulo: PropTypes.strind.is
}

export default Header;