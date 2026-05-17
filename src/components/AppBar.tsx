import React, { useState, useEffect } from 'react';

const AppBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('work');

    const navLinks = [
        { label: 'Work', href: '#work', key: 'work' },
        { label: 'Stack', href: '#stack', key: 'stack' },
        { label: 'AI Lab', href: '#ai-lab', key: 'ai-lab' },
        { label: 'Experience', href: '#experience', key: 'experience' },
        { label: 'Contact', href: '#contact', key: 'contact' },
    ];

    // Track scroll section to highlight active nav link
    useEffect(() => {
        const handleScroll = () => {
            const sections = navLinks.map(link => document.getElementById(link.key));
            const scrollPosition = window.scrollY + 200;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section && scrollPosition >= section.offsetTop) {
                    setActiveSection(navLinks[i].key);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.replace('#', '');
        const elem = document.getElementById(targetId);
        if (elem) {
            elem.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
    };

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-md shadow-sm border-b border-outline-variant/10">
                <div className="max-w-desktop-max-width mx-auto flex items-center justify-between px-mobile-padding md:px-desktop-padding py-4">
                    {/* Brand Logo */}
                    <div className="font-title-lg text-title-lg font-bold text-primary tracking-tight">
                        Paval EP
                    </div>

                    {/* Desktop Navigation Links */}
                    <nav className="hidden md:flex items-center gap-xl">
                        {navLinks.map((link) => (
                            <a
                                key={link.key}
                                href={link.href}
                                onClick={(e) => handleLinkClick(e, link.href)}
                                className={`font-label-lg text-label-lg transition-all duration-200 pb-1 border-b-2 ${
                                    activeSection === link.key
                                        ? 'text-primary font-bold border-primary'
                                        : 'text-on-surface-variant font-medium border-transparent hover:text-primary hover:border-primary/50'
                                }`}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Actions & Hamburger */}
                    <div className="flex items-center gap-md">
                        <a
                            href="mailto:pavalep@example.com"
                            className="hidden sm:inline-block bg-primary text-on-primary px-lg py-sm rounded-full font-label-lg text-label-lg hover:shadow-md hover:brightness-110 active:scale-95 transition-all text-center"
                        >
                            Email Me
                        </a>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={toggleMenu}
                            className="md:hidden text-primary p-2 focus:outline-none rounded-full hover:bg-primary-container/20 active:bg-primary-container/40 transition-colors"
                            aria-label="Toggle navigation menu"
                        >
                            <span className="material-symbols-outlined text-2xl">
                                {isOpen ? 'close' : 'menu'}
                            </span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Navigation Drawer */}
            <div
                className={`fixed inset-0 top-[64px] z-40 bg-surface transition-all duration-300 transform border-t border-outline-variant/20 md:hidden ${
                    isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                }`}
            >
                <nav className="flex flex-col p-lg gap-md">
                    {navLinks.map((link) => (
                        <a
                            key={link.key}
                            href={link.href}
                            onClick={(e) => handleLinkClick(e, link.href)}
                            className={`flex items-center justify-between py-md px-lg rounded-xl font-title-md text-title-md transition-all ${
                                activeSection === link.key
                                    ? 'bg-primary-container text-primary font-bold'
                                    : 'text-on-surface-variant hover:bg-surface-container hover:text-primary'
                            }`}
                        >
                            <span>{link.label}</span>
                            <span className="material-symbols-outlined text-lg">chevron_right</span>
                        </a>
                    ))}
                    <a
                        href="mailto:pavalep@example.com"
                        className="mt-huge bg-primary text-on-primary px-xl py-md rounded-xxl font-title-md text-title-md text-center hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-sm"
                    >
                        <span className="material-symbols-outlined">mail</span>
                        Email Me
                    </a>
                </nav>
            </div>
        </>
    );
};

export default AppBar;
