import { useState } from "react";

const DestinationsPage = () => {
  const [activeFilter, setActiveFilter] = useState("All Collections");

  const filters = ["All Collections", "Mountain Retreats", "Coastal Luxury", "Desert Safari", "International Gems"];

  const destinations = [
    { name: "Goa", price: "₹24,000", desc: "Pristine sands and sunset rhythms at our curated coastal retreats.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8KIg52psEjZinlG2FF-64bDU8zj4tpEFwJvstCgYRXYMyiXpXfDxww3jBe2xykyXvD3h3l_4PbFEmBmyjTJ_RfMWkxNSy8Y1ouGKU3zPSf_Z-ev9CudODtYUI2mq_KJIL5iBln98oXKkxLELH69hjiTcPaO_i3kSqSDUQ1a1SkQpi92esT43dHwnrQ_2voP4Bj55RJewx-deYofIAYAjEi2v8jnRTYsj8jjrz0mG7XI0N3ylrahHkydUwTNVujP8S87NEJwInFdQ" },
    { name: "Manali", price: "₹18,500", desc: "Find your peak in the heart of the Himalayas with bespoke alpine treks.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpJPSFCeqnfVal6wVuwH6Cx6A3hCSn2aS_bl6BqvHxsdsLpYgL9EkyWf9RhSvEUOpDhv62rS6xwCku6lf5IqDKlQlbcl3GmgX34MfvyTl7KbCY7OmCLui-8sz35rjT9OqQIk3DPIWkcAL55L8MY7klZvSKhHi36vcu5uxD4u0ZTImfEk7V0l6a-NHqVuKRj0dinlwD_M-ibyjqogaU3g6BVdqUaHeJRpxS_hPGVN3ytYjDnwa3Bpc4g4bZTx7il7DAuvwzqy1K_ho" },
    { name: "Dubai", price: "₹52,000", desc: "Experience ultimate grandeur where the golden desert meets the future.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1aEcVP8fdLoU80XwGZNDeJ-Y81KUEJgsbR8-0sXe1VqEYRM6wJXFo-CCOfJxnjASvhQPJzv89Ox7E6q8fizHApU1OGyBCapqq_KHzQ4W6gHA_U8GAdVPtHcx4_IGvQzYv77tYsRQGBiQ9q7eWoDyujXaPB4CRK7fU51d5NV5RnYgU3k-fSpNAZLLYyvb3uTwvGTBoYbLr_Cg8nEJXsg8nFWXcMTkfUL0Ng0jwasBdi61Rxa-ZL7l-mde2sUaHAsKN_oGEhuHjpmY" },
    { name: "Maldives", price: "₹85,000", desc: "A sanctuary of turquoise waters and absolute seclusion for the elite traveler.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCj-6rfuQqpzkouxjFv3x9ioHbgr8Ki8FO-1P3AEAhPS0vb3q0GxZmue7b7BTAmRO43L1SmiS9FKHHnl8DZExqKpiN5kqYiuY1o8Va16Hy4nRd8A6aEFd_gNOW2NbB9ozNPnN6dK3KVJ9603wuHBO3MbrWzCRchAKlouBQ9-4Sn0TSCN4dmpGP2vFSeyblW0bvgIDftDa5WHHzF932eb9n3M714vdv_BGRlXQsLo_zw5lI-hYy5cTZkCc3brFO0B9juKajoDyctbdY" },
    { name: "Kashmir", price: "₹35,000", desc: "Ethereal valleys and slow shikara rides on the paradise on earth.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNlP-vxR9L2IirHvtUtK-IeUWPzdQq6qwQ_bAqYtH6-ZV8m3pAZFamVbyvhPAssaEQRhvjJwBzc7wBAPFed10on54Moc-kaopEM5oToKb4k4URhPMx7xL0q6NiPGh61JSmVlkbFjYIImLhjgAcR5za-q8RVn39Ugyro-0YllPK5Qluy2hp4G_NPiXApYP14V7N2lqKkUSb4Po7LTMjAgbdC1pv60bXQM7SLxpvkqNYmRI-GYf0VEmeNWbbIIkUqiUj-6AtQn5Pf3s" },
    { name: "Rajasthan", price: "₹28,000", desc: "Walk through the corridors of history in the land of kings and vibrant sands.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOHD5qdTHi6zi6R5jK8ZxeLLxnlxmsVWrKmlsjMHT4vdq3Yz1l2EMnsX61EKGjuIqGwAnDZdhQy-GMrLLefDtOXJzO6SXWTVE6r2XFlg6NV0oT7NdqXnRnv72wMAAvdgl1_1ZfQrvCMnULtx517q8o_BPAjMJHEF8ulFDfc4eDmK2XbwBOjuQlUvyI1UEE1pMYqYWggNfS8s4rdUlAZ9PJG4JcPUynyv6DOK8YYRNnp78yjuQm-GBATQY5hN5YEeEsXx7qR3Xsamc" },
  ];

  const faqs = [
    { q: "What is the best time to book international packages?", a: "We recommend booking at least 3-4 months in advance for premium destinations like the Maldives or Dubai to ensure luxury villa availability and the most competitive flight rates." },
    { q: "Do you offer customized itinerary planning?", a: "Absolutely. Our concierge team specializes in bespoke travel arrangements, allowing you to tailor every meal, excursion, and transfer to your specific preference." },
    { q: "What safety protocols are in place for mountain treks?", a: "For destinations like Manali and Kashmir, we provide certified guides, emergency communication equipment, and health assessments to ensure a secure yet exhilarating adventure." },
  ];

  return (
    <main className="pt-24">
      {/* Hero & Filter */}
      <section className="min-h-[409px] flex flex-col justify-end px-8 max-w-7xl mx-auto pb-12">
        <h1 className="font-headline text-7xl md:text-8xl lg:text-9xl tracking-tight leading-[0.9] mb-12">
          Curated <br />
          <span className="italic text-primary">Escapes</span>
        </h1>
        <div className="flex flex-wrap items-center gap-4 py-8 border-t border-outline-variant/20">
          <span className="font-label text-xs uppercase tracking-widest text-outline mr-4">Filter By Experience</span>
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-6 py-2 rounded-full font-label text-sm transition-all ${
                activeFilter === f
                  ? "bg-secondary text-on-secondary"
                  : "bg-surface-container-high text-on-surface hover:bg-surface-container-highest"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="px-8 max-w-7xl mx-auto pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <div key={dest.name} className="group relative bg-surface-container-lowest rounded-DEFAULT overflow-hidden transition-all duration-500 hover:-translate-y-2">
              <div className="aspect-[4/5] overflow-hidden">
                <img alt={dest.name} className="w-full h-full object-cover rounded-[12px] m-2 w-[calc(100%-1rem)] h-[calc(100%-1rem)] transition-transform duration-700 group-hover:scale-110" src={dest.img} />
              </div>
              <div className="p-8 pt-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-headline text-3xl">{dest.name}</h3>
                  <span className="font-label text-xs font-bold px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full">FROM {dest.price}</span>
                </div>
                <p className="font-body text-lg text-on-surface/70 mb-6 leading-relaxed">{dest.desc}</p>
                <button className="w-full py-4 rounded-full border border-outline-variant text-on-surface font-label text-xs uppercase tracking-widest hover:bg-primary-container hover:text-on-primary hover:border-transparent transition-all">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface-container-low py-32">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-20">
            <span className="font-label text-xs uppercase tracking-[0.3em] text-secondary font-bold">Inquiries</span>
            <h2 className="font-headline text-5xl mt-4">Traveler Essentials</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-surface-container-lowest rounded-DEFAULT p-8">
                <h3 className="font-headline text-2xl mb-4">{faq.q}</h3>
                <p className="font-body text-lg text-on-surface/70 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <p className="font-label text-sm text-on-surface-variant">Still have questions? <a className="text-secondary font-bold underline underline-offset-4 decoration-secondary/30 hover:decoration-secondary" href="#">Connect with a Curator</a></p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DestinationsPage;
