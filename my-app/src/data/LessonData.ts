export interface Lesson {
  id: string;
  title: string;
}

export interface Unit {
  title: string;
  lessons: Lesson[];
}

export const courseStructure: Record<string, Unit> = {
  unit1: {
    title: 'Introduction',
    lessons: [
      { id: '1.1', title: 'Basics' },
      { id: '1.2', title: 'Data Types' },
      { id: '1.3', title: 'Nested Loops' },
    ],
  },
  unit2: {
    title: 'Control and Logical Operators',
    lessons: [
      { id: '2.1', title: 'If Statements' },
      { id: '2.2', title: 'Switch Case' },
    ],
  },
};