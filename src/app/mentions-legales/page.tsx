export default function LegalPage() {
    return (
        <div className="container" style={{ padding: '160px 24px', maxWidth: '800px' }}>
            <h1 className="font-serif typewriter" style={{ fontSize: '3rem', marginBottom: '60px' }}>Mentions <span className="text-sauge">Légales</span></h1>

            <div style={{ display: 'grid', gap: '50px', lineHeight: 1.8, color: 'var(--text-muted)' }}>
                <section>
                    <h2 className="font-serif" style={{ color: 'var(--text-main)', marginBottom: '20px', borderBottom: '1px solid #e2e8f0', paddingBottom: '10px' }}>1. Éditeur du site</h2>
                    <div style={{ backgroundColor: '#f8fafc', padding: '24px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                        <p style={{ marginBottom: '10px' }}>Le présent site est édité par :</p>
                        <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <li><strong>Raison sociale :</strong> Ines FERNANDEZ (INESSENCE)</li>
                            <li><strong>Responsable de publication :</strong> Ines Fernandez</li>
                            <li><strong>Adresse postale :</strong> INESSENCE, 1545 CHEMIN DES RABEYROLLES, 13140 MIRAMAS</li>
                            <li><strong>SIREN :</strong> 994 680 247</li>
                            <li><strong>SIRET (Siège social) :</strong> 994 680 247 00016</li>
                            <li><strong>Activité principale (NAF) :</strong> 86.96Y (Activités de médecine traditionnelle, complémentaire et alternative) / 96.09Z</li>
                        </ul>
                    </div>
                </section>

                <section>
                    <h2 className="font-serif" style={{ color: 'var(--text-main)', marginBottom: '20px', borderBottom: '1px solid #e2e8f0', paddingBottom: '10px' }}>2. Création, Conception et Développement</h2>
                    <div style={{ backgroundColor: '#f8fafc', padding: '24px', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex', gap: '30px', alignItems: 'center', flexWrap: 'wrap' }}>
                        <div style={{ flex: '1 1 min-content' }}>
                            <img 
                                src="/images/logo-exceed.png" 
                                alt="Exceed Digital Logo" 
                                style={{ maxWidth: '200px', height: 'auto', display: 'block', marginBottom: '15px' }} 
                                onError={(e) => {
                                    // Fallback s'il n'y a pas d'image encore dans public/images
                                    e.currentTarget.style.display = 'none';
                                }}
                            />
                            <p style={{ margin: 0 }}>
                                <strong>Ce site a été conçu et réalisé par l'agence EXCEED DIGITAL.</strong>
                            </p>
                        </div>
                        <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', flex: '2 1 300px' }}>
                            <li><strong>Raison Sociale :</strong> EXCEED DIGITAL (SAS)</li>
                            <li><strong>SIREN :</strong> 101 447 944</li>
                            <li><strong>Siège Social :</strong> Rue du pourra, 13140 Miramas</li>
                            <li><strong>TVA Intracommunautaire :</strong> FR39 101447944</li>
                            <li><strong>RCS :</strong> Salon-de-Provence</li>
                            <li><strong>Code NAF / APE :</strong> 6201Z (Programmation informatique)</li>
                            <li><strong>Site Web :</strong> <a href="https://www.exceeddigital.fr/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--sauge-dark)', fontWeight: 600 }}>www.exceeddigital.fr</a></li>
                        </ul>
                    </div>
                </section>

                <section>
                    <h2 className="font-serif" style={{ color: 'var(--text-main)', marginBottom: '20px', borderBottom: '1px solid #e2e8f0', paddingBottom: '10px' }}>3. Hébergement</h2>
                    <p>
                        Le site est hébergé par : <strong>Vercel Inc.</strong><br />
                        Adresse : 340 S Lemon Ave #4133 Walnut, CA 91789, États-Unis<br />
                        Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--sauge-dark)' }}>https://vercel.com</a>
                    </p>
                </section>

                <section>
                    <h2 className="font-serif" style={{ color: 'var(--text-main)', marginBottom: '20px', borderBottom: '1px solid #e2e8f0', paddingBottom: '10px' }}>4. Propriété intellectuelle</h2>
                    <p>
                        L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                    </p>
                </section>

                <section>
                    <h2 className="font-serif" style={{ color: 'var(--text-main)', marginBottom: '20px', borderBottom: '1px solid #e2e8f0', paddingBottom: '10px' }}>5. Avertissement médical</h2>
                    <p>
                        La naturopathie ne remplace en aucun cas un avis médical ou un traitement allopathique. 
                        Les informations contenues sur ce site ont pour but d'améliorer votre hygiène de vie et votre santé globale via des méthodes naturelles. Ne jamais arrêter ou modifier un traitement médical sans l'avis préalable de votre médecin traitant.
                    </p>
                </section>

            </div>
        </div>
    );
}
