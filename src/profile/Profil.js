import React from 'react'
import PropTypes from "prop-types"; 
function Profil (props) {
    const style = {
        color: 'blue',
        fontSize: 20
      };
    return (
        <div style={style}>
            <img src={props.profilImage} alt=""  height="60%" />
            <h3>Full Name </h3>
            {props.handleAlert(props.fullName)}
            <h4>BIO: {props.bio}</h4>
            <h2>profession:{props.profession}</h2>
        </div>
    )
}

Profil.defaultProps = {
    fullName: "default Name",
    bio: "bio here",
    profession: "default profession"
};

Profil.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string.isRequired,
    profession: PropTypes.string,
    handleAlert: PropTypes.func,
  };

export default Profil
