export type Room = {
  id: string;
  label: string;
  description: string;
  features: string[];
  highlights: string[];
};

export const rooms: Room[] = [
  {
    id: 'living-room',
    label: 'Living Room',
    description: 'Focus on lighting circuits, socket placement, and dedicated earthing within a primary living space.',
    features: ['Lighting point', 'Socket group', 'TV outlet', 'Protective earth'],
    highlights: ['Lighting routes to ceiling roses', 'Socket ring main spacing', 'Earthing of metallic fittings'],
  },
  {
    id: 'kitchen',
    label: 'Kitchen',
    description: 'High-demand appliance circuits, dedicated sockets, and reliable earthing are essential in kitchen design.',
    features: ['Cooker circuit', 'Fridge socket', 'Sink bonding', 'RCCB protection'],
    highlights: ['Separate socket circuits', 'Waterproof zones', 'Appliance load planning'],
  },
  {
    id: 'bedroom',
    label: 'Bedroom',
    description: 'Safe lighting and socket distribution with minimal interference and consistent earthing.',
    features: ['Reading lights', 'Bedside sockets', 'Fan supply', 'Protective bonding'],
    highlights: ['Two-way lighting options', 'Socket diversity', 'Cable routing within ceiling voids'],
  },
  {
    id: 'bathroom',
    label: 'Bathroom',
    description: 'Specialised wiring zones, IP-rated fittings, and strict earthing requirements for wet areas.',
    features: ['Shaver socket', 'Mirror light', 'Exhaust fan', 'Zone protection'],
    highlights: ['IP-rated fixtures', 'RCD protection', 'Water zone separation'],
  },
  {
    id: 'outdoor-area',
    label: 'Outdoor Area',
    description: 'External lighting, security sockets, and earthing strategies for outdoor residential installations.',
    features: ['Garden lighting', 'External sockets', 'Earthing pit', 'Outdoor protection'],
    highlights: ['Weather-resistant conduit', 'Separate circuit protection', 'Surge protection'],
  },
];
