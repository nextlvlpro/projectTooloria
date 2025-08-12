"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import UserInfo from "../../UserInfo";
import Link from "next/link";

export default function Menu() {
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);

    // Close on outside click
    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0, rotateX: -15, y: -20, scale: 0.9 },
        visible: {
            opacity: 1,
            rotateX: 0,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 25,
                staggerChildren: 0.05,
            },
        },
        exit: {
            opacity: 0,
            rotateX: -10,
            scale: 0.95,
            transition: { duration: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: -5 },
        visible: { opacity: 1, y: 0 },
    };

    const menuItems = [{ name: 'Home', link: '/' }, { name: 'Tools', link: '#tools' }, { name: 'About', link: '/about' }, { name: 'Contact', link: '/contact' }, { name: 'Profile' }];

    return (
        <div className="relative" ref={menuRef}>
            <button
                onClick={() => setOpen((prev) => !prev)}
                className="px-4 py-2  text-white rounded-xl font-semibold hover:scale-105 transition-transform"
            >
                ☰
            </button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute right-0 mt-3 w-48 rounded-2xl shadow-2xl backdrop-blur bg-white/70 ring-1 ring-black/10 z-50 overflow-hidden"
                    >
                        <ul className="flex flex-col divide-y divide-gray-200">
                            {menuItems.map((item, index) => {

                                if (item?.name?.toLowerCase() === 'profile') {
                                    return (
                                        <motion.li
                                            key={index}
                                            variants={itemVariants}
                                            className="px-4 py-3 text-gray-700 font-medium hover:bg-purple-100 hover:text-purple-800 cursor-pointer transition-colors"
                                        >
                                            <UserInfo />
                                        </motion.li>
                                    )
                                } else {
                                    return (
                                        <motion.li
                                            key={index}
                                            variants={itemVariants}
                                            className="px-4 py-3 text-gray-700 font-medium hover:bg-purple-100 hover:text-purple-800 cursor-pointer transition-colors"
                                        >
                                            <Link href={`${item.link}`}>{item.name}</Link>
                                        </motion.li>
                                    )
                                }
                            })}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
