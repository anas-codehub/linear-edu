import React from "react";
import Head from "next/head";

const TermsAndConditions = () => {
  return (
    <>
      <Head>
        <title>Terms and Conditions | Linear</title>
        <meta
          name="description"
          content="Linear's Terms and Conditions governing the use of our services"
        />
      </Head>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold  mb-4">Terms and Conditions</h1>
          <p className="text-xl ">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </header>

        <div className="bg-white dark:bg-dark-2 rounded-xl shadow-md p-8">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold  mb-4">1. Introduction</h2>
            <p className=" mb-4">
              Welcome to Linear ("Company", "we", "our", "us")! These Terms of
              Service ("Terms", "Terms of Service") govern your use of our
              website located at linear.app (together or individually "Service")
              operated by Linear.
            </p>
            <p>
              By accessing or using the Service, you agree to be bound by these
              Terms. If you disagree with any part of the terms, then you may
              not access the Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold  mb-4">2. Accounts</h2>
            <p className=" mb-4">
              When you create an account with us, you must provide us
              information that is accurate, complete, and current at all times.
              Failure to do so constitutes a breach of the Terms, which may
              result in immediate termination of your account on our Service.
            </p>
            <p>
              You are responsible for safeguarding the password that you use to
              access the Service and for any activities or actions under your
              password, whether your password is with our Service or a
              third-party service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              3. Intellectual Property
            </h2>
            <p className=" mb-4">
              The Service and its original content, features, and functionality
              are and will remain the exclusive property of Linear and its
              licensors. The Service is protected by copyright, trademark, and
              other laws of both the United States and foreign countries.
            </p>
            <p>
              Our trademarks and trade dress may not be used in connection with
              any product or service without the prior written consent of
              Linear.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold  mb-4">4. Termination</h2>
            <p>
              We may terminate or suspend your account immediately, without
              prior notice or liability, for any reason whatsoever, including
              without limitation if you breach the Terms. Upon termination, your
              right to use the Service will immediately cease.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold  mb-4">
              5. Limitation of Liability
            </h2>
            <p className="mb-4">
              In no event shall Linear, nor its directors, employees, partners,
              agents, suppliers, or affiliates, be liable for any indirect,
              incidental, special, consequential or punitive damages, including
              without limitation, loss of profits, data, use, goodwill, or other
              intangible losses, resulting from:
            </p>
            <ul className="list-disc pl-6  space-y-2">
              <li>
                Your access to or use of or inability to access or use the
                Service
              </li>
              <li>Any conduct or content of any third party on the Service</li>
              <li>Any content obtained from the Service</li>
              <li>
                Unauthorized access, use or alteration of your transmissions or
                content
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold  mb-4">6. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the
              laws of California, United States, without regard to its conflict
              of law provisions. Our failure to enforce any right or provision
              of these Terms will not be considered a waiver of those rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold  mb-4">7. Changes</h2>
            <p className=" mb-4">
              We reserve the right, at our sole discretion, to modify or replace
              these Terms at any time. If a revision is material, we will
              provide at least 30 days' notice prior to any new terms taking
              effect. What constitutes a material change will be determined at
              our sole discretion.
            </p>
            <p>
              By continuing to access or use our Service after those revisions
              become effective, you agree to be bound by the revised terms. If
              you do not agree to the new terms, please stop using the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold  mb-4">8. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at
              legal@linear.app.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default TermsAndConditions;
