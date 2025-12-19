import Card from "../components/Card";
import AdCard from "../components/AdCard";


export default function Home() {
  return (
    <main className="bg-gray-100">
      {/* HERO */}
      <section className="bg-green-700 text-white text-center py-16 px-4">
        <h1 className="text-4xl font-bold mb-4">
          Utforsk naturen i Utopia
        </h1>
        <p className="max-w-xl mx-auto text-lg mb-6">
          Finn turer, hytter og fellesopplevelser for hele familien.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-white text-green-700 px-6 py-2 rounded font-semibold hover:bg-gray-100">
            Se turer
          </button>
          <button className="border border-white px-6 py-2 rounded hover:bg-green-600">
            Finn hytter
          </button>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-6xl mx-auto p-8 text-center">
        <h2 className="text-2xl font-bold text-green-700 mb-4">
          Velkommen til TuristNet
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          TuristNet er en UI-prototype for en turistorganisasjon.
          Her kan brukere enkelt finne informasjon om turer,
          overnatting og fellesarrangementer.
        </p>
      </section>
      
         {/* ANNONER */}
      <section className="max-w-6xl mx-auto px-8 pb-12">
        <div className="flex items-end justify-between gap-4 mb-4">
          <div>
            <h2 className="text-2xl font-bold text-green-700">Annonser</h2>
            <p className="text-gray-600">
              Kjøp, salg og info for friluftsliv.
            </p>
          </div>

          <button className="text-green-700 font-semibold hover:underline">
            Se alle annonser →
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <AdCard
            title="Leie: Familiehytte ved fjellvann"
            location="Utopia • Nordmarka"
            date="19. des 2025"
            price="900 kr/natt"
            tag="Leie"
          />
          <AdCard
            title="Salg: Tursekk 60L (lite brukt)"
            location="Utopia • Sentrum"
            date="18. des 2025"
            price="650 kr"
            tag="Salg"
          />
          <AdCard
            title="Fellestur: Nybegynner tur i skogen"
            location="Utopia • Skogstien"
            date="21. des 2025"
            price="Gratis"
            tag="Fellestur"
          />
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto px-8 pb-12">
        <div className="grid md:grid-cols-3 gap-6">
          <Card
            title="Turer"
            text="Utforsk merkede turer i fjell, skog og kyst."
          />
          <Card
            title="Hytter"
            text="Finn hytter med ulike fasiliteter og beliggenhet."
          />
          <Card
            title="Fellesturer"
            text="Delta på organiserte turer med andre friluftsinteresserte."
          />
        </div>
      </section>

      {/* INFO STRIP */}
      <section className="bg-white py-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center px-8">
          <div>
            <h3 className="text-xl font-bold text-green-700">200+ turer</h3>
            <p className="text-gray-600">Over hele landet</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-green-700">50+ hytter</h3>
            <p className="text-gray-600">For korte og lange opphold</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-green-700">Åpent for alle</h3>
            <p className="text-gray-600">Barn, voksne og erfarne turgåere</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-200 text-center py-6 text-sm text-gray-600">
        © 2025 TuristNet – UI-prototype laget i React
      </footer>
    </main>
  );
}
