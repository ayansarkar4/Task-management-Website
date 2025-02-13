const employees = [
  {
    id: 1,
    name: "Ayan",
    email: "a@a.com",
    password: "123",
    taskCounts: {
      new: 2,
      active: 1,
      completed: 0,
      failed: 0,
    },
    tasks: [
      {
        title: "Design Homepage",
        description: "Create a homepage UI for the new project.",
        date: "2025-02-07",
        category: "Design",
        active: true,
        new: false,
        completed: false,
        failed: false,
      },
      {
        title: "Fix Navbar Bug",
        description: "Resolve mobile responsiveness issue in navbar.",
        date: "2025-02-05",
        category: "Development",
        active: false,
        new: true,
        completed: false,
        failed: false,
      },
      {
        title: "Update Logo",
        description: "Redesign and update the company logo.",
        date: "2025-02-10",
        category: "Branding",
        active: false,
        new: true,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 2,
    name: "Rohan",
    email: "rohan.verma@example.com",
    password: "123",
    taskCounts: {
      new: 1,
      active: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        title: "Client Meeting",
        description: "Attend a meeting with the marketing client.",
        date: "2025-02-08",
        category: "Management",
        active: true,
        new: false,
        completed: false,
        failed: false,
      },
      {
        title: "Write Blog Post",
        description: "Create an article on the latest tech trends.",
        date: "2025-02-06",
        category: "Content Writing",
        active: false,
        new: false,
        completed: true,
        failed: false,
      },
      {
        title: "SEO Optimization",
        description: "Improve website SEO ranking for better reach.",
        date: "2025-02-12",
        category: "Marketing",
        active: false,
        new: true,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 3,
    name: "Priya",
    email: "priya.sharma@example.com",
    password: "123",
    taskCounts: {
      new: 2,
      active: 0,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        title: "UX Research",
        description: "Conduct user research for the upcoming project.",
        date: "2025-02-04",
        category: "Research",
        active: false,
        new: false,
        completed: true,
        failed: false,
      },
      {
        title: "Design Wireframe",
        description: "Create wireframes for the dashboard UI.",
        date: "2025-02-09",
        category: "Design",
        active: false,
        new: true,
        completed: false,
        failed: false,
      },
      {
        title: "Client Feedback Analysis",
        description: "Analyze client feedback for UI improvements.",
        date: "2025-02-11",
        category: "Analysis",
        active: false,
        new: true,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 4,
    name: "Vikram",
    email: "vikram.patel@example.com",
    password: "123",
    taskCounts: {
      new: 1,
      active: 2,
      completed: 0,
      failed: 0,
    },
    tasks: [
      {
        title: "Backend API Development",
        description: "Develop RESTful APIs for user authentication.",
        date: "2025-02-05",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Database Optimization",
        description: "Optimize database queries for better performance.",
        date: "2025-02-08",
        category: "Database",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Code Review",
        description: "Review PRs from junior developers.",
        date: "2025-02-10",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 5,
    name: "Neha",
    email: "neha.gupta@example.com",
    password: "123",
    taskCounts: {
      new: 1,
      active: 1,
      completed: 0,
      failed: 1,
    },
    tasks: [
      {
        title: "Social Media Campaign",
        description: "Plan and execute a new social media campaign.",
        date: "2025-02-06",
        category: "Marketing",
        active: false,
        new: false,
        completed: false,
        failed: true,
      },
      {
        title: "Ad Copywriting",
        description: "Write copy for the upcoming ad campaign.",
        date: "2025-02-07",
        category: "Content Writing",
        active: true,
        new: false,
        completed: false,
        failed: false,
      },
      {
        title: "Email Newsletter",
        description: "Create an email newsletter for the product launch.",
        date: "2025-02-09",
        category: "Marketing",
        active: false,
        new: true,
        completed: false,
        failed: false,
      },
    ],
  },
];


const admin = [
  {
    id: 1,
    name: "Admin User",
    email: "admin@me.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};
