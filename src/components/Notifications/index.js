import React, { useState, useEffect, useMemo } from 'react';
import { MdNotifications } from 'react-icons/md';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';
import * as S from './styles';

export default function Notifications() {
  const [visible, setVisible] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const hasUnread = useMemo(() => !!notifications.find(n => n.read === false), [
    notifications,
  ]);

  useEffect(() => {
    (async () => {
      const res = await api.get('notifications');
      const data = res.data.map(n => ({
        ...n,
        timeDistance: formatDistance(parseISO(n.createdAt), new Date(), {
          addSuffix: true,
          locale: pt,
        }),
      }));
      setNotifications(data);
    })();
  }, []);

  async function handleMarkAsRead(id) {
    await api.put(`notifications/${id}`);
    const data = notifications.map(n => {
      if (n._id === id) {
        return { ...n, read: true };
      }
      return n;
    });
    setNotifications(data);
  }

  return (
    <S.Container>
      <S.Badge hasUnread={hasUnread} onClick={() => setVisible(!visible)}>
        <MdNotifications color="#7159c1" size={20} />
      </S.Badge>

      {visible && (
        <S.NotificationList>
          <S.Scroll>
            {notifications.map(n => (
              <S.Notification key={n._id} unread={!n.read}>
                <p>{n.content}</p>
                <time>{n.timeDistance}</time>
                {!n.read && (
                  <button type="button" onClick={() => handleMarkAsRead(n._id)}>
                    Marcar como lida
                  </button>
                )}
              </S.Notification>
            ))}
          </S.Scroll>
        </S.NotificationList>
      )}
    </S.Container>
  );
}
