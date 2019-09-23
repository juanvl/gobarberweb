import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

export default function AuthLayout({ children }) {
  return (
    <S.Container>
      <S.Content>{children}</S.Content>
    </S.Container>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
