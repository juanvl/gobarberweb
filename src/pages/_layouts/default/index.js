import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

export default function DefaultLayout({ children }) {
  return <S.Container>{children}</S.Container>;
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
