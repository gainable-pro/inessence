export default function LegalPage() {
    return (
        <div className="container" style={{ padding: '160px 24px', maxWidth: '800px' }}>
            <h1 className="font-serif typewriter" style={{ fontSize: '3rem', marginBottom: '60px' }}>Mentions <span className="text-sauge">Légales</span></h1>

            <div style={{ display: 'grid', gap: '40px', lineHeight: 1.8, color: 'var(--text-muted)' }}>
                <section>
                    <h2 className="font-serif" style={{ color: 'var(--text-main)', marginBottom: '20px' }}>Édition du site</h2>
                    <p>
                        Le présent site est édité par : <strong>INESSENCE</strong><br />
                        Siège social : 6 rue pierre tristani, 13140 Miramas<br />
                        Directeur de la publication : [Votre Nom]
                    </p>
                </section>

                <section>
                    <h2 className="font-serif" style={{ color: 'var(--text-main)', marginBottom: '20px' }}>Hébergement</h2>
                    <p>
                        Le site est hébergé par : <strong>Vercel Inc.</strong><br />
                        Adresse : 340 S Lemon Ave #4133 Walnut, CA 91789<br />
                        Site web : https://vercel.com
                    </p>
                </section>

                <section>
                    <h2 className="font-serif" style={{ color: 'var(--text-main)', marginBottom: '20px' }}>Propriété intellectuelle</h2>
                    <p>
                        L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                    </p>
                </section>

                <section>
                    <h2 className="font-serif" style={{ color: 'var(--text-main)', marginBottom: '20px' }}>Avertissement</h2>
                    <p>
                        La naturopathie ne remplace en aucun cas un avis médical. Les informations contenues sur ce site ont pour but d'améliorer votre hygiène de vie et votre santé globale via des méthodes naturelles. Ne jamais arrêter un traitement médical sans l'avis de votre médecin.
                    </p>
                </section>
            </div>
        </div>
    );
}
