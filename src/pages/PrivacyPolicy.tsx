import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="min-h-screen bg-background overflow-x-hidden relative z-10">
        <Navigation />

        <main className="container mx-auto px-4 pt-32 pb-16 max-w-4xl">
          <h1 className="text-4xl font-bold gradient-text mb-3">Privacy Policy - WorkPulse</h1>
          <p className="text-muted-foreground mb-8">
            <strong>Effective Date:</strong> 26 Apr 2026
          </p>

          <div className="space-y-8 text-foreground/90 leading-7">
            <section>
              <p>
                SoftPulseAI ("we", "our", "us") provides WorkPulse, an HRMS and attendance
                platform for organizations and employees.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">1. Information We Collect</h2>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Profile data (name, employee ID, email, phone, department, role)</li>
                <li>Attendance data (punch in/out records, shift/session timelines)</li>
                <li>Location data (attendance verification and field/visit workflows)</li>
                <li>Request/workflow data (shortfall, missed punch, outside work, approvals)</li>
                <li>Device/app diagnostics (limited logs for reliability and security)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">2. How We Use Information</h2>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Attendance and workforce management</li>
                <li>Approval workflows and HR operations</li>
                <li>Security, fraud prevention, audit, and compliance</li>
                <li>Product support and service improvement</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">3. Location Permissions</h2>
              <p className="text-muted-foreground">
                WorkPulse may collect foreground and, where enabled and permitted, background
                location during active attendance and field sessions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">4. Data Sharing</h2>
              <p className="text-muted-foreground">
                We do not sell personal data. Data may be processed by trusted service providers
                solely for hosting, delivery, and support of the WorkPulse platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">5. Data Retention</h2>
              <p className="text-muted-foreground">
                Data is retained as required for HR records, audit requirements, legal obligations,
                and organizational policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">6. Data Security</h2>
              <p className="text-muted-foreground">
                We apply reasonable technical and organizational safeguards to protect personal data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">7. User Rights</h2>
              <p className="text-muted-foreground">
                Users may request correction or updates through their employer&apos;s HR/admin. For privacy
                requests, contact us at the email below.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">8. Children&apos;s Privacy</h2>
              <p className="text-muted-foreground">
                WorkPulse is not intended for children under 13 years of age.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">9. Contact</h2>
              <p className="text-muted-foreground">
                SoftPulseAI
                <br />
                Email: support@softpulseai.com
                <br />
                Website: https://softpulseai.com
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">10. Changes to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this policy from time to time. Revised versions will be posted with an
                updated effective date.
              </p>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicy;
