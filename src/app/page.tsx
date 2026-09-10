"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, MotionConfig, useScroll, useTransform, useReducedMotion, useMotionValueEvent } from "framer-motion";
import {
  ArrowRight,
  Clock3,
  Coffee,
  ExternalLink,
  MapPin,
  Menu,
  X,
} from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Experience", href: "#experience" },
  { label: "Gallery", href: "#gallery" },
  { label: "Visit", href: "#visit" },
];

const signatureMenu = [
  {
    name: "Sourdough Country Loaf",
    category: "Bakery",
    description: "Slow-fermented crust, tender crumb, baked for the table.",
    price: "RM 18",
    image:
      "/images/photo-1509440159596-0249088772ff-900.jpg",
  },
  {
    name: "Butter Croissant",
    category: "Pastry",
    description: "Laminated layers with a crisp shell and soft butter finish.",
    price: "RM 12",
    image:
      "/images/photo-1555507036-ab1f4038808a-900.jpg",
  },
  {
    name: "Yuzu Cloud Coffee",
    category: "Signature Drink",
    description: "A citrus-led coffee drink with a light, creamy top.",
    price: "RM 16",
    image:
      "/images/photo-1495474472287-4d71bcdd2085-900.jpg",
  },
  {
    name: "Passion Espresso Soda",
    category: "Coffee",
    description: "Bright passion fruit, espresso depth, and sparkling lift.",
    price: "RM 15",
    image:
      "/images/photo-1622483767028-3f66f32aef97-900.jpg",
  },
  {
    name: "Smoked Chicken Tartine",
    category: "Main Dish",
    description: "Open-faced bakery toast with greens and savoury richness.",
    price: "RM 28",
    image:
      "/images/photo-1528735602780-2552fd46c7af-900.jpg",
  },
  {
    name: "Mushroom Cream Pasta",
    category: "Main Dish",
    description: "Cafe comfort plated with clean lines and earthy notes.",
    price: "RM 30",
    image:
      "/images/photo-1473093295043-cdd812d0e601-900.jpg",
  },
  {
    name: "Berry Cream Danish",
    category: "Dessert",
    description: "Fruit, custard, and pastry in an elegant bakery bite.",
    price: "RM 14",
    image:
      "/images/photo-1519915028121-7d3463d20b13-900.jpg",
  },
  {
    name: "Chocolate Gallery Cake",
    category: "Dessert",
    description: "A rich slice built for slow coffee and quiet corners.",
    price: "RM 20",
    image:
      "/images/photo-1578985545062-69928b1d9587-900.jpg",
  },
];

const experiences = [
  {
    title: "Bakery",
    text: "Freshly baked bread and pastries displayed with gallery-like care.",
    image:
      "/images/photo-1608198093002-ad4e005484ec-1100.jpg",
  },
  {
    title: "Cafe",
    text: "Coffee, crafted drinks, and casual dining for slower city hours.",
    image:
      "/images/photo-1501339847302-ac426a4a7cbb-1100.jpg",
  },
  {
    title: "Gallery",
    text: "Architecture, natural light, and interior details made to linger.",
    image:
      "/images/photo-1554118811-1e0d58224f24-1100.jpg",
  },
  {
    title: "Experience",
    text: "A place to meet, dine, work, and spend time beyond the plate.",
    image:
      "/images/photo-1517248135467-4c7edcad34c4-1100.jpg",
  },
];

