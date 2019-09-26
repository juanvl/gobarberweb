import React, { useState, useMemo } from 'react';
import { format, subDays, addDays } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import api from '~/services/api';
import * as S from './styles';

const Dashboard = () => {
  const [date, setDate] = useState(new Date());
  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  function handlePrevDay() {
    setDate(subDays(date, 1));
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  return (
    <S.Container>
      <header>
        <button type="button" onClick={handlePrevDay}>
          <MdChevronLeft size={36} color="#fff" />
        </button>
        <strong>{dateFormatted}</strong>
        <button type="button" onClick={handleNextDay}>
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
