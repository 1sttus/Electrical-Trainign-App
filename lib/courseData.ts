export type CourseModule = {
  id: string;
  number: number;
  title: string;
  focus: string;
  summary: string;
  topics: string[];
  lessons: Lesson[];
};

export type Lesson = {
  id: string;
  title: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  content: LessonContent[];
  images: string[];
  diagrams: string[];
  videos: VideoEmbed[];
  quiz: QuizQuestion[];
};

export type LessonContent = {
  type: 'paragraph' | 'list' | 'code' | 'note' | 'heading';
  text: string;
  items?: string[];
};

export type VideoEmbed = {
  title: string;
  src: string;
  type: 'youtube' | 'self-hosted';
};

export type QuizQuestion = {
  id: string;
  question: string;
  type: 'multiple-choice' | 'true-false';
  options: string[];
  answer: string;
  explanation: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
};

export const modules: CourseModule[] = [
  {
    id: 'module-1',
    number: 1,
    title: 'Introduction to Nigerian Electrical Installation Standards',
    focus: 'Standards, safety, and compliance',
    summary: 'Foundational knowledge of Nigerian electrical regulations, good practices, and safety frameworks.',
    topics: ['NEMSA', 'Safety', 'Regulatory bodies', 'Good practices'],
    lessons: [
      {
        id: 'module-1-lesson-1',
        title: 'Nigerian Electric Network System',
        duration: '16 mins',
        difficulty: 'Beginner',
        content: [
          { type: 'heading', text: 'Overview of the Nigerian power network' },
          { type: 'paragraph', text: 'The Nigerian electrical system is managed by transmission and distribution operators regulated by NERC and NEMSA.' },
          { type: 'note', text: 'Always verify local supply characteristics before designing residential wiring.' },
        ],
        images: ['/images/nigeria-grid.png'],
        diagrams: ['one-way-switch'],
        videos: [{ title: 'Understanding the power grid', src: 'https://www.youtube.com/embed/Zg1G7B1Hu3s', type: 'youtube' }],
        quiz: [
          {
            id: 'm1q1',
            question: 'Which agency regulates electrical safety in Nigeria?',
            type: 'multiple-choice',
            options: ['NEMSA', 'NEPA', 'DSS', 'FCC'],
            answer: 'NEMSA',
            explanation: 'NEMSA is responsible for electrical equipment safety and installation compliance in Nigeria.',
            difficulty: 'Easy',
          },
        ],
      },
    ],
  },
  {
    id: 'module-2',
    number: 2,
    title: 'Electrical Fundamentals',
    focus: 'Voltage, current, resistance and power',
    summary: 'Core electrical concepts that form the basis for residential wiring design and troubleshooting.',
    topics: ['Ohm’s Law', 'Power', 'Single phase', 'Load types'],
    lessons: [
      {
        id: 'module-2-lesson-1',
        title: 'Introduction to Electricity',
        duration: '18 mins',
        difficulty: 'Beginner',
        content: [
          { type: 'heading', text: 'What is electricity?' },
          { type: 'paragraph', text: 'Electricity is the movement of electrons through conductors; understanding it is essential for safe wiring.' },
          { type: 'list', text: 'Key concepts include:', items: ['Voltage', 'Current', 'Resistance', 'Power'] },
        ],
        images: ['/images/electric-current.png', '/images/ohms-law.png'],
        diagrams: ['single-phase-supply'],
        videos: [{ title: 'Electricity basics', src: 'https://www.youtube.com/embed/3hWbcqDAMR4', type: 'youtube' }],
        quiz: [
          {
            id: 'm2q1',
            question: 'Ohm’s Law relates which three quantities?',
            type: 'multiple-choice',
            options: ['Voltage, current, resistance', 'Power, energy, time', 'Frequency, amplitude, phase', 'Current, capacitance, inductance'],
            answer: 'Voltage, current, resistance',
            explanation: 'Ohm’s Law states V = I × R, relating voltage, current and resistance.',
            difficulty: 'Easy',
          },
        ],
      },
    ],
  },
  {
    id: 'module-3',
    number: 3,
    title: 'Load Design',
    focus: 'Assessing demand for houses',
    summary: 'Learn how to calculate load demand, diversity, generator sizing, and inverter selection for residential systems.',
    topics: ['Demand calculation', 'Diversity factor', 'Generator sizing', 'Inverter sizing'],
    lessons: [
      {
        id: 'module-3-lesson-1',
        title: 'Building Electrical Load Design',
        duration: '22 mins',
        difficulty: 'Intermediate',
        content: [
          { type: 'heading', text: 'Designing residential loads' },
          { type: 'paragraph', text: 'Load assessment ensures the electrical system supports appliances, lighting, and safety systems without overloading circuits.' },
        ],
        images: ['/images/load-assessment.png'],
        diagrams: ['load-design'],
        videos: [{ title: 'Load assessment techniques', src: 'https://www.youtube.com/embed/8Jg1dX8nRRk', type: 'youtube' }],
        quiz: [
          {
            id: 'm3q1',
            question: 'What does diversity factor help estimate?',
            type: 'multiple-choice',
            options: ['Actual expected load', 'Wire length', 'Earthing resistance', 'Voltage drop'],
            answer: 'Actual expected load',
            explanation: 'Diversity factor scales the total connected load to the likely actual demand.',
            difficulty: 'Medium',
          },
        ],
      },
    ],
  },
  {
    id: 'module-4',
    number: 4,
    title: 'Materials and Components',
    focus: 'Components used in residential installations',
    summary: 'Understand conductors, insulation, protective devices and distribution equipment for Nigerian homes.',
    topics: ['Cables', 'MCB', 'RCCB', 'SPD', 'Switches'],
    lessons: [
      {
        id: 'module-4-lesson-1',
        title: 'Electrical Materials and Components',
        duration: '20 mins',
        difficulty: 'Intermediate',
        content: [
          { type: 'heading', text: 'Choosing the right components' },
          { type: 'paragraph', text: 'Material choice affects safety, durability, and compliance in residential wiring.' },
        ],
        images: ['/images/cables.png', '/images/mcb.png'],
        diagrams: ['rcbo-installation'],
        videos: [{ title: 'Protective device selection', src: 'https://www.youtube.com/embed/0x2mRlh9KTA', type: 'youtube' }],
        quiz: [
          {
            id: 'm4q1',
            question: 'What is the purpose of an RCCB?',
            type: 'multiple-choice',
            options: ['Detects earth faults', 'Controls voltage', 'Measures current', 'Protects against lightning'],
            answer: 'Detects earth faults',
            explanation: 'RCCBs detect residual current and disconnect supply when leakage occurs.',
            difficulty: 'Easy',
          },
        ],
      },
    ],
  },
  {
    id: 'module-5',
    number: 5,
    title: 'Residential Wiring Methods',
    focus: 'Wiring techniques and circuit layouts',
    summary: 'Explore surface and concealed wiring, lighting, socket circuits and installation best practices.',
    topics: ['Surface wiring', 'Concealed wiring', 'One-way switching', 'Socket circuits'],
    lessons: [
      {
        id: 'module-5-lesson-1',
        title: 'Residential Wiring Methods',
        duration: '24 mins',
        difficulty: 'Intermediate',
        content: [
          { type: 'heading', text: 'Wiring methods for homes' },
          { type: 'paragraph', text: 'Choose a method based on aesthetics, accessibility, and compliance with installation standards.' },
        ],
        images: ['/images/concealed-wiring.png'],
        diagrams: ['one-way-switch', 'two-way-switch'],
        videos: [{ title: 'Wiring practice', src: 'https://www.youtube.com/embed/TcXZ0LwWq8Y', type: 'youtube' }],
        quiz: [
          {
            id: 'm5q1',
            question: 'Which wiring method is best for finished walls?',
            type: 'multiple-choice',
            options: ['Concealed wiring', 'Surface conduit', 'Bare conductors', 'Overhead wiring'],
            answer: 'Concealed wiring',
            explanation: 'Concealed wiring is hidden behind walls and preferred for finished interiors.',
            difficulty: 'Medium',
          },
        ],
      },
    ],
  },
  {
    id: 'module-6',
    number: 6,
    title: 'Earthing and Bonding',
    focus: 'Grounding systems and protective bondings',
    summary: 'Learn earthing electrodes, protective conductors, bonding practices, and lightning protection concepts.',
    topics: ['Earthing fundamentals', 'Bonding', 'Lightning protection'],
    lessons: [
      {
        id: 'module-6-lesson-1',
        title: 'Earthing, Bonding and Protection',
        duration: '22 mins',
        difficulty: 'Intermediate',
        content: [
          { type: 'heading', text: 'Earthing systems for safety' },
          { type: 'paragraph', text: 'A proper earthing system protects people and equipment from electrical faults.' },
        ],
        images: ['/images/earthing-rod.png'],
        diagrams: ['earthing-system'],
        videos: [{ title: 'Earthing fundamentals', src: 'https://www.youtube.com/embed/pXyG7zy8T_w', type: 'youtube' }],
        quiz: [
          {
            id: 'm6q1',
            question: 'What is the main purpose of bonding?',
            type: 'multiple-choice',
            options: ['Equalize potential', 'Increase current', 'Reduce voltage', 'Improve insulation'],
            answer: 'Equalize potential',
            explanation: 'Bonding connects conductive parts to prevent dangerous potential differences.',
            difficulty: 'Medium',
          },
        ],
      },
    ],
  },
  {
    id: 'module-7',
    number: 7,
    title: 'Protection Systems',
    focus: 'Circuit protection and coordination',
    summary: 'Study overload protection, fault protection, RCCB/RCD coordination, and surge protection systems.',
    topics: ['MCB', 'RCCB', 'SPD', 'Coordination'],
    lessons: [
      {
        id: 'module-7-lesson-1',
        title: 'Protection Systems',
        duration: '20 mins',
        difficulty: 'Intermediate',
        content: [
          { type: 'heading', text: 'Protective device selection' },
          { type: 'paragraph', text: 'Effective protection systems prevent damage and keep installations compliant.' },
        ],
        images: ['/images/spd.png'],
        diagrams: ['rccb-installation', 'rcbo-installation'],
        videos: [{ title: 'Protection device guide', src: 'https://www.youtube.com/embed/8Q1xV4Ut-0M', type: 'youtube' }],
        quiz: [
          {
            id: 'm7q1',
            question: 'Why is protection coordination important?',
            type: 'multiple-choice',
            options: ['To isolate faults selectively', 'To lower voltage', 'To increase current capacity', 'To provide standby power'],
            answer: 'To isolate faults selectively',
            explanation: 'Coordination ensures only the faulty circuit is disconnected while others remain powered.',
            difficulty: 'Hard',
          },
        ],
      },
    ],
  },
  {
    id: 'module-8',
    number: 8,
    title: 'Testing and Inspection',
    focus: 'Verification, compliance testing, and reporting',
    summary: 'Detailed inspection procedures, testing methods, and documentation for safe handover.',
    topics: ['Continuity testing', 'Insulation testing', 'Polarity testing', 'Compliance documentation'],
    lessons: [
      {
        id: 'module-8-lesson-1',
        title: 'Testing, Inspection and Compliance',
        duration: '21 mins',
        difficulty: 'Intermediate',
        content: [
          { type: 'heading', text: 'Inspecting residential wiring' },
          { type: 'paragraph', text: 'Testing and thorough inspection are essential before energizing any installation.' },
        ],
        images: ['/images/insulation-test.png'],
        diagrams: ['testing-procedure'],
        videos: [{ title: 'Inspection best practices', src: 'https://www.youtube.com/embed/9SdC5CzVKr4', type: 'youtube' }],
        quiz: [
          {
            id: 'm8q1',
            question: 'Which test checks conductor continuity?',
            type: 'multiple-choice',
            options: ['Continuity testing', 'Insulation resistance testing', 'Voltage testing', 'Thermal inspection'],
            answer: 'Continuity testing',
            explanation: 'Continuity testing verifies that conductors are intact and properly connected.',
            difficulty: 'Easy',
          },
        ],
      },
    ],
  },
  {
    id: 'module-9',
    number: 9,
    title: 'Documentation',
    focus: 'Record keeping and compliance paperwork',
    summary: 'Generate handover documents, test reports, and wiring schedules for Nigerian residential installations.',
    topics: ['Test reports', 'Wiring schedules', 'Compliance forms'],
    lessons: [
      {
        id: 'module-9-lesson-1',
        title: 'Documentation for Electrical Installations',
        duration: '18 mins',
        difficulty: 'Beginner',
        content: [
          { type: 'heading', text: 'Why documentation matters' },
          { type: 'paragraph', text: 'Accurate documentation supports compliance, future maintenance, and certification.' },
        ],
        images: ['/images/documentation.png'],
        diagrams: ['wiring-schedule'],
        videos: [{ title: 'Creating inspection reports', src: 'https://www.youtube.com/embed/0S4UQoZfPx0', type: 'youtube' }],
        quiz: [
          {
            id: 'm9q1',
            question: 'What is the purpose of a wiring schedule?',
            type: 'multiple-choice',
            options: ['Track circuits and loads', 'Measure voltage', 'Calculate insulation', 'Test earth resistance'],
            answer: 'Track circuits and loads',
            explanation: 'A wiring schedule records circuit design and load details for installation and maintenance.',
            difficulty: 'Easy',
          },
        ],
      },
    ],
  },
  {
    id: 'module-10',
    number: 10,
    title: 'Practical Workshop',
    focus: 'Hands-on installation, testing, and fault diagnosis',
    summary: 'Practical workshop training covering cable pulling, switch wiring, DB assembly, earthing, and fault finding.',
    topics: ['Cable pulling', 'DB assembly', 'Fault diagnosis', 'Testing procedures'],
    lessons: [
      {
        id: 'module-10-lesson-1',
        title: 'Practical Workshop and Certification',
        duration: '26 mins',
        difficulty: 'Intermediate',
        content: [
          { type: 'heading', text: 'Hands-on installation skills' },
          { type: 'paragraph', text: 'Complete practical exercises to build confidence in residential wiring and certification readiness.' },
        ],
        images: ['/images/practical-installation.png'],
        diagrams: ['distribution-board'],
        videos: [{ title: 'Practical wiring workshop', src: 'https://www.youtube.com/embed/wr7sHLZK2YM', type: 'youtube' }],
        quiz: [
          {
            id: 'm10q1',
            question: 'What should you inspect before energizing a new DB?',
            type: 'multiple-choice',
            options: ['Correct connections and protection', 'Paint finish', 'Ambient temperature', 'Cable color'],
            answer: 'Correct connections and protection',
            explanation: 'Verify wiring, protective devices, and earthing before energizing the distribution board.',
            difficulty: 'Medium',
          },
        ],
      },
    ],
  },
];
