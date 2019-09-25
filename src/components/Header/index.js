import React from 'react';
import { Link } from 'react-router-dom';

import Notifications from '~/components/Notifications';

import logo from '~/assets/logo-purple.svg';
import * as S from './styles';

export default function Header() {
  return (
    <S.Container>
      <S.Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notifications />
          <S.Profile>
            <div>
              <strong>Juan Victor</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Juan Victor"
            />
          </S.Profile>
        </aside>
      </S.Content>
    </S.Container>
  );
}