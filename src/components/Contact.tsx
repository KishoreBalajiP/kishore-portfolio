import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
                    className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all hover:scale-105 shadow-lg"
                  >
                    <Send size={20} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

          <div
            className={`space-y-6 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 text-white">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <a href="tel:+916381858714" className="text-blue-100 hover:text-white transition-colors">
                    +91 6381858714
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 text-white">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <a
                    href="mailto:kishorebalaji880@gmail.com"
                    className="text-blue-100 hover:text-white transition-colors break-all"
                  >
                    kishorebalaji880@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 text-white">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-blue-100">India</p>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 text-white">
              <h4 className="font-semibold mb-4">Connect on Social Media</h4>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/in/kishore-balaji"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all hover:scale-110"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://github.com/kishorebalaji"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all hover:scale-110"
                >
                  <Github size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
