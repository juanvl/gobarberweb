import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

export default function AuthLayout({ children }) {
  return <S.Container>{children}</S.Container>;
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
