import { motion } from "framer-motion";
import { Link } from "react-router";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-20 text-center bg-gradient-to-br from-blue-600 to-purple-700 text-white"
      >
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Welcome to Tooloria
        </motion.h1>
        <motion.p
          className="text-lg mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          A toolkit for all your web utilities, in one place.
        </motion.p>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link
            to="/"
            className="bg-white text-blue-700 font-semibold py-2 px-6 rounded shadow hover:bg-gray-100"
          >
            Get Started
          </Link>
        </motion.div>
      </motion.section>

      {/* Features */}
      <section className="py-16 px-4 max-w-6xl mx-auto grid sm:grid-cols-3 gap-6">
        {["Fast", "Easy", "Free"].map((item, i) => (
          <motion.div
            key={i}
            className="p-6 bg-muted rounded-lg shadow text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-2">{item}</h3>
            <p className="text-muted-foreground">
              {item} access to tools built to save your time.
            </p>
          </motion.div>
        ))}
      </section>

      {/* About */}
      <motion.section
        className="py-16 px-4 max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-4">Why Tooloria?</h2>
        <p className="text-muted-foreground">
          We offer a suite of web tools, calculators, and utilities under one elegant interface — no ads, no tracking.
        </p>
      </motion.section>

      {/* CTA */}
      <motion.section
        className="py-16 bg-blue-100 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-semibold mb-4">Ready to get started?</h3>
        <Link
          to="/"
          className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition"
        >
          Explore Tools
        </Link>
      </motion.section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Tooloria. All rights reserved.
      </footer>
    </div>
  );
}