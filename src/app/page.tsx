import Link from "next/link";
import { CITIES, slugify } from "@/lib/data";

export default function Home() {
  const techniques = [
    {
      number: "01",
      title: "Phytothérapie",
      desc: "Utilisation des plantes médicinales sous forme de tisanes, extraits ou poudres pour traiter divers maux naturellement."
    },
    {
      number: "02",
      title: "Aromathérapie",
      desc: "Emploi des huiles essentielles pour stimuler le bien-être physique et émotionnel par inhalation ou application."
    },
    {
      number: "03",
      title: "Gemmothérapie",
      desc: "Macérats de jeunes pousses et bourgeons pour revitaliser le corps et soutenir le système immunitaire."
    },
    {
      number: "04",
      title: "Réflexologie plantaire",
      desc: "Massage des zones réflexes du pied pour réduire le stress et améliorer la circulation générale."
    },
    {
      number: "05",
      title: "Techniques vibratoires",
      desc: "Magnétisme et chromothérapie pour rééquilibrer les énergies et soulager les tensions profondes."
    },
    {
      number: "06",
      title: "Massages de Bien-être",
      desc: "Massage ayurvédique pour l'harmonie corps-esprit ou massage facial Kobido pour la détente et la jeunesse."
    },
    {
      number: "07",
      title: "Fleurs de Bach",
      desc: "Essences florales pour traiter les émotions et rétablir l'équilibre intérieur (anxiété, tristesse, colère)."
    }
  ];

  const pillars = [
    {
      title: "Rééquilibrage alimentaire",
      desc: "Une alimentation adaptée à vos besoins spécifiques, vos goûts et vos intolérances pour optimiser votre capital santé."
    },
    {
      title: "Gestion du stress",
      desc: "Techniques de relaxation et de méditation pour apaiser le mental et retrouver une sérénité durable."
    },
    {
      title: "Activité physique",
      desc: "Intégration d'activités adaptées à votre état de santé pour stimuler votre vitalité sans épuisement."
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* HERO SECTION */}
      <section style={{
        height: 'min-content',
        minHeight: '85vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '120px 24px 80px',
        position: 'relative',
        background: 'linear-gradient(to bottom, var(--sable-warm), #ffffff)'
      }}>
        <div style={{ maxWidth: '1000px', zIndex: 10 }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
            <img src="/images/logo-inessence.png" alt="Logo" style={{ width: '120px', height: '120px', objectFit: 'contain' }} />
          </div>
          <span style={{
            fontSize: '1rem',
            fontWeight: 700,
            letterSpacing: '5px',
            textTransform: 'uppercase',
            color: 'var(--gold-warm)',
            marginBottom: '24px',
            display: 'block'
          }}>
            Cabinet de Naturopathie & Vitalité
          </span>
          <h1 style={{
            fontSize: 'clamp(3rem, 10vw, 5.5rem)',
            marginBottom: '32px',
            lineHeight: 1.05,
            letterSpacing: '-2px'
          }}>
            Naturopathe à <span className="text-sauge">Miramas</span>
          </h1>
          <p style={{
            fontSize: '1.4rem',
            color: 'var(--text-muted)',
            maxWidth: '800px',
            margin: '0 auto 56px',
            lineHeight: 1.7,
            fontWeight: 300
          }}>
            Retrouvez votre équilibre par l'approche de santé globale. <br />
            Accompagnement personnalisé pour cultiver vos ressources d'autoguérison.
          </p>
          <div style={{ display: 'flex', gap: '24px', justifyContent: 'center' }}>
            <Link href="/contact" className="btn-premium" style={{ padding: '18px 40px', fontSize: '1.1rem' }}>
              FAIRE MA DEMANDE
            </Link>
            <Link href="#methode" className="btn-premium btn-outline" style={{ padding: '18px 40px', fontSize: '1.1rem' }}>
              DÉCOUVRIR L'APPROCHE
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION DEFINITION */}
      <section id="methode" style={{ padding: '120px 0', backgroundColor: 'var(--white)' }}>
        <div className="container" style={{ maxWidth: '850px', textAlign: 'center' }}>
          <h2 className="font-serif" style={{ fontSize: '3rem', marginBottom: '40px' }}>Une approche globale de la <span className="text-gold">SANTÉ</span></h2>
          <p style={{ fontSize: '1.25rem', lineHeight: 1.9, color: 'var(--text-muted)' }}>
            La naturopathie est une approche de santé globale qui vise à encourager l'autoguérison du corps en utilisant des méthodes naturelles.
            Elle se fonde sur le principe que chaque individu a en lui les ressources nécessaires pour retrouver son équilibre.
          </p>
          <div style={{ marginTop: '48px', height: '2px', width: '80px', background: 'var(--gold-vibrant)', margin: '48px auto' }} />
          <p style={{ fontSize: '1.1rem', opacity: 0.8 }}>
            Mon rôle est d’accompagner chaque personne vers une meilleure compréhension de son corps, de son mode de vie
            et des choix qu'elle peut faire pour améliorer son bien-être au quotidien.
          </p>
        </div>
      </section>

      {/* SECTION LES 3 PILIERS MAJEURS */}
      <section style={{ padding: '120px 0', backgroundColor: 'var(--sable-dark)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 className="font-serif" style={{ fontSize: '3.5rem', marginBottom: '16px' }}>Les <span className="text-sauge">3 Piliers</span> de ma pratique</h2>
            <p style={{ color: 'var(--text-muted)' }}>Le socle fondamental pour une transformation durable.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
            {pillars.map((pillar, idx) => (
              <div key={idx} style={{
                padding: '50px 40px',
                backgroundColor: 'var(--white)',
                borderRadius: '24px',
                boxShadow: 'var(--shadow-soft)',
                textAlign: 'center',
                border: '1px solid rgba(0,0,0,0.02)'
              }}>
                <h3 className="font-serif" style={{ fontSize: '1.8rem', marginBottom: '24px', color: 'var(--sauge-dark)' }}>{pillar.title}</h3>
                <p style={{ lineHeight: 1.8, opacity: 0.7 }}>{pillar.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: '60px', opacity: 0.5, fontStyle: 'italic' }}>
            "Ces techniques majeures sont la base. Toutes les autres méthodes viennent en complément selon vos besoins."
          </p>
        </div>
      </section>

      {/* SECTION TECHNIQUES DETAILLEES */}
      <section style={{ padding: '120px 0' }}>
        <div className="container">
          <div style={{ marginBottom: '80px' }}>
            <h2 className="font-serif" style={{ fontSize: '3.5rem' }}>Techniques <span className="text-gold">Complémentaires</span></h2>
            <p style={{ color: 'var(--text-muted)', marginTop: '16px', fontSize: '1.2rem' }}>Des outils naturels au service de votre vitalité.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '32px' }}>
            {techniques.map((tech, idx) => (
              <div key={idx} className="hover-lift" style={{
                padding: '40px',
                backgroundColor: 'var(--white)',
                border: '1px solid var(--sable-dark)',
                borderRadius: '16px',
                display: 'flex',
                gap: '24px'
              }}>
                <span className="font-serif" style={{ fontSize: '2.5rem', color: 'var(--sauge-light)', fontWeight: 900 }}>{tech.number}</span>
                <div>
                  <h4 style={{ fontSize: '1.3rem', marginBottom: '12px' }}>{tech.title}</h4>
                  <p style={{ fontSize: '0.95rem', lineHeight: 1.7, opacity: 0.8 }}>{tech.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION ZONES D'INTERVENTION */}
      <section id="villes" style={{ padding: '120px 0', backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 className="font-serif" style={{ fontSize: '3.5rem' }}>À votre <span className="text-sauge">écoute</span> en Provence</h2>
            <p style={{ color: 'var(--text-muted)', marginTop: '20px', fontSize: '1.2rem' }}>
              En cabinet à **Miramas**, à votre domicile ou en visioconférence.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '12px'
          }}>
            {CITIES.map(city => (
              <a
                key={city}
                href={`/villes/${slugify(city)}`}
                className="bg-white p-5 rounded-xl text-center text-sm shadow-sm hover:shadow-md transition-all hover:text-gold"
                style={{ border: '1px solid rgba(0,0,0,0.04)' }}
              >
                Naturopathe {city}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section style={{ padding: '140px 0', textAlign: 'center', background: 'var(--text-main)', color: 'var(--white)' }}>
        <div className="container">
          <h2 className="font-serif" style={{ fontSize: '4rem', marginBottom: '40px', color: 'var(--white)' }}>
            Cultivons votre <span className="italic text-gold">ÉQUILIBRE</span>
          </h2>
          <p style={{ maxWidth: '700px', margin: '0 auto 60px', fontSize: '1.3rem', opacity: 0.8, lineHeight: 1.8 }}>
            Prêt à transformer votre vitalité ? Contactez-moi pour un premier échange personnalisé.
          </p>
          <Link href="/contact" className="btn-premium" style={{ padding: '24px 60px', fontSize: '1.2rem', backgroundColor: 'var(--gold-warm)', color: 'var(--text-main)' }}>
            FAIRE MA DEMANDE DE RENDEZ-VOUS
          </Link>
        </div>
      </section>

      {/* MEDICAL DISCLAIMER */}
      <footer style={{ padding: '60px 0', borderTop: '1px solid rgba(0,0,0,0.05)', backgroundColor: 'var(--white)' }}>
        <div className="container text-center">
          <div style={{ marginBottom: '32px' }}>
            <img src="/images/logo-inessence.png" alt="Logo" style={{ width: '60px', opacity: 0.5 }} />
          </div>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', maxWidth: '900px', margin: '0 auto', lineHeight: 1.8, opacity: 0.7 }}>
            <strong>Note de santé :</strong> La naturopathie est une approche complémentaire à la médecine traditionnelle.
            Elle ne remplace pas un diagnostic médical ni un traitement en cours. N'interrompez jamais un suivi médical sans l'avis de votre médecin.
          </p>
          <p style={{ marginTop: '40px', fontSize: '0.8rem', opacity: 0.4 }}>
            © {new Date().getFullYear()} INESSENCE – Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}
