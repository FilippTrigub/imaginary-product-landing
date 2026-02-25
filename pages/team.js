import Head from 'next/head';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Team() {
  const teamMembers = [
    {
      name: 'Sarah Chen',
      position: 'CEO & Founder',
      bio: 'Former quantum computing researcher at MIT, Sarah leads NovaSphere\'s vision of revolutionizing personal computing through innovative technology.',
      image: 'https://via.placeholder.com/200x200'
    },
    {
      name: 'Marcus Rodriguez',
      position: 'Chief Technology Officer',
      bio: 'With 15 years of experience in holographic interfaces, Marcus oversees the technical development of NovaSphere\'s core technologies.',
      image: 'https://via.placeholder.com/200x200'
    },
    {
      name: 'Dr. Aisha Patel',
      position: 'Head of Research',
      bio: 'Leading our R&D department, Aisha brings expertise in neural networks and machine learning to advance our AI capabilities.',
      image: 'https://via.placeholder.com/200x200'
    },
    {
      name: 'James Wilson',
      position: 'Design Director',
      bio: 'Former lead designer at Apple, James ensures that NovaSphere\'s interface is both beautiful and intuitive for users.',
      image: 'https://via.placeholder.com/200x200'
    }
  ];

  return (
    <>
      <Head>
        <title>Our Team - NovaSphere v2</title>
        <meta name="description" content="Meet the brilliant minds behind NovaSphere's revolutionary technology" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Banner />
      <Header />

      <section className="team-section">
        <div className="container">
          <h2>Meet Our Team</h2>
          <p>The brilliant minds behind NovaSphere&apos;s revolutionary technology</p>

          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member">
                <img src={member.image} alt={member.name} />
                <h3>{member.name}</h3>
                <div className="position">{member.position}</div>
                <p className="bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .team-section {
          padding: 80px 0;
          background-color: #f8f9fa;
          margin-top: 80px;
        }

        .team-section h2 {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 10px;
          color: #333;
        }

        .team-section p {
          text-align: center;
          color: #666;
          margin-bottom: 40px;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          margin-top: 40px;
        }

        .team-member {
          text-align: center;
          background: white;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 2px 15px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }

        .team-member:hover {
          transform: translateY(-5px);
        }

        .team-member img {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          margin-bottom: 20px;
          object-fit: cover;
        }

        .team-member h3 {
          color: #333;
          margin-bottom: 5px;
        }

        .team-member .position {
          color: #666;
          font-size: 0.9em;
          margin-bottom: 15px;
        }

        .team-member .bio {
          color: #555;
          font-size: 0.95em;
          line-height: 1.6;
        }
      `}</style>
    </>
  );
}
