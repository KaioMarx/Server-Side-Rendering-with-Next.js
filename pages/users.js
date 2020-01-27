import React from 'react';
import api from '~/services/api';

const anyOneOrg = 'rocketseat';

import Link from 'next/link';
import Head from 'next/head';

import WithAnalytics from '~/hocs/WithAnalytics';

const User = ({ users }) => (
  <>
    <Head>
      <title>Users</title>
    </Head>
    <ul>
      {users.map(user => (
        <li key={user.id} >
          <Link href={`/users/${user.login}`} >
            <a>
              {user.login}
            </a>
          </Link>
        </li>
      ))}
    </ul>

    <Link href="/" >
      <a>Voltar</a>
    </Link>
  </>
);

User.getInitialProps = async () => {
  const response = await api.get(`/orgs/${anyOneOrg}/members`);

  return { users: response.data }
};

export default WithAnalytics()(User);
