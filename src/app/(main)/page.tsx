"use client";

import { useEffect, useState } from "react";
import { Container, Icons, Wrapper } from "@/components";
// import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { LampContainer } from "@/components/ui/lamp";
import Marquee from "@/components/ui/marquee";
import SectionBadge from "@/components/ui/section-badge";
import { partners, partnerLogos, values, coreValues, services, servicesSection, reviews } from "@/constants";
import { cn } from "@/lib/utils";
import { ArrowRight, ChevronDown, ChevronRight, UserIcon, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const firstRow = reviews.slice(0, reviews.length / 2);
    const secondRow = reviews.slice(reviews.length / 2);

    return (
        /* FIXED: Changed flex-col setup and explicitly constrained block layout boundaries to prevent inner scrolling */
        <section className="w-full relative block overflow-visible">
            
            {/* ================= TRUE FULLSCREEN BACKGROUND LAYER ================= */}
            <div className="absolute top-0 left-0 right-0 h-screen -z-10 overflow-hidden [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none">
                <div className="absolute inset-0 opacity-25">
                    <Image 
                        src="/assets/hero-bg.jpg"
                        alt="Hero Background"
                        fill
                        priority
                        className="object-cover object-top"
                    />
                </div>
                <div className="absolute inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 h-[150vh]" />
            </div>
            {/* =================================================================== */}

            <Wrapper className="w-full min-h-screen flex flex-col justify-between relative py-12 md:py-20 px-4 md:px-0">
                <div className="hidden md:block" />

                <Container className="flex flex-col items-center justify-center z-10 w-full my-auto">
                    <div className="flex flex-col items-center justify-center h-full relative w-full">
                        <div className="relative flex flex-col items-center max-w-4xl w-11/12 md:w-full py-12">
                            <div className="absolute top-1/2 left-1/2 -z-10 gradient w-full max-w-2xl -translate-x-1/2 h-[120%] -translate-y-1/2 inset-0 blur-[9rem] opacity-60 pointer-events-none" />
                            
                            <h1 className="text-5xl md:text-6xl lg:text-7xl md:!leading-[1.15] font-bold text-center">
                                <span className="text-blue-400">Innovating</span> Solutions. <br className="hidden md:inline" />
                                Empowering <span className="text-blue-400">Growth.</span>
                            </h1>
                            
                            <p className="hidden md:block md:text-lg text-gray-400 mt-8 text-center max-w-2xl leading-relaxed">
                                Your full-service partner for technology, products, and business solutions. We streamline your operations today to power sustainable growth tomorrow.
                            </p>
                        </div>
                    </div>
                </Container>

                <div className={cn(
                    "w-full flex justify-center items-center pt-4 animate-bounce pointer-events-none z-10 transition-all duration-500 ease-in-out",
                    isVisible ? "opacity-70 transform translate-y-0" : "opacity-0 transform translate-y-2"
                )}>
                    <div className="flex flex-col items-center gap-1 text-xs tracking-widest text-muted-foreground uppercase font-medium">
                        <span>Scroll to Explore</span>
                        <ChevronDown className="w-4 h-4" />
                    </div>
                </div>
            </Wrapper>

            {/* how it works */}
            <Wrapper className="flex flex-col items-center justify-center relative md:pt-10 md:pb-16 px-4 md:px-0 mx-auto max-w-7xl">
                <Container>
                    <div className="max-w-md mx-auto text-start md:text-center">
                        <SectionBadge title="Core Values" />
                        <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
                            {values.heading}
                        </h2>
                        <p className="text-muted-foreground mt-6">
                            {values.description}
                        </p>
                    </div>
                </Container>
                <Container>
                    <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full divide-x-0 md:divide-x divide-y md:divide-y-0 divide-gray-900 first:border-l-2 lg:first:border-none first:border-gray-900">
                            {coreValues.map((value, index) => (
                                <div key={`${value.title}-${index}`} className="flex flex-col items-start px-4 md:px-6 lg:px-8 lg:py-6 py-4">
                                    <div className={cn(
                                        "flex items-center justify-center h-12 w-12 rounded-lg border font-bold text-xl select-none",
                                        value.bgClass,
                                        value.borderClass,
                                        value.textClass
                                    )}>
                                        {value.letter}
                                    </div>
                                    <h3 className="text-lg font-semibold mt-6 tracking-tight text-white">
                                        {value.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm mt-3 leading-relaxed text-start">
                                        {value.info}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* features */}
            <Wrapper className="flex flex-col items-center justify-center py-12 relative px-4 md:px-0 mx-auto max-w-7xl">
                <div className="hidden md:block absolute top-0 -right-1/3 w-72 h-72 bg-primary rounded-full blur-[10rem] -z-10"></div>
                <div className="hidden md:block absolute bottom-0 -left-1/3 w-72 h-72 bg-indigo-600 rounded-full blur-[10rem] -z-10"></div>
                <Container>
                    <div className="max-w-md mx-auto text-start md:text-center">
                        <SectionBadge title={servicesSection.badge} />
                        <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
                            {servicesSection.heading}
                        </h2>
                        <p className="text-muted-foreground mt-6">
                            {servicesSection.description}
                        </p>
                    </div>
                </Container>
                <Container>
                    <div className="flex items-center justify-center mx-auto mt-8">
                        <Icons.feature className="w-auto h-80" />
                    </div>
                </Container>
                <Container>
                    <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8">
                            {services.map((service) => (
                                <div key={service.title} className="flex flex-col items-start lg:items-start px-0 md:px-0">
                                    <div className="flex items-center justify-center">
                                        <service.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-lg font-medium mt-4">
                                        {service.title}
                                    </h3>
                                    <p className="text-muted-foreground mt-2 text-start lg:text-start">
                                        {service.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* Partners Logos */}
            <Wrapper className="flex flex-col items-center justify-center py-12 relative px-4 md:px-0 w-full overflow-hidden">
                <div className="hidden md:block absolute -top-1/4 -left-1/3 w-72 h-72 bg-indigo-500 rounded-full blur-[10rem] -z-10"></div>
                <Container>
                    <div className="max-w-md mx-auto text-start md:text-center">
                        <SectionBadge title={partners.badge} />
                        <h2 className="text-3xl lg:text-4xl font-semibold mt-6 text-white">
                            {partners.heading}
                        </h2>
                        <p className="text-muted-foreground mt-6">
                            {partners.description}
                        </p>
                    </div>
                </Container>
                <Container>
                    <div className="py-10 w-full space-y-4">
                        <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden py-4">
                            <Marquee pauseOnHover className="[--duration:25s] select-none flex items-center">
                                {partnerLogos.slice(0, partnerLogos.length / 2).map((logo, index) => (
                                    <div 
                                        key={`forward-${logo.name}-${index}`} 
                                        className="relative w-36 h-12 flex items-center justify-center mx-10 shrink-0 group"
                                    >
                                        <Image
                                            src={logo.src}
                                            alt={logo.name}
                                            fill
                                            className="object-contain opacity-30 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                                        />
                                    </div>
                                ))}
                            </Marquee>
                            <Marquee reverse pauseOnHover className="[--duration:25s] select-none flex items-center mt-4">
                                {partnerLogos.slice(partnerLogos.length / 2).map((logo, index) => (
                                    <div 
                                        key={`reverse-${logo.name}-${index}`} 
                                        className="relative w-36 h-12 flex items-center justify-center mx-10 shrink-0 group"
                                    >
                                        <Image
                                            src={logo.src}
                                            alt={logo.name}
                                            fill
                                            className="object-contain opacity-30 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                                        />
                                    </div>
                                ))}
                            </Marquee>
                            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background z-10"></div>
                            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background z-10"></div>
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* newsletter */}
            <Wrapper className="flex flex-col items-center justify-center relative px-4 md:px-0 w-full overflow-hidden">
                <Container>
                    <LampContainer>
                        <div className="flex flex-col items-center justify-center relative w-full text-center">
                            <h2 className="text-4xl lg:text-5xl xl:text-6xl lg:!leading-snug font-semibold mt-8">
                                Tailored Solutions for <br /> Sustainable Business Growth
                            </h2>
                            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
                                Edge Innov OPC combines industry expertise and strategic partnerships to help organizations innovate, operate efficiently, and deliver lasting real-world impact.
                            </p>
                            <Button variant="white" className="mt-6" asChild>
                                <Link href="">
                                    Explore our solutions
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                            </Button>
                        </div>
                    </LampContainer>
                </Container>
            </Wrapper>

        </section>
    )
};

export default HomePage;