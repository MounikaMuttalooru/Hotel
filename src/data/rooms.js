const ROOMS = [
  { id: 'r1', name: 'Deluxe', available: 5, price: 120, location: 'New York', image: 'https://images.unsplash.com/photo-1501117716987-c8e0b6b4f0b0?auto=format&fit=crop&w=800&q=60' },
  { id: 'r2', name: 'Regular', available: 12, price: 70, location: 'Los Angeles', image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=60' },
  { id: 'r3', name: 'Premium', available: 3, price: 200, location: 'Miami', image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=60' },
  { id: 'r4', name: 'Suite', available: 2, price: 320, location: 'New York', image: 'https://images.unsplash.com/photo-1505691723518-36a3d0d8b6d6?auto=format&fit=crop&w=800&q=60' },
  { id: 'r5', name: 'Economy', available: 20, price: 50, location: 'Chicago', image: 'https://images.unsplash.com/photo-1505691723519-7c6ecb9f3a7a?auto=format&fit=crop&w=800&q=60' },
  { id: 'r6', name: 'Family', available: 7, price: 150, location: 'Miami', image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=60' },
  { id: 'r7', name: 'Studio', available: 9, price: 95, location: 'Los Angeles', image: 'https://images.unsplash.com/photo-1549187774-b4e9b0445b9b?auto=format&fit=crop&w=800&q=60' },
  { id: 'r8', name: 'Executive', available: 4, price: 180, location: 'Chicago', image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=60' },
  { id: 'r9', name: 'Presidential', available: 1, price: 500, location: 'New York', image: 'https://images.unsplash.com/photo-1505691723518-36a3d0d8b6d6?auto=format&fit=crop&w=800&q=60' },
  { id: 'r10', name: 'Single', available: 15, price: 65, location: 'Boston', image: 'https://images.unsplash.com/photo-1505691723519-7c6ecb9f3a7a?auto=format&fit=crop&w=800&q=60' },
  { id: 'r11', name: 'Double', available: 11, price: 85, location: 'Boston', image: 'https://images.unsplash.com/photo-1549187774-b4e9b0445b9b?auto=format&fit=crop&w=800&q=60' },
  { id: 'r12', name: 'Honeymoon', available: 3, price: 260, location: 'Miami', image: 'https://images.unsplash.com/photo-1505691723518-36a3d0d8b6d6?auto=format&fit=crop&w=800&q=60' },
  { id: 'r13', name: 'Deluxe Plus', available: 6, price: 140, location: 'Los Angeles', image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=60' },
  { id: 'r14', name: 'Regular Plus', available: 8, price: 90, location: 'Chicago', image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=60' },
  { id: 'r15', name: 'Budget', available: 30, price: 40, location: 'Austin', image: 'https://images.unsplash.com/photo-1501117716987-c8e0b6b4f0b0?auto=format&fit=crop&w=800&q=60' },
  { id: 'r16', name: 'Loft', available: 5, price: 210, location: 'Austin', image: 'https://images.unsplash.com/photo-1549187774-b4e9b0445b9b?auto=format&fit=crop&w=800&q=60' },
  { id: 'r17', name: 'Garden View', available: 4, price: 130, location: 'Orlando', image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=60' },
  { id: 'r18', name: 'Sea View', available: 2, price: 230, location: 'Miami', image: 'https://images.unsplash.com/photo-1505691723519-7c6ecb9f3a7a?auto=format&fit=crop&w=800&q=60' },
  { id: 'r19', name: 'Penthouse', available: 1, price: 450, location: 'Los Angeles', image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=60' },
  { id: 'r20', name: 'Compact', available: 18, price: 60, location: 'Chicago', image: 'https://images.unsplash.com/photo-1501117716987-c8e0b6b4f0b0?auto=format&fit=crop&w=800&q=60' },
  { id: 'r21', name: 'Family Suite', available: 6, price: 170, location: 'Boston', image: 'https://images.unsplash.com/photo-1549187774-b4e9b0445b9b?auto=format&fit=crop&w=800&q=60' },
  { id: 'r22', name: 'King', available: 7, price: 190, location: 'New York', image: 'https://images.unsplash.com/photo-1505691723518-36a3d0d8b6d6?auto=format&fit=crop&w=800&q=60' },
  { id: 'r23', name: 'Queen', available: 9, price: 160, location: 'Orlando', image: 'https://images.unsplash.com/photo-1549187774-b4e9b0445b9b?auto=format&fit=crop&w=800&q=60' },
  { id: 'r24', name: 'Twin', available: 14, price: 75, location: 'Austin', image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=60' }
];

export default ROOMS;
