"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { BrainCircuit, Settings2, ScanLine, FileText, ChevronRight } from "lucide-react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"

// Dynamic icon component
const IconComponent = ({ name, className }: { name: string; className?: string }) => {
  switch (name) {
    case "brain-circuit":
      return <BrainCircuit className={className} />
    case "settings-2":
      return <Settings2 className={className} />
    case "scan-line":
      return <ScanLine className={className} />
    case "file-text":
      return <FileText className={className} />
    default:
      return <FileText className={className} />
  }
}

const Features = () => {
  const features = [
    {
      title: "AI Auditing",
      description:
        "Leverage artificial intelligence to automatically audit expenses and identify patterns, saving you time and reducing errors.",
      image: "audit.png",
      icon: "brain-circuit",
    },
    {
      title: "Highly Customizable Workflow",
      description:
        "Tailor the expense management process to fit your specific business needs with our flexible workflow options.",
      image: "/workflow.png",
      icon: "settings-2",
    },
    {
      title: "Bill Scanning",
      description:
        "Instantly capture and process receipts with our smart scanning technology that extracts and categorizes data automatically.",
      image: "/bill.png",
      icon: "scan-line",
    },
    {
      title: "Invoice Creation",
      description:
        "Generate professional invoices in seconds and share them with clients with just one click, streamlining your billing process.",
      image: "/invoice.png",
      icon: "file-text",
    },
  ]

  return (
<section id="features" className="py-24 relative overflow-hidden bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-600 to-gray-900 bg-clip-text text-transparent"
          >
            Why Choose Hodos
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Our platform combines cutting-edge technology with user-friendly design to streamline your financial
            processes.
          </motion.p>
        </div>

        <div className="space-y-32">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              image={feature.image}
              icon={feature.icon}
              isReversed={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

interface FeatureCardProps {
  title: string
  description: string
  image: string
  icon: string
  isReversed: boolean
}

const FeatureCard = ({ title, description, image, icon, isReversed }: FeatureCardProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <div
      ref={ref}
      className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-8 md:gap-16`}
    >
      <motion.div
        className="w-full md:w-1/3"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="relative bg-white p-8 md:p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 group">
          <div className="flex items-center mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 mr-4">
              <IconComponent name={icon} className="w-7 h-7 text-indigo-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 group-hover:text-indigo-700 transition-colors duration-300">
              {title}
            </h3>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">{description}</p>

          <div className="inline-flex items-center text-indigo-600 font-medium group-hover:text-indigo-800 transition-colors duration-300">
            <span>Learn more</span>
            <ChevronRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </motion.div>

      <motion.div
        className="w-full md:w-1/2"
        initial={{ opacity: 0, x: isReversed ? -50 : 50, scale: 0.95 }}
        animate={inView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: isReversed ? -50 : 50, scale: 0.95 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="relative overflow-hidden rounded-2xl shadow-2xl group ">
          <LazyLoadImage
            src={image || "/placeholder.svg"}
            alt={title}
            effect="blur"
            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
      </motion.div>
    </div>
  )
}

export default Features
