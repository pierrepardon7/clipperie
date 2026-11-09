const EMAIL = "pierrepardon7@gmail.com";
const MAILTO =
  "mailto:" +
  EMAIL +
  "?subject=" +
  encodeURIComponent("Clipperie : je réserve ma place") +
  "&body=" +
  encodeURIComponent(
    "Bonjour,\n\nJe veux réserver ma place.\nFormule (Starter / Pro / Studio) :\nType de contenu (live, podcast, formation) :\nLien de ma dernière vidéo :\n"
  );

const ENCRE = "#1B1612";
const CREME = "#F5EFE3";
const ACCENT = "#D9461E";
const GRIS = "#6B6258";
const TRAIT = "#DDD2BC";

const titre = {
  fontFamily: "var(--font-titre), Georgia, serif",
  fontWeight: 800,
  lineHeight: 1.1,
  margin: 0,
} as const;

const bouton = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: 56,
  padding: "0 24px",
  background: ACCENT,
  color: "#fff",
  fontSize: "1.125rem",
  fontWeight: 700,
  borderRadius: 12,
  textDecoration: "none",
} as const;

const section = { padding: "40px 20px", maxWidth: 560, margin: "0 auto" } as const;

const formules = [
  { nom: "Starter", prix: 29, clips: 30, jour: "0,97", vedette: false },
  { nom: "Pro", prix: 49, clips: 60, jour: "1,63", vedette: true },
  { nom: "Studio", prix: 99, clips: 150, jour: "3,30", vedette: false },
];

const faq = [
  {
    q: "Est-ce que ça marche pour mon cas ?",
    r: "Si tu publies déjà du format long (live, podcast, formation) avec de la parole, oui. Envoie-moi un lien avant de réserver : je te dis honnêtement si ton contenu s'y prête.",
  },
  {
    q: "Combien de temps ça me prend ?",
    r: "Deux minutes : tu m'envoies ton fichier ou ton lien. Tu reçois tes clips sous 48 h, prêts à publier.",
  },
  {
    q: "Et si je veux arrêter ?",
    r: "Tu arrêtes quand tu veux, sans engagement. Et pendant 14 jours, si ça ne te convient pas, tu es remboursé.",
  },
  {
    q: "À quoi sert exactement ce que je paie ?",
    r: "À recevoir chaque mois ton quota de clips verticaux de 30 à 60 secondes, avec sous-titres incrustés et un titre proposé pour chacun.",
  },
];

export default function Page() {
  return (
    <main>
      <section style={{ ...section, paddingTop: 32 }}>
        <p style={{ margin: "0 0 16px", fontWeight: 700, color: ACCENT }}>
          Clipperie
        </p>
        <h1 style={{ ...titre, fontSize: "2.25rem" }}>
          Un live de deux heures devient trente clips verticaux.
        </h1>
        <p style={{ fontSize: "1.125rem", margin: "16px 0 24px" }}>
          Dépose ta vidéo. Reçois des clips sous-titrés, prêts pour TikTok,
          Reels et Shorts, sous 48 h.
        </p>
        <a href={MAILTO} style={bouton}>
          Réserver ma place
        </a>
        <p style={{ margin: "12px 0 0", fontSize: "0.9375rem", color: GRIS }}>
          Satisfait ou remboursé 14 jours. Sans engagement, résiliable à tout
          moment.
        </p>
      </section>

      <section style={{ background: ENCRE, color: CREME }}>
        <div style={section}>
          <h2 style={{ ...titre, fontSize: "1.625rem" }}>
            Découper une vidéo prend une journée entière.
          </h2>
          <p style={{ margin: "16px 0 0" }}>
            Alors tu ne le fais pas. Tes heures de contenu dorment, et le
            format court, le seul qui amène de nouvelles audiences, reste vide.
          </p>
        </div>
      </section>

      <section style={section}>
        <h2 style={{ ...titre, fontSize: "1.625rem", marginBottom: 20 }}>
          Ce que tu reçois
        </h2>
        {[
          ["Les bons moments, trouvés pour toi", "Les passages forts de ta vidéo sont repérés et découpés en verticales de 30 à 60 secondes."],
          ["Sous-titres et titre inclus", "Chaque clip a ses sous-titres incrustés et un titre proposé."],
          ["Prêt à publier", "Tout te revient en un lot. Tu n'as plus qu'à poster."],
        ].map(([t, d]) => (
          <div
            key={t}
            style={{
              border: "1px solid " + TRAIT,
              borderRadius: 12,
              padding: 16,
              marginBottom: 12,
            }}
          >
            <p style={{ margin: 0, fontWeight: 700 }}>{t}</p>
            <p style={{ margin: "4px 0 0", color: GRIS }}>{d}</p>
          </div>
        ))}
      </section>

      <section style={section}>
        <h2 style={{ ...titre, fontSize: "1.625rem", marginBottom: 20 }}>
          Les formules
        </h2>
        {formules.map((f) => (
          <div
            key={f.nom}
            style={{
              border: f.vedette ? "2px solid " + ACCENT : "1px solid " + TRAIT,
              background: f.vedette ? "#fff" : "transparent",
              borderRadius: 12,
              padding: 20,
              marginBottom: 12,
            }}
          >
            {f.vedette && (
              <p style={{ margin: "0 0 4px", color: ACCENT, fontWeight: 700, fontSize: "0.875rem" }}>
                La plus choisie
              </p>
            )}
            <p style={{ ...titre, fontSize: "1.25rem" }}>{f.nom}</p>
            <p style={{ margin: "8px 0 0" }}>
              <span style={{ ...titre, fontSize: "2rem" }}>{f.prix} €</span>
              <span style={{ color: GRIS }}> / mois</span>
            </p>
            <p style={{ margin: "4px 0 0", color: GRIS }}>
              {f.clips} clips par mois, soit {f.jour} € par jour
            </p>
          </div>
        ))}
        <a href={MAILTO} style={{ ...bouton, marginTop: 16 }}>
          Réserver ma place
        </a>
        <p style={{ margin: "12px 0 0", fontSize: "0.9375rem", color: GRIS }}>
          Sans engagement, résiliable à tout moment.
        </p>
      </section>

      <section style={{ background: "#fff" }}>
        <div style={section}>
          <h2 style={{ ...titre, fontSize: "1.625rem" }}>
            Satisfait ou remboursé, 14 jours
          </h2>
          <p style={{ margin: "12px 0 0" }}>
            Si les clips ne te conviennent pas, écris-moi à {EMAIL} dans les 14
            jours suivant ton achat. Je te rembourse intégralement, sous 5 jours
            ouvrés, sans justification à fournir.
          </p>
        </div>
      </section>

      <section style={section}>
        <h2 style={{ ...titre, fontSize: "1.625rem", marginBottom: 20 }}>
          Questions fréquentes
        </h2>
        {faq.map((x) => (
          <div key={x.q} style={{ marginBottom: 20 }}>
            <p style={{ margin: 0, fontWeight: 700 }}>{x.q}</p>
            <p style={{ margin: "4px 0 0", color: GRIS }}>{x.r}</p>
          </div>
        ))}
      </section>

      <footer style={{ ...section, color: GRIS, fontSize: "0.875rem" }}>
        <p style={{ margin: 0 }}>Clipperie · {EMAIL}</p>
      </footer>
    </main>
  );
}
