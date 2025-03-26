export interface Unit {
  title: string;
  lessons: Lesson[];
  quiz?: QuizQuestion[];
}

export interface Lesson {
  id: string;
  title: string;
  videoUrl?: string;
  description?: string;
  content?: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
}

export const courseStructure: Record<string, Unit> = {
  unit1: {
    title: 'Unit 1: Introduction to Python',
    lessons: [
      {
        id: '1.1',
        title: '1.1 Starting with Trinket',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        description: 'This video introduces the goals and structure of the course and how to start coding in Trinket.',
        content: `
          <h2>Transcript</h2>
          <p>Welcome to the course! This video introduces the goals and structure of the course and how to start coding in Trinket.</p>
          <ul>
            <li>Python is a popular programming language used for web development, data analysis, and more.</li>
            <li>Trinket is an online code editor that lets you write and run Python code in your browser.</li>
            <li>Click the "Run" button to execute your code and see the output.</li>
          </ul>
        `
      },
        {
          id: '1.2',
          title: '1.2 Printing and Comments',
          videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
          description: 'Learn how to use print statements and write comments to explain your code.',
          content: `
            <h2>Transcript</h2>
            <p>This lesson introduces print statements in Python.</p>
            <ul>
              <li><code>print('Hello')</code> displays text to the screen.</li>
              <li>Use <code>#</code> to add comments.</li>
            </ul>
          `
      },
      {
        id: '1.3',
        title: '1.3 Variables and Data Types',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        description: 'Understand how to store information in variables and explore basic data types like strings and numbers.',
      },
      {
        id: '1.4',
        title: '1.4 Basic Input/Output',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        description: 'Learn how to take user input and display output to make your programs interactive.',
      },
    ],
    quiz: [
      {
        question: 'Which function is used to display text in Python?',
        options: ['display()', 'write()', 'print()', 'show()'],
        correctAnswer: 'print()',
      },
      {
        question: 'What symbol is used to start a comment in Python?',
        options: ['//', '#', '/*', '--'],
        correctAnswer: '#',
      },
      {
        question: 'Which of these is a valid variable name in Python?',
        options: ['1name', 'my-name', 'my_name', 'my name'],
        correctAnswer: 'my_name',
      },
    ]
  },
  unit2: {
    title: 'Unit 2: Control Flow',
    lessons: [
      {
        id: '2.1',
        title: '2.1 If Statements',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        description: 'Use if, elif, and else to make decisions in your programs.',
      },
      {
        id: '2.2',
        title: '2.2 Comparison and Logical Operators',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        description: 'Combine values with comparison and logical operators to control flow.',
      },
      {
        id: '2.3',
        title: '2.3 While Loops',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        description: 'Repeat actions while a condition is true using while loops.',
      },
      {
        id: '2.4',
        title: '2.4 For Loops and Ranges',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        description: 'Use for loops and the range function to iterate over numbers and collections.',
      },
    ],
    quiz: [
      {
        question: 'What keyword is used for an alternative condition in Python?',
        options: ['elseif', 'else if', 'elif', 'else'],
        correctAnswer: 'elif',
      },
      {
        question: 'What will this print?\n\nif 5 > 3:\n    print("Yes")',
        options: ['Nothing', 'Error', 'No', 'Yes'],
        correctAnswer: 'Yes',
      },
    ]
  },
  unit3: {
    title: 'Unit 3: Working with Data',
    lessons: [
      {
        id: '3.1',
        title: '3.1 Lists and Indexing',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        description: 'Store multiple values in lists and access them using indexes.',
      },
      {
        id: '3.2',
        title: '3.2 List Methods and Loops',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        description: 'Use loops to work with lists and learn useful list methods.',
      },
      {
        id: '3.3',
        title: '3.3 Dictionaries',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        description: 'Create and use dictionaries to store data as key-value pairs.',
      },
      {
        id: '3.4',
        title: '3.4 Tuples and Sets',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        description: 'Get a brief introduction to tuples and sets for working with unique or unchangeable data.',
      },
    ],
    quiz: [
      {
        question: 'Which data type stores values in key-value pairs?',
        options: ['List', 'Tuple', 'Set', 'Dictionary'],
        correctAnswer: 'Dictionary',
      },
      {
        question: 'How do you access the first element in a list called `colors`?',
        options: ['colors[1]', 'colors(0)', 'colors[0]', 'colors.first'],
        correctAnswer: 'colors[0]',
      },
      {
        question: 'Which of these is an immutable type?',
        options: ['List', 'Set', 'Dictionary', 'Tuple'],
        correctAnswer: 'Tuple',
      },
    ]
  },
  unit4: {
    title: 'Unit 4: Functions and Reusability',
    lessons: [
      {
        id: '4.1',
        title: '4.1 Defining and Calling Functions',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        description: 'Write your own functions and learn how to call them in your code.',
      },
      {
        id: '4.2',
        title: '4.2 Parameters and Return Values',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        description: 'Use parameters and return values to make your functions flexible and reusable.',
      },
      {
        id: '4.3',
        title: '4.3 Function Scope',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        description: 'Learn about variable scope and how it affects your functions.',
      },
      {
        id: '4.4',
        title: '4.4 Built-in Functions',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        description: 'Explore common built-in functions and practice creating your own.',
      },
    ],
    quiz: [
      {
        question: 'What keyword is used to define a function in Python?',
        options: ['function', 'define', 'def', 'fun'],
        correctAnswer: 'def',
      },
      {
        question: 'What is the value of `x` after this code runs?\n\n```python\nx = len("Hello")\n```',
        options: ['4', '5', '"Hello"', 'Error'],
        correctAnswer: '5',
      },
      {
        question: 'Where is a variable defined inside a function accessible?',
        options: ['Anywhere in the file', 'Only inside the function', 'Only outside the function', 'It depends'],
        correctAnswer: 'Only inside the function',
      },
    ]
  },
  unit5: {
    title: 'Unit 5: Projects and Problem Solving',
    lessons: [
      {
        id: '5.1',
        title: '5.1 Guess the Number Game',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        description: 'Build a fun number guessing game using all the skills you’ve learned.',
      },
      {
        id: '5.2',
        title: '5.2 Debugging and Errors',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        description: 'Learn how to find and fix bugs in your code.',
      },
      {
        id: '5.3',
        title: '5.3 Machine Learning',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        description: 'Create ML to evaluate a player overall ratings in FIFA video game.',
      },
    ],
  },
  unit6: {
    title: 'Unit 6: Coding with Turtle Graphics',
    lessons: [
      {
        id: '6.1',
        title: '6.1 Intro to Turtle Graphics',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        description: 'Discover the turtle module and how to draw with code.',
      },
      {
        id: '6.2',
        title: '6.2 Drawing Shapes and Colors',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        description: 'Use loops and functions to draw colorful shapes with turtle.',
      },
      {
        id: '6.4',
        title: '6.4 Showcase and Reflection',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        description: 'Share your final projects and reflect on your coding journey.',
      },
    ],
  },
};