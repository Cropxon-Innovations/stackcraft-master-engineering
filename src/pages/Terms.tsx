import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Terms of Service"
        description="StackCraft terms of service. Read our terms and conditions for using the platform."
        keywords="terms of service, terms and conditions, user agreement"
        canonicalUrl="https://www.stackcraft.io/terms"
      />
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 tracking-tight">
              Terms of Service
            </h1>
            
            <p className="text-muted-foreground mb-8">
              Last updated: January 8, 2026
            </p>

            <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using StackCraft ("the Service"), operated by CropXon Innovations Pvt Ltd, 
                  you agree to be bound by these Terms of Service. If you do not agree to these terms, 
                  please do not use our Service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Description of Service</h2>
                <p className="text-muted-foreground leading-relaxed">
                  StackCraft is an engineering knowledge and learning platform providing playbooks, 
                  educational content, and resources for software engineers. We reserve the right to 
                  modify, suspend, or discontinue any aspect of the Service at any time.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. User Accounts</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  When creating an account, you agree to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Accept responsibility for all activities under your account</li>
                  <li>Notify us immediately of any unauthorized access</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All content on StackCraft, including text, graphics, logos, and software, is the 
                  property of CropXon Innovations Pvt Ltd or its content suppliers and is protected 
                  by intellectual property laws. You may not reproduce, distribute, or create derivative 
                  works without our express written permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. User Content</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you submit content to our platform, you grant us a non-exclusive, worldwide, 
                  royalty-free license to use, modify, and display that content in connection with 
                  the Service. You represent that you have the right to grant this license.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Prohibited Conduct</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You agree not to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe on the rights of others</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Distribute malware or harmful code</li>
                  <li>Engage in any activity that disrupts the Service</li>
                  <li>Scrape or collect user data without permission</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Payment Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For paid services, you agree to pay all fees and charges associated with your account. 
                  All payments are non-refundable unless otherwise stated. We reserve the right to 
                  modify our pricing with reasonable notice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Disclaimer of Warranties</h2>
                <p className="text-muted-foreground leading-relaxed">
                  THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. WE DO NOT GUARANTEE 
                  THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE. YOUR USE OF THE 
                  SERVICE IS AT YOUR OWN RISK.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">9. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, CROPXON INNOVATIONS PVT LTD SHALL NOT BE 
                  LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING FROM 
                  YOUR USE OF THE SERVICE.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">10. Indemnification</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You agree to indemnify and hold harmless CropXon Innovations Pvt Ltd from any claims, 
                  damages, or expenses arising from your use of the Service or violation of these Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">11. Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may terminate or suspend your access to the Service at any time, with or without 
                  cause, with or without notice. Upon termination, your right to use the Service will 
                  immediately cease.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">12. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of India. 
                  Any disputes shall be subject to the exclusive jurisdiction of the courts in the 
                  appropriate jurisdiction.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">13. Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these Terms at any time. We will notify users of 
                  material changes by posting the updated Terms on our website. Continued use of the 
                  Service after changes constitutes acceptance of the new Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">14. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about these Terms, please contact us at:
                </p>
                <p className="text-foreground mt-2">
                  <strong>StackCraft</strong><br />
                  A division of CropXon Innovations Pvt Ltd<br />
                  Email: legal@stackcraft.io
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
