// export interface Lesson {
//   id: string;
//   title: string;
// }

// export interface Unit {
//   title: string;
//   lessons: Lesson[];
// }

// export const courseStructure: Record<string, Unit> = {
//   unit1: {
//     title: 'Introduction',
//     lessons: [
//       { id: '1.1', title: 'Basics' },
//       { id: '1.2', title: 'Data Types' },
//       { id: '1.3', title: 'Nested Loops' },
//     ],
//   },
//   unit2: {
//     title: 'Control and Logical Operators',
//     lessons: [
//       { id: '2.1', title: 'If Statements' },
//       { id: '2.2', title: 'Switch Case' },
//     ],
//   },
//   unit3: {
//     title: 'Something',
//     lessons: [
//       { id: '3.1', title: 'Something here' },
//       { id: '3.2', title: 'Another here' },
//     ],
//   },
// };

export interface Lesson {
  id: string;
  title: string;
  videoUrl?: string;
  description?: string;
}

export interface Unit {
  title: string;
  lessons: Lesson[];
}

export const courseStructure: Record<string, Unit> = {
  unit1: {
    title: 'Unit 1 : Python Basics',
    lessons: [
      {
        id: '1.1',
        title: '1.1 Basics',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        description: 'This video introduces the goals and structure of the course.',
      },
      {
        id: '1.2',
        title: '1.2 Data Types',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        description: 'Learn about different data types and their uses in programming.',
      },
      {
        id: '1.3',
        title: '1.3 Nested Loops',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        description: 'Explore how nested loops work and their applications.',
      },
      // More lessons...
    ],
  },
  // More units...
  unit2: {
    title: 'Unit 2: Control and Logical Operators',
    lessons: [
      {
        id: '2.1',
        title: '2.1 If Statements',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        description: 'Understand how to use if statements for conditional logic.',
      },
      {
        id: '2.2',
        title: '2.2 Switch Case',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        description: 'Learn about switch case statements and their advantages.',
      },
    ],
  },
  unit3: {
    title: 'Unit 3: Something',
    lessons: [
      {
        id: '3.1',
        title: '3.1 Something here',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        description: 'Details about something here.',
      },
      {
        id: '3.2',
        title: '3.3 Another here',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        description: 'Details about another here.',
      },
    ],
  },
};