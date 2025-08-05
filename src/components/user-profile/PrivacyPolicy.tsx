import React from "react";
import Head from "next/head";

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | Linear</title>
        <meta
          name="description"
          content="Learn how Linear collects, uses, and protects your personal information"
        />
      </Head>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold  mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-600">
            Effective:{" "}
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
              Linear ("we", "our", "us") is committed to protecting your
              privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you use our website
              (linear.app) and our application (collectively, the "Service").
            </p>
            <p>
              Please read this Privacy Policy carefully. By accessing or using
              the Service, you agree to the collection and use of information in
              accordance with this policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold  mb-4">
              2. Information We Collect
            </h2>
            <h3 className="text-lg font-medium mb-2">Personal Data</h3>
            <p className="mb-4">
              While using our Service, we may ask you to provide us with certain
              personally identifiable information that can be used to contact or
              identify you ("Personal Data"). This may include:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Email address</li>
              <li>First name and last name</li>
              <li>Company name</li>
              <li>Payment information (processed by our payment processors)</li>
              <li>Cookies and Usage Data</li>
            </ul>

            <h3 className="text-lg font-medium  mb-2">Usage Data</h3>
            <p>
              We may also collect information on how the Service is accessed and
              used ("Usage Data"). This Usage Data may include information such
              as your computer's IP address, browser type, browser version, the
              pages of our Service that you visit, the time and date of your
              visit, the time spent on those pages, unique device identifiers
              and other diagnostic data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold  mb-4">
              3. How We Use Your Information
            </h2>
            <p className=" mb-4">
              We use the collected data for various purposes:
            </p>
            <ul className="list-disc pl-6  space-y-2">
              <li>To provide and maintain our Service</li>
              <li>To notify you about changes to our Service</li>
              <li>
                To allow you to participate in interactive features of our
                Service
              </li>
              <li>To provide customer support</li>
              <li>
                To gather analysis or valuable information so that we can
                improve our Service
              </li>
              <li>To monitor the usage of our Service</li>
              <li>To detect, prevent and address technical issues</li>
              <li>
                To provide you with news, special offers and general information
                about other goods, services and events which we offer
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold  mb-4">4. Data Security</h2>
            <p className="mb-4">
              The security of your data is important to us. We implement
              appropriate technical and organizational measures to protect the
              security of your Personal Data. However, remember that no method
              of transmission over the Internet or method of electronic storage
              is 100% secure.
            </p>
            <p>
              We use industry-standard encryption for data in transit and at
              rest, regular security audits, and strict access controls to
              protect your information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold  mb-4">5. Data Retention</h2>
            <p>
              We will retain your Personal Data only for as long as is necessary
              for the purposes set out in this Privacy Policy. We will retain
              and use your Personal Data to the extent necessary to comply with
              our legal obligations, resolve disputes, and enforce our policies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              6. Your Data Protection Rights
            </h2>
            <p className=" mb-4">
              Depending on your location, you may have certain rights regarding
              your Personal Data:
            </p>
            <ul className="list-disc pl-6  space-y-2 mb-4">
              <li>
                <strong>Access:</strong> Request copies of your personal data
              </li>
              <li>
                <strong>Rectification:</strong> Request correction of inaccurate
                data
              </li>
              <li>
                <strong>Erasure:</strong> Request deletion of your personal data
              </li>
              <li>
                <strong>Restriction:</strong> Request restriction of processing
                your data
              </li>
              <li>
                <strong>Portability:</strong> Request transfer of your data to
                another organization
              </li>
              <li>
                <strong>Objection:</strong> Object to our processing of your
                data
              </li>
            </ul>
            <p>
              To exercise any of these rights, please contact us at
              privacy@linear.app.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold  mb-4">
              7. Third-Party Services
            </h2>
            <p className=" mb-4">
              We may employ third-party companies and individuals to facilitate
              our Service ("Service Providers"), provide the Service on our
              behalf, perform Service-related services or assist us in analyzing
              how our Service is used.
            </p>
            <p className="">
              These third parties have access to your Personal Data only to
              perform these tasks on our behalf and are obligated not to
              disclose or use it for any other purpose.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold  mb-4">
              8. Changes to This Privacy Policy
            </h2>
            <p className=" mb-4">
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the "effective date" at the top.
            </p>
            <p>
              You are advised to review this Privacy Policy periodically for any
              changes. Changes to this Privacy Policy are effective when they
              are posted on this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold  mb-4">9. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at privacy@linear.app.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
