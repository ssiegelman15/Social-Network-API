const connection = require("../config/connection");
const { User, Thought } = require("../models");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");

  // Drop existing users
  await User.deleteMany({});

  // Drop existing thoughts
  await Thought.deleteMany({});

  // Create array to hold the users seed data
  const users = [
    {
      username: "ssiegelman",
      email: "shlomo@gmail.com",
    },
    {
      username: "babymaeve",
      email: "maeve@gmail.com",
    },
    {
      username: "samadj",
      email: "jenny@gmail.com",
    },
    {
      username: "levik",
      email: "levi@gmail.com",
    },
    {
      username: "malcolm",
      email: "malcolm@gmail.com",
    },
  ];

  // Create array to hold the thoughts seed data
  const thoughts = [
    {
      username: "ssiegelman",
      thoughtText: "Is this what it felt like to be the first human?",
    },
    {
      username: "babymaeve",
      thoughtText: "Uh-Oh. Hi.",
    },
    {
      username: "samadj",
      thoughtText: "Maeve, stop throwing your food!",
    },
    {
      username: "levik",
      thoughtText: "But it's cute!",
    },
    {
      username: "malcolm",
      thoughtText: "Damn, I can't believe I'm a grandparent...",
    },
  ];

  // Add users and thoughts to the collection and await the results
  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.table(thoughts);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});
