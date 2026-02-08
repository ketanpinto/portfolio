"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
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

  const contactInfo = [
    { icon: Mail, label: "Email", value: "ketanpinto16@gmail.com", color: "indigo" },
    { icon: Phone, label: "Phone", value: "+91 7741881046 / +971 0522786730", color: "purple" },
    { icon: MapPin, label: "Location", value: "Goa, India / Abu Dhabi, UAE", color: "pink" },
  ]

  return (
    <section id="contact" className="py-32 relative bg-mesh overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-indigo-500 font-semibold tracking-widest uppercase text-sm mb-4 block">
            Collaboration
          </span>
          <h2 className="text-4xl md:text-6xl font-outfit font-bold tracking-tighter">
            Get In <span className="text-gradient-primary">Touch.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-16 max-w-6xl mx-auto">
          {/* Info Side */}
          <div className="lg:col-span-2 space-y-8">
            {contactInfo.map((info, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 rounded-2xl flex items-start gap-5 hover:border-white/20 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl bg-${info.color}-500/10 border border-${info.color}-500/20 flex items-center justify-center shrink-0`}>
                  <info.icon className={`w-6 h-6 text-${info.color}-400`} />
                </div>
                <div>
                  <h3 className="text-sm font-bold tracking-widest uppercase text-slate-500 mb-1">{info.label}</h3>
                  <p className="text-lg font-medium text-white">{info.value}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-3 glass-card p-10 rounded-[3rem] border-white/5 shadow-2xl"
          >
            <div className="flex items-center gap-4 mb-10">
              <MessageSquare className="w-6 h-6 text-indigo-400" />
              <h3 className="text-2xl font-outfit font-bold">Send a Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Name</label>
                  <Input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-14 bg-white/5 border-white/10 rounded-2xl focus:border-indigo-500/50 transition-all duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Email</label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-14 bg-white/5 border-white/10 rounded-2xl focus:border-indigo-500/50 transition-all duration-300"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Message</label>
                <Textarea
                  name="message"
                  placeholder="How can I help you?"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-[180px] bg-white/5 border-white/10 rounded-2xl focus:border-indigo-500/50 transition-all duration-300 p-4"
                />
              </div>

              <Button
                type="submit"
                className="w-full h-16 bg-white text-slate-950 font-bold rounded-2xl hover:bg-slate-200 transition-all duration-300 shadow-xl shadow-white/5"
              >
                <Send className="h-5 w-5 mr-3" />
                Dispatch Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
