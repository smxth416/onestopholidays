const PrivacyPolicyPage = () => {
  return (
    <main>
      <section className="min-h-screen flex flex-col justify-center px-8 py-32">
        <div className="max-w-4xl mx-auto w-full">
          <span className="font-label text-sm tracking-[0.3em] uppercase text-secondary font-bold">Legal</span>
          <h1 className="font-serif-display text-6xl md:text-7xl text-primary mt-4 mb-6 leading-tight">Privacy Policy</h1>
          <p className="font-serif-display text-xl text-on-surface-variant mb-16">Last updated: April 2024</p>

          <div className="space-y-12 font-serif-display text-lg text-on-surface-variant leading-relaxed">

            <div>
              <h2 className="font-headline text-2xl text-primary mb-4">1. Information We Collect</h2>
              <p>We collect information you provide directly to us, including name, email address, phone number, passport details, and travel preferences when you make an inquiry or booking with One Stop Holidays. We may also collect information automatically when you visit our website, such as your IP address, browser type, and pages visited.</p>
            </div>

            <div>
              <h2 className="font-headline text-2xl text-primary mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-none space-y-2 pl-4">
                {[
                  "Process your travel bookings and itinerary requests",
                  "Communicate with you about your trips, confirmations, and updates",
                  "Send you promotional offers and travel inspiration (with your consent)",
                  "Comply with legal obligations, including visa and immigration requirements",
                  "Improve our services and website experience",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-secondary mt-1">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-headline text-2xl text-primary mb-4">3. Sharing Your Information</h2>
              <p>We do not sell or rent your personal information to third parties. We may share your data with trusted travel partners — such as airlines, hotels, and visa agencies — solely for the purpose of fulfilling your booking. All partners are contractually bound to protect your data in accordance with applicable privacy laws.</p>
            </div>

            <div>
              <h2 className="font-headline text-2xl text-primary mb-4">4. Data Security</h2>
              <p>We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, or disclosure. All sensitive data is transmitted over encrypted (SSL/TLS) connections. However, no method of transmission over the internet is 100% secure.</p>
            </div>

            <div>
              <h2 className="font-headline text-2xl text-primary mb-4">5. Cookies</h2>
              <p>Our website uses cookies to enhance your browsing experience and analyze site traffic. You may disable cookies in your browser settings; however, this may affect certain functionality of our website.</p>
            </div>

            <div>
              <h2 className="font-headline text-2xl text-primary mb-4">6. Your Rights</h2>
              <p>You have the right to access, correct, or request deletion of your personal data at any time. To exercise these rights, please contact us at <span className="text-secondary">hello@onestopholidays.com</span>. We will respond to all requests within 30 days.</p>
            </div>

            <div>
              <h2 className="font-headline text-2xl text-primary mb-4">7. Children's Privacy</h2>
              <p>Our services are not directed to children under the age of 13. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us immediately.</p>
            </div>

            <div>
              <h2 className="font-headline text-2xl text-primary mb-4">8. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting a prominent notice on our website. Your continued use of our services after such changes constitutes your acceptance of the updated policy.</p>
            </div>

            <div>
              <h2 className="font-headline text-2xl text-primary mb-4">9. Contact Us</h2>
              <p>For any privacy-related questions or concerns, please contact:</p>
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

export default PrivacyPolicyPage;