const gallery = [
  {
    label: "Interior",
    image:
      "/images/photo-1559925393-8be0ec4767c8-900.jpg",
  },
  {
    label: "Bakery",
    image:
      "/images/photo-1517433367423-c7e5b0f35086-900.jpg",
  },
  {
    label: "Coffee",
    image:
      "/images/photo-1511920170033-f8396924c348-900.jpg",
  },
  {
    label: "Pastry",
    image:
      "/images/photo-1464305795204-6f5bbfc7fb81-900.jpg",
  },
  {
    label: "Dining",
    image:
      "/images/photo-1551218808-94e220e084d2-900.jpg",
  },
  {
    label: "Lifestyle",
    image:
      "/images/photo-1521017432531-fbd92d768814-900.jpg",
  },
  {
    label: "Display",
    image:
      "/images/photo-1483695028939-5bb13f8648b0-900.jpg",
  },
  {
    label: "Dessert",
    image:
      "/images/photo-1563729784474-d77dbb933a9e-900.jpg",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 900], [0, 140]);
  useMotionValueEvent(scrollY, "change", (value) => setScrolled(value > 40));
  return (
    <MotionConfig reducedMotion="user">
    <main className="min-h-screen bg-[#f5f2ea] text-[#202321]">
      <a href="#about" className="skip-link">Skip to content</a>
      <header className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${scrolled || menuOpen ? "border-black/10 bg-[#f5f2ea] text-[#164f3b]" : "border-white/10 bg-[#0d3026]/40 text-white backdrop-blur-xl"}`}>
        <nav aria-label="Main navigation" className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-10">
          <a
            href="#home"
            aria-label="Barcook home"
            className="relative block h-12 w-12 shrink-0 overflow-hidden bg-[#304c40]"
          >
            <Image
              src="/images/brand/barcook-logo.png"
              alt="Barcook"
              fill
              sizes="48px"
              className="object-cover"
            />
          </a>
          <div className="hidden items-center gap-8 text-sm uppercase lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:opacity-60"
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            href="#visit"
            className="inline-flex h-10 items-center justify-center rounded-full border border-white/30 px-4 text-sm font-medium transition hover:bg-white hover:text-[#164f3b]"
          >
            Visit Us
          </a>
          <button type="button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} title={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)} onKeyDown={(event) => { if (event.key === "Escape") setMenuOpen(false); }} className="flex h-11 w-11 shrink-0 items-center justify-center lg:hidden">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
        <nav id="mobile-navigation" aria-label="Mobile navigation" hidden={!menuOpen} className="border-t border-black/10 px-5 pb-5 lg:hidden">
          {navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="block py-3">{item.label}</a>)}
        </nav>
      </header>

      <section
        id="home"
        className="relative flex min-h-[92svh] items-end overflow-hidden bg-[#0d3026] px-5 pb-14 pt-28 text-white md:px-10 md:pb-20"
      >
        <motion.div
          className="absolute inset-0"
          style={{ y: reducedMotion ? 0 : heroY }}
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.4, ease: "easeOut" }}
        >
          <Image
            src="/images/photo-1517248135467-4c7edcad34c4-2200.jpg"
            alt="Premium bakery cafe interior with warm lights"
            fill
            preload
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#0d3026]/72 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d3026] via-[#0d3026]/35 to-transparent" />
        </motion.div>

        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 md:grid-cols-[1.15fr_0.85fr] md:items-end">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <h1 className="font-serif text-6xl leading-[0.92] tracking-normal md:text-8xl lg:text-9xl">
              Barcook Gallery
            </h1>
            <p className="mt-5 font-serif text-3xl text-white/90 md:text-5xl">
              Bakery. Café. Gallery.
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78 md:text-xl">
              Where freshly baked creations, crafted drinks and thoughtful
              spaces come together.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#about"
                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-[#164f3b] transition hover:bg-[#f5f2ea]"
              >
                Explore Barcook
              </a>
              <a
                href="#menu"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/35 px-6 text-sm font-semibold text-white transition hover:bg-white hover:text-[#164f3b]"
              >
                View Menu
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.15, duration: 0.8, ease: "easeOut" }}
            className="hidden border-l border-white/20 pl-8 text-white/80 md:block"
          >
            <p className="text-sm uppercase tracking-[0.28em]">Petaling Jaya</p>
            <p className="mt-4 max-w-sm text-2xl font-light leading-9">
              Fresh from the oven. A seat by the window. A little time for yourself.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="about" className="px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.85fr_1.15fr] md:items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-kicker">About Barcook</p>
            <h2 className="mt-4 font-serif text-5xl leading-tight md:text-7xl">
              More Than a Bakery.
            </h2>
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="grid gap-7"
          >
            <p className="max-w-3xl text-xl leading-9 text-[#4a4d49]">
              Barcook Gallery brings fresh bakery, coffee, food, contemporary
              space, and lifestyle rhythm into one considered destination. It is
              designed for people who come for a pastry, stay for the atmosphere,
              and remember the details.
            </p>
            <p className="max-w-3xl text-lg leading-8 text-[#5f625e]">
              From the first coffee of the morning to a shared afternoon treat,
              discover thoughtfully crafted flavours and a welcoming space to
              slow down, gather, and enjoy the everyday.
            </p>
          </motion.div>
        </div>
        <div className="mx-auto mt-16 grid max-w-7xl gap-5 md:grid-cols-3">
          {[
            "Fresh bakery",
            "Crafted drinks",
            "Contemporary space",
          ].map((label, index) => (
            <motion.div
              key={label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
              className="group relative h-80 overflow-hidden bg-[#164f3b]"
            >
              <Image
                src={
                  [
                    "/images/photo-1517433367423-c7e5b0f35086-1200.jpg",
                    "/images/photo-1511920170033-f8396924c348-1200.jpg",
                    "/images/photo-1554118811-1e0d58224f24-1200.jpg",
                  ][index]
                }
                alt={label}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d3026]/80 to-transparent" />
              <p className="absolute bottom-6 left-6 font-serif text-3xl text-white">
                {label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="menu" className="bg-white px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="section-kicker">Signature Menu</p>
              <h2 className="mt-4 max-w-3xl font-serif text-5xl leading-tight md:text-7xl">
                Freshly made. Thoughtfully served.
              </h2>
            </div>
            <a
              href="#menu-products"
              className="inline-flex w-fit items-center gap-2 border-b border-[#164f3b] pb-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#164f3b]"
            >
              Explore Our Menu <ArrowRight size={17} />
            </a>
          </div>

          <div id="menu-products" className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {signatureMenu.map((item, index) => (
              <motion.article
                key={item.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: (index % 4) * 0.06, duration: 0.55 }}
                className="group overflow-hidden border border-[#e2dfd6] bg-white"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[#f5f2ea]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.06]"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs uppercase tracking-[0.22em] text-[#a77b55]">
                    {item.category}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl leading-tight">
                    {item.name}
                  </h3>
                  <p className="mt-3 min-h-20 text-sm leading-6 text-[#62655f]">
                    {item.description}
                  </p>
                  <p className="mt-5 text-lg font-semibold text-[#164f3b]">
                    {item.price}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="bg-[#0d3026] px-5 py-24 text-white md:px-10 md:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="section-kicker text-[#c5c7c4]">Barcook Experience</p>
            <h2 className="mt-4 font-serif text-5xl leading-tight md:text-7xl">
              Bakery, cafe, gallery, and time well spent.
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-4">
            {experiences.map((item, index) => (
              <motion.article
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.6 }}
                className="experience-card group relative min-h-[420px] overflow-hidden"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 768px) 25vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d3026] via-[#0d3026]/55 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 transition duration-500 group-hover:-translate-y-3">
                  <h3 className="font-serif text-4xl">{item.title}</h3>
                  <p className="experience-description mt-4 text-base leading-7 text-white/85 transition duration-500 md:min-h-28">
                    {item.text}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-[#f5f2ea] px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-kicker">Selected Images</p>
              <h2 className="mt-4 max-w-3xl font-serif text-5xl leading-tight md:text-7xl">
                An editorial look at daily moments.
              </h2>
            </div>
            <p className="max-w-md text-lg leading-8 text-[#5f625e]">
              Sunlit corners, freshly baked favourites, and the small moments
              that make a day worth savouring.
            </p>
          </div>

          <div className="gallery-grid mt-14">
            {gallery.map((item, index) => (
              <motion.figure
                key={`${item.label}-${index}`}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-70px" }}
                transition={{ delay: (index % 3) * 0.08, duration: 0.55 }}
                className={`group relative overflow-hidden bg-[#164f3b] ${
                  index === 0 || index === 5 ? "gallery-tall" : ""
                }`}
              >
                <Image
                  src={item.image}
                  alt={`${item.label} visual for Barcook Gallery`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.06]"
                />
                <figcaption className="absolute bottom-4 left-4 bg-white/90 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#164f3b]">
                  {item.label}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      <section id="visit" className="bg-[#164f3b] px-5 py-24 text-white md:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-kicker text-[#c5c7c4]">Visit Us</p>
            <h2 className="mt-4 font-serif text-5xl leading-tight md:text-7xl">
              Barcook Gallery
            </h2>
            <div className="mt-8 grid gap-5 text-white/84">
              <p className="flex gap-3 text-lg leading-8">
                <MapPin className="mt-1 shrink-0" size={22} />
                4 & 6, Jln SS 5B/2, SS 5, 47301 Petaling Jaya, Selangor,
                Malaysia
              </p>
              <p className="flex gap-3 text-lg leading-8">
                <Clock3 className="mt-1 shrink-0" size={22} />
                Mon - Sun: 8:00 AM - 6:00 PM
              </p>
              <p className="flex gap-3 text-lg leading-8">
                <Coffee className="mt-1 shrink-0" size={22} />
                Bakery, coffee, casual dining, and gallery-inspired spaces.
              </p>
            </div>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Barcook+Gallery+SS5+Petaling+Jaya"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold uppercase tracking-[0.16em] text-[#164f3b] transition hover:bg-[#f5f2ea]"
              >
                Get Directions <ArrowRight size={18} />
              </a>
              <a
                href="https://www.instagram.com/barcook_my/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/35 px-6 text-sm font-semibold text-white transition hover:bg-white hover:text-[#164f3b]"
              >
                <ExternalLink size={18} /> Follow @barcook_my
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="min-h-[420px] overflow-hidden border border-white/20 bg-white/10"
          >
            <iframe
              title="Barcook Gallery map"
              src="https://www.google.com/maps?q=Barcook%20Gallery%20SS5%20Petaling%20Jaya&output=embed"
              className="h-full min-h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>

      <footer className="bg-[#0d3026] px-5 py-10 text-white md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-5">
            <Image
              src="/images/brand/barcook-logo.png"
              alt="Barcook"
              width={112}
              height={112}
              sizes="112px"
              className="h-28 w-28 shrink-0 object-cover"
            />
            <div>
            <p className="font-serif text-3xl">Barcook Gallery</p>
            <p className="mt-2 text-white/65">Bakery / Cafe / Gallery</p>
            <p className="mt-2 text-white/65">Petaling Jaya, Malaysia</p>
            </div>
          </div>
          <div className="flex gap-5 text-sm uppercase tracking-[0.18em] text-white/70">
            <a href="https://www.instagram.com/barcook_my/">Instagram</a>
            <a href="https://www.google.com/maps/search/?api=1&query=Barcook+Gallery+SS5+Petaling+Jaya">
              Google Maps
            </a>
          </div>
          <p className="text-sm text-white/50">(c) Barcook Gallery</p>
        </div>
      </footer>
    </main>
    </MotionConfig>
  );
}
