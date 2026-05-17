import React from 'react';
import Head from 'next/head';
import AppBar from '../components/AppBar';
import { FilledButton, OutlinedButton } from '../components/Buttons';
import { StatCard, CaseStudyCard, StackCard } from '../components/Cards';
import Timeline from '../components/Timeline';

const HomePage = () => {
    // Data structures corresponding to Stitch details
    const stats = [
        { number: '7+', label: 'Years Experience' },
        { number: '3', label: 'Core Domains' },
        { number: '0-1', label: 'Experience Focus' },
        { number: 'RN', label: 'Native Specialist' }
    ];

    const caseStudies = [
        {
            title: 'Commerce Marketplace',
            tags: ['React Native', 'Payments', 'Node.js'],
            problem: 'Scaling inventory updates to 10k users in real-time.',
            role: 'Lead Mobile Engineer & Architect.',
            outcome: '99.8% crash-free sessions across OS versions.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgvE3fv82jl3xbW_gW_SX9CL7vdNXQ9tYk740bswG94G8mcKEBp7_fmYskTvaqA2KTcBbUk30kuNJZP7x-JJVC4v_JNh7OF0Sjjur6tBtjgSEIQi86ZJdw8kUU8aK9nvD98L2E0oIt714FaJMfUykjquXeAvyybnYy_GKAJtgMuj2eMTQL-UDd76Tw4u3OFR3X0kYeBNlukb_VWMTsZZx3Jwhak2BHSGh_WvUN9EkKk64GJ0q2mEU9IkN0toXQwTc8T0ADLHsk3TWF',
            imageOnRight: false
        },
        {
            title: 'Fintech App',
            tags: ['React Native', 'Fintech', 'Security'],
            problem: 'Complex state management for multi-currency wallets.',
            role: 'Senior Full-stack Developer.',
            outcome: 'Reduced transaction latency by 40% globally.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpjioo_brQNs-GQJ8czGJ-boUZro5WYl4LspDyiSah6KA01nWuj9uG4KW-bzd1Gc53At2lNYcjB9iZrFsHfyHwOsspiX-wgEGuF6WzqFQXfz46E6UXTWHCMNDEjEx_Yk74GJMa5sNYXeKr4_33zbssfyrR2h8zIDCaqyK55FJjl0FWGsLqmLeUVW3tRybr7WuDLWJZM9T79hSQizkG34stx0JnMgmrTqIoZRCiuJV4AVUJkKjMXcvpKL_A0cE7Tln1Ps23nbGa-u22',
            imageOnRight: true
        },
        {
            title: 'Digital Patient Diary',
            tags: ['HealthTech', 'Offline First', 'Encryption'],
            problem: 'Data integrity in remote areas with poor connectivity.',
            role: 'Lead Product Developer.',
            outcome: 'Successfully synced 100% of encrypted offline data.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5LiIfBuv7j_pVxdGdPWRXx49l_NzNFftm3e9W07T8ka5cy3kfImzGuvpd4Eyk7eIMSKz0705wLd0wfoCFcUW3iaTnSf_Hi6Kn9_Vf8Uy8LHd3qNC-F1gxSmmVVu5FRHU57S5QE1DIA32TGxjFOxEI9QqqP2fvdHjAbAt2Bt_G4YurbmLRJ6rBBVurc9H_W5tpiUSCDcuJd2cpPmSWWsNKD5PGVQwiMUiO2WC6-Ue_mGo0TrG6NpqrWfBRp1JYn0JbiEE_wz-7hA7A',
            imageOnRight: false
        }
    ];

    const stackItems = [
        {
            title: 'Mobile Engineering',
            icon: 'smartphone',
            tags: ['React Native', 'TypeScript', 'Native Modules (JSI)', 'Reanimated 3']
        },
        {
            title: 'Product Integrations',
            icon: 'integration_instructions',
            tags: ['Stripe', 'Firebase', 'Google Maps API', 'Socket.io']
        },
        {
            title: 'AI + Backend Direction',
            icon: 'terminal',
            tags: ['Node.js', 'FastAPI', 'PostgreSQL', 'LangChain']
        },
        {
            title: 'Foundations',
            icon: 'architecture',
            tags: ['CI/CD (Fastlane)', 'Docker', 'Kubernetes', 'AWS/GCP']
        }
    ];

    const timelineItems = [
        {
            date: '2023 — Present',
            title: 'Senior React Native Developer',
            company: 'Hexims IT Solutions',
            description: 'Spearheading mobile architectural transitions for major logistics and retail clients, focusing on offline-first capabilities and biometric security layers.'
        },
        {
            date: '2021 — 2023',
            title: 'Full Stack Developer',
            company: 'Aceware Fintech Services',
            description: 'Built highly secure payment interfaces and integrated multi-bank APIs for a regional neobanking platform serving 500k+ users.'
        },
        {
            date: '2019 — 2021',
            title: 'Mobile Lead',
            company: 'Cankado',
            description: 'Developed international oncology support applications with rigorous data compliance (GDPR/HIPAA) and complex patient charting features.'
        },
        {
            date: '2017 — 2019',
            title: 'Associate Developer',
            company: 'Iband',
            description: 'Early career focusing on web-to-mobile porting and hybrid application development using React Native and Flutter.'
        }
    ];

    const handleScrollToContact = () => {
        const elem = document.getElementById('contact');
        if (elem) {
            elem.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleScrollToWork = () => {
        const elem = document.getElementById('work');
        if (elem) {
            elem.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <Head>
                <title>Paval EP | Senior React Native Developer &amp; Architect Portfolio</title>
                <meta name="description" content="Senior React Native Developer &amp; Architect specializing in high-performance cross-platform applications, local AI workflows, and resilient offline-first systems." />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <AppBar />

            <main className="max-w-desktop-max-width mx-auto px-mobile-padding md:px-desktop-padding pt-[80px]">
                {/* Hero Section */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-huge items-center py-giant min-h-[80vh]">
                    <div className="space-y-lg">
                        <span className="inline-block font-label-lg text-label-lg text-primary bg-primary-container px-md py-xs rounded-full">
                            React Native Developer · Mobile Products · AI Systems
                        </span>
                        <h1 className="font-display-lg text-display-lg tracking-tight leading-tight">
                            Building mobile products that survive real-world complexity
                        </h1>
                        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                            Specialized in high-performance cross-platform applications, integrated AI workflows, and resilient backend systems. Turning complex architectural requirements into seamless user experiences.
                        </p>
                        <div className="flex flex-wrap gap-md pt-md">
                            <FilledButton label="View Work" onClick={handleScrollToWork} />
                            <OutlinedButton label="Contact" onClick={handleScrollToContact} />
                        </div>
                    </div>
                    
                    {/* Material-style Android Mockup */}
                    <div className="relative flex justify-center">
                        <div className="w-[280px] h-[580px] bg-on-surface rounded-[40px] p-base shadow-2xl relative border-[8px] border-surface-variant overflow-hidden">
                            <div className="w-full h-full bg-surface rounded-[32px] overflow-hidden p-md space-y-md flex flex-col justify-start">
                                {/* Device top bar */}
                                <div className="flex justify-between items-center px-xs py-xs text-on-surface-variant">
                                    <span className="material-symbols-outlined">signal_cellular_4_bar</span>
                                    <div className="font-label-md text-label-md">12:45</div>
                                    <span className="material-symbols-outlined">battery_full</span>
                                </div>
                                
                                {/* Inner Cards */}
                                <div className="bg-primary-container p-md rounded-xl space-y-xs">
                                    <div className="flex justify-between items-center">
                                        <span className="font-label-md text-label-md text-on-primary-fixed-variant">System Health</span>
                                        <span className="material-symbols-outlined text-primary scale-75">check_circle</span>
                                    </div>
                                    <div className="font-headline-md text-headline-md">99.9%</div>
                                    <div className="w-full bg-surface h-1 rounded-full overflow-hidden">
                                        <div className="bg-primary w-full h-full"></div>
                                    </div>
                                </div>
                                <div className="bg-surface-container p-md rounded-xl">
                                    <div className="font-label-md text-label-md text-on-surface-variant">Payments</div>
                                    <div className="flex items-center gap-sm mt-xs">
                                        <div className="w-xs h-xs bg-secondary rounded-full"></div>
                                        <div className="font-title-md text-title-md">Stripe Integrated</div>
                                    </div>
                                </div>
                                <div className="bg-surface-container p-md rounded-xl">
                                    <div className="font-label-md text-label-md text-on-surface-variant">Auth</div>
                                    <div className="flex items-center gap-sm mt-xs">
                                        <div className="w-xs h-xs bg-tertiary rounded-full"></div>
                                        <div className="font-title-md text-title-md">OAuth 2.0 / JWT</div>
                                    </div>
                                </div>
                                <div className="bg-surface-container p-md rounded-xl">
                                    <div className="font-label-md text-label-md text-on-surface-variant">Maps</div>
                                    <div className="flex items-center gap-sm mt-xs">
                                        <div className="w-xs h-xs bg-primary rounded-full"></div>
                                        <div className="font-title-md text-title-md">Real-time Polylines</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Soft background glow */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl"></div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="grid grid-cols-2 md:grid-cols-4 gap-lg pb-giant">
                    {stats.map((stat, idx) => (
                        <StatCard key={idx} number={stat.number} label={stat.label} />
                    ))}
                </section>

                {/* Selected Work Section */}
                <section className="py-giant space-y-huge" id="work">
                    <div className="space-y-xs">
                        <h2 className="font-headline-lg text-headline-lg text-on-surface">Selected Work</h2>
                        <p className="font-body-lg text-body-lg text-on-surface-variant">Engineering solutions for scale and stability.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-xl">
                        {caseStudies.map((study, idx) => (
                            <CaseStudyCard 
                                key={idx}
                                title={study.title}
                                tags={study.tags}
                                problem={study.problem}
                                role={study.role}
                                outcome={study.outcome}
                                image={study.image}
                                imageOnRight={study.imageOnRight}
                            />
                        ))}
                    </div>
                </section>

                {/* Engineering Stack Section */}
                <section className="py-giant" id="stack">
                    <h2 className="font-headline-lg text-headline-lg text-on-surface mb-huge">Engineering Stack</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
                        {stackItems.map((item, idx) => (
                            <StackCard 
                                key={idx}
                                title={item.title}
                                icon={item.icon}
                                tags={item.tags}
                            />
                        ))}
                    </div>
                </section>

                {/* AI Systems Lab Section */}
                <section className="py-giant" id="ai-lab">
                    <div className="bg-inverse-surface text-inverse-on-surface p-huge rounded-xxl overflow-hidden relative shadow-lg">
                        <div className="relative z-10 space-y-xl max-w-2xl">
                            <div className="space-y-xs">
                                <div className="font-label-lg text-label-lg text-primary-fixed-dim flex items-center gap-xs font-bold uppercase tracking-wider">
                                    <span className="material-symbols-outlined text-primary-fixed-dim">science</span>
                                    AI Systems Lab
                                </div>
                                <h2 className="font-headline-lg text-headline-lg text-inverse-on-surface">Backend &amp; Local AI Workflows</h2>
                                <p className="font-body-lg text-body-lg text-surface-variant">
                                    Experimenting with localized intelligence to enhance privacy and reduce latency in mobile ecosystems.
                                </p>
                            </div>
                            <div className="space-y-md">
                                <div className="flex items-center justify-between p-md border-b border-outline/30">
                                    <div className="font-title-md text-title-md">Local LLM Orchestration</div>
                                    <div className="font-label-md text-label-md text-primary-fixed-dim bg-white/10 px-sm py-xs rounded-full font-medium">Ollama + Docker</div>
                                </div>
                                <div className="flex items-center justify-between p-md border-b border-outline/30">
                                    <div className="font-title-md text-title-md">Agentic RAG Workflows</div>
                                    <div className="font-label-md text-label-md text-primary-fixed-dim bg-white/10 px-sm py-xs rounded-full font-medium">Python + Vector DB</div>
                                </div>
                                <div className="flex items-center justify-between p-md">
                                    <div className="font-title-md text-title-md">Real-time Translation Hub</div>
                                    <div className="font-label-md text-label-md text-primary-fixed-dim bg-white/10 px-sm py-xs rounded-full font-medium">Next.js + WebSockets</div>
                                </div>
                            </div>
                        </div>
                        {/* Gradient element */}
                        <div className="absolute right-0 bottom-0 top-0 w-1/3 bg-gradient-to-l from-primary/15 to-transparent pointer-events-none hidden md:block"></div>
                    </div>
                </section>

                {/* Experience Section */}
                <section className="py-giant" id="experience">
                    <h2 className="font-headline-lg text-headline-lg text-on-surface mb-huge">Experience</h2>
                    <Timeline items={timelineItems} />
                </section>

                {/* Contact CTA Section */}
                <section className="py-giant" id="contact">
                    <div className="bg-primary-container/50 p-huge rounded-xxl text-center space-y-huge relative overflow-hidden border border-primary-container">
                        <div className="relative z-10 space-y-md">
                            <h2 className="font-display-md text-display-md text-primary leading-tight max-w-3xl mx-auto">
                                Building mobile products, AI tools, or backend services?
                            </h2>
                            <p className="font-body-lg text-body-lg text-on-primary-fixed-variant max-w-xl mx-auto font-medium">
                                Let's discuss how we can leverage modern engineering to solve your business complexity.
                            </p>
                            <div className="flex flex-wrap justify-center items-center gap-md pt-md">
                                <a 
                                    href="mailto:pavalep@example.com" 
                                    className="bg-primary text-on-primary px-xxl py-md rounded-xxl font-title-md text-title-md shadow-md hover:brightness-110 active:scale-95 transition-all flex items-center gap-sm"
                                >
                                    <span className="material-symbols-outlined">mail</span>
                                    Email Me
                                </a>
                                <a 
                                    href="https://linkedin.com/in/pavalep" 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className="border border-primary text-primary px-xxl py-md rounded-xxl font-title-md text-title-md hover:bg-white/40 active:scale-95 transition-all flex items-center gap-sm"
                                >
                                    <span className="material-symbols-outlined">link</span>
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                        {/* Background pattern details */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none">
                            <div className="absolute top-0 right-0 w-huge h-huge bg-primary rounded-full -mr-xl -mt-xl"></div>
                            <div className="absolute bottom-0 left-0 w-huge h-huge bg-primary rounded-full -ml-xl -mb-xl"></div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="w-full py-xl px-mobile-padding md:px-desktop-padding flex flex-col md:flex-row justify-between items-center gap-md max-w-desktop-max-width mx-auto bg-surface-container-high border-t border-outline-variant/20 mt-giant">
                <div className="font-title-md text-title-md text-on-surface font-bold">Paval EP</div>
                <div className="font-body-md text-body-md text-on-surface-variant font-medium text-center md:text-left">
                    &copy; 2026 Paval EP. Built with React, Next.js &amp; Material 3.
                </div>
                <div className="flex gap-lg flex-wrap justify-center">
                    <a 
                        className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors font-medium" 
                        href="https://linkedin.com/in/pavalep"
                        target="_blank"
                        rel="noreferrer"
                    >
                        LinkedIn
                    </a>
                    <a 
                        className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors font-medium" 
                        href="https://github.com/pavalep"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </a>
                    <a 
                        className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors font-medium" 
                        href="https://twitter.com/pavalep"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Twitter
                    </a>
                    <a 
                        className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors font-medium" 
                        href="#resume"
                    >
                        Resume
                    </a>
                </div>
            </footer>
        </>
    );
};

export default HomePage;
