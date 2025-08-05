"use client";
import { Button } from "@heroui/react";
import Head from "next/head";
import React from "react";

const AboutLinear = () => {
  return (
    <>
      <Head>
        <title>About Linear | Issue Tracking Reimagined</title>
        <meta
          name="description"
          content="Learn about Linear's mission to streamline issue tracking and project management for modern teams"
        />
      </Head>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">About Linear</h1>
          <p className="text-xl ">
            Streamlining issue tracking and project management for modern teams
          </p>
        </header>

        <section className="mb-16">
          <div className="bg-white dark:bg-dark-2 rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-6">Our Mission</h2>
            <p className=" mb-4">
              Linear's mission is to build the most streamlined and efficient
              issue tracking tool for software teams. We believe in speed,
              simplicity, and focus - helping teams ship better products faster.
            </p>
            <p>
              Traditional project management tools often get in the way rather
              than help. Linear is designed to be intuitive and powerful, giving
              teams the tools they need without unnecessary complexity.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold  mb-6 text-center">
            Key Features
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-dark-2 rounded-xl shadow-md p-6">
              <h3 className="text-lg font-medium  mb-3">Blazing Fast</h3>
              <p>
                Keyboard-first design and instant interactions make Linear feel
                like a native app.
              </p>
            </div>
            <div className="bg-white dark:bg-dark-2 rounded-xl shadow-md p-6">
              <h3 className="text-lg font-medium  mb-3">Minimal UI</h3>
              <p>
                Clean interface that helps you focus on what matters without
                distractions.
              </p>
            </div>
            <div className="bg-white dark:bg-dark-2 rounded-xl shadow-md p-6">
              <h3 className="text-lg font-medium  mb-3">Powerful Workflows</h3>
              <p>
                Customize Linear to match your team's workflow with cycles,
                statuses, and more.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-8 text-white">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="mb-4">
              Linear was founded in 2019 by a team of engineers and designers
              who were frustrated with existing project management tools. We
              wanted something that matched how modern software teams actually
              work.
            </p>
            <p>
              Today, Linear is used by thousands of teams around the world, from
              startups to Fortune 500 companies, helping them build better
              software with less overhead.
            </p>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold  mb-4">Ready to try Linear?</h2>
          <p className=" mb-6 max-w-2xl mx-auto">
            Join thousands of productive teams who use Linear to ship better
            software faster.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
            Get Started
          </Button>
        </section>
      </div>
    </>
  );
};

export default AboutLinear;
