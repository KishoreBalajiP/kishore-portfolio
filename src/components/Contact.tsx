import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaWhatsapp
} from 'react-icons/fa';
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiLocationMarker
} from 'react-icons/hi';
import { FiSend } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    sectionRef.current && obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSending) return;
    setIsSending(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setSubmitted(false);
      }, 3000);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSending(false);
    }
  };

  const openMap = () => {
    window.open(
      `https://www.google.com/maps/search/?api=1&query=13.0827,80.2707`,
      '_blank'
    );
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-20 w-full overflow-hidden text-white bg-gradient-to-b from-black via-[#0f1522] to-[#101828]"
    >
      {/* AWS Cloud Glow */}
      <motion.div
        className="absolute inset-0 opacity-[0.2] blur-[140px]"
        style={{
          background:
            'radial-gradient(circle at 30% 20%, rgba(0,120,255,0.35), transparent 70%), radial-gradient(circle at 70% 80%, rgba(0,255,200,0.25), transparent 70%)'
        }}
        animate={{
          x: ['0%', '6%', '-6%', '0%'],
          y: ['0%', '-4%', '4%', '0%']
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative container mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            I’m always open to discussing new opportunities and projects
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Form */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="bg-white/10 border border-white/10 backdrop-blur-lg rounded-xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6">
                Send a Message
              </h3>

              {submitted ? (
                <div className="bg-green-500/20 border border-green-400/30 p-6 rounded-lg text-center text-green-200">
                  <p className="text-xl font-semibold mb-2">
                    Thank you for your message!
                  </p>
                  <p>I’ll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-gray-200 font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 text-white rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-200 font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 text-white rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-200 font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 text-white rounded-lg outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                      placeholder="Your message..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSending}
                    className={`w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-all shadow-lg ${
                      isSending
                        ? 'opacity-50 cursor-not-allowed'
                        : 'hover:bg-blue-700 hover:scale-105'
                    }`}
                  >
                    <FiSend size={20} />
                    {isSending ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right side */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-300 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-10'
            }`}
          >
            {/* Phone */}
            <a
              href="tel:+916381858714"
              className="block bg-white/10 border border-white/10 backdrop-blur-lg rounded-xl p-6 text-white hover:bg-white/20 transition-all"
            >
              <div className="flex items-start gap-4 whitespace-nowrap">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <HiOutlinePhone size={24} color="#0A66C2" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <p className="text-gray-300 hover:text-white">
                    +91 6381858714
                  </p>
                </div>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:kishorebalaji880@gmail.com"
              className="block bg-white/10 border border-white/10 backdrop-blur-lg rounded-xl p-6 text-white hover:bg-white/20 transition-all"
            >
              <div className="flex items-start gap-4 whitespace-nowrap">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <HiOutlineMail size={24} color="#F87171" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-gray-300 hover:text-white break-all">
                    kishorebalaji880@gmail.com
                  </p>
                </div>
              </div>
            </a>

            {/* Location */}
            <div
              onClick={() => setIsModalOpen(true)}
              className="cursor-pointer bg-white/10 border border-white/10 backdrop-blur-lg rounded-xl p-6 text-white hover:bg-white/20 transition-all"
            >
              <div className="flex items-start gap-4 whitespace-nowrap">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <HiLocationMarker size={24} color="#F87171" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-gray-300">Chennai, India</p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="bg-white/10 border border-white/10 backdrop-blur-lg rounded-xl p-6 text-white overflow-visible">
              <h4 className="font-semibold mb-4">
                Connect on Social Media
              </h4>
              <div className="flex gap-4 overflow-x-auto no-scrollbar whitespace-nowrap">
                <a
                  href="https://www.linkedin.com/in/kishore-balaji-p-b765672ab"
                  className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 hover:scale-110 transition"
                >
                  <FaLinkedin size={24} color="#0A66C2" />
                </a>
                <a
                  href="https://github.com/KishoreBalajiP"
                  className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 hover:scale-110 transition"
                >
                  <FaGithub size={24} color="#eee" />
                </a>
                <a
                  href="https://instagram.com/kxshxre22"
                  className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 hover:scale-110 transition"
                >
                  <FaInstagram size={24} color="#E1306C" />
                </a>
                <a
                  href="https://twitter.com/@imkishore_22"
                  className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 hover:scale-110 transition"
                >
                  <FaTwitter size={24} color="#1DA1F2" />
                </a>
                <a
                  href="https://wa.me/916381858714"
                  className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 hover:scale-110 transition"
                >
                  <FaWhatsapp size={24} color="#25D366" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Location Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-[#0f1522] text-white rounded-xl w-11/12 md:w-3/4 lg:w-1/2 p-6 relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-300 hover:text-white text-xl"
            >
              ×
            </button>

            <h3 className="text-2xl font-semibold mb-4">
              Chennai, India
            </h3>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15507.151717006997!2d80.2707!3d13.0827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1697512345678!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: '0.75rem' }}
              allowFullScreen
              loading="lazy"
            />

            <button
              onClick={openMap}
              className="mt-4 w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 hover:scale-105 transition"
            >
              Open in Google Maps
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
