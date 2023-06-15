import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

function AuthHoc({ children, userToken }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!userToken) {
      navigate('/auth', { replace: true });
    }
  });

  if (userToken) {
    return children();
  }

  return null;
}

const mapStateToProps = (state) => ({
  userToken: state.user.userToken,
});

const mapDispatchProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchProps)(AuthHoc);
