import Navbar from "./Navbar";
import Footer from "./Footer";
import CA from "../../Assets/Team-Image/CA SR Yadav.jpeg";
import Vishwajeet from "../../Assets/Team-Image/vishwajeet.jpg";
import Vaibhav from "../../Assets/Team-Image/vaibhav.jpg";
import Sunny from "../../Assets/Team-Image/sunny_photo2.jpg";
import Shubham from "../../Assets/Team-Image/shubham.jpg";
import Harsh from "../../Assets/Team-Image/harsh.jpg";
import Harshit from "../../Assets/Team-Image/harshit.jpeg";

const teamMembers = [
  {
    name: "CA SR Yadav",
    role: "Professional Advisor",
    avatar: CA,
  },
  {
    name: "Vishwajeet Dwivedy",
    role: "Data Science Consultant",
    avatar: Vishwajeet,
  },
  {
    name: "Vaibhav Gupta",
    role: "Content Marketing",
    avatar: Vaibhav,
  },
  {
    name: "Sunny Yadav",
    role: "Software Engineer",
    avatar: Sunny,
  },
  {
    name: "Shubham Patidar",
    role: "Web Developer",
    avatar: Shubham,
  },
  {
    name: "Harsh Bunkar",
    role: "Content Head",
    avatar: Harsh,
  },
  {
    name: "Harshit Kumar",
    role: "Aesthetic Head",
    avatar: Harshit,
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="inline-block px-5 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold mb-5">
              TecoNico Team
            </p>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Meet Our Team</h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto">
              People building practical, scalable home automation experiences with TecoHome.
            </p>
          </div>

          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <article
                key={member.name}
                className="rounded-2xl bg-slate-900/50 border border-slate-800 p-6 text-center hover:border-emerald-500/50 transition-colors"
              >
                <div className="mx-auto mb-5 w-28 h-28 rounded-full overflow-hidden ring-2 ring-slate-700">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-xl font-semibold text-white">{member.name}</h2>
                <p className="text-emerald-400 mt-2">{member.role}</p>
              </article>
            ))}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
