import variableImage from '../assets/variable.png';

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
          <p>Python is a super popular programming language that’s known for being easy to learn and fun to use. It was created by a guy named Guido van Rossum in the late 1980s and officially launched in 1991. </p>
          
          <p>Fun fact: Python isn’t named after the snake — it’s actually named after a British comedy show called Monty Python’s Flying Circus that Guido thought was hilarious!</p>

          <p>One of the coolest things about Python is how simple and readable it is. Instead of using a lot of weird symbols or complicated stuff, Python looks almost like regular English. That means even if you’re just starting out, you can write real programs without feeling totally lost.</p>
          <p>Python is also free (yay!) and open-source, which means people all over the world are always making it better. Plus, there are thousands of extra tools (called libraries) you can use to do all kinds of awesome things — like build games, make apps, or even train robots! Thanks to its flexibility and huge community, Python has become one of the most loved programming languages out there.</p>
      
          <h2>What is Python Used For?</h2>
            <p>Python is like a Swiss Army knife for coding — you can use it for <strong>almost anything</strong>!</p>
            <ul>
              <li><strong>Building websites and apps</strong>: Big platforms like <em>Instagram</em> and <em>Spotify</em> use Python behind the scenes to keep everything running smoothly.</li>
              <li><strong>Data science and AI</strong>: Python helps scientists and engineers <em>analyze tons of data</em>, <em>make cool graphs</em>, and even <em>build smart AI models</em> that can predict things.</li>
              <li><strong>Automation</strong>: You can write Python scripts to <em>save time</em> by doing boring tasks automatically, like organizing files or grabbing information from websites.</li>
              <li><strong>Making games</strong>: Python is great for creating simple games using tools like <em>Pygame</em>. Perfect if you want to design your own game someday!</li>
              <li><strong>Cybersecurity and robotics</strong>: Python is used by experts to <em>test security systems</em> and <em>control robots</em>.</li>
              <li><strong>Education</strong>: Schools love teaching Python because it’s <em>beginner-friendly</em> and a great way to learn the basics of coding.</li>
            </ul>
      
          <h2>What is Online Python?</h2>
          <p><a href="https://www.online-python.com/" target="_blank">Online Python</a> is a free, browser-based Python IDE (Integrated Development Environment). It allows you to write, run, and share Python code directly in your web browser—no downloads or installations required!</p>
          <p>This makes it an excellent tool for learning and practicing Python programming, especially for beginners.</p>

          <h2>Features of Online Python</h2>
          <ul>
            <li><strong>Easy to Use:</strong> Simply type your code and click the "Run" button to see the output.</li>
            <li><strong>Code Sharing:</strong> Share your code with others using the "Share" option, which generates a unique link.</li>
            <li><strong>Customization:</strong> Choose between light and dark themes to suit your preference.</li>
            <li><strong>Support for Libraries:</strong> Includes support for popular Python libraries like Pandas and NumPy.</li>
            <li><strong>Interactive Execution:</strong> Supports real-time input, allowing you to interact with your programs.</li>
          </ul>

          <h2>Try it: Your First Python Code</h2>
          <p>Let's print a message to the screen:</p>
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
          name = "Andy"
          print("Welcome,", name)</code></pre>
          <p>This will print: <code>Welcome, Andy</code></p>
      
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
        content: `
        <p>Now that you’ve written your first Python code, let’s explore the building blocks of every program: <strong>data types</strong>! In this lesson, you’ll learn about three of the most common types: <strong>Strings</strong>, <strong>Numbers</strong>, and <strong>Booleans</strong>.</p>

        <h3>Strings</h3>
        <p>A <strong>string</strong> is a piece of text. It can be a word, a sentence, or even just a letter. In Python, strings are written inside quotes.</p>

        <pre><code>
        print("Hello, world!")
        print("Python is fun!")
        print("123 is also a string!")</code></pre>

        <p>Even though that last line looks like a number, it’s actually a string because it’s inside quotes. Strings can include letters, numbers, symbols, and spaces.</p>

        <p><strong>Try it:</strong> Change the messages and run your own string print statements!</p>

        <h3>Numbers</h3>
        <p>Python also understands numbers! You can do math with them or just print them out.</p>

        <pre><code>
        print(5)
        print(3.14)
        print(100 + 50)</code></pre>

        <p>There are two main number types in Python:</p>
        <ul>
          <li><strong>Integers</strong> (whole numbers like <code>1</code>, <code>100</code>, <code>-25</code>)</li>
          <li><strong>Floats</strong> (numbers with decimals like <code>3.14</code>, <code>0.5</code>, <code>-2.7</code>)</li>
        </ul>

        <p><strong>Try it:</strong> Experiment by changing the numbers and operations!</p>
        <h3>Booleans</h3>
        <p>A <strong>Boolean</strong> is a special type of data that can only be one of two values:</p>
        <ul>
          <li><code>True</code></li>
          <li><code>False</code></li>
        </ul>

        <pre><code>
        print(True) 
        Print(False)</code></pre>

        <p>You’ll often use Booleans when checking if something is correct or not — like if a password is right, or if a number is bigger than another.</p>

        <pre><code>
        print(5 > 3)     # This will print True
        print(10 == 20)  # This will print False
        print(7 <= 7)    # This will print True</code></pre>

        <p><strong>Try it:</strong> Change the numbers and see what prints out!</p>

        <h3>Quick Summary</h3>
        <ul>
          <li><strong>Strings</strong>: Text, inside quotes → <code>"Hello"</code></li>
          <li><strong>Integers</strong>: Whole numbers → <code>7</code></li>
          <li><strong>Floats</strong>: Decimal numbers → <code>3.14</code></li>
          <li><strong>Booleans</strong>: <code>True</code> or <code>False</code></li>
        </ul>

        <p>These data types are the foundation for writing real Python programs. Once you get the hang of these, you’ll be ready to combine them with logic and create powerful code!</p>

        <h3>Challenge!</h3>
        <p>Write a program that prints out:</p>
        <ul>
          <li>Your name as a string</li>
          <li>Your favorite number</li>
          <li>A True/False fact about yourself (like: "I have a pet" → True)</li>
        </ul>

        <pre><code># Example
        print("My name is Alex")
        print(12)
        print(True)</code></pre>

        <p>Once you’re done, click "Share" on Online Python to get a link and show your teacher or a friend!</p>`
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
  unit8: {
    title: 'Unit 8: Coding with Turtle',
    lessons: [
      {
        id: '8.1',
        title: '8.1 Getting Started with Trinket for Turtle Projects',
        content: `
          <h2>Welcome to Trinket!</h2>
          <p>Before you start creating amazing Turtle art, you’ll need a way to run and share your Python code online. That’s where <a href="https://trinket.io/" target="_blank">Trinket</a> comes in!</p>
      
          <h3> What is Trinket?</h3>
          <p>Trinket is a free, web-based platform that lets you write and run Python code right in your browser—no downloads needed. It’s especially useful for Turtle graphics because it supports <code>import turtle</code> and lets you see your drawings instantly.</p>
      
          <h3>How to Get Started:</h3>
          <ol>
            <li>Go to <a href="https://trinket.io/" target="_blank">https://trinket.io/</a></li>
            <li>Click <strong>"Start coding"</strong> or <strong>"Sign Up"</strong> (optional but helpful to save your work)</li>
            <li>Choose <strong>"New Trinket" → "Python with Turtle"</strong></li>
            <li>Start typing your code! You’ll see a drawing window on the right where your turtle art appears.</li>
          </ol>
      
          <h3>Why Use Trinket?</h3>
          <ul>
            <li>It’s free to use</li>
            <li>Works in any browser—no installation</li>
            <li>Perfect for Turtle graphics projects</li>
            <li>You can share your work with a simple link!</li>
          </ul>
      
          <p>Now that you’re set up on Trinket, you’re ready to dive into creative coding with Turtle!</p>
        `
      },
      {
        id: '8.2',
        title: '8.2 Create Your Own Turtle Art with Loops, Functions, and Random Colors',
        content: `
          <h2>Welcome to Your Final Turtle Art Challenge!</h2>
          <p>In this lesson, you'll put your coding skills to work by designing a unique drawing using <strong>loops</strong>, <strong>functions</strong>, and the <strong><code>random</code> module</strong>.</p>
  
          <h3>New Concept: <code>import random</code></h3>
          <p>The <code>random</code> module lets your code make choices on its own! You can use it to pick a random color like this:</p>
          <pre><code>
  import turtle
  import random
  
  colors = ["red", "blue", "green", "purple", "orange", "pink"]
  t = turtle.Turtle()
  
  def draw_shape():
      for _ in range(36):
          t.color(random.choice(colors))
          t.forward(100)
          t.right(170)
  
  draw_shape()
          </code></pre>
  
          <h3>Your Mission:</h3>
          <ul>
            <li>Use a <strong>loop</strong> to draw a shape multiple times</li>
            <li>Organize your code with at least one <strong>function</strong></li>
            <li>Apply <strong><code>random.choice()</code></strong> to change colors each time</li>
            <li>Add your own twist—it's your project!</li>
          </ul>
  
          <p>Have fun and get creative! When you're done, show off your design to the class or your family!</p>
        `
      }
    ],
    quiz: [
      {
        question: 'What is the purpose of the random module in Python?',
        options: [
          'To create infinite loops',
          'To access web data',
          'To allow the computer to make random choices',
          'To save your code automatically'
        ],
        correctAnswer: 'To allow the computer to make random choices',
      },
      {
        question: 'Which line correctly uses the random module to pick a color?',
        options: [
          'color = colors.pick()',
          'color = random.select(colors)',
          'color = random.choice(colors)',
          'color = choose.random(colors)'
        ],
        correctAnswer: 'color = random.choice(colors)',
      },
      {
        question: 'Why do we use functions in our code?',
        options: [
          'To make code run slower',
          'To organize and reuse blocks of code',
          'To make it harder to understand',
          'To store lists of data'
        ],
        correctAnswer: 'To organize and reuse blocks of code',
      },
    ]
  },
  unit9: {
    title: 'Final Projects',
    lessons: [
      {
        id: '9.2',
        title: 'Final Project Showcase',
        content: `
        <h2>Final Project Showcase</h2>
        `
      }
    ],
  }
};