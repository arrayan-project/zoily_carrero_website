import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-montserrat text-center mb-12 tracking-wider text-gray-800">
          CONTACT US
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-montserrat tracking-wide text-gray-700 mb-6">
              Send Us a Message
            </h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-montserrat text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-200"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-montserrat text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-200"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-montserrat text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-200"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-montserrat text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-200"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors font-montserrat tracking-wider"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-montserrat tracking-wide text-gray-700 mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-pink-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-montserrat text-gray-700">Phone</h3>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-pink-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-montserrat text-gray-700">Email</h3>
                    <p className="text-gray-600">info@sadiesfloral.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-pink-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-montserrat text-gray-700">Location</h3>
                    <p className="text-gray-600">123 Floral Street<br />New York, NY 10001</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-pink-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-montserrat text-gray-700">Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-montserrat tracking-wide text-gray-700 mb-6">
                Follow Us
              </h2>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">Instagram</a>
                <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">Pinterest</a>
                <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">Facebook</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;