export default function ConfidentialitePage() {
    return (
        <div className="container" style={{ padding: '160px 24px', maxWidth: '800px' }}>
            <h1 className="font-serif typewriter" style={{ fontSize: '3rem', marginBottom: '60px' }}>Politique de <span className="text-sauge">Confidentialité</span></h1>

            <div style={{ display: 'grid', gap: '40px', lineHeight: 1.8, color: 'var(--text-muted)' }}>
                <section>
                    <h2 className="font-serif" style={{ color: 'var(--text-main)', marginBottom: '20px' }}>Collecte des données</h2>
                    <p>
                        Les informations recueillies via le formulaire de contact (nom, prénom, email, téléphone) sont destinées à l'usage exclusif de INESSENCE pour répondre à vos demandes de consultation ou d'information.
                    </p>
                </section>

                <section>
                    <h2 className="font-serif" style={{ color: 'var(--text-main)', marginBottom: '20px' }}>Utilisation des données</h2>
                    <p>
                        Vos données ne sont jamais cédées, vendues ou échangées à des tiers. Elles sont conservées le temps nécessaire au traitement de votre demande et à la gestion de nos échanges.
                    </p>
                </section>

                <section>
                    <h2 className="font-serif" style={{ color: 'var(--text-main)', marginBottom: '20px' }}>Vos droits</h2>
                    <p>
                        Conformément au Règlement général sur la protection des données (RGPD), vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ce droit, veuillez nous contacter via le formulaire de contact ou à l'adresse du cabinet.
                    </p>
                </section>

                <section>
                    <h2 className="font-serif" style={{ color: 'var(--text-main)', marginBottom: '20px' }}>Cookies</h2>
                    <p>
                        Ce site utilise des cookies techniques nécessaires à son bon fonctionnement et à l'analyse de son audience de manière anonyme.
                    </p>
                </section>
            </div>
        </div>
    );
}
