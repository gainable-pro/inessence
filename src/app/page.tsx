import Link from "next/link";
import { CITIES, slugify } from "@/lib/data";

export default function Home() {
  const techniques = [
    {
      number: "01",
      title: "Phytothérapie",
      desc: "La sagesse ancestrale des plantes pour restaurer votre équilibre physiologique."
    },
    {
      number: "02",
      title: "Aromathérapie",
      desc: "L'essence vibrante des fleurs pour apaiser votre esprit et soigner votre corps."
    },
    {
      number: "03",
      title: "Réflexologie",
      desc: "Un toucher thérapeutique sous vos pieds pour relancer l'énergie de tout votre être."
    }
  ];

  const pillars = [
    {
      title: "Nutrition Vibrante",
      desc: "Retrouvez le plaisir d'une alimentation qui vous honore et vous régénère en profondeur."
    },
    {
      title: "Sérénité du Mental",
      desc: "Libérez-vous du tumulte du stress pour redécouvrir la clarté de votre calme intérieur."
    },
    {
      title: "Vitalité en Mouvement",
      desc: "Harmonisez votre corps à travers des rituels de mouvement doux et respectueux."
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* HERO SECTION */}
      <section style={{
        height: 'min-content',
        minHeight: '95vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '120px 24px 80px',
        position: 'relative',
        background: 'linear-gradient(to bottom, var(--sable-warm), #ffffff)'
      }}>
        <div style={{ maxWidth: '1100px', zIndex: 10 }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '48px' }} className="stagger-1">
            <img src="/images/logo-inessence.png" alt="Logo" style={{ width: '130px', height: '130px', objectFit: 'contain' }} />
          </div>
          <span className="stagger-1" style={{
            fontSize: '0.9rem',
            fontWeight: 700,
            letterSpacing: '6px',
            textTransform: 'uppercase',
            color: 'var(--gold-warm)',
            marginBottom: '32px',
            display: 'block'
          }}>
            L'excellence de la santé naturelle
          </span>
          <h1 className="stagger-2" style={{
            marginBottom: '40px',
            lineHeight: 1.0,
            letterSpacing: '-0.04em'
          }}>
            Cultivez votre <span className="text-sauge italic">Équilibre</span> <br />
            à Miramas
          </h1>
          <p className="stagger-3" style={{
            fontSize: '1.5rem',
            color: 'var(--text-muted)',
            maxWidth: '850px',
            margin: '0 auto 64px',
            lineHeight: 1.6,
            fontWeight: 300
          }}>
            Bienvenue dans un espace de ressourcement dédié à votre vitalité globale. <br />
            Une approche de santé holistique pour honorer votre essence originelle.
          </p>
          <div style={{ display: 'flex', gap: '24px', justifyContent: 'center' }} className="stagger-3">
            <Link href="/contact" className="btn-premium" style={{ padding: '20px 48px', fontSize: '1.1rem' }}>
              REPRENDRE SON SOUFFLE
            </Link>
            <Link href="#methode" className="btn-premium btn-outline" style={{ padding: '20px 48px', fontSize: '1.1rem', backgroundColor: 'rgba(255,255,255,0.5)' }}>
              L'APPROCHE ZEN
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION DEFINITION */}
      <section id="methode" style={{ padding: '160px 0', backgroundColor: 'var(--white)' }}>
        <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
          <h2 className="font-serif" style={{ marginBottom: '48px' }}>L'Art de <span className="text-gold italic">Guérir</span> par la Nature</h2>
          <p style={{ fontSize: '1.4rem', lineHeight: 1.9, color: 'var(--text-muted)', fontWeight: 300 }}>
            La naturopathie n'est pas seulement une médecine douce, c'est une philosophie de vie.
            Elle nous enseigne à écouter les soupirs de notre corps avant qu'ils ne deviennent des cris.
          </p>
          <div style={{ marginTop: '60px', height: '1px', width: '120px', background: 'var(--gold-vibrant)', margin: '60px auto' }} />
          <p style={{ fontSize: '1.2rem', opacity: 0.8, color: 'var(--text-main)', letterSpacing: '0.02em' }}>
            Je vous accompagne avec bienveillance dans le sud de la France pour réveiller le médecin intérieur qui sommeille en vous.
          </p>
        </div>
      </section>

      {/* SECTION LES 3 PILIERS MAJEURS */}
      <section style={{ padding: '160px 0', backgroundColor: 'var(--bg-secondary)', borderRadius: '120px 120px 0 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '100px' }}>
            <h2 className="font-serif" style={{ marginBottom: '24px' }}>Les <span className="text-sauge">Fondations</span> de ma Pratique</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', fontWeight: 300 }}>Un socle immuable pour votre renaissance personnelle.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '48px' }}>
            {pillars.map((pillar, idx) => (
              <div key={idx} style={{
                padding: '64px 48px',
                backgroundColor: 'var(--white)',
                borderRadius: '40px',
                boxShadow: 'var(--shadow-soft)',
                textAlign: 'center',
                border: '1px solid rgba(0,0,0,0.01)'
              }} className="hover-lift">
                <h3 className="font-serif" style={{ fontSize: '1.8rem', marginBottom: '28px', color: 'var(--sauge-dark)' }}>{pillar.title}</h3>
                <p style={{ lineHeight: 1.9, opacity: 0.7, fontSize: '1.05rem', fontWeight: 300 }}>{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION TECHNIQUES DETAILLEES (ZIG-ZAG FEEL) */}
      <section style={{ padding: '160px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center', marginBottom: '140px' }}>
            <div>
              <h2 className="font-serif" style={{ marginBottom: '40px' }}>Une synergie de <span className="text-gold">Savoirs</span></h2>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '32px' }}>
                J'allie la précision de la science moderne à la poésie des remèdes naturels pour créer votre protocole unique.
              </p>
              <div style={{ display: 'grid', gap: '24px' }}>
                {techniques.map((tech, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                    <span className="font-serif" style={{ fontSize: '1.5rem', color: 'var(--gold-warm)', fontWeight: 700 }}>{tech.number}.</span>
                    <div>
                      <h4 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>{tech.title}</h4>
                      <p style={{ opacity: 0.6, fontSize: '0.95rem' }}>{tech.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ borderRadius: '48px', overflow: 'hidden', boxShadow: 'var(--shadow-soft)' }}>
              <img src="/images/stress_relief_zen_1772494485058.png" alt="Sérénité" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link href="/techniques" className="text-sauge font-bold tracking-widest hover:text-gold transition-colors" style={{ fontSize: '0.9rem' }}>
              EXPLORER TOUTES MES TECHNIQUES →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION ZONES D'INTERVENTION */}
      <section id="villes" style={{ padding: '160px 0', backgroundColor: 'var(--sable-warm)', borderRadius: '0 0 120px 120px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '100px' }}>
            <h2 className="font-serif">À votre <span className="text-sauge">rencontre</span> en Provence</h2>
            <p style={{ color: 'var(--text-muted)', marginTop: '24px', fontSize: '1.3rem', fontWeight: 300 }}>
              Je vous accueille à **Miramas**, à votre domicile ou par la magie de la visioconférence.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: '16px'
          }}>
            {CITIES.slice(0, 12).map(city => (
              <a
                key={city}
                href={`/villes/${slugify(city)}`}
                className="bg-white p-6 rounded-2xl text-center text-sm shadow-sm hover:shadow-md transition-all hover:text-gold"
                style={{ border: '1px solid rgba(0,0,0,0.02)', fontWeight: 500 }}
              >
                Naturopathe {city}
              </a>
            ))}
            <Link href="#villes" className="p-6 rounded-2xl text-center text-sm border-dashed border-2 flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity">
              Et 30 autres villes alentours
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section style={{ padding: '180px 0', textAlign: 'center', background: 'var(--text-main)', color: 'var(--white)' }}>
        <div className="container">
          <h2 className="font-serif" style={{ fontSize: '4.5rem', marginBottom: '48px', color: 'var(--white)' }}>
            Retrouvez <span className="italic text-gold">l'Essence</span>
          </h2>
          <p style={{ maxWidth: '800px', margin: '0 auto 72px', fontSize: '1.4rem', opacity: 0.8, lineHeight: 1.8, fontWeight: 300 }}>
            Votre voyage vers une santé vibrante commence par un simple échange. <br />
            Oserez-vous prendre ce premier temps pour vous ?
          </p>
          <Link href="/contact" className="btn-premium" style={{ padding: '28px 80px', fontSize: '1.3rem', backgroundColor: 'var(--gold-warm)', color: 'var(--text-main)', borderRadius: '100px' }}>
            PRENDRE RENDEZ-VOUS
          </Link>
        </div>
      </section>

      {/* MEDICAL DISCLAIMER */}
      <footer style={{ padding: '80px 0', backgroundColor: 'var(--white)' }}>
        <div className="container text-center">
          <div style={{ marginBottom: '40px' }}>
            <img src="/images/logo-inessence.png" alt="Logo" style={{ width: '80px', opacity: 0.4 }} />
          </div>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', maxWidth: '950px', margin: '0 auto', lineHeight: 1.9, opacity: 0.6, fontWeight: 300 }}>
            <strong>Équilibre & Responsabilité :</strong> La naturopathie est une discipline d'accompagnement vers le bien-être.
            Mes conseils ne constituent pas une prescription médicale et ne se substituent en aucun cas à un diagnostic ou un traitement prescrit par un médecin.
          </p>
          <p style={{ marginTop: '56px', fontSize: '0.85rem', opacity: 0.3, letterSpacing: '1px' }}>
            © {new Date().getFullYear()} INESSENCE – L'ART DE LA SANTÉ NATURELLE
          </p>
        </div>
      </footer >
    </div>
  );
}
