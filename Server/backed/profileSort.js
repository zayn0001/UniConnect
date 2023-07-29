// Sample data of profiles with attributes
const profiles = [
    {
      name: "John",
      achievements: [8, 5, 6], // List of achievements
      experience: [3, 4],      // List of experiences
      skill: [9, 8],           // List of skills
      cgpa: 8.5,
      stack: ["ml", "web"],
    },
    {
      name: "Alice",
      achievements: [6, 7],
      experience: [2, 3, 4],
      skill: [7, 9, 8],
      cgpa: 9.0,
      stack: ["web", "cybersecurity"],
    },
    {
      name: "Bob",
      achievements: [9, 7, 8],
      experience: [5, 6],
      skill: [8, 9, 7],
      cgpa: 9.5,
      stack: ["ml", "web", "cybersecurity"],
    },
    // Add more profiles here...
  ];
  
  // Weights for each attribute (you can adjust these based on importance)
  const ACHIEVEMENTS_WEIGHT = 0.3;
  const EXPERIENCE_WEIGHT = 0.5;
  const SKILL_WEIGHT = 0.5;
  const CGPA_WEIGHT = 0.1;
  const STACK_WEIGHT = 0.2;
  
  function calculateScore(profile) {
    // Calculate a score for each profile based on attributes and weights
    const achievementsScore = profile.achievements.length;
    const experienceScore = profile.experience.length;
    const skillScore = profile.skill.length;
    const stackScore = profile.stack.length // Give 1 if "ml" is in the stack, else 0
    const cgpaScore = profile.cgpa;
  
    const score = (
      achievementsScore * ACHIEVEMENTS_WEIGHT +
      experienceScore * EXPERIENCE_WEIGHT +
      skillScore * SKILL_WEIGHT +
      stackScore * STACK_WEIGHT +
      cgpaScore * CGPA_WEIGHT
    );
  
    return score;
  }
  
  function rankProfiles(profiles) {
    // Calculate scores for all profiles
    const scores = profiles.map((profile) => ({ name: profile.name, score: calculateScore(profile) }));
  
    // Sort profiles based on their scores (higher scores come first)
    const rankedProfiles = scores.sort((a, b) => b.score - a.score);
  
    return rankedProfiles;
  }
  
  // Call the rankProfiles function with your list of profiles
  const rankedProfiles = rankProfiles(profiles);
  
  // Print the ranked profiles
  rankedProfiles.forEach((profile, index) => {
    console.log(`Rank ${index + 1}: ${profile.name} (Score: ${profile.score})`);
  });
  