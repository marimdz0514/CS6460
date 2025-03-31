export interface Unit {
  title: string;
  lessons: Lesson[];
  quiz?: QuizQuestion[];
}

export interface Lesson {
  id: string;
  title: string;
  videoUrl?: string;
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
        title: '1.1 Introduction to Python and Trinket',
        content: `
          <h2>What is Python?</h2>
          <p>Python is a popular, high-level programming language known for its simple syntax and ease of use. It was created by Guido van Rossum in the late 1980s and officially released in 1991. Guido wanted to create a language that was powerful yet easy to read—something that could help both new and experienced programmers write clear, logical code. Interestingly, Python isn’t named after the reptile—it’s named after the British comedy show Monty Python’s Flying Circus, which Guido enjoyed.
            One of Python’s greatest strengths is its readability. Unlike some programming languages that use lots of symbols or confusing structures, Python code is more like writing sentences in English. This makes it perfect for beginners who are just starting to learn how to program. Even professional developers often choose Python when they want to prototype quickly or solve problems efficiently.
            Python is also open-source, which means it’s free to use and constantly improved by a global community of developers. There are thousands of libraries (like tools or add-ons) that extend what Python can do—whether you’re building apps, analyzing data, or creating games. Its flexibility, readability, and large support community make Python one of the most widely used languages in the world today.</p>
      
          <h2>What is Python Used For?</h2>
          <p>Python is one of the most versatile programming languages in the world. It is used by beginners learning to code for the first time and by professionals building powerful software systems. In web development, Python helps create dynamic websites and web apps using frameworks like Django and Flask. Platforms like Instagram and Spotify rely heavily on Python behind the scenes.
            In data science and machine learning, Python is the go-to language for analyzing large sets of data, creating visualizations, and building predictive models. Tools like pandas, NumPy, and TensorFlow make it easy to work with data and even train artificial intelligence systems.
            Python is also popular in automation, where it’s used to write scripts that save time by performing repetitive tasks—like organizing files, sending emails, or scraping data from websites. In game development, Python is used to create simple games with libraries like Pygame, making it a fun and accessible choice for beginners.
            Beyond that, Python is used in cybersecurity to test and strengthen security systems, in robotics to control hardware, and even in education because of its readability and beginner-friendly syntax. Its wide range of real-world applications is part of what makes Python such a valuable language to learn.:</p>
      
          <h2>What is Trinket?</h2>
          <p>Trinket (<a href="https://trinket.io" target="_blank">trinket.io</a>) is a browser-based coding platform. You can write and run Python code directly in your browser—no downloads needed!</p>
          <p>This makes it perfect for learning and teaching programming without needing to install software.</p>
      
          <h2>Try it: Your First Python Code</h2>
          <p>Let’s print a message to the screen:</p>
          <pre><code>print("Hello, world!")</code></pre>
          <p>You can also add comments to your code using the <code>#</code> symbol:</p>
          <pre><code># This is a comment
      print("Welcome to Python!")</code></pre>
        `
      },
      {
        id: '1.2',
        title: '1.2 Writing to the Console',
        content: `
          <h2>Writing to the Console (print statements)</h2>
          <p>In Python, one of the first things you’ll learn is how to write a message to the console using the <code>print()</code> function. The console is the space where your program shows its output—kind of like a screen where your code “talks back” to you.</p>
      
          <p>To do this in Python, we use the <code>print()</code> function. This function takes one or more values (like text or numbers) and displays them in the console. For example:</p>
          
          <pre><code>print("Hello, world!")</code></pre>
          <p>When you run this code, you’ll see the message <strong>Hello, world!</strong> appear in the console.</p>
      
          <p>You can print multiple things at once by separating them with commas:</p>
          <pre><code>
      name = "Mariana"
      print("Welcome,", name)
          </code></pre>
          <p>This will print: <code>Welcome, Mariana</code></p>
      
          <p>The <code>print()</code> function is one of your best tools for debugging—it helps you check what your program is doing and what values are being used. You’ll be using it a lot!</p>
        `
      },
      {
        id: '1.3',
        title: '1.3 Adding Comments to Code',
        content: `
          <h2>Adding Comments to Code</h2>
          <p>Comments are notes you write in your code to explain what it does. They are meant for people reading the code—not for the computer. In Python, comments are created by using the <code>#</code> symbol.</p>
      
          <p>Anything you write after a <code>#</code> on a line will be ignored by Python when your program runs. Comments are useful for explaining why you're doing something, what a block of code is supposed to do, or even leaving reminders for yourself or others.</p>
      
          <pre><code>
        # This is a comment
      print("Hello, world!")  # This prints a greeting to the screen
          </code></pre>
      
          <p>Good programmers use comments to make their code easier to understand. While short scripts might not need many comments, they become very important as your code gets more complex. Think of comments as your future self's best friend!</p>
        `
      },
      {
        id: '1.4',
        title: '1.4 Introduction to Variables',
        content: `
          <h2>Introduction to Variables</h2>
          <p>In Python, a <strong>variable</strong> is a way to store information that your program can use and update later. You can think of a variable like a container or a labeled box that holds data—such as a number, a name, or a setting. Instead of repeating values throughout your code, you can store them in a variable and refer back to them using the variable's name.</p>
      
          <p>To create a variable, you simply give it a name, use the <code>=</code> assignment operator, and assign it a value. For example:</p>
      
          <pre><code>
      name = "Jordan"
      age = 14
      height = 5.7
      is_student = True
          </code></pre>
      
          <p>In this example:</p>
          <ul>
            <li><code>name</code> stores a string (text)</li>
            <li><code>age</code> stores an integer (whole number)</li>
            <li><code>height</code> stores a float (decimal number)</li>
            <li><code>is_student</code> stores a boolean (True or False)</li>
          </ul>
      
          <h3>Why Are Variables Useful?</h3>
          <p>Variables allow you to reuse and update values in your program without rewriting them. For example, you can write:</p>
          <pre><code>
      print("Hello,", name)
      print("You are", age, "years old.")
          </code></pre>
          <p>Later in your program, you can update the value of <code>age</code> like this:</p>
          <pre><code>age = age + 1</code></pre>
          <p>Now <code>age</code> holds the new value and your program keeps using the updated information.</p>
      
          <h3>Python is Dynamically Typed</h3>
          <p>In some programming languages, you have to declare the data type of a variable (e.g., saying “this is a number” or “this is text”). But Python is <strong>dynamically typed</strong>, which means it figures out the data type for you based on what you assign to it. This makes coding faster and easier, especially for beginners.</p>
      
          <h3>Naming Rules and Best Practices</h3>
          <p>There are a few rules and tips when naming variables in Python:</p>
          <ul>
            <li>Variable names must start with a letter or underscore (not a number)</li>
            <li>You can use letters, numbers, and underscores (e.g., <code>first_name</code>, <code>score_1</code>)</li>
            <li>Variable names are case-sensitive: <code>Name</code> and <code>name</code> are different</li>
            <li>Use clear and descriptive names (e.g., <code>user_age</code> is better than <code>u</code>)</li>
          </ul>
      
          <h3>Bonus: Updating and Using Variables</h3>
          <p>Variables aren’t static—you can update their values anytime. For example:</p>
          <pre><code>
      score = 10
      score = score + 5  # score is now 15
      print("Your score is:", score)
          </code></pre>
      
          <p>This is useful for keeping track of things like points in a game, number of tries, or total cost in a shopping cart.</p>
      
          <p>In summary, variables are one of the most fundamental concepts in Python. You'll use them in every program you build. As you get more advanced, you’ll also learn how to group variables using lists and dictionaries—but for now, practice creating and printing your own!</p>
        `
      },
      {
        id: '1.5',
        title: '1.5 Reading User Input from the Console',
        content: `
          <h2>Reading User Input from the Console</h2>
          <p>So far, we've used Python to display information using <code>print()</code>. Now it's time to make our programs interactive by allowing the user to enter information. We can do this with a built-in function called <code>input()</code>.</p>
      
          <p>The <code>input()</code> function pauses the program and waits for the user to type something in the console. When the user presses "Enter," the program captures what they typed and stores it as a string. You can then save that value to a variable and use it in your program.</p>
      
          <h3>Basic Example:</h3>
          <pre><code>
      name = input("What is your name? ")
      print("Hello,", name)
          </code></pre>
          <p>When you run this, Python will display the message <em>What is your name?</em> and wait for the user to type something. Once the user types their name and hits Enter, it will print a greeting with the name they entered.</p>
      
          <h3>Important: input() Always Returns a String</h3>
          <p>No matter what the user types, the value returned by <code>input()</code> is always a string (text). That means if you're asking for a number, you need to convert the input to the correct type using <code>int()</code> or <code>float()</code>.</p>
      
          <h4>Example with Conversion:</h4>
          <pre><code>
      age = input("How old are you? ")
      print(age + 1)  #This will cause an error because 'age' is a string
      
      # Fix:
      age = int(input("How old are you? "))
      print(age + 1)  #Now it adds 1 to the number the user entered
          </code></pre>
      
          <h3>Making Programs Interactive</h3>
          <p>Using <code>input()</code> opens up tons of possibilities: you can build quizzes, games, forms, and more—all by asking the user to enter data and responding to it. Try combining <code>input()</code> with variables and <code>print()</code> to create your first interactive programs!</p>
      
          <h3>Practice Tip</h3>
          <p>Try writing a short program that asks the user for their favorite food and favorite color, then prints a silly sentence using both. Example:</p>
          <pre><code>
      food = input("What is your favorite food? ")
      color = input("What is your favorite color? ")
      print("Imagine a", color, food, "flying through the sky!")
          </code></pre>
      
          <p>With <code>input()</code>, your programs are no longer one-sided—you can start having a conversation with the computer!</p>
        `
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
    title: 'Unit 2: Data Types',
    lessons: [
      {
        id: '2.1',
        title: '2.1 Strings, Numbers, and Booleans',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      },
      {
        id: '2.2',
        title: '2.2 Performing basic math operations',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',

      },
      {
        id: '2.3',
        title: '2.3 String Manipulation and Concatenation',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      },
      {
        id: '2.4',
        title: '2.4 Type Conversions and best practices',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
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
    title: 'Unit 3: Conditional Statements',
    lessons: [
      {
        id: '3.1',
        title: '3.1 Introduction to if-else Statements',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      },
      {
        id: '3.2',
        title: '3.2 Nested Conditionals and Logical Operators',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      },
      {
        id: '3.3',
        title: '3..3 Writing programs that make decisions',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
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
    title: 'Unit 4: Loops',
    lessons: [
      {
        id: '4.1',
        title: '4.1 For and While Loops',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      },
      {
        id: '4.2',
        title: '4.2 Nested Loops and their applications',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      },
      {
        id: '4.3',
        title: '4.3 Usinbg Loops for Automation and Efficiency',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
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
    title: 'Unit 5: Data Structures',
    lessons: [
      {
        id: '5.1',
        title: '5.1 Introduction to lists: Indexing, Slicing, and Modifying Elements',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      },
      {
        id: '5.2',
        title: '5.2 Tuples and their Immutability',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      },
      {
        id: '5.3',
        title: '5.3 Understanding Sets and Set Operations',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
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
  unit6: {
    title: 'Unit 6: Functions',
    lessons: [
      {
        id: '6.1',
        title: '6.1 Defining and Calling Functions',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',

      },
      {
        id: '6.2',
        title: '6.2 Understanding Function Parameters and Return Values',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      },
      {
        id: '6.4',
        title: '6.4 Exploring Built-in Functions and Libraries',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      },
      {
        id: '6.5',
        title: '6.5 Introduction to Built-in Math Functions',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
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
  unit7: {
    title: 'Unit 7: Debugging and Problem-Solving',
    lessons: [
      {
        id: '7.1',
        title: '7.1 Debugging Techniques and Common Coding Errors',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      },
      {
        id: '7.2',
        title: '7.2 Breaking Down Problems into Smaller Steps',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      },
      {
        id: '7.3',
        title: '7.3 Reviewing Student Projects and Providing Feedback',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
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
};