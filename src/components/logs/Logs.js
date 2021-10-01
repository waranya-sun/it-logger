import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import LogItem from './LogItem';
import { getLogs } from '../../actions/logActions';
import Preloader from '../layout/Preloader';
import PropTypes from 'prop-types';

const Logs = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs();
  }, []);

  if (loading || logs === null) {
    return <Preloader />;
  }

  return (
    <ul className='collection with-header'>
      <li className='collection-header'>
        <h4 className='center' style={headerStyle}>
          System Logs
        </h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p>No logs to show...</p>
      ) : (
        logs.map((log) => <LogItem key={log.id} log={log} />)
      )}
    </ul>
  );
};

const headerStyle = {
  fontWeight: 'bold',
  fontSize: '40px',
  marginBottom: '35px',
};

Logs.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  log: state.log,
});

export default connect(mapStateToProps, { getLogs })(Logs);
