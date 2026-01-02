import React, { useState, useMemo } from 'react';
import ROOMS from '../data/rooms';
import RoomCard from '../components/RoomCard';
import Pagination from '../components/Pagination';

export default function RoomList({ filters }) {
  const [page, setPage] = useState(1);
  const perPage = 10;

  const filtered = useMemo(() => {
    let list = ROOMS.slice();
    if (filters) {
      if (filters.location) list = list.filter(r => r.location === filters.location);
      if (filters.minPrice != null) list = list.filter(r => r.price >= filters.minPrice);
      if (filters.maxPrice != null) list = list.filter(r => r.price <= filters.maxPrice);
    }
    return list;
  }, [filters]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const pageItems = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <div>
      <div className="rooms-grid">
        {pageItems.map(r => <RoomCard key={r.id} room={r} />)}
      </div>
      <Pagination page={page} totalPages={totalPages} onPage={(p) => setPage(p)} />
    </div>
  );
}
