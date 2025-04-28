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
    title: "Unit 1: Introduction to Python",
    lessons: [
      {
        id: "1.1",
        title: "1.1 Introduction to Python",
        videoUrl: "https://www.youtube.com/embed/NPkuIk35ht4",
        content: `
          <h2>What is Python?</h2>

          <p>Imagine you have a magic tool that lets you build games, apps, websites—or even control robots! That magic tool is called <strong>Python</strong>—one of the most popular programming languages in the world.</p>

          <p>Python was created by a guy named Guido van Rossum back in the late 1980s and officially launched in 1991. He wanted coding to be fun, simple, and accessible for everyone, not just expert programmers.</p>

          <p><strong>Fun fact:</strong> Python isn’t named after the snake —it’s named after a British comedy show called <em>Monty Python’s Flying Circus</em> that Guido thought was hilarious!</p>

          <p>One of the coolest things about Python is how easy it is to read and write. Instead of strange symbols and confusing commands, Python code looks almost like plain English. That’s why Python is such a great first language for beginners—and why even expert developers use it every day to build powerful things.</p>

          <p>Best of all, Python is <strong>free</strong> and <strong>open-source</strong> (yay!), meaning you can use it, share it, and even help improve it if you want. Thousands of extra tools (called <strong>libraries</strong>) let you do even more with Python, like building websites, analyzing data, designing video games, or training AI robots. </p>

          <p><strong>You're about to learn a skill that's used by millions of people around the world. How cool is that?! </strong></p>

          <h2>What is Python Used For?</h2>

          <p>Python is like a multi-tool for programmes- it can create <strong>almost anything</strong>!</p>
          <ul>
            <li><strong>Building websites and apps</strong>: Big platforms like <em>Instagram</em> and <em>Spotify</em> use Python behind the scenes to keep everything running smoothly.</li>
            <li><strong>Data science and AI</strong>: Scientists and engineers use Python to <em>analyze huge amounts of data</em>, <em>create cool graphs</em>, and <em>build smart AI programs</em> that can predict things like movie recommendations or weather patterns.</li>
            <li><strong>Automation</strong>: You can write Python scripts to <em>automate boring tasks</em> like organizing files, sending emails, or collecting information from websites while you sleep.</li>
            <li><strong>Making games</strong>: Python is a great starting point for designing your own video games with tools like <em>Pygame</em>.</li>
            <li><strong>Cybersecurity and robotics</strong>: Experts use Python to <em>test security systems</em> and <em>program robots</em> to complete tasks automatically!</li>
            <li><strong>Education</strong>: Because Python is so beginner-friendly, it’s taught in schools and universities all over the world to help students launch their coding journeys.</li>
          </ul>

          <p><strong>Anything you love—music, sports, games, social media—has someone using Python behind the scenes to make it happen. Pretty awesome, right?</strong> </p>

          <h2>What is Online Python?</h2>

          <p><a href="https://www.online-python.com/" target="_blank">Online Python</a> is a free, browser-based coding tool that lets you write, run, and share Python programs directly in your web browser.</p>

          <p><strong>No need to download anything</strong>—just open the website and start coding! This makes it super easy to practice from school, home, or anywhere you have internet.</p>

          <h2>Features of Online Python</h2>
          <ul>
            <li><strong>Easy to Use:</strong> Type your code, click "Run," and instantly see the results.</li>
            <li><strong>Code Sharing:</strong> Share your programs with friends, classmates, or teachers using a simple link.</li>
            <li><strong>Customization:</strong> Choose a light or dark theme depending on what’s easier on your eyes.</li>
            <li><strong>Support for Libraries:</strong> It even supports popular Python tools like <em>Pandas</em> and <em>NumPy</em> for when you get into more advanced coding.</li>
            <li><strong>Interactive Programs:</strong> You can make your programs respond to user input (like asking questions and getting answers) right from the browser!</li>
          </ul>
        `,
      },
      {
        id: "1.2",
        title: "1.2 Writing to the Console",
        content: `
          <h2>Writing to the Console (print statements)</h2>

            <p>Imagine you're texting a friend—you type a message and it shows up on their phone. In Python, the <strong>console</strong> is like your program’s "text messages" to you. It's where your code says, "Hey! Here’s what's happening!"</p>

            <p>To send a message from your program to the console, we use the <code>print()</code> function. It tells Python, "Show this on the screen."</p>

            <h3>Basic Example</h3>
            <pre><code>print("Hello, world!")</code></pre>

            <p>When you run this code, Python prints:</p>
            <p><strong>Hello, world!</strong></p>

            <p><strong>You just made your first Python program talk!</strong></p>

            <h3>Printing Multiple Things</h3>
            <p>You can print more than one thing at a time by separating them with commas. Try this:</p>

            <pre><code>
            name = "Andy"
            print("Welcome,", name)
            </code></pre>

            <p>This will print: <code>Welcome, Andy</code></p>

            <h3>Why print() is Your Superpower</h3>
            <p>The <code>print()</code> function is one of the best tools you’ll ever have. It's like your flashlight in a dark cave. When your program isn't doing what you expect, printing things out helps you <strong>debug</strong> (find mistakes) and <strong>understand</strong> what's really happening.</p>

            <p><strong>Remember:</strong> Every pro coder—even at companies like Google or TikTok—uses print() while building apps and games. You’re doing what real developers do!</p>

            <h3>Quick Challenge</h3>
            <p>Write a program that prints your favorite quote or song lyric! Use <code>print()</code> to make your computer sing.</p>
          `,
      },
      {
        id: "1.3",
        title: "1.3 Adding Comments to Code",
        content: `
          <h2>Adding Comments to Code</h2>

          <p>Imagine you’re leaving secret notes for your future self—or for another coder who reads your program. These notes are called <strong>comments</strong>!</p>

          <p>Comments are messages you write inside your code to explain what it does. They’re invisible to the computer when the program runs—but super helpful for people reading the code later.</p>

          <h3>How to Write Comments</h3>
          <p>In Python, a comment starts with the <code>#</code> symbol. Everything after the <code>#</code> on that line is ignored by Python.</p>

          <pre><code>
          # This is a comment
          print("Hello, world!")  # This prints a greeting to the screen
          </code></pre>

          <h3>Why Comments Are Important</h3>
          <p>Good programmers leave clues and explanations behind. Comments help you (and others!) understand:</p>
          <ul>
            <li>What your code is doing</li>
            <li>Why you wrote something a certain way</li>
            <li>What parts might need updates later</li>
          </ul>

          <h3>Real-World Impact</h3>
          <p>Teams at places like NASA, Netflix, and gaming companies rely on comments every day. Without comments, fixing bugs and updating big programs would take forever!</p>

          <p><strong>Think of comments like saving your future self from confusion.</strong></p>

          <h3>You’re on the Right Track!</h3>
          <p>Even if your programs are small now, get into the habit of leaving helpful comments. Future you—and anyone else who sees your work—will thank you!</p>

          <h3>Quick Challenge</h3>
          <p>Write a short program with at least two print statements, and add a comment above each one explaining what it does!</p>
        `,
      },
      {
        id: "1.4",
        title: "1.4 Introduction to Variables",
        content: `
          <h2>Introduction to Variables</h2>

          <p>Imagine you're building your own video game character. You want to save their name, age, and whether they’ve completed the tutorial. You could try to remember all that yourself, but what if you had 100 players? That's where <strong>variables</strong> come in!</p>

          <p>In Python, a <strong>variable</strong> is like a labeled box where you store information. You can fill it with a number, a word, or a fact—and use it again and again in your code. This makes your program smarter, cleaner, and way easier to change later.</p>
          <img src="/assets/variables.png" alt="Variables as boxes" style="max-width: 100%; margin: 20px 0;" />

          <p>To create a variable, just give it a name, use <code>=</code>, and set a value. Like this:</p>

          <pre><code>
          name = "Jordan"
          age = 14
          height = 5.7
          is_student = True
          </code></pre>

          <p>In this example:</p>
          <ul>
            <li><code>name</code> holds a string (text)</li>
            <li><code>age</code> holds an integer (a whole number)</li>
            <li><code>height</code> holds a float (a decimal number)</li>
            <li><code>is_student</code> holds a boolean (True or False)</li>
          </ul>

          <h3>Real-World Example</h3>
          <p>When you fill out an online form, like a signup page for Roblox or Spotify, each thing you type (your username, age, email, etc.) is stored in a variable—just like in our example above!</p>

          <h3>Why Are Variables Useful?</h3>
          <p>Variables help you save, update, and reuse information. Let’s say we print a birthday message using the <code>name</code> and <code>age</code> variables:</p>

          <pre><code>
          print("Hello,", name)
          print("You are", age, "years old.")
          </code></pre>

          <p>If you want to pretend a year has passed, you can update <code>age</code> like this:</p>

          <pre><code>
          age = age + 1
          print("Now you're", age, "!")
          </code></pre></p>

          <h3>Python is Dynamically Typed</h3>
          <p>Some languages ask you to say what type of variable you're making (like saying, “this will be a number”). But Python figures it out for you! This means you can focus on building cool stuff faster.</p>

          <h3>Naming Tips</h3>
          <p>Here are some quick rules and tips when naming your variables:</p>
          <ul>
            <li>Start with a letter or underscore (never a number)</li>
            <li>Use letters, numbers, and underscores (<code>score_1</code> is fine)</li>
            <li>Python cares about uppercase vs. lowercase: <code>Name</code> ≠ <code>name</code></li>
            <li>Pick names that describe what you're storing (<code>player_score</code> is better than <code>ps</code>)</li>
          </ul>

          <h3>Bonus: Game-Like Tracking</h3>
          <p>Variables are used all the time in games—to track your score, your health, or how many coins you’ve collected!</p>

          <pre><code>
          score = 10
          score = score + 5
          print("Your score is:", score)
          </code></pre>
        `,
      },
      {
        id: "1.5",
        title: "1.5 Reading User Input from the Console",
        content: `
          <h2>Reading User Input from the Console</h2>

      <p>Until now, your Python programs have talked to <em>you</em>. Now it's time for <strong>you to talk back</strong>! Using <code>input()</code>, you can ask the user questions and store their answers in variables.</p>

      <p>This makes your program <strong>interactive</strong>—like a mini conversation between you and the computer!</p>

      <h3>Try It: Ask for a Name</h3>
      <pre><code>
      name = input("What is your name? ")
      print("Nice to meet you,", name + "!")
      </code></pre>

      <p>When this runs, Python will show the message and wait for you to type something. That message gets saved into the <code>name</code> variable.</p>

      <h3>Real-World Impact</h3>
      <p>This is exactly how websites and apps collect info—when you type your username or search for a song, they’re using <code>input()</code>-style logic to grab and store what you typed!</p>

      <h3>Watch Out: input() always gives a string</h3>
      <p>Even if someone types a number, Python sees it as <strong>text</strong> unless you tell it otherwise. That means math won’t work unless you convert it.</p>

      <pre><code>
      # Wrong
      age = input("How old are you? ")
      print(age + 1)  # This will cause an error

      # Fixed
      age = int(input("How old are you? "))
      print("Next year, you’ll be", age + 1)
      </code></pre>

      <p><strong>Way to go! You're now combining variables, user input, and math. </strong></p>

      <h3>Creative Challenge</h3>
      <p>Build your own “Mad Lib” style sentence using two questions. Ask for the user’s favorite animal and favorite food, then mix them together into a fun sentence!</p>

      <pre><code>
      animal = input("What’s your favorite animal? ")
      food = input("What’s your favorite food? ")
      print("A", animal, "eating", food, "? That’s wild!")
      </code></pre>

      <p>This is your first step toward building quizzes, games, and personalized programs. You’re not just learning to code—you’re learning to create!</p>

      <h3>You Did It!</h3>
      <p>Every time you run your code and it responds to what YOU typed—you're doing something powerful. Keep exploring, keep building, and don’t worry if you make mistakes. That’s how every great coder starts. </p>
              `,
      },
    ],
    quiz: [
      {
        question: "Which function is used to display text in Python?",
        options: ["display()", "write()", "print()", "show()"],
        correctAnswer: "print()",
      },
      {
        question: "What symbol is used to start a comment in Python?",
        options: ["//", "#", "/*", "--"],
        correctAnswer: "#",
      },
      {
        question: "What is the correct way to write a variable in Python?",
        options: ["5 = age", "age = 5", "age : 5", "age -> 5"],
        correctAnswer: "age = 5",
      },
      {
        question: "Which of the following is a correct variable name?",
        options: ["2name", "name_2", "name-2", "name 2"],
        correctAnswer: "name_2",
      },
      {
        question: "Which keyword is used to define a function in Python?",
        options: ["function", "def", "fun", "define"],
        correctAnswer: "def",
      },
      {
        question: 'What will this code print?\nprint("Hello, world!")',
        options: [
          "Hello world!",
          "hello world!",
          "Hello, world!",
          "hello, World!",
        ],
        correctAnswer: "Hello, world!",
      },
      {
        question: "Which of these is NOT a correct way to name a variable?",
        options: ["first_name", "_score", "user-age", "totalPoints"],
        correctAnswer: "user-age",
      },
      {
        question:
          "Which platform lets you run Python code directly in a browser without installing anything?",
        options: [
          "Online Python",
          "Google Drive",
          "Python Studio",
          "Web Runner",
        ],
        correctAnswer: "Online Python",
      },
    ],
  },
  unit2: {
    title: "Unit 2: Data Types",
    lessons: [
      {
        id: "2.1",
        title: "2.1 Strings, Numbers, and Booleans",
        content: `
        <p>Now that you’ve written your first Python code, you're ready to unlock the building blocks of every program: <strong>data types</strong>! In this lesson, you’ll meet three of the most important ones: <strong>Strings</strong>, <strong>Numbers</strong>, and <strong>Booleans</strong>.</p>

        <h3>Strings</h3>
        <p>Think of a <strong>string</strong> like a piece of text you might send in a text message. It can be a word, a sentence, or even just a single letter. In Python, strings are always written inside quotes.</p>

        <pre><code>
        print("Hello, world!")
        print("Python is fun!")
        print("123 is also a string!")
        </code></pre>

        <p>Even though that last line looks like a number, it’s a string because it’s inside quotes.  Strings can hold letters, numbers, emojis, spaces—you name it!</p>

        <p><strong>Try it:</strong> Change the messages and run your own string print statements! Write your favorite quote, a movie title, or even your dream vacation destination!</p>

        <h3>Numbers</h3>
        <p>Python is also super good at handling numbers—whether you’re solving math problems, counting game points, or tracking scores.</p>

        <pre><code>
        print(5)
        print(3.14)
        print(100 + 50)
        </code></pre>

        <p>There are two main types of numbers in Python:</p>
        <ul>
          <li><strong>Integers</strong> — Whole numbers like <code>1</code>, <code>100</code>, <code>-25</code>.</li>
          <li><strong>Floats</strong> — Decimal numbers like <code>3.14</code>, <code>0.5</code>, <code>-2.7</code>.</li>
        </ul>

        <p><strong>Try it:</strong> Change the numbers, add, subtract, multiply—and see what happens! You’re now doing real math with code! </p>

        <h3> Booleans</h3>
        <p>A <strong>Boolean</strong> is a special kind of data that can only have one of two values:</p>
        <ul>
          <li><code>True</code></li>
          <li><code>False</code></li>
        </ul>

        <pre><code>
        print(True)
        print(False)
        </code></pre>

        <p>You’ll often use Booleans when making decisions in your programs—like checking if a password is correct, or if a player has won a game!</p>

        <pre><code>
        print(5 > 3)     # This will print True
        print(10 == 20)  # This will print False
        print(7 <= 7)    # This will print True
        </code></pre>

        <p><strong>Try it:</strong> Make your own comparisons! Can you figure out which ones are True and which are False?</p>
        <div style="text-align: center;">
      <img 
        src="/assets/dataTypes.png" 
        alt="Data Types as Stickers" 
        style="max-width: 50%; margin: 0; padding: 0; object-fit: contain;"/>
        </div>
        
        <h3>Quick Summary</h3>
        <ul>
          <li><strong>Strings</strong>: Text inside quotes → <code>"Hello"</code></li>
          <li><strong>Integers</strong>: Whole numbers → <code>7</code></li>
          <li><strong>Floats</strong>: Decimal numbers → <code>3.14</code></li>
          <li><strong>Booleans</strong>: Only <code>True</code> or <code>False</code></li>
        </ul>

        <h3> Challenge: Show Off Your Skills!</h3>
        <p>Write a program that prints:</p>
        <ul>
          <li>Your name (as a string)</li>
          <li>Your favorite number</li>
          <li>A True/False fact about yourself (like: "I have a pet" → True)</li>
        </ul>

        <pre><code># Example
        print("My name is Alex")
        print(12)
        print(True)
        </code></pre>

        <p>When you’re done, click "Share" on Online Python and send the link to your teacher, a friend, or even your family. You’re officially writing real code now—how amazing is that?! </p>
       `,
      },
      {
        id: "2.2",
        title: "2.2 Performing basic math operations",
        content: `
        <h2>Performing Basic Math Operations</h2>

        <p>Imagine you're building a calculator, tracking your game points, or splitting a pizza bill with friends—math shows up everywhere in real life, and it’s just as important in coding!</p>

        <p>In Python, you can do math with just a few simple symbols. Let’s check them out!</p>

        <h3>➕ Basic Math Symbols in Python</h3>
        <ul>
          <li><strong>Addition</strong>: <code>+</code></li>
          <li><strong>Subtraction</strong>: <code>-</code></li>
          <li><strong>Multiplication</strong>: <code>*</code></li>
          <li><strong>Division</strong>: <code>/</code></li>
          <li><strong>Exponentiation</strong> (powers, like 2²): <code>**</code></li>
          <li><strong>Modulus</strong> (remainder after division): <code>%</code></li>
        </ul>

        <p>Let’s see them in action!</p>

        <pre><code>
        print(5 + 3)    # Addition → 8
        print(10 - 2)   # Subtraction → 8
        print(4 * 7)    # Multiplication → 28
        print(20 / 5)   # Division → 4.0
        print(2 ** 3)   # Exponentiation (2 to the 3rd power) → 8
        print(10 % 3)   # Modulus (remainder of 10 ÷ 3) → 1
        </code></pre>

        <p><strong>Try it:</strong> Change the numbers and see what new answers you get! Can you create a math equation that equals 100? </p>

        <h3>Real-World Examples</h3>
        <ul>
          <li>Adding points to a game score </li>
          <li>Subtracting health in a video game</li>
          <li>Calculating how much each person owes for pizza </li>
          <li>Raising something to a power, like in scientific formulas </li>
          <li>Checking if a number is even or odd with modulus (%)</li>
        </ul>

        <p><strong>Every time you use math in Python, you’re making your programs smarter and more powerful!</strong> </p>

        <h3> Order of Operations (PEMDAS)</h3>
        <p>Python follows the same math rules you learned in school—called PEMDAS:</p>

        <ul>
          <li><strong>P</strong>arentheses first <code>()</code></li>
          <li><strong>E</strong>xponents next <code>**</code></li>
          <li><strong>MD</strong> Multiplication/Division (left to right)</li>
          <li><strong>AS</strong> Addition/Subtraction (left to right)</li>
        </ul>

        <pre><code>
        print(5 + 2 * 3)      # 5 + (2 * 3) → 11
        print((5 + 2) * 3)    # (5 + 2) * 3 → 21
        </code></pre>

        <p><strong>Try it:</strong> Write your own math problems using parentheses to change the order!</p>

        <h3>Quick Summary</h3>
        <ul>
          <li><strong>+</strong> Add two numbers together</li>
          <li><strong>-</strong> Subtract one number from another</li>
          <li><strong>*</strong> Multiply two numbers</li>
          <li><strong>/</strong> Divide one number by another</li>
          <li><strong>**</strong> Raise a number to a power</li>
          <li><strong>%</strong> Find the remainder after division</li>
        </ul>

        <p>Whether you're calculating points, powers, or pizzas, Python math helps your programs do the thinking for you!</p>

        <h3> Challenge: Mini Math Game!</h3>
        <p>Write a small program that prints out:</p>
        <ul>
          <li>Your favorite number multiplied by 5</li>
          <li>Your age divided by 2</li>
          <li>2 raised to the power of 4</li>
        </ul>

        <pre><code>
        # Example
        print(7 * 5)
        print(14 / 2)
        print(2 ** 4)
        </code></pre>`,
      },
      {
        id: "2.3",
        title: "2.3 String Manipulation and Concatenation",
        content: `
        <h2>String Manipulation and Concatenation</h2>

         <p>Imagine you’re designing your own texting app, writing a game story, or building a profile page. You’ll need to know how to <strong>work with text</strong>—and in Python, text is called a <strong>string</strong>!</p>

          <p>Today, you’ll learn how to combine strings, edit them, and make your programs way more fun and interactive! </p>

          <h3>➕ What is String Concatenation?</h3>

          <p><strong>Concatenation</strong> (say it: "con-cat-en-ay-shun") is just a fancy word for <strong>joining strings together</strong>. You can combine words, names, or sentences using the <code>+</code> symbol.</p>

          <pre><code>
          first_name = "Alex"
          last_name = "Rivera"
          full_name = first_name + " " + last_name
          print(full_name)
          </code></pre>

          <p><strong>Try it:</strong> Create a full name, your dream city name, or even a silly combo of two animals!</p>

          <h3>Adding Extra Text</h3>
          <p>You can also mix text and variables together:</p>

          <pre><code>
          name = "Taylor"
          print("Hello, " + name + "! Welcome to the game!")
          </code></pre>

          <p>This prints: <strong>Hello, Taylor! Welcome to the game!</strong></p>

          <p><strong>Try it:</strong> Personalize a greeting for yourself or a friend!</p>

          <h3>Important Tip: Only Strings Can Be Joined</h3>

          <p>Python needs everything you’re adding to be a string. If you try to mix numbers and text directly, you'll get an error. But don’t worry—you can <code>str()</code> (stringify) numbers!</p>

          <pre><code>
          age = 14
          print("I am " + str(age) + " years old.")
          </code></pre>

          <p><strong>Try it:</strong> Print your name and age in one sentence!</p>

          <h3> Other String Tricks</h3>

          <p>Besides joining strings, you can also change how they look!</p>

          <ul>
            <li><code>.upper()</code> → Makes everything uppercase</li>
            <li><code>.lower()</code> → Makes everything lowercase</li>
            <li><code>.title()</code> → Capitalizes the first letter of each word</li>
          </ul>

          <pre><code>
          greeting = "hello there"
          print(greeting.upper())   # "HELLO THERE"
          print(greeting.lower())   # "hello there"
          print(greeting.title())   # "Hello There"
          </code></pre>

          <p><strong>Try it:</strong> Take your name or favorite movie title and print it in all three styles!</p>

          <h3> Real-World Examples</h3>
          <ul>
            <li>Joining a first and last name on a profile page </li>
            <li>Customizing welcome messages in games</li>
            <li>Formatting usernames to make sure they follow the rules </li>
          </ul>

          <p><strong>Every time you master a new string skill, you're leveling up your coding powers!</strong></p>

          <h3>Quick Summary</h3>
          <ul>
            <li><strong>+</strong> joins strings together (concatenation)</li>
            <li><strong>str()</strong> turns numbers into strings</li>
            <li><strong>.upper()</strong>, <strong>.lower()</strong>, and <strong>.title()</strong> change how strings look</li>
          </ul>

          <h3> Challenge: Create Your Own Story!</h3>
          <p>Write a short program that:</p>
          <ul>
            <li>Asks for a user's name and favorite animal</li>
            <li>Then prints a silly sentence using both!</li>
          </ul>

          <pre><code>
          name = input("What is your name? ")
          animal = input("What’s your favorite animal? ")

          print(name + " once rode a giant " + animal + " across the city!")
          </code></pre>


    <p><strong>You’re not just learning to code—you’re learning how to tell stories with Python! </strong></p>`,
      },
      {
        id: "2.4",
        title: "2.4 Type Conversions and best practices",
        content: `
            <h2>Type Conversions and Best Practices</h2>

    <p>Imagine you're building a quiz game where players type their answers, or an online store where users enter how many items they want. In Python, user input always comes in as <strong>text (strings)</strong> — even if they type a number!</p>

    <p>That’s where <strong>type conversion</strong> comes in. Type conversion means <strong>changing one data type into another</strong> so your program works the way you want. </p>

    <h3>Common Type Conversions</h3>

    <ul>
      <li><strong>int()</strong> → Converts a string into an integer (whole number)</li>
      <li><strong>float()</strong> → Converts a string into a float (decimal number)</li>
      <li><strong>str()</strong> → Converts a number or boolean into a string (text)</li>
    </ul>

    <pre><code>
    # Example: Turning a string into a number
    age = input("How old are you? ")  # age is a string
    age = int(age)                   # now it's an integer
    print(age + 1)
    </code></pre>

    <p><strong>Try it:</strong> Ask for a number, turn it into a float, and multiply it by 2!</p>

    <h3>Why Type Conversion Matters</h3>

    <p>If you don’t convert when needed, your program might crash—or even worse, behave strangely!</p>

    <pre><code>
    # This causes an error:
    birth_year = input("What year were you born? ")
    print(2025 - birth_year)  # error! birth_year is a string

    # Correct way:
    birth_year = int(input("What year were you born? "))
    print(2025 - birth_year)
    </code></pre>

    <p><strong>Try it:</strong> Fix a mistake where you accidentally treat text like a number!</p>

    <h3>Real-World Examples</h3>
    <ul>
      <li>Converting a price from text into a number before doing calculations</li>
      <li>Turning a score into a string to show it in a message</li>
      <li>Changing user input into numbers to compare, add, or divide them </li>
    </ul>

    <p><strong>Whenever you mix text, numbers, and user input, smart type conversions make your programs powerful and professional!</strong></p>

    <h3>Quick Summary</h3>
    <ul>
      <li><strong>Use int()</strong> when you need whole numbers</li>
      <li><strong>Use float()</strong> when you need decimal numbers</li>
      <li><strong>Use str()</strong> when you need text for printing</li>
    </ul>

    <h3>Best Practices for Beginners</h3>
    <ul>
      <li><strong>Always check</strong> if you need to convert input from <code>input()</code>.</li>
      <li><strong>Use clear variable names</strong> like <code>user_age</code> instead of just <code>age</code>.</li>
      <li><strong>Test your conversions</strong> by printing the type if you're unsure:</li>
    </ul>

    <pre><code>
    user_input = input("Enter a number: ")
    print(type(user_input))  # Tells you if it's a string, int, float, etc.
    </code></pre>

    <h3>Challenge: Magic Number Calculator!</h3>
    <p>Write a program that:</p>
    <ul>
      <li>Asks the user for their favorite number</li>
      <li>Converts it into an integer</li>
      <li>Multiplies it by 7</li>
      <li>Prints the magic result!</li>
    </ul>

    <pre><code>
    # Example
    fav_number = input("What is your favorite number? ")
    fav_number = int(fav_number)
    print("Your magic number is:", fav_number * 7)
    </code></pre>

    <p><strong>Bonus:</strong> Try asking for a decimal number and using <code>float()</code> instead of <code>int()</code>!</p>

    <p><strong>You're not just learning to code—you’re learning how to think like a real software engineer! </strong></p>`,
      },
    ],
    quiz: [
      {
        question:
          "What keyword is used for an alternative condition in Python?",
        options: ["elseif", "else if", "elif", "else"],
        correctAnswer: "elif",
      },
      {
        question: 'What will this print?\n\nif 5 > 3:\n    print("Yes")',
        options: ["Nothing", "Error", "No", "Yes"],
        correctAnswer: "Yes",
      },
      {
        question: "What is the result of this expression?\n\n5 + 3 * 2",
        options: ["16", "11", "13", "10"],
        correctAnswer: "11",
      },
      {
        question: "Which data type would you use for True or False values?",
        options: ["Integer", "Float", "Boolean", "String"],
        correctAnswer: "Boolean",
      },
      {
        question: "Which symbol is used to check if two values are equal?",
        options: ["=", "==", "!=", ">="],
        correctAnswer: "==",
      },
      {
        question: "What will this print?\n\nprint(3 > 7)",
        options: ["True", "False", "Error", "None"],
        correctAnswer: "False",
      },
      {
        question: 'What does this print?\n\nprint("5" + "3")',
        options: ["8", "53", "Error", "5 3"],
        correctAnswer: "53",
      },
      {
        question: "Which of these is an example of a string in Python?",
        options: ["5", '"5"', "True", "5.0"],
        correctAnswer: '"5"',
      },
    ],
  },
  unit3: {
    title: "Unit 3: Conditional Statements",
    lessons: [
      {
        id: "3.1",
        title: "3.1 Introduction to if-else Statements",
        content: `
        <h2>Helping Kiki Make After-School Decisions</h2>
       <div style="text-align: center;">
  <img 
    src="/assets/kiki.png" 
    alt="Kiki" 
    style="max-width: 50%; margin: 0 auto; display: block; object-fit: contain;" />
</div>

<p>Imagine you're helping Kiki after school: if she's tired, she goes home; if she's not tired, she hangs out with her best friend!</p>

<p>In Python, you can make your program make <strong>decisions</strong> using <strong>if-else statements</strong>. It’s how your code asks questions and chooses what to do based on the answers!</p>

<h3> What is an if-else Statement?</h3>

<p>An <code>if</code> statement checks if something is true. If it is, the program runs one block of code. If not, it runs a different block using <code>else</code>.</p>

<pre><code>
is_tired = True

if is_tired:
    print("Kiki goes home to relax.")
else:
    print("Kiki meets up with her best friend!")
</code></pre>

<p>In this example, if <code>is_tired</code> is <code>True</code>, Kiki goes home. Otherwise, she hangs out with her friend! </p>

<p><strong>Try it:</strong> Change <code>is_tired</code> to <code>False</code> and see what Kiki does!</p>

<h3> Real-World Examples of if-else</h3>
<ul>
  <li>Choosing what game character does next based on health points</li>
  <li>Sending users different messages depending on their answers </li>
  <li>Deciding what menu to show based on time of day </li>
</ul>

<p><strong>Every time you use if-else, you’re making your programs smarter and more interactive—just like helping Kiki pick her next adventure! </strong></p>

<h3> A Closer Look at the Structure</h3>
<ul>
  <li>Use <strong>if</strong> to check a condition</li>
  <li>Put a colon <code>:</code> at the end of the <code>if</code> line</li>
  <li>Indent the next line (use a tab or 4 spaces) to show what happens if it’s true</li>
  <li>Use <strong>else</strong> for what to do if it’s not true (with its own colon!)</li>
</ul>

<pre><code>
is_tired = False

if is_tired:
    print("Kiki stays home and rests.")
else:
    print("Kiki and her bestie go grab coffee!")
</code></pre>

<p><strong>Try it:</strong> Change the value of <code>is_tired</code> and imagine how Kiki’s after-school adventure changes!</p>

<h3>Quick Summary</h3>
<ul>
  <li><code>if</code> checks a condition</li>
  <li><code>else</code> gives an alternative action if the condition isn’t true</li>
  <li>Indent your blocks (Python uses indentation to group actions)</li>
</ul>

<h3>Challenge: Help Kiki Choose Her Activity!</h3>
<p>Write a program that:</p>
<ul>
  <li>Asks the user if Kiki is tired (yes or no)</li>
  <li>If yes, print "Kiki goes home and either naps or watches Netflix."</li>
  <li>If no, print "Kiki hangs out with her best friend and either plays soccer or goes to a coffee shop." </li>
</ul>

<pre><code>
is_tired = input("Is Kiki tired? (yes or no) ")

if is_tired.lower() == "yes":
    print("Kiki goes home and can take a nap or watch Netflix!")
else:
    print("Kiki meets her bestie to play soccer or visit a coffee shop! ☕")
</code></pre>

<p><strong>Bonus:</strong> Ask the user to pick Kiki's exact choice—nap, Netflix, soccer, or coffee—and print a special message based on what they pick!</p>`,
      },
      {
        id: "3.2",
        title: "3.2 Nested Conditionals and Logical Operators",
        content: `
        <h2>Nested Conditionals and Logical Operators</h2>

<p>Sometimes one question isn’t enough—you might need to check several things before making a decision. For example: "If it’s sunny <em>and</em> I have sunglasses, then I’ll go outside."</p>

<p>That’s where <strong>nested conditionals</strong> and <strong>logical operators</strong> come in!</p>

<h3>What are Nested Conditionals?</h3>

<p><strong>Nested conditionals</strong> are when you put one <code>if</code> statement <em>inside</em> another. It’s like making a second decision only if the first one is true.</p>

<pre><code>
score = 90

if score >= 60:
    print("You passed the class!")
    if score >= 90:
        print("You got an A! ")
else:
    print("Keep trying—you can do it!")
</code></pre>

<p>First, Python checks if you passed. If you did, it checks if you got an A.</p>

<p><strong>Try it:</strong> Change the score and see what prints!</p>

<h3>What are Logical Operators?</h3>

<p><strong>Logical operators</strong> help you check more than one condition at the same time. Here are the three big ones:</p>

<ul>
  <li><strong>and</strong> → both conditions must be true</li>
  <li><strong>or</strong> → at least one condition must be true</li>
  <li><strong>not</strong> → flips true to false, or false to true</li>
</ul>

<pre><code>
# Example 1: and
age = 16
has_ticket = True

if age >= 15 and has_ticket:
    print("You can watch the movie!")
else:
    print("Sorry, you can't watch it yet.")

# Example 2: or
day = "Saturday"

if day == "Saturday" or day == "Sunday":
    print("It's the weekend! ")
else:
    print("Time for school or work.")

# Example 3: not
is_raining = False

if not is_raining:
    print("Let's go outside!")
else:
    print("Better grab an umbrella. ☔")
</code></pre>

<p><strong>Try it:</strong> Change the variables and try different conditions!</p>

<h3>Real-World Examples</h3>
<ul>
  <li>Checking if a player won AND has lives left</li>
  <li>Making sure someone is logged in OR signed up</li>
  <li>Flipping a setting ON/OFF using <code>not</code></li>
</ul>

<p><strong>Using nested conditionals and logical operators makes your programs <em>way smarter</em> and more realistic!</strong></p>

<h3>Quick Summary</h3>
<ul>
  <li><strong>Nested ifs</strong> = an if statement inside another if</li>
  <li><strong>and</strong> = both conditions must be true</li>
  <li><strong>or</strong> = either condition can be true</li>
  <li><strong>not</strong> = flips True/False</li>
</ul>

<h3>Challenge: Theme Park Adventure!</h3>
<p>Write a program that:</p>
<ul>
  <li>Asks the user's age and if they have a fast pass (yes or no)</li>
  <li>If they are over 12 <em>and</em> have a fast pass, print "You can skip the line!"</li>
  <li>If only one is true, print "Almost ready—just one more step!" </li>
  <li>Otherwise, print "Please check the rules and try again."</li>
</ul>

<pre><code>
age = int(input("How old are you? "))
fast_pass = input("Do you have a fast pass? (yes or no) ")

if age > 12 and fast_pass.lower() == "yes":
    print("You can skip the line!")
elif age > 12 or fast_pass.lower() == "yes":
    print("Almost ready—just one more step!")
else:
    print("Please check the rules and try again.")
</code></pre>

<p><strong>Bonus:</strong> Try adding <code>not</code> to flip a condition, like "if not fast_pass == 'yes'"!</p>

<p><strong>You're building programs that can think through real-life situations!  Keep going—you’re becoming a decision-making pro!</strong></p>`,
      },
      {
        id: "3.3",
        title: "3.3 Writing programs that make decisions",
        content: `
        <h2>Writing Programs That Make Decisions</h2>

<p>So far, you’ve learned how to use <code>if</code>, <code>else</code>, <code>and</code>, <code>or</code>, and <code>not</code>. Now it’s time to put everything together!</p>

<p><strong>Decision-making</strong> is what makes a program feel smart and interactive—like a game that reacts to your moves or an app that helps you based on your answers.</p>

<p>Without decisions, programs would just do the same thing every time. Boring! With decisions, your programs can change, adapt, and surprise people!</p>

<h3> How Programs Make Decisions</h3>

<p>At the heart of every decision-making program are these steps:</p>
<ol>
  <li><strong>Ask a question</strong> (check a condition)</li>
  <li><strong>Choose a path</strong> based on the answer</li>
  <li><strong>Do something</strong> depending on which path you take</li>
</ol>

<p>Here’s a simple example:</p>

<pre><code>
score = int(input("Enter your quiz score: "))

if score >= 70:
    print("You passed!")
else:
    print("Don't worry—you can try again!")
</code></pre>

<p><strong>Try it:</strong> Change the passing score and create a new message for 90 and above!</p>

<h3>Building Multi-Path Programs</h3>

<p>Sometimes you need more than just <code>if</code> and <code>else</code>. You can use <code>elif</code> (short for "else if") to create more choices!</p>

<pre><code>
temperature = int(input("What's the temperature outside? "))

if temperature > 85:
    print("It's hot! Wear sunglasses.")
elif temperature > 60:
    print("Nice and warm! Perfect for a walk.")
else:
    print("Brrr! Grab a jacket.")
</code></pre>

<p><strong>Try it:</strong> Add a new message for when it’s freezing (below 32 degrees)!</p>

<h3>Real-World Examples of Decision-Making Programs</h3>
<ul>
  <li>Deciding which screen to show in a game based on a player’s score</li>
  <li>Recommending songs based on mood</li>
  <li>Suggesting outfits based on weather </li>
  <li>Checking if users have the right password to log in</li>
</ul>

<p><strong>Every app you use—from games to shopping sites—uses decision-making code behind the scenes!</strong> 🛒🎶</p>

<h3>Quick Summary</h3>
<ul>
  <li>Use <code>if</code> to check a condition</li>
  <li>Use <code>elif</code> for extra options</li>
  <li>Use <code>else</code> for the final "everything else" case</li>
  <li>Use <code>and</code>, <code>or</code>, <code>not</code> to combine conditions</li>
</ul>

<h3> Challenge: Build Your Own Adventure Chooser!</h3>
<p>Write a program that:</p>
<ul>
  <li>Asks if the user wants to go to the beach, mountains, or city</li>
  <li>Prints a special message for each choice!</li>
  <li>If they type something else, print "Hmm, that's an interesting choice!"</li>
</ul>

<pre><code>
# Example
place = input("Where do you want to go? (beach/mountains/city) ").lower()

if place == "beach":
    print("Grab your swimsuit!")
elif place == "mountains":
    print("Pack your hiking boots!")
elif place == "city":
    print("Get ready for bright lights and big adventures!")
else:
    print("Hmm, that's an interesting choice!")
</code></pre>

<p><strong>Bonus:</strong> Add another layer of decision! If they choose "beach," ask if they want to swim or build sandcastles!</p>

<p><strong>You're not just coding—you’re writing programs that think, react, and adapt!</strong></p>`,
      },
    ],
    quiz: [
      {
        question: "Which data type stores values in key-value pairs?",
        options: ["List", "Tuple", "Set", "Dictionary"],
        correctAnswer: "Dictionary",
      },
      {
        question:
          "How do you access the first element in a list called `colors`?",
        options: ["colors[1]", "colors(0)", "colors[0]", "colors.first"],
        correctAnswer: "colors[0]",
      },
      {
        question: "Which of these is an immutable type?",
        options: ["List", "Set", "Dictionary", "Tuple"],
        correctAnswer: "Tuple",
      },
      {
        question: "Which of these will create a set with 3 elements?",
        options: [
          "{1, 2, 3}",
          "[1, 2, 3]",
          "(1, 2, 3)",
          "{1: 'one', 2: 'two', 3: 'three'}",
        ],
        correctAnswer: "{1, 2, 3}",
      },
      {
        question: "What happens if you try to modify a tuple?",
        options: [
          "It changes successfully",
          "It raises an error",
          "It adds a new item",
          "It deletes an item",
        ],
        correctAnswer: "It raises an error",
      },
      {
        question: "Which method adds an item to a list?",
        options: ["add()", "insert()", "append()", "push()"],
        correctAnswer: "append()",
      },
      {
        question: "What will this print?\n\nprint(len([10, 20, 30]))",
        options: ["2", "3", "30", "None"],
        correctAnswer: "3",
      },
      {
        question: "Which is the correct way to create an empty dictionary?",
        options: ["[]", "()", "{}", "dict()"],
        correctAnswer: "dict()",
      },
    ],
  },
  unit4: {
    title: "Unit 4: Loops",
    lessons: [
      {
        id: "4.1",
        title: "4.1 For and While Loops",
        content: `
        <h2>For and While Loops</h2>

<p>Have you ever wanted to do something over and over again without typing the same line a hundred times? Like printing a countdown before a rocket launch?</p>

<p>That’s where <strong>loops</strong> come in! Loops let your programs <strong>repeat actions automatically</strong>—saving time, making things faster, and adding lots of power to your code. </p>

<h3> What is a Loop?</h3>
<div style="text-align: center;">
      <img 
        src="/assets/hamster.png" 
        alt="Hamster on a wheel" 
        style="max-width: 50%; margin: 0; padding: 0; object-fit: contain;"/>
        </div>
        <p style="text-align: center;"><em>Just like a hamster running on a wheel over and over again, loops in Python let you repeat actions automatically!</em></p>
<p>A <strong>loop</strong> is a way to repeat a block of code multiple times. Python has two main types:</p>
<ul>
  <li><strong>for loops</strong> — repeat a certain number of times</li>
  <li><strong>while loops</strong> — repeat as long as a condition is true</li>
</ul>

<h3>For Loops: Repeat a Set Number of Times</h3>

<p>A <code>for</code> loop repeats for each item in a sequence, like a list of numbers or a range.</p>

<pre><code>
for number in range(5):
    print(number)
</code></pre>

<p>This prints:</p>
<ul>
  <li>0</li>
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
</ul>

<p><strong>Try it:</strong> Change the number inside <code>range()</code> and see how many times it loops!</p>

<h3>While Loops: Repeat Until Something Changes</h3>

<p>A <code>while</code> loop keeps repeating as long as a condition is true. It's like saying, "Keep playing until the timer runs out!"</p>

<pre><code>
count = 0

while count < 5:
    print(count)
    count = count + 1
</code></pre>

<p>This also prints 0 to 4. Notice how we manually increased <code>count</code> to eventually end the loop!</p>

<p><strong>Try it:</strong> Make a while loop that counts by twos or counts down!</p>

<h3> Real-World Examples of Loops</h3>
<ul>
  <li>Looping through all levels of a video game</li>
  <li>Repeating a login attempt if the password is wrong</li>
  <li>Displaying every message in a chat app</li>
  <li>Counting how many steps it takes to solve a puzzle</li>
</ul>

<p><strong>Without loops, your programs would get tired of typing the same things again and again—just like you would!</strong> </p>

<h3>Quick Summary</h3>
<ul>
  <li><strong>for loops</strong> → repeat a set number of times</li>
  <li><strong>while loops</strong> → repeat until a condition is false</li>
  <li>Always make sure your <code>while</code> loops eventually stop (or they will loop forever!)</li>
</ul>

<h3> Challenge: Countdown to Launch!</h3>
<p>Write a program that:</p>
<ul>
  <li>Uses a <code>for</code> loop to count down from 5 to 1</li>
  <li>After reaching 1, prints "Blast off! "</li>
</ul>

<pre><code>
for number in range(5, 0, -1):
    print(number)
print("Blast off!")
</code></pre>

<p><strong>Bonus:</strong> Try creating a <code>while</code> loop version of the countdown too!</p>

<p><strong>You're not just telling Python what to do—you’re teaching it how to keep going until a mission is complete!</strong></p>`,
      },
      {
        id: "4.2",
        title: "4.2 Nested Loops and their applications",
        content: `
        <h2>Nested Loops and Their Applications</h2>

<p>Imagine you’re building a giant LEGO castle. You don’t just stack blocks in one row—you build rows <strong>and</strong> layers! That’s exactly what <strong>nested loops</strong> do in Python.</p>

<p><strong>Nested loops</strong> are when you put one loop inside another. They let your programs create grids, patterns, and even control more complex actions!</p>

<h3>What is a Nested Loop?</h3>

<p>A <strong>nested loop</strong> means you have a loop running <em>inside</em> another loop. The inner loop runs completely every time the outer loop runs once.</p>

<pre><code>
for i in range(3):          # Outer loop
    for j in range(2):      # Inner loop
        print(i, j)
</code></pre>

<p>This prints:</p>
<ul>
  <li>0 0</li>
  <li>0 1</li>
  <li>1 0</li>
  <li>1 1</li>
  <li>2 0</li>
  <li>2 1</li>
</ul>

<p>Notice how for each <code>i</code> value, the <code>j</code> loop runs from start to finish. </p>

<p><strong>Try it:</strong> Change the ranges and see how the number of prints changes!</p>

<h3>What Can You Build with Nested Loops?</h3>

<ul>
  <li>Draw grids and tables</li>
  <li>Build maps for video games</li>
  <li>Create rows and columns for a shopping website </li>
  <li>Loop through pixels to edit images </li>
</ul>

<p><strong>Nested loops give your programs "depth"—so you can handle bigger, more powerful tasks!</strong> </p>

<h3>How Nested Loops Work</h3>

<p>Think of it like:</p>
<ol>
  <li>Outer loop starts → Inner loop does all its work</li>
  <li>Outer loop moves one step → Inner loop runs again</li>
  <li>Repeat until all loops are done!</li>
</ol>

<p>It’s like making a box of chocolates where you put rows of candies across and up.</p>

<h3> Real-World Examples</h3>
<ul>
  <li>Making a calendar (weeks and days)</li>
  <li>Programming a robot to move across a grid </li>
  <li>Building levels for a video game with rooms and monsters! </li>
</ul>

<h3>Quick Summary</h3>
<ul>
  <li><strong>Outer loop</strong> controls the big steps</li>
  <li><strong>Inner loop</strong> handles all the tiny actions for each big step</li>
  <li>They work together to create rows, layers, grids, and patterns</li>
</ul>

<h3> Challenge: Create a Number Grid!</h3>
<p>Write a program that prints a small number grid like this:</p>

<pre>
1 2 3
1 2 3
1 2 3
</pre>

<p>Hint: Use a <code>for</code> loop inside another <code>for</code> loop!</p>

<pre><code>
for row in range(3):
    for num in range(1, 4):
        print(num, end=" ")
    print()  # Moves to the next line after a row is done
</code></pre>

<p><strong>Bonus:</strong> Change the grid size to 5 rows and 5 columns!</p>

<p><strong>You're not just coding—you’re designing blueprints for machines, games, and websites! Keep building!</strong></p>`,
      },
      {
        id: "4.3",
        title: "4.3 Using Loops for Automation and Efficiency",
        content: `
        <h2>Using Loops for Automation and Efficiency</h2>

<p>Imagine trying to send 100 thank-you emails one by one... Exhausting, right?</p>

<p>What if you could write one tiny loop—and let your code do all the work? That's the magic of <strong>automation</strong> and <strong>efficiency</strong> using loops! </p>

<h3>What is Automation?</h3>

<p><strong>Automation</strong> means getting your program to repeat tasks for you, without you doing all the boring stuff manually.</p>

<p>Loops help you automate anything that's repetitive—saving you tons of time and effort! </p>

<h3>Why Loops Make Code More Efficient</h3>

<p>Without loops, you'd have to copy and paste the same code over and over. With loops, you write it once and let Python repeat it for you!</p>

<pre><code>
# Without a loop
print("Welcome, user 1!")
print("Welcome, user 2!")
print("Welcome, user 3!")

# With a loop
for i in range(1, 4):
    print("Welcome, user", i)
</code></pre>

<p>One small loop = endless possibilities.</p>

<h3> Real-World Examples of Automation with Loops</h3>
<ul>
  <li>Sending welcome messages to new app users </li>
  <li>Checking thousands of files for viruses </li>
  <li>Scheduling posts on social media </li>
  <li>Powering leaderboards in games </li>
</ul>

<p><strong>Every big website, app, and game you use today runs thousands of loops behind the scenes!</strong></p>

<h3> Loops and Efficiency</h3>

<p>Here's how loops make your programs faster and cleaner:</p>
<ul>
  <li>They repeat actions without repeating your code</li>
  <li>They shrink your programs (less scrolling, easier to read!)</li>
  <li>They make updates super easy (you only change the loop once!)</li>
</ul>

<h3>Try it: Greeting a List of Names</h3>

<p>Suppose you want to say hi to a whole list of friends:</p>

<pre><code>
friends = ["Sam", "Taylor", "Jordan", "Alex"]

for friend in friends:
    print("Hello,", friend + "!")
</code></pre>

<p>One short loop says hi to everyone automatically. </p>

<h3>Quick Summary</h3>
<ul>
  <li><strong>Loops automate</strong> boring or repetitive tasks</li>
  <li><strong>Loops make your code faster</strong> to write, read, and fix</li>
  <li><strong>Automation saves time</strong> so you can build even cooler things!</li>
</ul>

<h3> Challenge: Create an Automatic Birthday Reminder!</h3>
<p>Write a program that:</p>
<ul>
  <li>Has a list of 5 friends' names</li>
  <li>Prints a reminder message for each friend's birthday </li>
</ul>

<pre><code>
birthdays = ["Sam", "Taylor", "Jordan", "Alex", "Jamie"]

for name in birthdays:
    print("Don't forget to wish", name, "a happy birthday!")
</code></pre>

<p><strong>Bonus:</strong> Try adding an exclamation point or a custom message for each friend!</p>

<p><strong>You're not just learning to code—you’re learning how to save time, boost your superpowers, and let Python work for you! </strong></p>`,
      },
    ],
    quiz: [
      {
        question: "What keyword is used to define a function in Python?",
        options: ["function", "define", "def", "fun"],
        correctAnswer: "def",
      },
      {
        question:
          'What is the value of `x` after this code runs?\n\n```python\nx = len("Hello")\n```',
        options: ["4", "5", '"Hello"', "Error"],
        correctAnswer: "5",
      },
      {
        question: "Where is a variable defined inside a function accessible?",
        options: [
          "Anywhere in the file",
          "Only inside the function",
          "Only outside the function",
          "It depends",
        ],
        correctAnswer: "Only inside the function",
      },
      {
        question:
          "What does a function return if there is no return statement?",
        options: ["0", "None", "Error", "True"],
        correctAnswer: "None",
      },
      {
        question: "What is the correct way to call a function named `greet`?",
        options: ["greet", "call greet()", "greet()", "function greet()"],
        correctAnswer: "greet()",
      },
      {
        question:
          "Which keyword do you use to get a value back from a function?",
        options: ["send", "return", "yield", "output"],
        correctAnswer: "return",
      },
      {
        question:
          "What will this code print?\n\n```python\ndef add(x, y):\n    return x + y\n\nprint(add(2, 3))\n```",
        options: ["5", "6", "23", "Error"],
        correctAnswer: "5",
      },
      {
        question: "Which of these is a correct function definition?",
        options: [
          "function greet():",
          "def greet[]:",
          "def greet():",
          "define greet()",
        ],
        correctAnswer: "def greet():",
      },
    ],
  },
  unit5: {
    title: "Unit 5: Data Structures",
    lessons: [
      {
        id: "5.1",
        title:
          "5.1 Introduction to lists: Indexing, Slicing, and Modifying Elements",
        content: `
        <h2>Introduction to Lists: Indexing, Slicing, and Modifying Elements</h2>

<p>Imagine you’re packing for a trip—you grab clothes, shoes, snacks, and your favorite book. Instead of carrying everything separately, you toss it all into one suitcase. </p>

<p>In Python, that suitcase is called a <strong>list</strong> — a way to store lots of information in one place!</p>

<h3> What is a List?</h3>

<p>A <strong>list</strong> is a collection of items, written inside square brackets <code>[]</code>. Lists can store anything: words, numbers, even other lists!</p>

<pre><code>
my_list = ["shoes", "shirt", "snacks", "book"]
print(my_list)
</code></pre>

<p>Lists keep things organized, easy to find, and easy to change.</p>

<h3>Indexing: Finding an Item</h3>

<p>Each item in a list has a number called an <strong>index</strong>, starting from 0 (not 1!).</p>

<pre><code>
print(my_list[0])   # "shoes"
print(my_list[2])   # "snacks"
</code></pre>

<p><strong>Try it:</strong> Print different items from the list by changing the index!</p>

<h3> Slicing: Grabbing a Chunk</h3>

<p>Sometimes you don’t want just one item—you want a piece of the list. <strong>Slicing</strong> lets you grab a chunk!</p>

<pre><code>
print(my_list[1:3])  # ["shirt", "snacks"]
</code></pre>

<p><strong>How slicing works:</strong></p>
<ul>
  <li>The first number is where you start (included)</li>
  <li>The second number is where you stop (not included)</li>
</ul>

<p><strong>Try it:</strong> Slice your list to grab different sections!</p>

<h3> Modifying Elements</h3>

<p>Lists are super flexible—you can change any item by using its index!</p>

<pre><code>
my_list[0] = "sneakers"
print(my_list)
</code></pre>

<p>Now the list will show <code>["sneakers", "shirt", "snacks", "book"]</code>.</p>

<p><strong>Try it:</strong> Update something in your list to a new favorite item!</p>

<h3> Real-World Examples of Lists</h3>
<ul>
  <li>Shopping carts on websites</li>
  <li>Music playlists</li>
  <li>To-do lists </li>
  <li>Tracking players in a multiplayer game</li>
</ul>

<p><strong>Any time you have a "bunch of stuff," a list is probably helping organize it!</strong></p>

<h3>Quick Summary</h3>
<ul>
  <li><strong>Lists</strong> store multiple items in one place</li>
  <li><strong>Indexing</strong> grabs a specific item (starting at 0)</li>
  <li><strong>Slicing</strong> grabs a chunk of the list</li>
  <li><strong>Modifying</strong> lets you change any item</li>
</ul>

<h3> Challenge: Create Your Dream Backpack!</h3>
<p>Write a program that:</p>
<ul>
  <li>Creates a list with 5 items you would pack for an adventure</li>
  <li>Prints the entire list</li>
  <li>Prints just the second and third items (using slicing)</li>
  <li>Changes one item (maybe swap "hat" for "sunglasses")</li>
</ul>

<pre><code>
backpack = ["water bottle", "snacks", "jacket", "map", "hat"]

print(backpack)          # Print everything
print(backpack[1:3])      # Print second and third items
backpack[4] = "sunglasses" # Change "hat" to "sunglasses"
print(backpack)          # Print updated list
</code></pre>

<p><strong>Bonus:</strong> Try printing the first three items using slicing!</p>`,
      },
      {
        id: "5.2",
        title: "5.2 Tuples and their Immutability",
        content: `
        <h2>Tuples and Their Immutability</h2>

<p>Imagine you’re making a list of your birthday—your birth month, day, and year. Once that information is set, it never changes! (You can't suddenly be born on a different day!)</p>

<p>In Python, when you want a collection of items that should <strong>never change</strong>, you use a <strong>tuple</strong>.</p>

<h3> What is a Tuple?</h3>

<p>A <strong>tuple</strong> is like a list, but once you create it, you can't change it. It’s <strong>immutable</strong>—which means "unchangeable."</p>

<p>Tuples are written with <strong>parentheses <code>()</code></strong> instead of square brackets <code>[]</code>.</p>

<pre><code>
birthday = ("March", 14, 2010)
print(birthday)
</code></pre>

<p><strong>Try it:</strong> Create a tuple with your own birthday or a favorite date!</p>

<h3>Tuples Can't Be Changed</h3>

<p>Once a tuple is created, you can’t add, remove, or change its items. If you try, Python will show an error!</p>

<pre><code>
birthday[0] = "April"  #  Error! Tuples can't be changed!
</code></pre>

<p><strong>Why is this useful?</strong> Some information should stay the same forever. Tuples help protect important data! 🔒</p>

<h3> Indexing and Slicing with Tuples</h3>

<p>You can still <strong>access</strong> items inside a tuple the same way you do with lists:</p>

<pre><code>
print(birthday[0])    # "March"
print(birthday[1:])   # (14, 2010)
</code></pre>

<p><strong>Try it:</strong> Slice your tuple to grab different parts!</p>

<h3> Real-World Examples of Tuples</h3>
<ul>
  <li>Storing GPS coordinates (latitude, longitude) </li>
  <li>Saving settings that should never change </li>
  <li>Holding pairs of values in games, like player starting positions</li>
</ul>

<p><strong>Whenever you want to lock information and make sure it stays safe, tuples are your best friend!</strong></p>

<h3>Quick Summary</h3>
<ul>
  <li><strong>Tuples</strong> are like lists, but <strong>immutable</strong> (cannot be changed)</li>
  <li>Use <code>()</code> parentheses to create them</li>
  <li>Still use indexing and slicing to read items</li>
</ul>

<h3> Challenge: Create a Favorite Things Tuple!</h3>
<p>Write a program that:</p>
<ul>
  <li>Creates a tuple with 4 of your favorite things (food, color, sport, animal)</li>
  <li>Prints the whole tuple</li>
  <li>Prints just the second and third favorite things (using slicing)</li>
</ul>

<pre><code>
favorites = ("pizza", "blue", "soccer", "dog")

print(favorites)       # Print everything
print(favorites[1:3])   # Print second and third items
</code></pre>

<p><strong>Bonus:</strong> Try making a second tuple for your best friend's favorites and print both!</p>`,
      },
      {
        id: "5.3",
        title: "5.3 Understanding Sets and Set Operations",
        content: `
        <h2>Understanding Sets and Set Operations</h2>

<p>Imagine you're trading Pokémon cards with your friends. You want to know which cards you have, which ones your friend has, and which ones you both have in common. </p>

<p>Python has a perfect tool for this: <strong>sets</strong>!</p>

<h3>What is a Set?</h3>

<p>A <strong>set</strong> is a collection of unique items. That means no duplicates are allowed! Sets are written with <strong>curly braces <code>{}</code></strong>.</p>

<pre><code>
my_cards = {"Pikachu", "Charizard", "Bulbasaur"}
print(my_cards)
</code></pre>

<p><strong>Try it:</strong> Create your own set with your favorite foods, movies, or characters!</p>

<h3> No Duplicates Allowed</h3>

<p>If you accidentally add the same item twice, Python will automatically remove the extra copy.</p>

<pre><code>
my_cards = {"Pikachu", "Charizard", "Pikachu"}
print(my_cards)  # Only one "Pikachu" will appear
</code></pre>

<h3>Why Use Sets?</h3>

<p>Sets are great when you need to:</p>
<ul>
  <li>Store unique items only</li>
  <li>Quickly check if something exists</li>
  <li>Compare two groups easily</li>
</ul>

<h3> Common Set Operations</h3>

<p>Here are some awesome things you can do with sets:</p>

<ul>
  <li><strong>Union</strong> (<code>|</code>): Combine two sets</li>
  <li><strong>Intersection</strong> (<code>&</code>): Find what’s in both sets</li>
  <li><strong>Difference</strong> (<code>-</code>): Find what’s in one set but not the other</li>
</ul>

<pre><code>
my_cards = {"Pikachu", "Charizard", "Bulbasaur"}
friend_cards = {"Charizard", "Squirtle", "Eevee"}

# Union
print(my_cards | friend_cards)  
# {'Pikachu', 'Charizard', 'Bulbasaur', 'Squirtle', 'Eevee'}

# Intersection
print(my_cards & friend_cards)  
# {'Charizard'}

# Difference
print(my_cards - friend_cards)  
# {'Pikachu', 'Bulbasaur'}
</code></pre>

<p><strong>Try it:</strong> Create your own sets and find union, intersection, and difference!</p>

<h3> Real-World Examples of Sets</h3>
<ul>
  <li>Tracking users who signed up for an event (no duplicates) </li>
  <li>Finding mutual friends on social media </li>
  <li>Building a unique list of songs a user has played </li>
  <li>Making a leaderboard with no repeated winners </li>
</ul>

<p><strong>Sets help your programs stay clean, fast, and smart when handling collections of items!</strong></p>

<h3>Quick Summary</h3>
<ul>
  <li><strong>Sets</strong> store unique items (no duplicates)</li>
  <li><strong>Union</strong> combines sets</li>
  <li><strong>Intersection</strong> finds what's shared</li>
  <li><strong>Difference</strong> finds what's unique to one set</li>
</ul>

<h3> Challenge: Create a Superhero Team Roster!</h3>
<p>Write a program that:</p>
<ul>
  <li>Creates a set of your favorite superheroes</li>
  <li>Creates a set of your friend's favorite superheroes</li>
  <li>Prints:
    <ul>
      <li>All heroes combined (union)</li>
      <li>Heroes you both like (intersection)</li>
      <li>Heroes only you picked (difference)</li>
    </ul>
  </li>
</ul>

<pre><code>
my_heroes = {"Spider-Man", "Wonder Woman", "Batman"}
friend_heroes = {"Batman", "Iron Man", "Captain Marvel"}

print("All heroes:", my_heroes | friend_heroes)
print("Heroes we both like:", my_heroes & friend_heroes)
print("Heroes only I picked:", my_heroes - friend_heroes)
</code></pre>

<p><strong>Bonus:</strong> Try using a different theme, like favorite animals, foods, or sports!</p>

<p><strong>You’re not just collecting information—you’re learning how to organize, compare, and power up your programs! Keep going!</strong></p>`,
      },
    ],
    quiz: [
      {
        question: "Which data type stores values in key-value pairs?",
        options: ["List", "Tuple", "Set", "Dictionary"],
        correctAnswer: "Dictionary",
      },
      {
        question:
          "How do you access the first element in a list called `colors`?",
        options: ["colors[1]", "colors(0)", "colors[0]", "colors.first"],
        correctAnswer: "colors[0]",
      },
      {
        question: "Which of these is an immutable type?",
        options: ["List", "Set", "Dictionary", "Tuple"],
        correctAnswer: "Tuple",
      },
      {
        question: "Which method adds an item to a list?",
        options: ["add()", "push()", "append()", "insert()"],
        correctAnswer: "append()",
      },
      {
        question:
          "Which of these data types automatically removes duplicate values?",
        options: ["List", "Tuple", "Set", "Dictionary"],
        correctAnswer: "Set",
      },
      {
        question: "How do you create an empty list?",
        options: ["[]", "()", "{}", "empty()"],
        correctAnswer: "[]",
      },
      {
        question: "Which syntax correctly defines a tuple with three items?",
        options: ["(1, 2, 3)", "[1, 2, 3]", "{1, 2, 3}", "1, 2, 3"],
        correctAnswer: "(1, 2, 3)",
      },
      {
        question:
          "What will this print?\n\n```python\nmy_list = [10, 20, 30]\nprint(len(my_list))\n```",
        options: ["2", "3", "30", "Error"],
        correctAnswer: "3",
      },
    ],
  },
  unit6: {
    title: "Unit 6: Functions",
    lessons: [
      {
        id: "6.1",
        title: "6.1 Defining and Calling Functions",
        content: `
        <h2>Defining and Calling Functions</h2>

<p>Imagine every time you wanted to make a sandwich, you had to explain every single step again. Exhausting, right?</p>

<p>What if you could just say, "Make a sandwich!" and all the steps happened automatically?</p>

<p>That's exactly what <strong>functions</strong> do in Python—they let you package code once and use it anytime you want!</p>

<h3> What is a Function?</h3>

<p>A <strong>function</strong> is a reusable block of code that performs a specific task. You can "call" it whenever you need it—no retyping required!</p>

<h3> How to Define a Function</h3>

<p>Use the <code>def</code> keyword to <strong>define</strong> a function, give it a name, and write what it should do inside.</p>

<pre><code>
def greet():
    print("Hello, world!")
</code></pre>

<p><strong>Try it:</strong> Define your own simple function that says hi!</p>

<h3>📞 How to Call a Function</h3>

<p>Once a function is defined, you can <strong>call</strong> it by using its name followed by parentheses <code>()</code>.</p>

<pre><code>
greet()
</code></pre>

<p>This tells Python, "Hey! Run the <code>greet</code> function now!" </p>

<h3> Why Use Functions?</h3>

<ul>
  <li>They make your code <strong>organized</strong></li>
  <li>They make it <strong>reusable</strong> </li>
  <li>They make programs <strong>easier to read</strong> </li>
  <li>They let you <strong>break down big problems</strong> into smaller steps </li>
</ul>

<p><strong>Every big app, game, and website you love is built with thousands of tiny functions working together!</strong> </p>

<h3>Try it: Create a Simple Function</h3>

<p>Write a function that prints your favorite motivational quote!</p>

<pre><code>
def motivate():
    print("Believe in yourself and all that you are!")
</code></pre>

<p>Then call your function:</p>

<pre><code>
motivate()
</code></pre>

<h3>Quick Summary</h3>
<ul>
  <li><strong>def</strong> → defines a function</li>
  <li><strong>name()</strong> → calls the function</li>
  <li>Functions save time and organize your code</li>
</ul>

<h3> Challenge: Build Your Own Greeting Machine!</h3>
<p>Write a program that:</p>
<ul>
  <li>Defines a function called <code>greet_user</code></li>
  <li>Inside the function, prints "Hello, user!"</li>
  <li>Call the function 3 times!</li>
</ul>

<pre><code>
def greet_user():
    print("Hello, user!")

greet_user()
greet_user()
greet_user()
</code></pre>

<p><strong>Bonus:</strong> Try writing another function that says "Goodbye!" and call it once after the greetings!</p>`,
      },
      {
        id: "6.2",
        title: "6.2 Understanding Function Parameters and Return Values",
        content: `
        <h2>Understanding Function Parameters and Return Values</h2>

<p>Imagine ordering a pizza. You don't just say "pizza!"—you tell them what size, what toppings, and where to deliver it. Your choices (like toppings) are <strong>parameters</strong>, and the pizza you get back is the <strong>return value</strong>! </p>

<p>Functions in Python work the same way. You can give them <strong>inputs</strong> (parameters) and they can give you <strong>outputs</strong> (return values)!</p>

<h3> What Are Parameters?</h3>

<p><strong>Parameters</strong> are special variables that you pass into a function to give it information it needs.</p>

<pre><code>
def greet(name):
    print("Hello, " + name + "!")
</code></pre>

<p>Here, <code>name</code> is a parameter. It lets you customize what the function prints!</p>

<h3>📞 How to Pass a Parameter</h3>

<p>When you call the function, you provide the value:</p>

<pre><code>
greet("Alex")
greet("Taylor")
</code></pre>

<p>This prints:</p>
<ul>
  <li>Hello, Alex!</li>
  <li>Hello, Taylor!</li>
</ul>

<p><strong>Try it:</strong> Create a greeting for your name and a friend's name!</p>

<h3> What is a Return Value?</h3>

<p>Sometimes you want a function to give you something back. That’s where <strong>return values</strong> come in!</p>

<p>Use the <code>return</code> keyword to send a result out of a function.</p>

<pre><code>
def add_numbers(a, b):
    return a + b

result = add_numbers(3, 5)
print(result)
</code></pre>

<p>This prints <strong>8</strong> because the function added 3 and 5 and <strong>returned</strong> the answer!</p>

<p><strong>Try it:</strong> Make a function that returns the product of two numbers!</p>

<h3>Why Parameters and Return Values Matter</h3>

<ul>
  <li>They make your functions <strong>flexible</strong> </li>
  <li>They help your code <strong>recycle itself</strong></li>
  <li>They let you <strong>get results</strong> you can use later </li>
</ul>

<p><strong>Almost every app and game you know uses functions with parameters and return values to work smarter!</strong></p>

<h3>Quick Summary</h3>
<ul>
  <li><strong>Parameters</strong> = special inputs you give to a function</li>
  <li><strong>Return values</strong> = the output a function gives back to you</li>
  <li><strong>def name(parameters):</strong> → defines a function with inputs</li>
  <li><strong>return something</strong> → sends back a result</li>
</ul>

<h3> Challenge: Build a Magic Calculator!</h3>
<p>Write a program that:</p>
<ul>
  <li>Defines a function called <code>multiply_numbers</code> that takes two numbers as parameters</li>
  <li>Returns the product (their multiplication)</li>
  <li>Calls the function and prints the result!</li>
</ul>

<pre><code>
def multiply_numbers(x, y):
    return x * y

product = multiply_numbers(4, 6)
print("The answer is:", product)
</code></pre>

<p><strong>Bonus:</strong> Try asking the user for two numbers with <code>input()</code> and passing them to your function!</p>`,
      },
      {
        id: "6.3",
        title: "6.3 Exploring Built-in Functions and Libraries",
        content: `
        <h2>Exploring Built-in Functions and Libraries</h2>

<p>Imagine if you had a backpack full of gadgets—tools that help you solve problems faster, build cooler things, and create magic.</p>

<p>Well, Python comes with its own backpack: <strong>built-in functions</strong> and <strong>libraries</strong> that are ready to use whenever you need them!</p>

<h3>What are Built-in Functions?</h3>

<p><strong>Built-in functions</strong> are functions that Python already knows without you needing to define them. They're like tools that come standard in every Python program!</p>

<p>Here are a few examples:</p>

<ul>
  <li><code>print()</code> — display something</li>
  <li><code>len()</code> — find the length of a list or string</li>
  <li><code>type()</code> — tell you what kind of data something is</li>
  <li><code>max()</code> — find the largest number in a list</li>
  <li><code>min()</code> — find the smallest number</li>
</ul>

<pre><code>
numbers = [3, 7, 2, 9]

print(len(numbers))   # 4
print(max(numbers))   # 9
print(min(numbers))   # 2
</code></pre>

<p><strong>Try it:</strong> Create your own list of numbers and find the biggest and smallest ones!</p>

<h3> What are Libraries?</h3>

<p><strong>Libraries</strong> are like extra packs of tools you can bring into your project. They contain even more functions, organized by topic!</p>

<p>To use a library, you first <strong>import</strong> it.</p>

<pre><code>
import random

print(random.randint(1, 10))  # Random number between 1 and 10
</code></pre>

<p>In this example, <code>random</code> is a library that lets you do fun stuff with random numbers!</p>

<h3> Popular Python Libraries You’ll Love</h3>
<ul>
  <li><strong>random</strong> — randomness and games </li>
  <li><strong>math</strong> — advanced math operations </li>
  <li><strong>datetime</strong> — work with dates and times </li>
</ul>

<p><strong>Try it:</strong> Import the <code>math</code> library and print the square root of 25!</p>

<pre><code>
import math

print(math.sqrt(25))  # 5.0
</code></pre>

<h3>Why Built-in Functions and Libraries are Awesome</h3>

<ul>
  <li>Save you time—you don’t have to write everything yourself </li>
  <li>Give you superpowers—you can do more with less code </li>
  <li>Help you create bigger, cooler projects faster!</li>
</ul>

<p><strong>Most professional apps, websites, and games use tons of libraries to work smarter—not harder!</strong> </p>

<h3>Quick Summary</h3>
<ul>
  <li><strong>Built-in functions</strong> like <code>print()</code> and <code>len()</code> come ready to use</li>
  <li><strong>Libraries</strong> like <code>random</code> and <code>math</code> give you even more tools</li>
  <li>Use <code>import</code> to bring a library into your project</li>
</ul>

<h3> Challenge: Build a Mini Random Number Generator!</h3>
<p>Write a program that:</p>
<ul>
  <li>Imports the <code>random</code> library</li>
  <li>Asks the user for a number range (minimum and maximum)</li>
  <li>Prints a random number between the two numbers!</li>
</ul>

<pre><code>
import random

min_num = int(input("Enter the minimum number: "))
max_num = int(input("Enter the maximum number: "))

print("Your random number is:", random.randint(min_num, max_num))
</code></pre>

<p><strong>Bonus:</strong> Print a new random number every time the user presses Enter!</p>

<p><strong>You’re not just learning to code—you’re learning how to work smarter, faster, and stronger with Python’s secret gadgets! Keep exploring!</strong></p>`,
      },
      {
        id: "6.4",
        title: "6.4 Introduction to Built-in Math Functions",
        content: `
        <h2>Introduction to Built-in Math Functions</h2>

<p>Imagine you're designing a roller coaster, building a space rocket, or just trying to figure out the perfect pizza slice angle . Math shows up everywhere in real life—and Python has built-in math superpowers to help you!</p>

<p>In this lesson, you’ll explore some awesome math tools that are already built into Python—and learn how to use them. </p>

<h3> Easy Math with Python</h3>

<p>Python can already handle basic math like addition, subtraction, multiplication, and division:</p>

<pre><code>
print(5 + 3)    # 8
print(10 - 4)   # 6
print(6 * 7)    # 42
print(15 / 3)   # 5.0
</code></pre>

<p><strong>Try it:</strong> Write your own math problems and print the answers!</p>

<h3> The math Library</h3>

<p>Python also has a special library called <strong>math</strong> with even more powerful tools!</p>

<p>First, you need to <strong>import</strong> it:</p>

<pre><code>
import math
</code></pre>

<h3>Useful Math Functions You Should Know</h3>

<ul>
  <li><code>math.sqrt(x)</code> — square root of <code>x</code></li>
  <li><code>math.pow(x, y)</code> — <code>x</code> raised to the power of <code>y</code></li>
  <li><code>math.floor(x)</code> — round down to the nearest whole number</li>
  <li><code>math.ceil(x)</code> — round up to the nearest whole number</li>
  <li><code>math.pi</code> — the famous number π (3.14159...)</li>
</ul>

<pre><code>
print(math.sqrt(16))     # 4.0
print(math.pow(2, 3))    # 8.0
print(math.floor(5.7))   # 5
print(math.ceil(5.2))    # 6
print(math.pi)           # 3.141592653589793
</code></pre>

<p><strong>Try it:</strong> Find the square root of your favorite number!</p>

<h3> Real-World Uses of Math Functions</h3>
<ul>
  <li>Building video games where characters jump or fall</li>
  <li>Creating apps that calculate tips or discounts </li>
  <li>Programming robots that move and turn accurately </li>
  <li>Measuring distances on a map app</li>
</ul>

<p><strong>Math functions help your programs get smarter, faster, and more accurate—just like real engineers and game designers!</strong></p>

<h3>Quick Summary</h3>
<ul>
  <li><strong>import math</strong> gives you access to awesome math functions</li>
  <li><strong>math.sqrt()</strong>, <strong>math.pow()</strong>, <strong>math.floor()</strong>, and <strong>math.ceil()</strong> do special calculations</li>
  <li><strong>math.pi</strong> gives you the value of π!</li>
</ul>

<h3> Challenge: Build a Mini Math Tool!</h3>
<p>Write a program that:</p>
<ul>
  <li>Asks the user for a number</li>
  <li>Prints the square root of the number</li>
  <li>Prints the number rounded up and rounded down</li>
</ul>

<pre><code>
import math

number = float(input("Enter a number: "))

print("Square root:", math.sqrt(number))
print("Rounded down:", math.floor(number))
print("Rounded up:", math.ceil(number))
</code></pre>

<p><strong>Bonus:</strong> Ask the user for two numbers and print one raised to the power of the other!</p>

<p><strong>You’re not just solving math problems—you’re building smart tools that can do math for you! That’s real-world coding power!</strong></p>`,
      },
    ],
    quiz: [
      {
        question: "Which keyword is used to define a function in Python?",
        options: ["function", "define", "def", "fun"],
        correctAnswer: "def",
      },
      {
        question: "What keyword allows a function to send a value back?",
        options: ["send", "return", "output", "back"],
        correctAnswer: "return",
      },
      {
        question: "What does the built-in function `len()` do?",
        options: [
          "Finds the biggest number",
          "Finds the length of something",
          "Prints something",
          "Adds two numbers",
        ],
        correctAnswer: "Finds the length of something",
      },
      {
        question:
          "Which Python library can you use to work with random numbers?",
        options: ["math", "random", "numbers", "randomizer"],
        correctAnswer: "random",
      },
      {
        question:
          'What is the output of this code?\n\n```python\nprint(len("Python"))\n```',
        options: ["5", "6", "7", "Error"],
        correctAnswer: "6",
      },
      {
        question: "How do you correctly call a function named `greet`?",
        options: ["greet()", "greet", "call greet", "function greet"],
        correctAnswer: "greet()",
      },
      {
        question:
          "Which library would you import to use square root calculations?",
        options: ["random", "math", "numbers", "sqrt"],
        correctAnswer: "math",
      },
      {
        question: "Which built-in function turns a string into an integer?",
        options: ["str()", "int()", "float()", "bool()"],
        correctAnswer: "int()",
      },
    ],
  },
  unit7: {
    title: "Unit 7: Coding with Turtle",
    lessons: [
      {
        id: "7.1",
        title: "7.1 Getting Started with Trinket for Turtle Projects",
        content: `
          <h2>Welcome to Trinket with Nuevo Foundation!</h2>
          <p>Before you start creating amazing Turtle art, you’ll need a way to run and share your Python code online. That’s where <a href="https://trinket.io/" target="_blank">Trinket</a> and <a href="https://workshops.nuevofoundation.org/python-turtle/" target="_blank">Nuevo Foundation's Turtle Workshop</a> come in!</p>
      
          <h3> What is Trinket?</h3>
          <p>Trinket is a free, web-based platform that lets you write and run Python code right in your browser—no downloads needed. It’s especially useful for Turtle graphics because it supports <code>import turtle</code> and lets you see your drawings instantly.</p>

          <h3>Follow Along with Nuevo Foundation!</h3>
          <p>We're using the <a href="https://workshops.nuevofoundation.org/python-turtle/" target="_blank">Nuevo Foundation Python Turtle Workshop</a> to guide you through creative coding projects. It's full of great examples and ideas!</p>
      
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
            <li>Works in any browser—no installation needed</li>
            <li>Perfect for Turtle graphics projects</li>
            <li>You can share your work with a simple link!</li>
          </ul>
      
          <p>Now that you’re set up on Trinket and ready to follow the Nuevo Foundation's workshop, you’re ready to dive into creative coding with Turtle!</p>
        `,
      },
      {
        id: "7.2",
        title:
          "7.2 Create Your Own Turtle Art with Loops, Functions, and Random Colors",
        content: `
          <h2>Welcome to Your Final Turtle Art Challenge with Nuevo Foundation!</h2>
          <p>In this lesson, you'll put your coding skills to work by designing a unique drawing using <strong>loops</strong>, <strong>functions</strong>, and the <strong><code>random</code> module</strong>.</p>
  
          <h3>Quick Reminder: <code>import random</code></h3>
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

          <h3>Need More Ideas?</h3>
          <p>Check out the <a href="https://workshops.nuevofoundation.org/python-turtle/" target="_blank">Nuevo Foundation Python Turtle Workshop</a> for even more creative project inspiration!</p>
  
          <p>Have fun and get creative! When you're done, show off your design to the class or your family!</p>
        `,
      },
    ],
    quiz: [
      {
        question: "What Python module is used to draw shapes and graphics?",
        options: ["random", "turtle", "graphics", "shapes"],
        correctAnswer: "turtle",
      },
      {
        question: "Which command moves the turtle forward?",
        options: [
          "turtle.move()",
          "turtle.run()",
          "turtle.forward()",
          "turtle.go()",
        ],
        correctAnswer: "turtle.forward()",
      },
      {
        question: "Which command turns the turtle to the right?",
        options: [
          "turtle.right()",
          "turtle.turnRight()",
          "turtle.rotate()",
          "turtle.turn()",
        ],
        correctAnswer: "turtle.right()",
      },
      {
        question: "What does `turtle.penup()` do?",
        options: [
          "Makes the turtle go faster",
          "Lifts the pen so the turtle moves without drawing",
          "Draws a pen shape",
          "Changes the turtle’s color",
        ],
        correctAnswer: "Lifts the pen so the turtle moves without drawing",
      },
      {
        question: "Which command would you use to change the turtle’s color?",
        options: [
          "turtle.paint()",
          "turtle.color()",
          "turtle.fill()",
          "turtle.shade()",
        ],
        correctAnswer: "turtle.color()",
      },
      {
        question: "What happens if you call `turtle.circle(50)`?",
        options: [
          "The turtle draws a square",
          "The turtle draws a circle with radius 50",
          "The turtle moves 50 steps",
          "The turtle turns around 50 degrees",
        ],
        correctAnswer: "The turtle draws a circle with radius 50",
      },
      {
        question:
          "What must you call at the end of your turtle program to keep the window open?",
        options: [
          "turtle.start()",
          "turtle.hold()",
          "turtle.done()",
          "turtle.end()",
        ],
        correctAnswer: "turtle.done()",
      },
    ],
  },
  unit8: {
    title: "Final Exam",
    lessons: [
      {
        id: "8.2",
        title: "",
      },
    ],
    quiz: [
      // Unit 1: Introduction to Python
      {
        question: "What is Python mostly known for?",
        options: [
          "Being complicated",
          "Being easy to read and use",
          "Running only on mobile phones",
          "Only working for games",
        ],
        correctAnswer: "Being easy to read and use",
      },
      {
        question:
          "Which website allows you to write Python code directly in your browser without downloads?",
        options: ["Python.org", "Trinket", "Photoshop", "AWS"],
        correctAnswer: "Trinket",
      },

      // Unit 2: Data Types and Conditionals
      {
        question: "Which of the following is a Boolean value in Python?",
        options: ["True", "Maybe", "Yes", "1"],
        correctAnswer: "True",
      },
      {
        question: "What operator is used to check if two values are NOT equal?",
        options: ["!=", "==", "<>", "="],
        correctAnswer: "!=",
      },

      // Unit 3: Lists, Tuples, Sets, Dictionaries
      {
        question:
          "Which data structure is used to store items without a specific order and no duplicates?",
        options: ["List", "Tuple", "Set", "Dictionary"],
        correctAnswer: "Set",
      },
      {
        question:
          'What will this code print?\n\n```python\ncolors = ["red", "blue", "green"]\nprint(colors[-1])\n```',
        options: ["red", "green", "blue", "Error"],
        correctAnswer: "green",
      },

      // Unit 4: Functions and Parameters
      {
        question: "Which keyword is used to send a value out of a function?",
        options: ["send", "export", "return", "output"],
        correctAnswer: "return",
      },
      {
        question:
          "What happens if you call a function without parentheses (for example, `greet` instead of `greet()`)?",
        options: [
          "It runs normally",
          "It prints nothing",
          "It gives you an error",
          "It gives you a reference to the function",
        ],
        correctAnswer: "It gives you a reference to the function",
      },

      // Unit 5: More Data Structures
      {
        question: "Which symbol is used to create a dictionary?",
        options: ["{}", "[]", "()", "<>"],
        correctAnswer: "{}",
      },

      // Unit 6: Built-in Functions and Libraries
      {
        question:
          "Which library must you import to use advanced math functions like square roots?",
        options: ["random", "math", "numpy", "calculator"],
        correctAnswer: "math",
      },
      {
        question:
          'What is the output of this code?\n\n```python\nprint(type("Hello"))\n```',
        options: ["<class 'str'>", "<string>", "str", "String"],
        correctAnswer: "<class 'str'>",
      },

      // Unit 7: Turtle Mini-Project
      {
        question:
          "Which turtle command lifts the pen up so the turtle can move without drawing?",
        options: ["penup()", "stopdraw()", "lift()", "movefree()"],
        correctAnswer: "penup()",
      },
      {
        question: "Which command moves the turtle backward?",
        options: [
          "turtle.back()",
          "turtle.backward()",
          "turtle.return()",
          "turtle.reverse()",
        ],
        correctAnswer: "turtle.backward()",
      },

      // Unit 8: Random and Final Project Topics
      {
        question:
          "Which function generates a random integer between two values?",
        options: [
          "random.pick()",
          "random.choice()",
          "random.randint()",
          "random.int()",
        ],
        correctAnswer: "random.randint()",
      },
      {
        question:
          'What does this code do?\n\n```python\nimport random\ncolors = ["red", "blue", "green"]\nprint(random.choice(colors))\n```',
        options: [
          "Picks and prints a random color",
          "Sorts the list",
          "Prints all the colors",
          "Gives an error",
        ],
        correctAnswer: "Picks and prints a random color",
      },
    ],
  },
};
