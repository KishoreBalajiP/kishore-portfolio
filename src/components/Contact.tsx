import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { HiOutlineMail, HiOutlinePhone, HiLocationMarker } from 'react-icons/hi';
import { FiSend } from 'react-icons/fi';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // modal state
  const [isSending, setIsSending] = useState(false);     // prevent double submit
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSending) return; // prevent double submission
    setIsSending(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error('EmailJS Error:', error);
    } finally {
      setIsSending(false);
    }
  };

  const openMap = () => {
    const latitude = 13.0827;
    const longitude = 80.2707;
    const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and projects
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="bg-white rounded-xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
              {submitted ? (
                <div className="bg-green-100 text-green-700 p-6 rounded-lg text-center">
                  <p className="text-xl font-semibold mb-2">Thank you for your message!</p>
                  <p>I'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Your message..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSending}
                    className={`w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-all shadow-lg ${
                      isSending ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700 hover:scale-105'
                    }`}
                  >
                    <FiSend size={20} />
                    {isSending ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info & Social Links */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            {/* Phone */}
            <a
              href="tel:+916381858714"
              className="block bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 text-white hover:bg-opacity-20 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                  <HiOutlinePhone size={24} color="#0A66C2" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <p className="text-blue-100 hover:text-white transition-colors">+91 6381858714</p>
                </div>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:kishorebalaji880@gmail.com"
              className="block bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 text-white hover:bg-opacity-20 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                  <HiOutlineMail size={24} color="#F87171" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-blue-100 hover:text-white transition-colors break-all">
                    kishorebalaji880@gmail.com
                  </p>
                </div>
              </div>
            </a>

            {/* Location with modal */}
            <div
              onClick={() => setIsModalOpen(true)}
              className="cursor-pointer bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 text-white hover:bg-opacity-20 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                  <HiLocationMarker size={24} color="#F87171" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-blue-100">Chennai, India</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 text-white">
              <h4 className="font-semibold mb-4">Connect on Social Media</h4>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.linkedin.com/in/kishore-balaji-p-b765672ab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all hover:scale-110"
                >
                  <FaLinkedin size={24} color="#0A66C2" />
                </a>
                <a
                  href="https://github.com/KishoreBalajiP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all hover:scale-110"
                >
                  <FaGithub size={24} color="#333" />
                </a>
                <a
                  href="https://instagram.com/kxshxre22"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all hover:scale-110"
                >
                  <FaInstagram size={24} color="#E1306C" />
                </a>
                <a
                  href="https://twitter.com/@imkishore_22"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all hover:scale-110"
                >
                  <FaTwitter size={24} color="#1DA1F2" />
                </a>
                <a
                  href="https://wa.me/916381858714"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all hover:scale-110"
                >
                  <FaWhatsapp size={24} color="#25D366" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-xl w-11/12 md:w-3/4 lg:w-1/2 p-6 relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-700 font-bold text-xl hover:text-gray-900 transition"
            >
              ×
            </button>
            <h3 className="text-2xl font-semibold mb-4">Chennai, India</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15507.151717006997!2d80.2707!3d13.0827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1697512345678!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: '0.75rem' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <button
              onClick={openMap}
              className="mt-4 w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all hover:scale-105 shadow-lg"
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
