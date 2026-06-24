export type DiagramHotspot = {
  id: string;
  label: string;
  description: string;
};

export type DiagramItem = {
  id: string;
  label: string;
  description: string;
  details: string;
  hotspots: DiagramHotspot[];
};

export const diagrams: DiagramItem[] = [
  {
    id: 'one-way-switch',
    label: 'One-way switch wiring',
    description: 'Simple single-switch lighting circuit with clearly labeled connections.',
    details: 'A one-way switch controls a lighting point from a single location using live and switched live conductors.',
    hotspots: [
      { id: 'live', label: 'Live conductor', description: 'Supplies current to the switch and onwards to the lamp.' },
      { id: 'neutral', label: 'Neutral conductor', description: 'Returns current to the source and completes the circuit.' },
      { id: 'lamp', label: 'Lighting point', description: 'The electrical load controlled by the one-way switch.' },
    ],
  },
  {
    id: 'two-way-switch',
    label: 'Two-way switch wiring',
    description: 'Two location control for a single lighting circuit, common in stairwells and halls.',
    details: 'Two-way switching uses a pair of switches and a common conductor with two traveler wires for alternate paths.',
    hotspots: [
      { id: 'switch1', label: 'Switch 1', description: 'First switch in the two-way circuit.' },
      { id: 'switch2', label: 'Switch 2', description: 'Second switch enabling control from another location.' },
      { id: 'traveler', label: 'Traveler cables', description: 'Carry the switched live between switches.' },
    ],
  },
  {
    id: 'earthing-system',
    label: 'Earthing system',
    description: 'Grounding layout for residential installations, including earth electrode and bonding.',
    details: 'A compliant earthing system includes connections to earth rods, bonding conductors, and protective devices.',
    hotspots: [
      { id: 'earth-rod', label: 'Earth rod', description: 'Metal rod driven into the ground for fault current dissipation.' },
      { id: 'bonding', label: 'Protective bonding', description: 'Connects metallic parts to maintain potential equalization.' },
      { id: 'rccb', label: 'Residual current device', description: 'Disconnects power on earth leakage faults.' },
    ],
  },
];
