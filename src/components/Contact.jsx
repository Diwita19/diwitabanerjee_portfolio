import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

function Contact() {
  const formRef = useRef(null)
  const [isSending, setIsSending] = useState(false)
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('')

    const form = formRef.current
    const name = form.name.value.trim()
    const email = form.email.value.trim()
    const message = form.message.value.trim()

    if (!name || !email || !message) {
      setStatus('Please fill out all fields.')
      return
    }

    try {
      setIsSending(true)

      await emailjs.sendForm(
        'service_4cp97do',
        'template_o5vubi8',
        form,
        'JucUOXmn4QF5I5scj'
      )

      setStatus('Message sent successfully.')
      form.reset()
    } catch (error) {
      console.error(error)
      setStatus('Failed to send message. Please try again.')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section
      id="contact"
      className="hero-dark-bg py-15 text-white"    
    >
      <div className="mx-auto w-[min(1120px,calc(100%-2rem))]">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Connect With Me</h2>
          <p className="mx-auto mt-4 max-w-3xl text-white/70">
            Open to AI/ML engineering, research collaboration, and impactful work.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid items-stretch gap-10 lg:grid-cols-[80px_1fr]"
        >
          <div className="flex flex-col items-center justify-center gap-8">
            <a
              href="mailto:diwitabanerjee01@gmail.com"
              className="group text-white/80 transition hover:text-white"
              title="Email"
            >
              <FaEnvelope className="text-2xl transition group-hover:scale-110" />
            </a>

            <a
              href="https://www.linkedin.com/in/diwitabanerjee/"
              target="_blank"
              rel="noreferrer"
              className="group text-white/80 transition hover:text-white"
              title="LinkedIn"
            >
              <FaLinkedin className="text-2xl transition group-hover:scale-110" />
            </a>

            <a
              href="https://github.com/Diwita19"
              target="_blank"
              rel="noreferrer"
              className="group text-white/80 transition hover:text-white"
              title="GitHub"
            >
              <FaGithub className="text-2xl transition group-hover:scale-110" />
            </a>
          </div>

          <div className="flex flex-col justify-center rounded-[30px] border border-white/10 bg-white/5 p-10 backdrop-blur-md">
            <p className="text-xl font-bold text-[#c8c2ff]">Fastest way</p>

            <p className="mt-6 leading-8 text-white/70">
              I am always excited for new AI/ML engineering, research collaboration, or full-stack AI opportunities and collaboration.
            </p>

            <form ref={formRef} onSubmit={handleSubmit} className="mt-10 space-y-5">
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="rounded-xl border border-slate-200 bg-white px-5 py-2 text-slate-900 outline-none focus:border-[#9A92EA]"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="rounded-xl border border-slate-200 bg-white px-5 py-2 text-slate-900 outline-none focus:border-[#9A92EA]"
                />
              </div>

              <textarea
                rows="6"
                name="message"
                placeholder="Your Message"
                className="w-full rounded-xl border border-slate-200 bg-white px-5 py-2 text-slate-900 outline-none focus:border-[#9A92EA]"
              />

              <button
                type="submit"
                disabled={isSending}
                className="w-full rounded-xl bg-[#0d1735] py-2 font-semibold text-white transition hover:bg-[#9A92EA] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSending ? 'Sending...' : 'Send Message'}
              </button>

              {status && (
                <p className="text-sm text-white/80">
                  {status}
                </p>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact