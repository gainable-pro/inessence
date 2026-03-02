import { CITIES, slugify } from "@/lib/data";

export default function Home() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section style={{
        height: 'calc(100vh - var(--header-height))',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '0 24px',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '900px' }}>
          <span className="text-sauge" style={{
            fontSize: '0.9rem',
            fontWeight: 600,
            letterSpacing: '4px',
            textTransform: 'uppercase',
            marginBottom: '24px',
            display: 'block'
          }}>
            Cabinet de Naturopathie & Bien-être
          </span>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
            marginBottom: '32px',
            color: 'var(--text-main)',
            lineHeight: 1.1
          }}>
            Retrouvez votre <span className="text-gold italic">Équilibre</span> Naturel.
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: 'var(--text-muted)',
            maxWidth: '650px',
            margin: '0 auto 48px',
            lineHeight: 1.8
          }}>
            Accompagnement holistique personnalisé à Miramas, en Pays de Salon et en visioconférence pour une santé durable et vibrante.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <a href="/contact" className="btn-premium">PRENDRE RENDEZ-VOUS</a>
            <a href="#villes" className="btn-premium btn-outline">VILLES D'INTERVENTION</a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div style={{
          position: 'absolute',
          bottom: '40px',
          fontSize: '0.7rem',
          letterSpacing: '2px',
          opacity: 0.5,
          textTransform: 'uppercase'
        }}>
          Découvrir l'approche
        </div>
      </section>

      {/* Methode Section */}
      <section id="methode" style={{ padding: 'var(--section-padding) 0', backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Une approche <span className="text-sauge">Holistique</span></h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '32px', fontSize: '1.1rem' }}>
                La naturopathie est une médecine traditionnelle reconnue par l'OMS qui vise à équilibrer le fonctionnement de l'organisme par des moyens naturels. Mon rôle est de vous guider vers l'autonomie santé.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {[
                  { title: "Bilan Vitalité", desc: "Une analyse complète de votre terrain et de votre hygiène de vie." },
                  { title: "Accompagnement Sur-mesure", desc: "Un programme d'hygiène de vie (PHV) adapté à votre quotidien." },
                  { title: "Suivi Évolutif", desc: "Des ajustements réguliers pour ancrer les changements dans la durée." }
                ].map((item, idx) => (
                  <div key={idx}>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '8px', color: 'var(--accent-gold)' }}>0{idx + 1}. {item.title}</h4>
                    <p style={{ fontSize: '0.95rem', opacity: 0.8 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{
              backgroundColor: 'var(--bg-secondary)',
              aspectRatio: '1/1',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                width: '80%',
                height: '80%',
                border: '1px solid var(--accent-gold)',
                position: 'absolute',
                zIndex: 1
              }} />
              <p style={{ fontStyle: 'italic', color: 'var(--accent-gold)', padding: '40px', textAlign: 'center', zIndex: 2 }}>
                Architecture du bien-être : Redessinons ensemble votre vitalité au quotidien.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Villes Section */}
      <section id="villes" style={{ padding: 'var(--section-padding) 0', backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Secteurs d'intervention en <span className="text-sauge">Provence</span></h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Retrouvez mon cabinet à Miramas ou optez pour une consultation dans votre ville.</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
            gap: '12px'
          }}>
            {CITIES.map(city => (
              <a
                key={city}
                href={`/villes/${slugify(city)}`}
                className="bg-white p-4 rounded text-center text-sm shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
                style={{ border: '1px solid rgba(0,0,0,0.03)' }}
              >
                Naturopathe {city}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer Medical */}
      <section style={{ padding: '40px 0', borderTop: '1px solid rgba(0,0,0,0.05)', backgroundColor: '#fff9f4' }}>
        <div className="container text-center">
          <p style={{ fontSize: '0.85rem', color: '#a08060', maxWidth: '800px', margin: '0 auto' }}>
            <strong>Note importante :</strong> La naturopathie ne remplace pas un avis médical. Elle s'inscrit dans une démarche de prévention et d'optimisation de la santé en complément de la médecine allopathique.
          </p>
        </div>
      </section>
    </div>
  );
}
