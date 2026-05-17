export default function PortfolioWebsite() {
  const skills = [
    "Virtual Assistance",
    "Lead Generation",
    "LinkedIn Research",
    "Data Entry",
    "Customer Support",
    "Google Workspace",
    "Microsoft Office",
    "Email Management",
    "Scheduling",
    "Research"
  ];

  const experience = [
    {
      title: "Virtual Assistant",
      company: "Freelance",
      period: "2024 – Present",
      description:
        "Provided administrative support, internet research, scheduling, and customer communication for online clients."
    },
    {
      title: "Lead Generation Assistant",
      company: "Remote Projects",
      period: "2024 – Present",
      description:
        "Conducted B2B prospect research using LinkedIn and online tools to identify potential leads and maintain organized contact lists."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-4">
              Welcome to my portfolio
            </p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Christine Kavithe
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Virtual Assistant and Lead Generation Specialist helping businesses stay organized, connect with clients, and grow through efficient remote support.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-6 py-3 rounded-2xl bg-black text-white font-medium hover:opacity-90 transition"
              >
                Contact Me
              </a>

              <a
                href="#resume"
                className="px-6 py-3 rounded-2xl border border-gray-300 bg-white hover:bg-gray-50 transition"
              >
                View Resume
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-72 h-72 rounded-[2rem] bg-gradient-to-br from-gray-200 to-gray-300 shadow-2xl flex items-center justify-center text-7xl font-bold text-gray-600">
              CK
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-white rounded-3xl p-10 shadow-sm">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>

          <p className="text-gray-700 leading-relaxed text-lg">
            I am a detail-oriented Virtual Assistant with experience in lead generation, online research, data organization, and administrative support. I enjoy helping businesses stay efficient and organized while building strong professional relationships.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 text-center font-medium"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="resume" className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold mb-8">Experience</h2>

        <div className="space-y-6">
          {experience.map((job, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-2xl font-semibold">{job.title}</h3>
                  <p className="text-gray-600">{job.company}</p>
                </div>

                <span className="text-sm text-gray-500">{job.period}</span>
              </div>

              <p className="text-gray-700 leading-relaxed">{job.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Resume Download */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="bg-black text-white rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold mb-2">Resume</h2>
            <p className="text-gray-300">
              Add your downloadable PDF resume link here.
            </p>
          </div>

          <a
            href="#"
            className="bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:bg-gray-200 transition"
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-6 pb-24">
        <div className="bg-white rounded-3xl p-10 shadow-sm">
          <h2 className="text-3xl font-bold mb-6">Contact</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-gray-100 rounded-2xl p-6">
              <p className="text-sm text-gray-500 mb-2">Email</p>
              <p className="font-medium">yourname@email.com</p>
            </div>

            <div className="border border-gray-100 rounded-2xl p-6">
              <p className="text-sm text-gray-500 mb-2">LinkedIn</p>
              <p className="font-medium">linkedin.com/in/yourprofile</p>
            </div>

            <div className="border border-gray-100 rounded-2xl p-6">
              <p className="text-sm text-gray-500 mb-2">Location</p>
              <p className="font-medium">Riyadh, Saudi Arabia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 text-center text-gray-500 text-sm bg-white">
        © 2026 Christine Kavithe. All rights reserved.
      </footer>
    </div>
  );
}
