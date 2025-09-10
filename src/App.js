import React from 'react';

const profile = {
  name: "Rajeswar Singh",
  tagline: "Data Analyst • SQL • Python • Statistics",
  description: `I am passionate about data analysis, statistics, and leveraging SQL/Python to solve real-world business problems. I have hands-on experience with exploratory data analysis, hypothesis testing, and data-driven decision making. Check out my portfolio and projects below!`,
  //avatar: "https://avatars.githubusercontent.com/u/rajeswarsingh?v=4",
  email: "iamrajeswar@gmail.com",
  linkedin: "https://www.linkedin.com/in/your-linkedin/", // Update with your LinkedIn URL
  github: "https://github.com/rajeswarsingh"
};

const skills = [
  "SQL", "Python", "Statistics", "Data Analysis", "Pandas", "Excel", "Power BI", "Tableau"
];

const projects = [
  {
    title: "Basic Statistics Case Study",
    description: "Case study applying basic statistical methods to analyze datasets.",
    link: "https://github.com/rajeswarsingh/Basic-Statistics-Case-Study"
  },
  {
    title: "SQL Mobile Manufacturer Data Analysis",
    description: "SQL queries and analysis on mobile manufacturer data.",
    link: "https://github.com/rajeswarsingh/SQL-Mobile_manufacturer_data_analysis"
  },
  {
    title: "SQL Retail Store Case Study",
    description: "Data analysis and insights for a retail store using SQL.",
    link: "https://github.com/rajeswarsingh/SQL-Case-Study-For-Retail-Store"
  },
  {
    title: "Insurance Claims Data Analysis",
    description: "Exploratory analysis and hypothesis testing for insurance claims.",
    link: "https://github.com/rajeswarsingh/DATA-EXPLORATORY-ANALYSIS-AND-HYPOTHESIS-TESTING-FOR-INSURANCE-CLAIMS-DATA"
  }
];

function App() {
  return (
    <div style={{
      fontFamily: "Segoe UI, sans-serif",
      background: "linear-gradient(120deg, #e0eafc 0%, #cfdef3 100%)",
      minHeight: "100vh",
      padding: "20px"
    }}>
      <header style={{
        display: "flex", alignItems: "center", gap: 20,
        background: "#fff", borderRadius: "15px", padding: "20px", boxShadow: "0 4px 24px #0001"
      }}>
       // <img src={profile.avatar} alt="Profile" style={{ width: 100, borderRadius: "50%" }} />
        <div>
          <h1 style={{ margin: 0 }}>{profile.name}</h1>
          <h3 style={{ margin: 0, color: "#3a86ff" }}>{profile.tagline}</h3>
          <p>{profile.description}</p>
          <div style={{ display: "flex", gap: 10 }}>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={`mailto:${profile.email}`}>Email</a>
          </div>
        </div>
      </header>

      <section style={{ marginTop: 40 }}>
        <h2>Skills</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {skills.map(skill => (
            <span key={skill} style={{
              background: "#3a86ff", color: "#fff", borderRadius: "8px",
              padding: "8px 16px", fontWeight: 600
            }}>{skill}</span>
          ))}
        </div>
      </section>

      <section style={{ marginTop: 40 }}>
        <h2>Projects</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
          {projects.map(project => (
            <div key={project.title} style={{
              background: "#fff", borderRadius: "12px", padding: "20px", boxShadow: "0 2px 12px #0001"
            }}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer"
                style={{
                  color: "#3a86ff", textDecoration: "none", fontWeight: 600
                }}>View on GitHub</a>
            </div>
          ))}
        </div>
      </section>

      <footer style={{ marginTop: 60, textAlign: "center", color: "#888" }}>
        &copy; {new Date().getFullYear()} {profile.name}. Made with React.
      </footer>
    </div>
  );
}

export default App;
