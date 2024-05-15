interface Quiz {
    topic: string;
    questions: string[];
  }
  
  interface UserResult {
    topic: string;
    level: string;
    score: number;
  }
  
  // Mock database of questions
  const questionBank: Record<string, Record<string, string[]>> = {
    "C": {
      "Basic": ["What is a variable in C?", "Explain the syntax of a for loop in C", "How to declare and define a function in C?"],
      "Intermediate": ["Discuss the difference between stack and heap memory in C", "Explain the concept of pointer arithmetic in C", "How to use structures in C?"],
      "Advanced": ["Discuss dynamic memory allocation in C", "Explain the concept of function pointers in C", "How to handle file I/O operations in C?"]
    },
    "C++": {
      "Basic": ["What is a class in C++?", "Explain the concept of constructors and destructors in C++", "How to implement inheritance in C++?"],
      "Intermediate": ["Discuss the use of friend functions in C++", "Explain the concept of virtual inheritance in C++", "What are templates in C++?"],
      "Advanced": ["Discuss exception handling mechanisms in C++", "Explain the concept of RTTI (Run-Time Type Identification) in C++", "How to implement operator overloading in C++?"]
    },
    "Java": {
      "Basic": ["What is the main method in Java?", "Explain the use of the 'this' keyword in Java", "How to declare and initialize an array in Java?"],
      "Intermediate": ["Discuss the difference between abstract classes and interfaces in Java", "Explain method overloading and overriding in Java", "What are access specifiers in Java?"],
      "Advanced": ["Discuss the concept of multithreading in Java", "Explain the use of Java generics", "How to handle exceptions in Java?"]
    }
  };
  
  function generateSpecificQuiz(): void {
    const chosenTopic: string | null = prompt("Enter topic:");
    const chosenLevel: string | null = prompt("Enter difficulty level (Basic, Intermediate, Advanced):");
    if (chosenTopic && chosenLevel && questionBank[chosenTopic] && questionBank[chosenTopic][chosenLevel]) {
      const questions: string[] = questionBank[chosenTopic][chosenLevel];
      const quiz: Quiz = { topic: chosenTopic, questions };
      displayQuiz(quiz);
    } else {
      alert("Invalid topic or difficulty level!");
    }
  }
  
  function generatePersonalizedQuiz(): void {
    const userResults: UserResult[] = [
      { topic: "C", level: "Basic", score: 80 },
      { topic: "C++", level: "Intermediate", score: 70 },
      { topic: "Java", level: "Advanced", score: 90 }
    ];
    const quiz: Quiz = generatePersonalizedQuizFromResults(userResults);
    displayQuiz(quiz);
  }
  
  function generateMixedQuiz(): void {
    const chosenTopics: string[] | null = prompt("Enter topics (comma-separated):")?.split(",").map(topic => topic.trim());
    const chosenLevel: string | null = prompt("Enter difficulty level (Basic, Intermediate, Advanced):");
    if (chosenTopics && chosenLevel) {
      const questions: string[] = [];
      chosenTopics.forEach(topic => {
        if (questionBank[topic] && questionBank[topic][chosenLevel]) {
          questions.push(...questionBank[topic][chosenLevel]);
        }
      });
      const quiz: Quiz = { topic: "Mixed Quiz", questions };
      displayQuiz(quiz);
    } else {
      alert("Invalid topics or difficulty level!");
    }
  }
  
  function generatePersonalizedQuizFromResults(userResults: UserResult[]): Quiz {
    const questions: string[] = [];
    userResults.forEach(result => {
      if (questionBank[result.topic] && questionBank[result.topic][result.level]) {
        questions.push(...questionBank[result.topic][result.level]);
      }
    });
    return { topic: "Personalized Quiz", questions };
  }
  
  function displayQuiz(quiz: Quiz): void {
    alert(`Quiz Topic: ${quiz.topic}\n\nQuestions:\n${quiz.questions.join("\n")}`);
  }
  