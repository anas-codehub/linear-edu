"use client";
import React, { useState } from "react";
import {
  Input,
  Button,
  Select,
  SelectItem,
  Card,
  CardBody,
} from "@heroui/react";

const OlympiadForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    institution: "",
    class: "",
    subject: "",
  });

  const handleChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Form submitted successfully ✅");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-6">
      <Card className="w-full max-w-lg shadow-xl rounded-2xl">
        <CardBody className="space-y-5 p-8">
          <h2 className="text-2xl font-bold text-center">
            Olympiad Registration
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <Input
              isRequired
              label="Full Name"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={(e) => handleChange("fullName", e.target.value)}
            />

            {/* Email */}
            <Input
              isRequired
              type="email"
              label="Email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />

            {/* Phone */}
            <Input
              isRequired
              type="tel"
              label="Phone Number"
              placeholder="01XXXXXXXXX"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
            />

            {/* Institution */}
            <Input
              isRequired
              label="Institution"
              placeholder="Enter your school/college"
              value={formData.institution}
              onChange={(e) => handleChange("institution", e.target.value)}
            />

            {/* Class */}
            <Select
              isRequired
              label="Class"
              placeholder="Select your class"
              selectedKeys={formData.class ? [formData.class] : []}
              onChange={(e) => handleChange("class", e.target.value)}
            >
              {["Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve"].map(
                (cls) => (
                  <SelectItem key={cls}>{cls}</SelectItem>
                )
              )}
            </Select>

            {/* Subject */}
            <Select
              isRequired
              label="Subject"
              placeholder="Select your subject"
              selectedKeys={formData.subject ? [formData.subject] : []}
              onChange={(e) => handleChange("subject", e.target.value)}
            >
              {[
                "Math Olympiad",
                "Physics Olympiad",
                "Chemistry Olympiad",
                "Biology Olympiad",
                "Informatics Olympiad",
              ].map((sub) => (
                <SelectItem key={sub}>{sub}</SelectItem>
              ))}
            </Select>

            {/* Submit */}
            <Button
              type="submit"
              color="warning"
              className="w-full font-semibold"
            >
              Submit Registration
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default OlympiadForm;
