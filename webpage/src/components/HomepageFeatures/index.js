import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Getting Started',
    description: (
      <>
        Learn the basic structure of a C++ program, including how to write, compile, and run your first program.
      </>
    ),
  },
  {
    title: 'Variables and Constants',
    description: (
      <>
        Understand how to define variables and constants in C++, along with their data types and initialization.
      </>
    ),
  },
  {
    title: 'Arrays and Vectors',
    description: (
      <>
        Explore how to work with arrays and vectors, including dynamic memory allocation and manipulation.
      </>
    ),
  },
  {
    title: 'Statements and Operators',
    description: (
      <>
        Master the use of operators and control statements to build logical and arithmetic expressions.
      </>
    ),
  },
  {
    title: 'Controlling Program Flow',
    description: (
      <>
        Learn how to control the execution flow using loops, conditionals, and branching mechanisms.
      </>
    ),
  },
  {
    title: 'Characters and Strings',
    description: (
      <>
        Understand how to manipulate characters and strings efficiently in C++.
      </>
    ),
  },
  {
    title: 'Functions',
    description: (
      <>
        Dive into functions, parameters, and return types, along with best practices for modular code.
      </>
    ),
  },
  {
    title: 'Pointers & References',
    description: (
      <>
        Get a deep understanding of pointers and references, essential for memory management and data manipulation.
      </>
    ),
  },
  {
    title: 'OOP: Classes & Objects',
    description: (
      <>
        Discover the fundamentals of object-oriented programming, including classes, objects, and encapsulation.
      </>
    ),
  },
  {
    title: 'Operator Overloading',
    description: (
      <>
        Learn how to overload operators to define custom behaviors for your objects.
      </>
    ),
  },
  {
    title: 'Inheritance',
    description: (
      <>
        Explore how inheritance enables code reuse and extends functionality in C++.
      </>
    ),
  },
  {
    title: 'Polymorphism',
    description: (
      <>
        Understand polymorphism and its significance in designing flexible and scalable programs.
      </>
    ),
  },
  {
    title: 'Smart Pointers',
    description: (
      <>
        Learn how to use smart pointers to manage memory and avoid leaks in modern C++.
      </>
    ),
  },
  {
    title: 'Exception Handling',
    description: (
      <>
        Discover how to handle exceptions and errors gracefully in your programs.
      </>
    ),
  },
  {
    title: 'I/O and Streams',
    description: (
      <>
        Understand input/output operations, including file handling and stream manipulation.
      </>
    ),
  },
  {
    title: 'Standard Template Library',
    description: (
      <>
        Explore the STL's powerful data structures and algorithms to write efficient and concise code.
      </>
    ),
  },
  {
    title: 'Lambda Expressions',
    description: (
      <>
        Learn how to use lambda expressions for inline, anonymous functions in C++.
      </>
    ),
  },

  {
    title: 'Projects',
    description: (
      <>
        Projects in C++.
      </>
    ),
  },
];

function Feature({ title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
