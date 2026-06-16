"use client";

import React, { useState, useRef } from "react";
import { Container, Wrapper } from "@/components";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail, Phone, MapPin, CheckCircle2, AlertCircle } from "lucide-react";
import Image from "next/image";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
    const formRef = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const salesEmail = process.env.NEXT_PUBLIC_COMPANY_SALES_EMAIL || "sales@edgeinnovph.com";
    const adminEmail = process.env.NEXT_PUBLIC_COMPANY_ADMIN_EMAIL || "admin@edgeinnovph.com";

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!formRef.current) return;

        setStatus("submitting");
        setErrorMessage("");

        const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
        const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_DEFAULT_TEMPLATE_ID;

        const formData = new FormData(formRef.current);
        const name = formData.get("name") as string;
        const companyInput = formData.get("company") as string;
        const inquiryType = formData.get("inquiry_type");
        
        const evaluatedCompanyName = companyInput?.trim() ? companyInput.trim() : name;

        const hiddenCompanyInput = formRef.current.querySelector('input[name="company_name"]') as HTMLInputElement;
        if (hiddenCompanyInput) {
            hiddenCompanyInput.value = evaluatedCompanyName;
        }

        let recipientEmail = adminEmail; 

        if (inquiryType === "Request Quote") {
            recipientEmail = salesEmail; 
        }

        const hiddenToEmailInput = formRef.current.querySelector('input[name="to_email"]') as HTMLInputElement;
        if (hiddenToEmailInput) {
            hiddenToEmailInput.value = recipientEmail;
        }

        if (!PUBLIC_KEY || !SERVICE_ID || !TEMPLATE_ID) {
            setStatus("error");
            setErrorMessage("Configuration error: Missing EmailJS keys in environment variables.");
            return;
        }

        try {
            const result = await emailjs.sendForm(
                SERVICE_ID,
                TEMPLATE_ID, 
                formRef.current,
                PUBLIC_KEY
            );

            if (result.status === 200) {
                setStatus("success");
                formRef.current.reset();
            } else {
                setStatus("error");
                setErrorMessage("Failed to send the message. Please try again.");
            }
        } catch (error: any) {
            console.error("EmailJS Error:", error);
            setStatus("error");
            setErrorMessage(error?.text || "An unexpected error occurred. Please verify your keys.");
        }
    };

    return (
        <section className="w-full relative block overflow-visible min-h-screen">
            
            {/* Background design layer canvas layout mask hook */}
            <div className="absolute top-0 left-0 right-0 h-screen -z-10 overflow-hidden [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none">
                <div className="absolute inset-0 opacity-25">
                    <Image 
                        src="/assets/contact-bg.jpg"
                        alt="Hero Background"
                        fill
                        priority
                        className="object-cover object-top"
                    />
                </div>
                <div className="absolute inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 h-[150vh]" />
            </div>

            <Wrapper className="w-full min-h-screen flex flex-col justify-center relative py-24 md:py-32 px-4 md:px-0">
                <Container className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start relative z-10 w-full">
                    
                    {/* Left Side: Brand Context Info */}
                    <div className="flex flex-col justify-center space-y-8">
                        <div className="relative">
                            <div className="absolute -top-10 left-0 -z-10 gradient w-72 h-72 blur-[6rem] opacity-40 pointer-events-none" />
                            <button className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
                                <span>
                                    <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
                                </span>
                                <span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900" />
                                <span className="h-full w-full blur-md absolute bottom-0 inset-x-0 bg-gradient-to-tr from-primary/40"></span>
                                <span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center justify-center gap-1.5">
                                    <Image src="/icons/sparkles-dark.svg" alt="✨" width={24} height={24} className="w-4 h-4" />
                                    Connect With Us
                                </span>
                            </button>
                            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mt-6 text-white leading-tight">
                                Let’s Build the Future <br /> of Your <span className="text-blue-400">Business.</span>
                            </h1>
                            <p className="text-gray-400 mt-6 text-base max-w-md leading-relaxed">
                                Have questions about our technology solutions, products, or strategic operations? Reach out to Edge Innov OPC today.
                            </p>
                        </div>

                        <div className="space-y-6 text-gray-300">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-blue-400">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-white">Email Us</h4>
                                    <p className="text-sm text-gray-400 mt-0.5">{salesEmail}</p>
                                    <p className="text-sm text-gray-400 mt-0.5">{adminEmail}</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-blue-400">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-white">Call Us</h4>
                                    <p className="text-sm text-gray-400 mt-0.5">(02) 8403-3927</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-blue-400">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-white">Office Location</h4>
                                    <p className="text-sm text-gray-400 mt-0.5">Unit 305, The Sycamore Bldg. Buencamino St. Muntinlupa City, Philippines</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Interactive Contact Form */}
                    <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 backdrop-blur-md shadow-2xl relative w-full">
                        {status === "success" ? (
                            <div className="flex flex-col items-center justify-center text-center h-full py-12 space-y-4">
                                <div className="w-16 h-16 bg-blue-950/50 border border-blue-500/30 text-blue-400 rounded-full flex items-center justify-center animate-bounce">
                                    <CheckCircle2 className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-semibold text-white">Message Sent!</h3>
                                <p className="text-gray-400 max-w-sm text-sm">
                                    Thank you for reaching out to Edge Innov OPC. Our team will review your inquiry and reply within 24 hours.
                                </p>
                                <button 
                                    onClick={() => setStatus("idle")}
                                    className="text-sm text-blue-400 hover:underline mt-2"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                                
                                {/* Hidden form parameters used to safely route variables to EmailJS */}
                                <input type="hidden" name="to_email" value="" />
                                <input type="hidden" name="company_name" value="" />

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">Full Name</label>
                                        <Input 
                                            name="name"
                                            type="text" 
                                            required
                                            className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus-visible:ring-blue-500"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">Company Name</label>
                                        <Input 
                                            name="company"
                                            type="text" 
                                            className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus-visible:ring-blue-500"
                                            placeholder="Optional"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">Email Address</label>
                                    <Input 
                                        name="email"
                                        type="email" 
                                        required
                                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus-visible:ring-blue-500"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                {/* ADDED: Contact Number Field */}
                                <div className="space-y-2">
                                    <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">Contact Number</label>
                                    <Input 
                                        name="phone"
                                        type="tel" 
                                        required
                                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus-visible:ring-blue-500"
                                        placeholder="+63 917 123 4567"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">Inquiry Type</label>
                                    <div className="relative">
                                        <select 
                                            name="inquiry_type"
                                            required
                                            className="flex w-full rounded-md border border-white/10 bg-neutral-950 px-3 py-2 text-sm text-white focus-visible:outline-none focus-visible:border-blue-500 focus-visible:ring-1 focus-visible:ring-blue-500 transition-colors appearance-none cursor-pointer"
                                        >
                                            <option value="Request Quote" className="bg-neutral-950 text-white">Request for a Quote</option>
                                            <option value="Career Opportunity" className="bg-neutral-950 text-white">Job / Internship Opportunities</option>
                                            <option value="Others" className="bg-neutral-950 text-white">Others</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">How can we help?</label>
                                    <textarea 
                                        name="message"
                                        rows={4}
                                        required
                                        className="flex w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-gray-600 focus-visible:outline-none focus-visible:border-blue-500 focus-visible:ring-1 focus-visible:ring-blue-500 transition-colors resize-none"
                                        placeholder="Tell us about your organization's challenges or goals..."
                                    />
                                </div>

                                {status === "error" && (
                                    <div className="flex items-center space-x-2 bg-red-950/40 border border-red-900/50 text-red-400 p-3 rounded-lg text-sm">
                                        <AlertCircle className="w-4 h-4 shrink-0" />
                                        <span>{errorMessage}</span>
                                    </div>
                                )}

                                <Button
                                    type="submit"
                                    variant="white"
                                    disabled={status === "submitting"}
                                    className="w-full flex items-center justify-center space-x-2"
                                >
                                    <span>{status === "submitting" ? "Sending..." : "Submit"}</span>
                                    <ArrowRight className="w-4 h-4" />
                                </Button>
                            </form>
                        )}
                    </div>

                </Container>
            </Wrapper>
        </section>
    );
}