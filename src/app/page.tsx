import Link from "next/link";
import { CITIES, slugify } from "@/lib/data";

export default function Home() {
  const techniques = [
    {
      number: "01",
      title: "Phytothérapie",
      desc: "La sagesse ancestrale des plantes pour restaurer votre équilibre physiologique et booster votre immunité.",
      img: "media__1772494385825.png"
    },
    {
      number: "02",
      title: "Aromathérapie",
      desc: "L'essence vibrante des fleurs pour apaiser votre esprit, soigner votre corps et équilibrer vos émotions.",
      img: "media__1772510768652.png"
    },
    {
      number: "03",
      title: "Réflexologie",
      desc: "Un toucher thérapeutique sous vos pieds pour relancer l'énergie de tout votre être et éliminer les toxines.",
      img: "reflexology_wellness_spa_1772494561223.png"
    }
  ];

  const pillars = [
    {
      title: "Nutrition Vibrante",
      desc: "Retrouvez le plaisir d'une alimentation qui vous honore, vous régénère en profondeur et soutient votre énergie vitale.",
      icon: "🍎"
    },
    {
      title: "Sérénité du Mental",
      desc: "Libérez-vous du tumulte du stress pour redécouvrir la clarté de votre calme intérieur et une paix durable.",
      icon: "🧘"
    },
    {
      title: "Vitalité en Mouvement",
      desc: "Harmonisez votre corps à travers des rituels de mouvement doux, respectueux et adaptés à votre physiologie.",
      icon: "✨"
    }
  ];

  const topVilles = CITIES.slice(0, 6); // Define topVilles for the footer links

  return (
    <div className="animate-fade-in">
      {/* HERO SECTION PREMIUM */}
      <section style={{
        height: 'min-content',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '160px 24px 100px',
        position: 'relative',
        background: 'linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url("/images/media__1772494385825.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div style={{ maxWidth: '1100px', zIndex: 10 }}>
          <span className="stagger-1" style={{
            fontSize: '1rem',
            fontWeight: 700,
            letterSpacing: '8px',
            textTransform: 'uppercase',
            color: 'var(--gold-warm)',
            marginBottom: '40px',
            display: 'block'
          }}>
            L'excellence de la santé naturelle
          </span>
          <h1 className="stagger-2 typewriter" style={{
            marginBottom: '40px',
            lineHeight: 1.0,
            color: 'var(--text-main)'
          }}>
            Cultivez votre Équilibre
          </h1>
          <p className="stagger-3" style={{
            fontSize: '1.6rem',
            color: 'var(--text-muted)',
            maxWidth: '900px',
            margin: '0 auto 72px',
            lineHeight: 1.6,
            fontWeight: 300
          }}>
            Bienvenue dans un espace de ressourcement dédié à votre vitalité globale. <br />
            Une approche de santé holistique pour honorer votre essence originelle à Miramas et alentours.
          </p>
          <div style={{ display: 'flex', gap: '30px', justifyContent: 'center' }} className="stagger-3">
            <Link href="/contact" className="btn-premium" style={{ padding: '24px 60px', fontSize: '1.2rem' }}>
              REPRENDRE SON SOUFFLE
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION DEFINITION: MA VISION (ZIG-ZAG) */}
      <section id="methode" style={{ padding: '160px 0', backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '100px', alignItems: 'center' }}>
            <div style={{ borderRadius: '50px', overflow: 'hidden', boxShadow: 'var(--shadow-soft)' }}>
              <img src="/images/media__1772510730063.png" alt="Vision Naturopathie" style={{ width: '100%', display: 'block' }} />
            </div>
            <div>
              <h2 className="font-serif typewriter" style={{ marginBottom: '48px', fontSize: '4.5rem' }}>L'Art de <span className="text-gold italic">Guérir</span></h2>
              <p style={{ fontSize: '1.4rem', lineHeight: 2, color: 'var(--text-muted)', fontWeight: 300, marginBottom: '32px' }}>
                La naturopathie n'est pas seulement une médecine douce, c'est une reconnexion profonde aux lois de la nature. Mon rôle est de vous guider pour que vous deveniez l'acteur principal de votre santé.
              </p>
              <p style={{ fontSize: '1.2rem', opacity: 0.8, color: 'var(--text-main)', letterSpacing: '0.02em', fontStyle: 'italic' }}>
                "Chaque être possède en lui une force vitale capable de restaurer l'harmonie. Il suffit parfois d'enlever les obstacles qui l'empêchent de s'exprimer."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION LES 3 PILIERS MAJEURS */}
      <section style={{ padding: '160px 0', backgroundColor: 'var(--bg-secondary)', borderRadius: '150px 150px 0 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '120px' }}>
            <h2 className="font-serif typewriter" style={{ marginBottom: '32px', fontSize: '4.5rem' }}>Les <span className="text-sauge">Fondations</span></h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.4rem', fontWeight: 300 }}>Un accompagnement basé sur trois piliers fondamentaux pour une transformation durable.</p>
            <ul style={{ listStyle: 'none', fontSize: '0.85rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', maxWidth: '400px', margin: '40px auto 0' }}>
              {topVilles.map(city => (
                <li key={city}>
                  <Link href={`/villes/${slugify(city)}`} className="hover-text-sauge">
                    {city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '60px' }}>
            {pillars.map((pillar, idx) => (
              <div key={idx} style={{
                padding: '80px 50px',
                backgroundColor: 'var(--white)',
                borderRadius: '50px',
                boxShadow: 'var(--shadow-soft)',
                textAlign: 'center',
                border: '1px solid rgba(0,0,0,0.02)',
                transition: 'all 0.4s ease'
              }} className="hover-lift">
                <div style={{ fontSize: '4rem', marginBottom: '40px' }}>{pillar.icon}</div>
                <h3 className="font-serif" style={{ fontSize: '2.2rem', marginBottom: '32px', color: 'var(--sauge-dark)' }}>{pillar.title}</h3>
                <p style={{ lineHeight: 2, opacity: 0.7, fontSize: '1.1rem', fontWeight: 300 }}>{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION TECHNIQUES DETAILLEES (ZIG-ZAG LIVING) */}
      <section style={{ padding: '200px 0', backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '140px' }}>
            <h2 className="font-serif typewriter" style={{ fontSize: '4.5rem' }}>Une expertise <span className="text-gold">Naturelle</span></h2>
          </div>

          {techniques.map((tech, idx) => (
            <div key={idx} style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.2fr',
              gap: '120px',
              alignItems: 'center',
              marginBottom: '160px',
              direction: idx % 2 === 0 ? 'ltr' : 'rtl'
            }}>
              <div style={{ direction: 'ltr' }}>
                <span style={{ fontSize: '5rem', opacity: 0.1, fontWeight: 900, marginBottom: '20px', display: 'block' }}>{tech.number}</span>
                <h3 style={{ fontSize: '3rem', marginBottom: '40px' }}>{tech.title}</h3>
                <p style={{ fontSize: '1.3rem', color: 'var(--text-muted)', lineHeight: 1.8, fontWeight: 300, marginBottom: '40px' }}>
                  {tech.desc}
                </p>
                <Link href="/techniques" className="text-gold" style={{ fontWeight: 700, letterSpacing: '2px', fontSize: '0.9rem', textTransform: 'uppercase' }}>DÉCOUVRIR LA TECHNIQUE →</Link>
              </div>
              <div style={{ borderRadius: '60px', overflow: 'hidden', boxShadow: 'var(--shadow-soft)' }}>
                <img src={`/images/${tech.img}`} alt={tech.title} style={{ width: '100%', height: '600px', objectFit: 'cover' }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION QUOTE / TESTIMONIAL PREMIUM */}
      <section style={{
        padding: '250px 0',
        background: 'fixed center/cover url("/images/media__1772494485058.png")',
        position: 'relative'
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(3px)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', color: 'var(--white)' }}>
          <span style={{ fontSize: '5rem', display: 'block', marginBottom: '40px' }}>“</span>
          <h2 style={{ color: 'var(--white)', fontSize: '5rem', marginBottom: '40px', lineHeight: 1.2 }}>
            Votre corps est un temple géant. <br />
            <span className="text-gold italic">Écoutez sa sagesse.</span>
          </h2>
          <p style={{ fontSize: '1.6rem', opacity: 0.9, fontWeight: 300 }}>— Accompagnement INESSENCE</p>
        </div>
      </section>

      {/* SECTION ZONES D'INTERVENTION (SEO OPTIMIZED) */}
      <section id="villes" style={{ padding: '160px 0', backgroundColor: 'var(--sable-warm)', borderRadius: '150px 150px 150px 150px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '100px' }}>
            <h2 className="font-serif typewriter" style={{ fontSize: '4.5rem' }}>À votre <span className="text-sauge">rencontre</span></h2>
            <p style={{ color: 'var(--text-muted)', marginTop: '30px', fontSize: '1.4rem', fontWeight: 300, maxWidth: '800px', margin: '30px auto' }}>
              Parce que la proximité est le cœur de mon accompagnement, je me déplace dans toute la région de **Miramas** et ses alentours.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            {CITIES.slice(0, 16).map(city => (
              <Link
                key={city}
                href={`/villes/${slugify(city)}`}
                className="bg-white p-10 rounded-3xl text-center shadow-sm hover:shadow-xl transition-all hover:text-gold"
                style={{ border: '1px solid rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column', gap: '15px' }}
              >
                <span style={{ fontSize: '1.2rem', fontWeight: 600 }}>Naturopathe {city}</span>
                <span style={{ fontSize: '0.8rem', opacity: 0.5, letterSpacing: '1px' }}>VOIR LA PAGE →</span>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '80px' }}>
            <p style={{ opacity: 0.4 }}>Accompagnement également disponible en visioconférence pour tout le Sud de la France.</p>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION PREMIUM */}
      <section style={{
        padding: '200px 0',
        textAlign: 'center',
        background: 'var(--text-main)',
        color: 'var(--white)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.1, backgroundImage: 'url("/images/media__1772510741180.png")', backgroundSize: 'cover' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 className="font-serif typewriter" style={{ fontSize: '6rem', marginBottom: '60px', color: 'var(--white)' }}>
            Retrouvez <span className="italic text-gold">l'Essence</span>
          </h2>
          <p style={{ maxWidth: '850px', margin: '0 auto 80px', fontSize: '1.6rem', opacity: 0.8, lineHeight: 1.8, fontWeight: 300 }}>
            Votre voyage vers une santé vibrante et un équilibre retrouvé commence par ce premier pas. <br />
            Réservez votre séance de découverte et transformez votre vie naturellement.
          </p>
          <Link href="/contact" className="btn-premium" style={{ padding: '30px 100px', fontSize: '1.4rem', backgroundColor: 'var(--gold-warm)', color: 'var(--text-main)', borderRadius: '100px' }}>
            PRENDRE RENDEZ-VOUS
          </Link>
        </div>
      </section>

      {/* MEDICAL DISCLAIMER */}
      <footer style={{ padding: '100px 0', backgroundColor: 'var(--white)' }}>
        <div className="container text-center">
          <div style={{ marginBottom: '40px' }}>
            <img src="/images/logo-inessence.png" alt="Logo" style={{ width: '120px', opacity: 0.8 }} />
          </div>
          <div style={{ marginBottom: '60px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <p style={{ fontSize: '1.4rem', color: 'var(--text-main)', fontWeight: 600 }}>6 rue pierre tristani, 13140 Miramas</p>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>Consultations en Cabinet & en Visioconférence</p>
          </div>
          <p style={{ fontSize: '1rem', color: 'var(--text-muted)', maxWidth: '1000px', margin: '0 auto', lineHeight: 2, opacity: 0.6, fontWeight: 300 }}>
            <strong>Clause de non-responsabilité :</strong> Les conseils prodigués sur ce site ont pour but d'améliorer votre santé globale via des méthodes naturelles (hygiène de vie, alimentation, phytothérapie). Ils ne remplacent en aucun cas un avis médical, un diagnostic ou un traitement prescrit par un professionnel de santé. Ne jamais arrêter un traitement médical sans l'avis de votre médecin.
          </p>
          <p style={{ marginTop: '80px', fontSize: '0.9rem', opacity: 0.4, letterSpacing: '2px' }}>
            © {new Date().getFullYear()} INESSENCE – L'ART DE LA SANTÉ NATURELLE
          </p>
        </div>
      </footer >
    </div>
  );
}
