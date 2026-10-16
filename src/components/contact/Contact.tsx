
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useForm } from "react-hook-form";

type ContactFormData = {
  name: string;
  email: string;
  company?: string;
  service: string;
  message: string;
};

const contactServices = [
  { value: "ai", label: "AI & Machine Learning" },
  { value: "software", label: "Software Development" },
  { value: "web", label: "Web & App Development" },
  { value: "cloud", label: "Cloud Solutions" },
  { value: "data", label: "Data & Analytics" },
  { value: "automation", label: "Automation" },
  { value: "other", label: "Something else" },
];

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@cloudmindsolutions.com",
    href: "mailto:hello@cloudmindsolutions.com",
    color: "blue",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 XXXXX XXXXX",
    color: "cyan",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India",
    color: "purple",
  },
] as const;

const inputClass =
  "w-full min-w-0 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-white outline-none transition-colors duration-200 placeholder:text-slate-600 focus:border-blue-400/60 focus:bg-white/[0.05]";

const errorClass = "mt-2 text-sm leading-5 text-red-400";

const entranceTransition = {
  duration: 0.45,
  ease: "easeOut" as const,
};

export default function Contact() {
  const shouldReduceMotion = useReducedMotion();
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      company: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok || !result?.success) {
        setSubmitError(
          result?.message ||
            "Unable to submit your enquiry. Please try again."
        );
        return;
      }

      setSubmitted(true);
      reset();
    } catch {
      setSubmitError(
        "Unable to connect to the server. Please check your connection and try again."
      );
    }
  };

  const motionProps = (delay = 0) => ({
    initial: shouldReduceMotion
      ? false
      : { opacity: 0, y: 14 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.12 },
    transition: shouldReduceMotion
      ? { duration: 0 }
      : { ...entranceTransition, delay },
  });

  const closeSuccess = () => {
    setSubmitted(false);
    setSubmitError("");
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="section-padding relative isolate overflow-hidden bg-[#050816]"
    >
      {/* Lightweight ambient background */}
      <div
        aria-hidden="true"
        className="contact-glow contact-glow-blue pointer-events-none absolute left-[-120px] top-1/3 h-56 w-56 rounded-full bg-blue-600/10 sm:h-80 sm:w-80"
      />
      <div
        aria-hidden="true"
        className="contact-glow contact-glow-purple pointer-events-none absolute bottom-0 right-[-120px] h-56 w-56 rounded-full bg-purple-600/10 sm:h-80 sm:w-80"
      />

      <div className="container-custom relative z-10">
        {/* Heading */}
        <motion.div
          {...motionProps()}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/5 px-4 py-2 text-sm text-blue-300">
            <Sparkles size={15} aria-hidden="true" />
            Let&apos;s build something great
          </div>

          <h2
            id="contact-heading"
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-6xl"
          >
            Have an idea?
            <br />
            <span className="gradient-text">
              Let&apos;s make it real.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:mt-6 sm:text-lg sm:leading-8">
            Tell us about your project, challenge, or idea. Our team will
            help you find the right technology and strategy to move forward.
          </p>
        </motion.div>

        <div className="grid min-w-0 gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-8">
          {/* Contact information */}
          <motion.div
            {...motionProps(0.05)}
            className="glass-card min-w-0 rounded-3xl p-6 sm:p-8 md:p-10"
          >
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
              Contact CloudMind
            </p>

            <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
              Let&apos;s start a conversation.
            </h3>

            <p className="mt-5 leading-7 text-slate-400">
              Whether you&apos;re building a new product, modernizing existing
              systems, or exploring AI, we&apos;re ready to help.
            </p>

            <div className="mt-8 space-y-6 sm:mt-10">
              {contactItems.map((item) => {
                const Icon = item.icon;

                const iconColors = {
                  blue: "border-blue-400/20 bg-blue-400/10 text-blue-400",
                  cyan: "border-cyan-400/20 bg-cyan-400/10 text-cyan-400",
                  purple:
                    "border-purple-400/20 bg-purple-400/10 text-purple-400",
                };

                return (
                  <div
                    key={item.label}
                    className="flex min-w-0 items-start gap-4"
                  >
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${iconColors[item.color]}`}
                    >
                      <Icon size={19} aria-hidden="true" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-slate-500">
                        {item.label}
                      </p>

                      {"href" in item ? (
                        <a
                          href={item.href}
                          className="mt-1 block break-words text-white transition-colors duration-200 hover:text-blue-300"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-1 break-words text-white">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:mt-10">
              <p className="text-sm font-medium text-white">
                Looking for something specific?
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                We work across AI, software development, cloud, data,
                automation, and digital products.
              </p>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            {...motionProps(0.1)}
            className="glass-card min-w-0 rounded-3xl p-6 sm:p-8 md:p-10"
          >
            {submitted ? (
              <div
                role="status"
                className="flex min-h-[400px] flex-col items-center justify-center py-10 text-center sm:min-h-[500px]"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-green-400/20 bg-green-400/10">
                  <Send
                    className="text-green-400"
                    size={30}
                    aria-hidden="true"
                  />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-white sm:text-3xl">
                  Thanks for reaching out!
                </h3>

                <p className="mt-4 max-w-md leading-7 text-slate-400">
                  Your enquiry has been saved successfully. We&apos;ll get
                  back to you as soon as possible.
                </p>

                <button
                  type="button"
                  onClick={closeSuccess}
                  className="mt-8 rounded-xl border border-white/10 px-5 py-3 text-sm text-white transition-colors duration-200 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="space-y-6"
              >
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="min-w-0">
                    <label
                      htmlFor="contact-name"
                      className="mb-2 block text-sm text-slate-300"
                    >
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      {...register("name", {
                        required: "Name is required",
                        minLength: {
                          value: 2,
                          message: "Name must be at least 2 characters",
                        },
                        maxLength: {
                          value: 100,
                          message: "Name is too long",
                        },
                      })}
                      type="text"
                      autoComplete="name"
                      placeholder="Enter your name"
                      aria-invalid={!!errors.name}
                      aria-describedby={
                        errors.name ? "contact-name-error" : undefined
                      }
                      className={inputClass}
                    />
                    {errors.name && (
                      <p id="contact-name-error" className={errorClass}>
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div className="min-w-0">
                    <label
                      htmlFor="contact-email"
                      className="mb-2 block text-sm text-slate-300"
                    >
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Please enter a valid email address",
                        },
                      })}
                      type="email"
                      autoComplete="email"
                      inputMode="email"
                      placeholder="Your email address"
                      aria-invalid={!!errors.email}
                      aria-describedby={
                        errors.email ? "contact-email-error" : undefined
                      }
                      className={inputClass}
                    />
                    {errors.email && (
                      <p id="contact-email-error" className={errorClass}>
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="min-w-0">
                    <label
                      htmlFor="contact-company"
                      className="mb-2 block text-sm text-slate-300"
                    >
                      Company
                    </label>
                    <input
                      id="contact-company"
                      {...register("company", {
                        maxLength: {
                          value: 100,
                          message: "Company name is too long",
                        },
                      })}
                      type="text"
                      autoComplete="organization"
                      placeholder="Your company"
                      aria-invalid={!!errors.company}
                      aria-describedby={
                        errors.company
                          ? "contact-company-error"
                          : undefined
                      }
                      className={inputClass}
                    />
                    {errors.company && (
                      <p id="contact-company-error" className={errorClass}>
                        {errors.company.message}
                      </p>
                    )}
                  </div>

                  <div className="min-w-0">
                    <label
                      htmlFor="contact-service"
                      className="mb-2 block text-sm text-slate-300"
                    >
                      What do you need?
                    </label>
                    <select
                      id="contact-service"
                      {...register("service", {
                        required: "Please select a service",
                      })}
                      aria-invalid={!!errors.service}
                      aria-describedby={
                        errors.service
                          ? "contact-service-error"
                          : undefined
                      }
                      className={`${inputClass} cursor-pointer bg-[#0b1124] [color-scheme:dark]`}
                    >
                      <option value="">Select a service</option>
                      {contactServices.map((service) => (
                        <option key={service.value} value={service.value}>
                          {service.label}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p
                        id="contact-service-error"
                        className={errorClass}
                        role="alert"
                      >
                        {errors.service.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-sm text-slate-300"
                  >
                    Tell us about your project
                  </label>
                  <textarea
                    id="contact-message"
                    {...register("message", {
                      required: "Message is required",
                      minLength: {
                        value: 10,
                        message: "Message must be at least 10 characters",
                      },
                      maxLength: {
                        value: 2000,
                        message: "Message is too long",
                      },
                    })}
                    rows={5}
                    maxLength={2000}
                    placeholder="Tell us about your idea, requirements, goals, or challenge..."
                    aria-invalid={!!errors.message}
                    aria-describedby={
                      errors.message ? "contact-message-error" : undefined
                    }
                    className={`${inputClass} resize-y`}
                  />
                  {errors.message && (
                    <p id="contact-message-error" className={errorClass}>
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {submitError && (
                  <p
                    role="alert"
                    className="rounded-xl border border-red-400/20 bg-red-400/5 p-4 text-sm text-red-300"
                  >
                    {submitError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex min-h-14 w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 font-semibold text-slate-950 transition-colors duration-200 hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <ArrowUpRight
                    size={18}
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </button>

                <p className="text-center text-xs leading-5 text-slate-500">
                  We&apos;ll never share your information with third parties.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
