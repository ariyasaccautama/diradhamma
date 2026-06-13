import { weddingData } from "../../data/wedding";

export default function Location() {
  return (
    <section className="py-24 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">
        Jadwal & Lokasi Acara
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

        {/* Pemberkatan */}
        <div
          className="
            bg-[#141414]
            border
            border-red-900/30
            hover:border-red-600
            transition
            duration-300
            rounded-2xl
            p-6
          "
        >
          <h3 className="text-2xl font-bold mb-2">
            {weddingData.event.akad.location.venue}
          </h3>

          <p className="text-red-500 font-semibold mb-4">
            Pemberkatan - Sabtu, 8 Agustus 2026
          </p>

          <p className="text-gray-300 mb-6 leading-relaxed">
            {weddingData.event.akad.location.address}
          </p>

          <div className="overflow-hidden rounded-xl border border-zinc-800 mb-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.7032622176534!2d106.98607227316857!3d-6.302664861679031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69920e14e83bcf%3A0xd9e8ecb5c3168997!2sSTI%20Vih%C4%81ra%20Vipassan%C4%81%20Kusalacitta!5e0!3m2!1sid!2sid!4v1780206148629!5m2!1sid!2sid"
              width="100%"
              height="220"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="text-center">
            <a
              href={weddingData.event.akad.location.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block
                bg-red-600
                hover:bg-red-700
                px-6
                py-3
                rounded-lg
                font-bold
                transition
              "
            >
              📍 Buka Google Maps
            </a>
          </div>
        </div>

        {/* Resepsi */}
        <div
          className="
            bg-[#141414]
            border
            border-red-900/30
            hover:border-red-600
            transition
            duration-300
            rounded-2xl
            p-6
          "
        >
          <h3 className="text-2xl font-bold mb-2">
            {weddingData.event.reception.location.venue}
          </h3>

          <p className="text-red-500 font-semibold mb-4">
            Resepsi
          </p>

          <p className="text-gray-300 mb-6 leading-relaxed">
            {weddingData.event.reception.location.address}
          </p>

          <div className="overflow-hidden rounded-xl border border-zinc-800 mb-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.955882207236!2d106.98236897316806!3d-6.269532661372033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698dc0c2ea3dbd%3A0x705bfac29d0981a7!2sOmah%20Kebon%20Bekasi!5e0!3m2!1sid!2sid!4v1780209000000!5m2!1sid!2sid"
              width="100%"
              height="220"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="text-center">
            <a
              href={
                weddingData.event.reception.location.maps
              }
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block
                bg-red-600
                hover:bg-red-700
                px-6
                py-3
                rounded-lg
                font-bold
                transition
              "
            >
              📍 Buka Google Maps
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}