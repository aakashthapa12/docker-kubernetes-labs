'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      try {
        // In production, this would call an API endpoint that queries the DB
        // For now, just show a placeholder
        setUsers([]);
      } catch (err) {
        console.error('Failed to fetch users:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {loading ? (
        <p>Loading...</p>
      ) : users.length === 0 ? (
        <p>No users found</p>
      ) : (
        <pre>{JSON.stringify(users, null, 2)}</pre>
      )}
    </div>
  );
}
