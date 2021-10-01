import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { getTechs } from '../../actions/techActions';
import { connect } from 'react-redux';

const TechSelectOptions = ({ tech: { techs, loading }, getTechs }) => {
  useEffect(() => {
    getTechs();
  }, []);

  return (
    <>
      {!loading &&
        techs !== null &&
        techs.map((tech) => (
          <option key={tech.id} value={`${tech.firstName} ${tech.lastName}`}>
            {tech.firstName} {tech.lastName}
          </option>
        ))}
    </>
  );
};

TechSelectOptions.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  tech: state.tech,
});

export default connect(mapStateToProps, { getTechs })(TechSelectOptions);
