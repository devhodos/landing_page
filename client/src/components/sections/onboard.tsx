"use client"

import { Check, FileUp, Workflow, Users } from "lucide-react"
import { Button } from "../ui/Button"
import { motion } from "framer-motion"

export default function OnboardingSection() {
  const steps = [
    {
      icon: <FileUp className="h-10 w-10 text-indigo-600" />, 
      title: "Submit Travel Policy",
      description: "Simply upload your existing travel policy document or use our templates to get started quickly.",
    },
    {
      icon: <Users className="h-10 w-10 text-indigo-600" />, 
      title: "Integrate HRMS or Upload CSV",
      description: "Connect with your existing HR system or upload employee data via CSV file.",
    },
    {
      icon: <Workflow className="h-10 w-10 text-indigo-600" />, 
      title: "Create Workflow",
      description: "Set up approval flows and travel rules that match your organization's needs.",
    },
    {
      icon: <Check className="h-10 w-10 text-indigo-600" />, 
      title: "You're Done!",
      description: "Your travel management system is ready to use. It's that simple!",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="py-24 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-[10]">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-indigo-600 to-gray-900 bg-clip-text text-transparent"
          >
            Get Started in Minutes, Not Months
          </motion.h2>
          <motion.p
            className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our streamlined onboarding process gets you up and running with minimal effort
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-8 h-full flex flex-col items-center text-center shadow-lg border border-gray-200 relative z-10"
              variants={itemVariants}
            >
              <div className="bg-indigo-50 p-4 rounded-full mb-6 text-indigo-600">{step.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <Button 
            size="lg" 
            className="px-8 py-6 text-lg bg-indigo-600 hover:bg-indigo-700 text-white"
            onClick={() => window.open("https://main.d2yeebuc0aimjp.amplifyapp.com/signup", "_blank")}
          >
            Start Your Free Trial
          </Button>
          <p className="mt-4 text-gray-600">No credit card required. Set up in minutes.</p>
        </motion.div>
      </div>
    </section>
  )
}