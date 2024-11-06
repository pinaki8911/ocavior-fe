import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button, Card, Form, Alert } from "react-bootstrap";
import { toast } from "sonner";
import { Check, Upload } from "lucide-react";
import { motion } from "framer-motion";
import { submitApplication } from "./apiClient";

const CareerSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    position: "",
    experience: "",
    resume: null,
  });

  const submitMutation = useMutation({
    mutationFn: (data) => {
      const formPayload = new FormData();
      Object.keys(data).forEach((key) => {
        if (key === "resume" && data[key]) {
          formPayload.append("resume", data[key]);
        } else {
          formPayload.append(key, data[key]);
        }
      });
      return submitApplication(formPayload);
    },
    onSuccess: () => {
      toast.success(
        "Application submitted successfully! We'll be in touch soon."
      );
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        position: "",
        experience: "",
        resume: null,
      });
    },
    onError: (error) => {
      toast.error(
        error.message || "Failed to submit application. Please try again."
      );
    },
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        resume: file,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitMutation.mutate(formData);
  };

  const positions = [
    "Software Engineer",
    "UI/UX Designer",
    "Product Manager",
    "DevOps Engineer",
    "Data Scientist",
  ];

  return (
    <section id="careers" className="py-20 bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Join Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Be part of our mission to transform businesses through innovative
            technology solutions
          </p>
        </motion.div>

        <div className="row">
          {/* Open Positions */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="col-md-6"
          >
            <Card>
              <div className="bg-gradient-to-r from-emerald-600 to-teal-500 text-white p-4 rounded-t-lg">
                <h3 className="text-xl font-semibold">Open Positions</h3>
                <p className="text-sm opacity-90">
                  We're looking for talented individuals to join our growing
                  team
                </p>
              </div>
              <div className="p-4">
                <div className="space-y-4">
                  {positions.map((position) => (
                    <div
                      key={position}
                      className="border rounded-lg p-3 cursor-pointer hover:bg-gray-50 transition-colors"
                    >
                      <h3 className="font-medium text-gray-900">{position}</h3>
                      <p className="text-sm text-gray-500">
                        Full Time • Remote/Hybrid
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Application Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="col-md-6"
          >
            <Card>
              <div className="bg-gradient-to-r from-emerald-600 to-teal-500 text-white p-4 rounded-t-lg">
                <h3 className="text-xl font-semibold">Apply Now</h3>
                <p className="text-sm opacity-90">
                  Fill out the form below to apply for a position
                </p>
              </div>
              <div className="p-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        First Name
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Position
                    </label>
                    <div className="space-y-2">
                      {positions.map((position) => (
                        <div key={position} className="flex items-center">
                          <input
                            type="radio"
                            id={`position-${position}`}
                            name="position"
                            value={position}
                            onChange={(e) =>
                              handleInputChange({
                                target: {
                                  id: "position",
                                  value: e.target.value,
                                },
                              })
                            }
                            className="h-4 w-4 text-emerald-600 focus:ring-emerald-500"
                          />
                          <label
                            htmlFor={`position-${position}`}
                            className="ml-2 text-sm text-gray-700"
                          >
                            {position}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="experience"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Experience & Skills
                    </label>
                    <textarea
                      id="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      rows={3}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="resume"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Resume/CV
                    </label>
                    <div className="mt-1">
                      <input
                        id="resume"
                        type="file"
                        className="hidden"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                      />
                      <Button
                        type="button"
                        onClick={() =>
                          document.getElementById("resume").click()
                        }
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700"
                      >
                        <Upload className="h-4 w-4 mr-2" />
                        Upload Resume
                      </Button>
                      {formData.resume && (
                        <p className="mt-2 text-sm text-gray-500">
                          Selected: {formData.resume.name}
                        </p>
                      )}
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={submitMutation.isPending}
                    className="w-full bg-gradient-to-r from-emerald-600 to-emerald-600 text-white hover:from-emerald-700 hover:to-emerald-700 disabled:opacity-50"
                  >
                    {submitMutation.isPending ? (
                      <span className="flex items-center justify-center">
                        <svg
                          className="animate-spin h-5 w-5 mr-2"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      "Submit Application"
                    )}
                  </Button>
                </form>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
