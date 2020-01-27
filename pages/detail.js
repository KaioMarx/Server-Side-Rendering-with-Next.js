import React from 'react';
import api from '~/services/api';

import withAnalytics from '~/hocs/WithAnalytics';

const Detail = ({ users }) => (
  <div>
    <h1>{users.login}</h1>
    <img src={users.avatar_url} alt="Perfil" />
  </div>
);

Detail.getInitialProps = async ({ query }) => {
  const { user } = query;

  const response = await api.get(`/users/${user}`)

  return { users: response.data }
}

export default withAnalytics()(Detail)