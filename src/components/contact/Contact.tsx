
"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

type ContactFormData = {
  name: string;
  email: string;
  company?: string;
  service: string;
  message: string;
};

export default function Contact() {
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

      const result = await response.json();

      if (!response.ok || !result.success) {
        setSubmitError(
          result.message ||
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

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-400/50 focus:bg-white/[0.05]";

  const errorClass = "mt-2 text-sm text-red-400";

  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden bg-[#050816]"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute left-[-150px] top-1/3 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[140px]" />
      <div className="pointer-events-none absolute right-[-150px] bottom-0 h-[400px] w-[400px] rounded-full bg-purple-600/10 blur-[140px]" />

      <div className="container-custom relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/5 px-4 py-2 text-sm text-blue-300">
            <Sparkles size={15} />
            Let&apos;s build something great
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
            Have an idea?
            <br />
            <span className="gradient-text">
              Let&apos;s make it real.
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-400 md:text-lg">
            Tell us about your project, challenge, or idea. Our team will
            help you find the right technology and strategy to move forward.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Contact information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-card rounded-3xl p-8 md:p-10"
          >
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
              Contact CloudMind
            </p>

            <h3 className="mt-4 text-3xl font-bold text-white">
              Let&apos;s start a conversation.
            </h3>

            <p className="mt-5 leading-7 text-slate-400">
              Whether you&apos;re building a new product, modernizing existing
              systems, or exploring AI, we&apos;re ready to help.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-400/10">
                  <Mail size={19} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <a
                    href="mailto:hello@cloudmindsolutions.com"
                    className="mt-1 block break-all text-white transition hover:text-blue-300"
                  >
                    hello@cloudmindsolutions.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">
                  <Phone size={19} className="text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Phone</p>
                  <p className="mt-1 text-white">+91 XXXXX XXXXX</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-purple-400/20 bg-purple-400/10">
                  <MapPin size={19} className="text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Location</p>
                  <p className="mt-1 text-white">India</p>
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-sm font-medium text-white">
                Looking for something specific?
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                We work across AI, software development, cloud, data,
                automation, and digital products.
              </p>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="glass-card rounded-3xl p-8 md:p-10"
          >
            {submitted ? (
              <div
                role="status"
                className="flex min-h-[500px] flex-col items-center justify-center text-center"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-green-400/20 bg-green-400/10">
                  <Send className="text-green-400" size={30} />
                </div>

                <h3 className="mt-6 text-3xl font-bold text-white">
                  Thanks for reaching out!
                </h3>

                <p className="mt-4 max-w-md leading-7 text-slate-400">
                  Your enquiry has been saved successfully. We&apos;ll get back
                  to you as soon as possible.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setSubmitError("");
                  }}
                  className="mt-8 rounded-xl border border-white/10 px-5 py-3 text-sm text-white transition hover:bg-white/5"
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
                {/* Name and email */}
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
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
                      <p
                        id="contact-name-error"
                        className={errorClass}
                      >
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
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
                      placeholder="Your email address"
                      aria-invalid={!!errors.email}
                      aria-describedby={
                        errors.email ? "contact-email-error" : undefined
                      }
                      className={inputClass}
                    />
                    {errors.email && (
                      <p
                        id="contact-email-error"
                        className={errorClass}
                      >
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Company and service */}
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
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
                      <p
                        id="contact-company-error"
                        className={errorClass}
                      >
                        {errors.company.message}
                      </p>
                    )}
                  </div>

                  <div>
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
                      className={`${inputClass} cursor-pointer bg-[#0b1124] text-white [color-scheme:dark]`}
                    >
                      <option
                        value=""
                        className="bg-[#0b1124] text-slate-400"
                      >
                        Select a service
                      </option>
                      <option value="ai" className="bg-[#0b1124] text-white">
                        AI &amp; Machine Learning
                      </option>
                      <option
                        value="software"
                        className="bg-[#0b1124] text-white"
                      >
                        Software Development
                      </option>
                      <option value="web" className="bg-[#0b1124] text-white">
                        Web &amp; App Development
                      </option>
                      <option
                        value="cloud"
                        className="bg-[#0b1124] text-white"
                      >
                        Cloud Solutions
                      </option>
                      <option
                        value="data"
                        className="bg-[#0b1124] text-white"
                      >
                        Data &amp; Analytics
                      </option>
                      <option
                        value="automation"
                        className="bg-[#0b1124] text-white"
                      >
                        Automation
                      </option>
                      <option
                        value="other"
                        className="bg-[#0b1124] text-white"
                      >
                        Something else
                      </option>
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

                {/* Message */}
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
                    rows={6}
                    placeholder="Tell us about your idea, requirements, goals, or challenge..."
                    aria-invalid={!!errors.message}
                    aria-describedby={
                      errors.message ? "contact-message-error" : undefined
                    }
                    className={`${inputClass} resize-none`}
                  />
                  {errors.message && (
                    <p
                      id="contact-message-error"
                      className={errorClass}
                    >
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* API error */}
                {submitError && (
                  <p
                    role="alert"
                    className="rounded-xl border border-red-400/20 bg-red-400/5 p-4 text-sm text-red-300"
                  >
                    {submitError}
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 font-semibold text-slate-950 transition hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <ArrowUpRight
                    size={18}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </button>

                <p className="text-center text-xs text-slate-600">
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
