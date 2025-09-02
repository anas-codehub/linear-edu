import ExamUICard from "@/components/ExamUICard";

const examData = [
  {
    title: "Algebra Basics",
    shortDescription:
      "Covers linear equations, inequalities, and polynomials. Covers linear equations, inequalities, and polynomials. Covers linear equations, inequalities, and polynomials. Covers linear equations, inequalities, and polynomials.",
    image:
      "https://images.unsplash.com/photo-1755429562521-cb944ea054ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8",
    topic: "Mathematics",
    chapter: "Algebra",
    totalQuestions: 25,
    duration: 30,
  },
  {
    title: "Newton’s Laws of Motion",
    shortDescription: "Fundamental principles of classical mechanics.",
    image:
      "https://images.unsplash.com/photo-1755429562521-cb944ea054ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8",
    topic: "Physics",
    chapter: "Mechanics",
    totalQuestions: 20,
    duration: 25,
  },
  {
    title: "Cell Structure & Functions",
    shortDescription: "Understanding cell organelles and their roles.",
    image:
      "https://images.unsplash.com/photo-1755429562521-cb944ea054ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8",
    topic: "Biology",
    chapter: "Cell Biology",
    totalQuestions: 30,
    duration: 35,
  },
  {
    title: "World War II Overview",
    shortDescription: "Key events, causes, and consequences of WWII.",
    image:
      "https://images.unsplash.com/photo-1755429562521-cb944ea054ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8",
    topic: "History",
    chapter: "Modern History",
    totalQuestions: 15,
    duration: 20,
  },
  {
    title: "Introduction to Programming",
    shortDescription: "Covers variables, loops, and conditionals in C++.",
    image:
      "https://images.unsplash.com/photo-1755429562521-cb944ea054ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8",
    topic: "Computer Science",
    chapter: "Programming Basics",
    totalQuestions: 40,
    duration: 45,
  },
];

const ExamPage = () => {
  return (
    <>
      <section className="container py-20 mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-4">
        {examData.map((exam, i) => {
          return <ExamUICard key={i} data={exam} />;
        })}
      </section>
    </>
  );
};

export default ExamPage;
