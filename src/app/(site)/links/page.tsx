"use client";
import { useEffect } from 'react';
import styles from './page.module.css';
import Link from 'next/link';

const socialLinks = [
  { name: 'Facebook', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbCCDgPV0dftQ7u0DnzB2_9CjMQM4ZKmLhNKhg7zly0qA0wKHSxzuh0L64igDBoAIXLW6NnDvKtlRQE5kV0gLUggcuV1WWZTCrhh1CpwkCgdslLNO9gid_AD--LKhDiLn0ntgRapwZ-cnFZtDtkC9gijKZd2cVhiMzYw9dKLJ-sPABOC5OMxANGT9AOZc0KKa-PNjGvY3Q3tl5hoxI0sw1iBadv2tEvpPPhrSkgIls_o9jqxRpK1pMhylzbiXV6fKvsxdWftch' },
  { name: 'Instagram', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCz6vbYzGj16lHj1o4ocgU9GYSf3N1Ad11kisUjxjkSLMgQcKGiG4HNOLx7_qdiEt4t5VGPN6y4P3qwG8UkOLgKR2lOdThMou8Ty7ewvSXEaWh81LopumuLpQUkCiOoggjv0oGpmnVQ4muOI6XFQ0ApX1z4Zbg_GBtOss4DyoCr5GpXuaf3qD7EY_PFIHHTM0XArDUmvYGrcU7cnxz6smAiWCYjwVq7SLPAG2mZWKrELw_cnXyYCqk7Z1XQbiakJ1-9nZ81CB23' },
  { name: 'Bluesky', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAZt7DN-IhojBBZtDR6hVyh8lbrus64GILTtfvX_pzT7XPXPLisQ7SNuz3Lsu-Z1XCb1qWQEjPggX0IyWQkOjnOrgernFG5FiXrfBNGMJnfOIa1QqS_aRYluMIWDjX0bZdU-rlLJSiRmBe04SJz_gCZg8W7Z1y70SjXxFYh4vxtBqCk9bTbB-IsiGXc9OFZBlAOLMdbS7nkNFYKfLafrvX389L4Lmq2Vy7zMJ-F6RSrC3xw06u5AjIaLYZwXSe8vklb7bNIjSY' },
  { name: 'Reddit', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBS2QI8q7EU3UTB6FpjOigIt34QpPK10MkmjVTN_55vgkRV_jIx21cQsQ2tx8Xrs1pihEDsDVZ5NDupehP9RTYV6x9RtUiVZReUmvsQyNc108IGcPy6vz6Rh-WeQZ9SpTBZ_A847k_E5TqUlyup0ksB3ueGEf1hsFKSbiWzSo4E0RExCWzco9oY3wnpU63LdtPfbEwm22xUMM0FFXoqjynAf9XAAB9FePLBvkKChEoF_Ik0erp6sXT1YHJBbNpqwu0yZVRYtXCc' },
  { name: 'LinkedIn', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhMJFJkMU7sEdk-azyBKXfFlzdAHJdtR2D67ChtL_sdyEiI9Qpglc0iQfGkl7f9Ivx9vEQPMOb-Y7kjVMpGWs9X036O8bMfAnZapuWAvK7vP944YGo6zuLRNLdIfl40ClZ-3JEzV3SwCJbiP2rKrhyKDt-rAu-an8h8OTGuxyzg6PqKkrC11tVtBVprT6U9gCd0c7sulVHqhV7epU6DpQqvdMx1PYtSAtgR1uyivYoi7_jrupDUqesczpjMQ1-jYLtSO2g0CSl' },
  { name: 'Twitter/X', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmU9MM9LNErCP-8x1-Q9JFn7yvXid0ev5WEV4E-FGDApI0wNZNZtUrOe3xE3mcPH4u5_hcMX9d1IcXDnHw2sudFZglu_Vi6DU5roY1f7anrzU-0Ztt-hRo5RKCyOVfUxG5bhEA_VoeNMKEqFS1zhjbK5Nc2i1CahGQAYiWTRwnvXNL-RuGadZCflNhbH27Bnj8C8yryrcYMtwRpFIsijX2UBywP2GAiru74IpNdnpMk6gQsnJG2_PwAOKGMk4MdND4qj6DaaPU' },
  { name: 'TikTok', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAX4dV__Y6dP-jcsvXW_Ji1ubIIBmq4_P7P8Vge79gmJVBnCcTHk90urbU6xxkMUYAV8aYO6hmNeTBQh78UryLTudyzdY9p_pDsQOcuhW0jeSzPNHzSrNUrL7lvQw68C1rMZz8Q4zH1EFlKQVFS8_RaxOHzhhfc6JmwMnZaA4CY4bclKCrKjzWZ1y43LpQ_a0u3MVKK85wyydu_kLtvosEq9ZIBHOJ4VX9A85EJK_7LeTGb0BdSj4yzi2NPkAeslE-TL500FYlr' },
  { name: 'YouTube', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvP5-n3v_WdCId8riJVobAgsYuf1_rumJyucdq0bj6KoYS0SqdBQFritPc-7fWo_SMfK9ydagi4h5DRkMETJud8CquD_lZd_q-khpgpM-DF8kwjdTpfFW3EbgCbGJdbfRGGpwNzH-GFi5I6Olt4TwRSmIwP6Zq0fE8AQKynNw9eyeCl08seQE9TmIrTZIIUBq7Nr_joDYt1txovdXeVarzv5G_NlH3tlzpHLIjJeZH_O2gNIlw8y82BXZFzr-5o5B2yx-ZaZUC' },
];

export default function LinksPage() {
  useEffect(() => {
    const container = document.getElementById('sparkles-container');
    if (container) {
      const sparkleCount = 80;
      for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = styles['sparkle'];
        sparkle.style.top = `${Math.random() * 100}%`;
        sparkle.style.left = `${Math.random() * 100}%`;
        sparkle.style.animationDelay = `${Math.random() * 3}s`;
        sparkle.style.animationDuration = `${2 + Math.random() * 3}s`;
        container.appendChild(sparkle);
      }
    }
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div id="sparkles-container" className="absolute inset-0 -z-10 bg-gradient-to-br from-pink-300 via-purple-300 to-cyan-300 dark:from-purple-900/80 dark:via-pink-900/80 dark:to-cyan-900/80" style={{animation: 'background-pan 10s ease-in-out infinite', backgroundSize: '600% 600%'}}>
      </div>
      <main className="flex flex-1 items-center justify-center p-4 sm:p-8 md:p-12">
        <div className="w-full max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`text-5xl md:text-6xl font-black tracking-tighter ${styles['gradient-text']}`}>Our Links</h2>
            <p className="mt-4 text-lg text-background-dark/80 dark:text-background-light/80 max-w-2xl mx-auto">
              Connect with us across the digital universe. Follow our journey and stay updated on the latest enchantments.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
            {socialLinks.map((link) => (
              <Link key={link.name} href="#" className={`group ${styles['holographic-border-hover']} relative flex flex-col items-center justify-center gap-4 p-6 rounded-xl bg-white/40 dark:bg-black/40 backdrop-blur-2xl shadow-lg hover:shadow-primary/50 dark:hover:shadow-primary/40 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{mixBlendMode: 'color-dodge'}}></div>
                <div className="w-full aspect-square rounded-lg bg-center bg-no-repeat bg-cover" style={{backgroundImage: `url("${link.image}")`}}></div>
                <p className="font-bold text-base text-background-dark dark:text-background-light text-center">{link.name}</p>
              </Link>
            ))}
          </div>
          <div className="mt-16">
            <div className="text-center mb-8">
              <h3 className={`text-4xl md:text-5xl font-black tracking-tighter ${styles['gradient-text']}`}>From Our Blog</h3>
            </div>
            <div className={`group ${styles['holographic-border-hover']} relative block p-6 sm:p-8 rounded-xl bg-white/40 dark:bg-black/40 backdrop-blur-2xl shadow-lg hover:shadow-primary/50 dark:hover:shadow-primary/40 transition-all duration-300 overflow-hidden`}>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{mixBlendMode: 'color-dodge'}}></div>
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="w-full sm:w-1/3 aspect-video sm:aspect-square rounded-lg bg-center bg-cover bg-no-repeat" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuALNqxUXh_98lLD-lnTjbARofwXqK2m2RlGfKTHvQmfC3E_k9Ssk5P6DO8YvqWp7-zAUCsB9sO3NR4P1K2QSNjswrO5RsoZWDfmX3IM-0sUzR4EiRewX7ZkxgE1q9WhS4rwgu5GOGCz32AH-Q8S8yJyMbX5xLtNlhk1yahPr5ks2ys3DGCimltoqAV1Emf4eYtAHC2swgJ6qd45yFZYnBHyAbf1gxDrroAmalY-_mhQKA7nR1YE1IOE_vdHWgXJlO5xi6XN65IC')"}}></div>
                <div className="flex-1 flex flex-col">
                  <h4 className={`text-2xl font-bold tracking-tight text-background-dark dark:text-background-light mb-2 ${styles['gradient-text']}`}>Decoding the Digital Dreamscape</h4>
                  <p className="text-background-dark/80 dark:text-background-light/80 mb-4">
                    Dive into the metaverse with us as we explore the latest trends in virtual fashion. Discover how Enchanted Nightmare is blurring the lines between reality and the digital realm with our new collection...
                  </p>
                  <Link href="#" className={`${styles['holographic-button']} self-start mt-auto inline-block rounded-full px-6 py-2 text-sm font-bold text-white shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105`}>Read More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}