import React from 'react';

import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import api from '~/services/api';
import * as S from './styles';

const Dashboard = () => {
  return (
    <S.Container>
      <header>
        <button type="button">
          <MdChevronLeft size={36} color="#fff" />
        </button>
        <strong>31 de maio</strong>
        <button type="button">
          <MdChevronRight size={36} color="#fff" />
        </button>
      </header>

      <ul>
        <S.Time past>
          <strong>08:00</strong>
          <span>Juan Victor</span>
        </S.Time>
        <S.Time available>
          <strong>09:00</strong>
          <span>Em aberto</span>
        </S.Time>
        <S.Time available>
          <strong>10:00</strong>
          <span>Em aberto</span>
        </S.Time>
        <S.Time available>
          <strong>11:00</strong>
          <span>Em aberto</span>
        </S.Time>
      </ul>
    </S.Container>
  );
};

export default Dashboard;
