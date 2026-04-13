const TermsPage = () => {
  return (
    <main>
      <section className="min-h-screen flex flex-col justify-center px-8 py-32">
        <div className="max-w-4xl mx-auto w-full">
          <span className="font-label text-sm tracking-[0.3em] uppercase text-secondary font-bold">Legal</span>
          <h1 className="font-serif-display text-6xl md:text-7xl text-primary mt-4 mb-6 leading-tight">Terms of Service</h1>
          <p className="font-serif-display text-xl text-on-surface-variant mb-16">Last updated: April 2024</p>

          <div className="space-y-12 font-serif-display text-lg text-on-surface-variant leading-relaxed">

            <div>
              <h2 className="font-headline text-2xl text-primary mb-4">1. Acceptance of Terms</h2>
              <p>By accessing or using the services of One Stop Holidays ("we," "our," or "the Company"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please discontinue use of our website and services immediately.</p>
            </div>

            <div>
              <h2 className="font-headline text-2xl text-primary mb-4">2. Booking & Reservations</h2>
              <p className="mb-4">All bookings are subject to availability and confirmation by One Stop Holidays. A booking is considered confirmed only upon receipt of the required deposit and written confirmation from us. The following conditions apply:</p>
              <ul className="list-none space-y-2 pl-4">
                {[
                  "A minimum deposit of 25% of the total package cost is required to confirm a booking",
                  "Full payment must be received at least 21 days prior to departure",
                  "Prices quoted are valid for 7 days from the date of proposal",
                  "We reserve the right to correct pricing errors or omissions at any time",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-secondary mt-1">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-headline text-2xl text-primary mb-4">3. Cancellation & Refund Policy</h2>
              <p className="mb-4">Cancellation charges are calculated from the date written notice is received by One Stop Holidays:</p>
              <div className="space-y-3 pl-4">
                {[
                  { period: "More than 60 days before departure", charge: "Loss of deposit" },
                  { period: "30–60 days before departure", charge: "50% of total package cost" },
                  { period: "15–30 days before departure", charge: "75% of total package cost" },
                  { period: "Less than 15 days before departure", charge: "100% of total package cost (no refund)" },
                ].map((row) => (
                  <div key={row.period} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 border-b border-outline-variant/10 pb-3">
                    <span className="sm:w-64 font-label text-sm text-primary font-bold">{row.period}</span>
                    <span>{row.charge}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-headline text-2xl text-primary mb-4">4. Travel Documents & Visa</h2>
              <p>It is the sole responsibility of the traveller to ensure possession of valid passports, visas, travel insurance, and any other documentation required for the journey. One Stop Holidays will assist in the visa application process where possible, but we cannot guarantee visa approvals. Failure to obtain necessary documents does not entitle the traveller to a refund.</p>
            </div>

            <div>
              <h2 className="font-headline text-2xl text-primary mb-4">5. Travel Insurance</h2>
              <p>We strongly recommend that all travellers purchase comprehensive travel insurance covering trip cancellations, medical emergencies, baggage loss, and personal liability. One Stop Holidays shall not be liable for any loss or expense incurred due to a lack of adequate insurance coverage.</p>
            </div>

            <div>
              <h2 className="font-headline text-2xl text-primary mb-4">6. Liability & Limitations</h2>
              <p>One Stop Holidays acts as an agent for hotels, airlines, transport operators, and other service providers. We are not liable for any direct, indirect, or consequential loss, damage, or personal injury arising from services rendered by these third-party suppliers, force majeure events (including natural disasters, strikes, pandemics), or actions beyond our reasonable control.</p>
            </div>

            <div>
              <h2 className="font-headline text-2xl text-primary mb-4">7. Itinerary Changes</h2>
              <p>One Stop Holidays reserves the right to alter or modify itineraries without prior notice if circumstances require. Changes may be necessitated by weather, safety concerns, supplier issues, or regulatory requirements. We will make every reasonable effort to provide equivalent alternatives and notify you as soon as possible.</p>
            </div>

            <div>
              <h2 className="font-headline text-2xl text-primary mb-4">8. Governing Law</h2>
              <p>These Terms of Service shall be governed by and construed in accordance with the laws of the State of Gujarat, India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in Rajkot, Gujarat.</p>
            </div>

            <div>
              <h2 className="font-headline text-2xl text-primary mb-4">9. Contact Us</h2>
              <p>For any questions regarding these Terms of Service, please reach out to:</p>
              <div className="mt-4 p-6 bg-surface-container-low rounded-lg">
                <p className="font-label font-bold text-primary mb-1">One Stop Holidays</p>
                <p>301 Silver Plaza, Kalawad Road, Rajkot, Gujarat 360005</p>
                <p className="text-secondary mt-2">hello@onestopholidays.com</p>
                <p>+91 (0) 281 4455 6677</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default TermsPage;
