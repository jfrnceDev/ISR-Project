"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import type { StrapiNavigationEntity } from "@/types/strapi-content-types"
import CarouselTicker from "./CarouselTicker"

interface HeaderProps {
    navigation: StrapiNavigationEntity
}

export default function Header({ navigation }: HeaderProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [visible, setVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    // Control header visibility on scroll
    useEffect(() => {
        const controlNavbar = () => {
            if (typeof window !== "undefined") {
                // Hide header when scrolling down, show when scrolling up
                if (window.scrollY > lastScrollY && window.scrollY > 100) {
                    setVisible(false)
                } else {
                    setVisible(true)
                }

                // Update last scroll position
                setLastScrollY(window.scrollY)
            }
        }

        window.addEventListener("scroll", controlNavbar)

        // Cleanup
        return () => {
            window.removeEventListener("scroll", controlNavbar)
        }
    }, [lastScrollY])

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }
        return () => {
            document.body.style.overflow = ""
        }
    }, [mobileMenuOpen])

    return (
        <>
            <div
                className={`fixed top-0 left-0 right-0 z-40 transition-transform duration-300 ease-in-out ${visible ? "translate-y-0" : "-translate-y-full"
                    }`}
            >
                <header
                    className="w-full bg-white"
                    style={{
                        height: "64px",
                        borderBottom: "1px solid #e5e5e5",
                    }}
                >
                    <div className="max-w-[1280px] mx-auto flex items-center justify-between h-full px-4">
                        {/* Logo - from Strapi */}
                        <div className="flex items-center">
                            <Link href="/" className="flex items-center">
                                {navigation.logo?.[0] ? (
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${navigation.logo[0].url}`}
                                        alt={navigation.logo[0].alternativeText || ""}
                                        width={70}
                                        height={40}
                                        className="h-10 w-auto"
                                        priority
                                    />
                                ) : null}
                            </Link>
                        </div>

                        {/* Desktop Menu with CTA Button at the end - All links from Strapi */}
                        <nav className="hidden md:flex items-center">
                            {/* CTA Button - from Strapi (Positioned with the navigation links) */}
                            {navigation.ctaButtonText && (
                                <Link
                                    href={navigation.ctaButtonUrl || "/"}
                                    className="bg-[#5C06E4] hover:bg-[#5105CC] text-white px-6 py-2.5 rounded-full font-medium transition-all text-base border-l border-gray-200 ml-2 mr-6"
                                >
                                    {navigation.ctaButtonText}
                                </Link>
                            )}
                            {/* All header links from Strapi */}
                            {navigation.headerLinks?.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.url}
                                    className="px-6 py-4 text-gray-800 hover:text-[#5C06E4] font-semibold uppercase text-sm tracking-wide border-l border-gray-200"
                                    aria-label={link.ariaLabel || link.label}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>

                        {/* Mobile view - CTA Button and hamburger */}
                        <div className="flex items-center md:hidden gap-4">
                            {/* CTA Button - Always visible on mobile */}
                            {navigation.ctaButtonText && (
                                <Link
                                    href={navigation.ctaButtonUrl || "/"}
                                    className="bg-[#5C06E4] hover:bg-[#5105CC] text-white px-6 py-2.5 rounded-full font-medium transition-all text-base"
                                >
                                    {navigation.ctaButtonText}
                                </Link>
                            )}

                            {/* Mobile menu button */}
                            <button
                                className="p-2 rounded-md text-gray-700"
                                onClick={() => setMobileMenuOpen(true)}
                                aria-label="Open menu"
                            >
                                <span className="sr-only">Open menu</span>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </header>

                {/* Carousel Ticker below the header */}
                <CarouselTicker
                    items={navigation.carouselTicker || []}
                    speed={30}
                    backgroundColor="#FFFFFF"
                    textColor="#000000"
                />
            </div>

            {/* Add padding to account for fixed header + ticker */}
            <div className="h-[88px]"></div>

            {/* Mobile menu overlay */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                onClick={() => setMobileMenuOpen(false)}
            />

            {/* Full-screen mobile menu with right-to-left transition */}
            <div
                className={`fixed inset-0 bg-white z-50 transition-transform duration-500 ease-in-out transform ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                style={{ transformOrigin: "right" }}
            >
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                    {/* Logo in mobile menu */}
                    <Link href="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
                        {navigation.logo?.[0] ? (
                            <Image
                                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${navigation.logo[0].url}`}
                                alt={navigation.logo[0].alternativeText || ""}
                                width={70}
                                height={40}
                                className="h-10 w-auto"
                                priority
                            />
                        ) : null}
                    </Link>

                    {/* Login button in mobile menu */}
                    <div className="flex items-center gap-4">
                        <Link
                            href={navigation.ctaButtonUrl || "/"}
                            className="bg-[#5C06E4] hover:bg-[#5105CC] text-white px-6 py-2.5 rounded-full font-medium transition-all text-base border-l border-gray-200 ml-2 mr-2"
                        >
                            {navigation.ctaButtonText}
                        </Link>

                        {/* Close button */}
                        <button className="p-2 text-gray-700" onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile menu content - Modified for full-width borders */}
                <div className="overflow-y-auto h-[calc(100%-64px)]">
                    <nav className="flex flex-col">
                        {/* Navigation links */}
                        {navigation.headerLinks?.map((link, index) => (
                            <div key={index} className="border-b border-gray-200 w-full">
                                <div className="max-w-lg mx-auto w-full">
                                    <Link
                                        href={link.url}
                                        className="block px-4 py-4 text-gray-900 uppercase font-bold text-lg"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </nav>
                </div>
            </div>
        </>
    )
}
