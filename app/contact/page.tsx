"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Container from "@/components/Container";
import Background from "@/components/ui/Background";
import { services } from "@/lib";
import toast from "react-hot-toast";
import { ColorRing } from "react-loader-spinner";
import { FaX } from "react-icons/fa6";

function Page() {
  const [formState, setFormState] = useState({
    fname: "",
    lname: "",
    phone: "",
    email: "",
    service: services[0]?.title || "",
    notes: "",
  });

  const [completionPercentage, setCompletionPercentage] = useState<number>(20);
  const [formStep, setFormStep] = useState<{
    [key: string]: boolean;
  }>({
    "form-step-1": true,
    "form-step-2": false,
    "form-step-3": false,
  });

  const [formErrors, setFormErrors] = useState<{
    [key: string]: string;
  }>({});

  const [sendingMail, setSendingMail] = useState<boolean>(false);

  // Validate required fields
  const validateForm = (updatedFormState: typeof formState) => {
    const errors: { [key: string]: string } = {};

    // Validate name

    if (
      updatedFormState.phone &&
      !/^\(?\d{3}\)?[\s\-]?\d{3}[\s\-]?\d{4}$/.test(updatedFormState.phone)
    ) {
      errors.phone = "Phone format is invalid";
    }
    if (
      updatedFormState.email &&
      !/\S+@\S+\.\S+/.test(updatedFormState.email)
    ) {
      errors.email = "Valid email is required";
    }

    return errors;
  };

  const debounce = <T extends (...args: unknown[]) => void>(func: T, delay: number): (...args: Parameters<T>) => void => {
    let timeout: NodeJS.Timeout;
    return (...args: unknown[]) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  // Handler to update state
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { id, value } = e.target;

    const updatedFormState = { ...formState, [id]: value };

    // Validate form state
    const errors = validateForm(updatedFormState);
    setFormErrors(errors);

    // Update form step visibility
    const formCompletion = { ...formStep };
    const debouncedScroll = debounce(() => {
      if (updatedFormState.fname && updatedFormState.lname) {
        formCompletion["form-step-2"] = true;
        document
          .getElementById("contact-section")
          ?.scrollIntoView({ behavior: "smooth", block: "nearest" });
        if (updatedFormState.phone && updatedFormState.email) {
          formCompletion["form-step-3"] = true;
          document
            .getElementById("service-section")
            ?.scrollIntoView({ behavior: "smooth", block: "nearest" });
        } else {
          formCompletion["form-step-3"] = false;
        }
      } else {
        formCompletion["form-step-2"] = false;
        formCompletion["form-step-3"] = false;
      }
      setFormStep(formCompletion);
    }, 300);
    debouncedScroll();

    setFormStep(formCompletion);

    // Calculate completion percentage based on validation
    const totalFields = 5; // Only considering fname, lname, phone, email
    const filledFields = Object.keys(updatedFormState).reduce((acc, key) => {
      if (key !== "notes" && errors[key] === undefined) {
        const value = updatedFormState[key as keyof typeof updatedFormState];
        if (value) acc += 1; // Increment if the field is filled
      }
      return acc;
    }, 0);

    const completionPercent = (filledFields / totalFields) * 100;
    setCompletionPercentage(completionPercent);

    // Update form state
    setFormState(updatedFormState);
  };

  const handleContactFormSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setSendingMail(true);
    if (Object.keys(formErrors).length > 0) return;

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        toast.success("Sent! We'll be in contact shortly.");
      } else {
        toast.error("There was an error. Please try again.");
      }
      setSendingMail(false);
    } catch {
      toast.error("There was an error. Please try again.");
      setSendingMail(false);
    }
    setFormState({
      fname: "",
      lname: "",
      phone: "",
      email: "",
      service: services[0]?.title || "",
      notes: "",
    });
    setFormStep({
      "form-step-1": true,
      "form-step-2": false,
      "form-step-3": false,
    });
    setCompletionPercentage(20);
  };

  return (
    <div className="min-h-screen pt-20 pb-40 bg-black text-white">
      <Background />
      <div className="relative">
        <Container>
          <form
            className="relative xl:w-2/3 2xl:w-1/2"
            onSubmit={handleContactFormSubmit}
          >
            {sendingMail && (
              <div className="absolute flex flex-col gap-1 items-center justify-center bg-black/70 w-full h-full top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                <ColorRing
                  visible={true}
                  height="80"
                  width="80"
                  ariaLabel="color-ring-loading"
                  wrapperStyle={{}}
                  wrapperClass="color-ring-wrapper"
                  colors={[
                    "#cc1616",
                    "#7323a1",
                    "#cc1616",
                    "#7323a1",
                    "#cc1616",
                  ]}
                />
                <p>Sending Request...</p>
              </div>
            )}
            {/* Progress Bar */}
            <motion.div
              key={"progress-bar"}
              initial={{
                width: 0,
              }}
              animate={{
                width: `${
                  completionPercentage > 100 ? 100 : completionPercentage
                }%`,
              }}
              transition={{
                duration: 0.3,
              }}
              className="sticky top-[70px] rounded-full h-2 bg-gradient-to-r from-neamred to-neampurple"
            />

            <div className="mt-8 w-full grid grid-cols-1 gap-2">
              <AnimatePresence>
                {/* Step 1: Name */}
                {formStep["form-step-1"] && (
                  <AnimatedSection key={"form-step-1"} id="name-section">
                    <FormSectionHeading text="Let's get started! What is Your Name?" />
                    <div className="grid grid-cols-2 gap-2">
                      <InputField
                        required
                        inputType="text"
                        id="fname"
                        placeholder="First Name"
                        label="First Name"
                        value={formState.fname}
                        onChange={handleInputChange}
                        error={formErrors["fname"]}
                      />
                      <InputField
                        required
                        inputType="text"
                        id="lname"
                        placeholder="Last Name"
                        label="Last Name"
                        value={formState.lname}
                        onChange={handleInputChange}
                        error={formErrors["lname"]}
                      />
                    </div>
                  </AnimatedSection>
                )}

                {/* Step 2: Contact Details */}
                {formStep["form-step-2"] && (
                  <AnimatedSection key={"form-step-2"} id="contact-section">
                    <FormSectionHeading text="How can we reach you?" />
                    <div className="grid-cols-1">
                      <InputField
                        required
                        inputType="text"
                        id="phone"
                        placeholder="(___) ___-____"
                        label="Phone Number"
                        value={formState.phone}
                        onChange={handleInputChange}
                        error={formErrors["phone"]}
                      />
                    </div>
                    <div className="grid-cols-1">
                      <InputField
                        required
                        inputType="email"
                        id="email"
                        placeholder="Email"
                        label="Email Address"
                        value={formState.email}
                        onChange={handleInputChange}
                        error={formErrors["email"]}
                      />
                    </div>
                  </AnimatedSection>
                )}

                {/* Step 3: Service and Notes */}
                {formStep["form-step-3"] && (
                  <AnimatedSection key={"form-step-3"} id="service-section">
                    <FormSectionHeading text="What can we help you with?" />
                    <InputField
                      required
                      inputType="select"
                      id="service"
                      label="Service"
                      value={formState.service}
                      onChange={handleInputChange}
                      options={services.map((service, index) => ({
                        value: service.title || `service-${index}`,
                        label: service.title || `Service ${index + 1}`,
                      }))}
                      error={formErrors["service"]}
                    />
                    <InputField
                      inputType="textarea"
                      id="notes"
                      placeholder="What should we know about your request?"
                      label="Additional Notes"
                      value={formState.notes}
                      onChange={handleInputChange}
                      error={formErrors["notes"]}
                    />
                  </AnimatedSection>
                )}
              </AnimatePresence>
            </div>
            {formStep["form-step-1"] &&
              formStep["form-step-2"] &&
              formStep["form-step-3"] && (
                <button
                  disabled={sendingMail || Object.keys(formErrors).length > 0}
                  className="bg-neamred disabled:cursor-not-allowed font-bold px-3 py-2 rounded-full w-full max-w-sm "
                >
                  Submit
                </button>
              )}
          </form>
        </Container>
      </div>
    </div>
  );
}
type InputFieldProps = {
  inputType: React.HTMLInputTypeAttribute | "textarea" | "select";
  id: string;
  placeholder?: string;
  label?: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  options?: { value: string; label: string }[]; // For select input type
  required?: boolean;
  error?: string;
};

