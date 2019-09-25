import React from 'react';
import PropTypes from 'prop-types';

import Header from '~/components/Header';
import * as S from './styles';

export default function DefaultLayout({ children }) {
  return (
    <S.Container>
      <Header />
      {children}
    </S.Container>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
