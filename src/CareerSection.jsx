import React, { useState } from "react";
import { Button, Card, Form, Alert } from "react-bootstrap";
import { motion } from "framer-motion";
import { Check, Upload } from "lucide-react";

const CareerSection = () => {
  const [fileName, setFileName] = useState("");
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitStatus("loading");
    setTimeout(() => {
      setSubmitStatus("success");
      // Reset after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1500);
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
              <Card.Header className=" bg-gradient-to-r from-emerald-600 to-teal-500 text-white ">
                <Card.Title>Open Positions</Card.Title>
                <Card.Text>
                  We're looking for talented individuals to join our growing
                  team
                </Card.Text>
              </Card.Header>
              <Card.Body>
                <div className="space-y-4">
                  {positions.map((position) => (
                    <div
                      key={position}
                      className="border rounded-lg p-3 cursor-pointer mb-2"
                    >
                      <h3 className="font-medium text-gray-900">{position}</h3>
                      <p className="text-sm text-gray-500">
                        Full Time • Remote/Hybrid
                      </p>
                    </div>
                  ))}
                </div>
              </Card.Body>
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
              <Card.Header className=" bg-gradient-to-r from-emerald-600 to-teal-500 text-white ">
                <Card.Title>Apply Now</Card.Title>
                <Card.Text>
                  Fill out the form below to apply for a position
                </Card.Text>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <Form.Label htmlFor="firstName">First Name</Form.Label>
                      <Form.Control
                        id="firstName"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <Form.Label htmlFor="lastName">Last Name</Form.Label>
                      <Form.Control id="lastName" placeholder="Doe" required />
                    </div>
                  </div>

                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="email">Email</Form.Label>
                    <Form.Control
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Position</Form.Label>
                    {positions.map((position) => (
                      <Form.Check
                        key={position}
                        type="radio"
                        label={position}
                        name="position"
                        value={position.toLowerCase().replace(/\s+/g, "-")}
                      />
                    ))}
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="experience">
                      Experience & Skills
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      id="experience"
                      placeholder="Tell us about your relevant experience and skills..."
                      rows={3}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="resume">Resume/CV</Form.Label>
                    <div className="d-flex gap-2">
                      <Form.Control
                        id="resume"
                        type="file"
                        className="d-none"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                      />
                      <Button
                        className=" bg-gradient-to-r from-emerald-600 to-emerald-600 text-white "
                        onClick={() =>
                          document.getElementById("resume").click()
                        }
                      >
                        <Upload />
                        Upload Resume
                      </Button>
                    </div>
                    {fileName && (
                      <Form.Text className="text-muted">
                        Selected: {fileName}
                      </Form.Text>
                    )}
                  </Form.Group>

                  {submitStatus === "success" && (
                    <Alert
                      variant="success"
                      className="d-flex align-items-center"
                    >
                      <Check className="me-2" />
                      Application submitted successfully! We'll be in touch
                      soon.
                    </Alert>
                  )}

                  <Button
                    type="submit"
                    className="w-100 bg-gradient-to-r from-emerald-600 to-emerald-600 text-white"
                    disabled={submitStatus === "loading"}
                  >
                    {submitStatus === "loading"
                      ? "Submitting..."
                      : "Submit Application"}
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