const InputField = ({
  inputType,
  id,
  placeholder,
  label,
  value,
  onChange,
  options,
  required,
  error,
}: InputFieldProps) => {
  return (
    <div className="flex flex-col gap-2 mb-4">
      {label && (
        <label htmlFor={id} className="text-neamred font-bold">
          {label}
          {required && " *"}
        </label>
      )}
      {inputType === "text" || inputType === "email" ? (
        <>
          <input
            required={required}
            id={id}
            type={inputType}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="w-full px-3 p-2 border-2 border-transparent active:border-neampurple focus:border-neampurple active:outline-none focus:outline-none rounded-lg bg-neamblack text-white text-xl"
          />
          {error && (
            <p className="text-sm font-bold flex gap-2 items-center">
              <span className="p-1 bg-neamred flex items-center justify-center w-4 h-4 rounded-full">
                <FaX className="text-[8px]" />
              </span>
              <span>{error}</span>
            </p>
          )}
        </>
      ) : inputType === "textarea" ? (
        <>
          <textarea
            required={required}
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="w-full h-48 min-h-48 max-h-96 px-3 p-2 border-2 border-transparent active:border-neampurple focus:border-neampurple active:outline-none focus:outline-none rounded-lg bg-neamblack text-white text-xl"
          />
          {error && (
            <p className="text-sm font-bold flex gap-2 items-center">
              <span className="p-1 bg-neamred flex items-center justify-center w-4 h-4 rounded-full">
                <FaX className="text-[8px]" />
              </span>
              <span>{error}</span>
            </p>
          )}
        </>
      ) : inputType === "select" && options ? (
        <>
          <select
            required={required}
            id={id}
            value={value}
            onChange={onChange}
            className="hover:cursor-pointer w-full px-3 p-2 border-2 border-transparent active:border-neampurple focus:border-neampurple active:outline-none focus:outline-none rounded-lg bg-neamblack text-white text-xl"
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {error && (
            <p className="text-sm font-bold flex gap-2 items-center">
              <span className="p-1 bg-neamred flex items-center justify-center w-4 h-4 rounded-full">
                <FaX className="text-[8px]" />
              </span>
              <span>{error}</span>
            </p>
          )}
        </>
      ) : null}
    </div>
  );
};

const FormSectionHeading = ({ text }: { text: string }) => {
  return <h2 className="text-3xl font-bold mb-6">{text}</h2>;
};

const AnimatedSection = ({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.6,
      }}
      key={id}
      id={id}
      className="mb-10"
    >
      {children}
    </motion.div>
  );
};

export default Page;
