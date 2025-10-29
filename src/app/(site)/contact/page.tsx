"use client";
import { useState } from 'react';
import styles from './page.module.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 -z-10" style={{backgroundImage: 'linear-gradient(135deg, #f8a5c2, #b3e5fc, #d8b4fe, #a9c9ff)', animation: 'background-pan 15s ease-in-out infinite', backgroundSize: '400% 400%'}}>
        <div className={styles['glitter-overlay']}></div>
      </div>
      <main className="flex flex-1 items-center justify-center p-4 sm:p-8 md:p-12">
        <div className="w-full max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`text-5xl md:text-6xl font-black tracking-tighter ${styles['gradient-text']}`}>Get In Touch</h2>
            <p className="mt-4 text-lg text-background-dark/80 dark:text-background-light/80 max-w-2xl mx-auto">
              Have a question or a magical project in mind? Drop us a line, we&apos;d love to hear from you.
            </p>
          </div>
          <div className="p-8 sm:p-10 rounded-xl bg-white/20 dark:bg-black/20 backdrop-blur-2xl shadow-2xl border border-white/30 dark:border-black/30">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-background-dark/90 dark:text-background-light/90 mb-2" htmlFor="name">Full Name</label>
                <input className={`${styles['form-input']} block w-full rounded-md border-0 py-2.5 px-4 shadow-sm ring-1 ring-inset ring-transparent focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6`} id="name" name="name" placeholder="Luna Lovegood" type="text" value={formData.name} onChange={handleChange} />
              </div>
              <div>
                <label className="block text-sm font-medium text-background-dark/90 dark:text-background-light/90 mb-2" htmlFor="email">Email Address</label>
                <input className={`${styles['form-input']} block w-full rounded-md border-0 py-2.5 px-4 shadow-sm ring-1 ring-inset ring-transparent focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6`} id="email" name="email" placeholder="luna.lovegood@hogwarts.ac.uk" type="email" value={formData.email} onChange={handleChange} />
              </div>
              <div>
                <label className="block text-sm font-medium text-background-dark/90 dark:text-background-light/90 mb-2" htmlFor="message">Message</label>
                <textarea className={`${styles['form-input']} block w-full rounded-md border-0 py-2.5 px-4 shadow-sm ring-1 ring-inset ring-transparent focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6`} id="message" name="message" placeholder="Tell us about your enchanted ideas..." rows={5} value={formData.message} onChange={handleChange}></textarea>
              </div>
              <div>
                <button className={`${styles['holographic-button']} w-full flex justify-center rounded-full px-8 py-3 text-base font-bold text-white shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-primary/50`} type="submit">
                  Send Your Spell
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}