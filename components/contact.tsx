"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    console.log(formData)
    alert("Thanks for your message! I'll get back to you soon.")
    setFormData({ name: "", email: "", message: "" })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="contact" className="py-20 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-pink-500/10 opacity-20" />

      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          Get In <span className="text-pink-500">Touch</span>
        </motion.h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto"
        >
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="flex items-start space-x-4">
              <div className="bg-pink-500/20 p-3 rounded-full border border-pink-500">
                <Mail className="h-6 w-6 text-pink-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Email</h3>
                <p className="text-gray-400">ketanpinto16@gmail.com</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-start space-x-4">
              <div className="bg-purple-500/20 p-3 rounded-full border border-purple-500">
                <Phone className="h-6 w-6 text-purple-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Phone</h3>
                <p className="text-gray-400">+91 7741881046 / +971 0522786730</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-start space-x-4">
              <div className="bg-cyan-500/20 p-3 rounded-full border border-cyan-500">
                <MapPin className="h-6 w-6 text-cyan-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Location</h3>
                <p className="text-gray-400">Goa, India </p>
                <p className="text-gray-400">Abu Dhabi, United Arab Emirates</p>
              </div>
            </motion.div>
          </div>

          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit}
            className="space-y-6 bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800"
          >
            <div>
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-black/50 border-gray-700 focus:border-pink-500"
              />
            </div>
            <div>
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-black/50 border-gray-700 focus:border-pink-500"
              />
            </div>
            <div>
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="bg-black/50 border-gray-700 focus:border-pink-500 min-h-[150px]"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
            >
              <Send className="h-4 w-4 mr-2" />
              Send Message
            </Button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}
