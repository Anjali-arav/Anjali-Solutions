import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Star, Sparkles, TrendingUp, Heart } from 'lucide-react';

const SPECIALS_DATA = [
  {
    id: 'special-biryani',
    name: 'Claypot Mutton Biryani',
    price: '₹449',
    rating: 5,
    imageUrl: '/src/assets/images/gourmet_biryani_1782359525162.jpg',
    description: 'Aromatic long-grain basmati rice, layered with tender local mutton, secret spices, and cooked slow in a traditional claypot oven.',
    badge: 'Chef Choice'
  },
  {
    id: 'special-pasta',
    name: 'Truffle Carbonara Pasta',
    price: '₹389',
    rating: 4.9,
    imageUrl: '/src/assets/images/artisan_pasta_1782359539754.jpg',
    description: 'Al dente fettuccine rolled in luxurious organic egg-yolk cream, crispy smoked pancetta, grated pecorino cheese, and winter black truffles.',
    badge: 'Popular'
  },
  {
    id: 'special-burger',
    name: 'Smoked Truffle Craft Burger',
    price: '₹299',
    rating: 4.8,
    imageUrl: '/src/assets/images/gourmet_burger_1782359554661.jpg',
    description: 'Double custom beef patty, melting sharp cheddar, sweet caramelized shallots, heirloom tomato, and house truffle glaze on toasted brioche.',
    badge: 'Trending'
  },
  {
    id: 'special-dessert',
    name: 'Belgian Molten Lava Cake',
    price: '₹249',
    rating: 5,
    imageUrl: '/src/assets/images/decadent_dessert_1782359569891.jpg',
    description: 'Rich warm Belgian chocolate cake with a molten chocolate center, served with fresh field berries and premium vanilla bean gelato.',
    badge: 'Signature'
  }
];

export default function ServicesSection() {
  const whatsappNumber = '918919449475';

  const handleOrderWhatsApp = (itemName: string, price: string) => {
    const text = encodeURIComponent(`Hello The Daily Craving, I would like to order your Today's Special: ${itemName} (${price}). Please confirm my order!`);
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden" id="specials-section">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 left-1/10 h-80 w-80 rounded-full bg-gold-accent/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 h-80 w-80 rounded-full bg-appetite-orange/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gold-accent/10 border border-gold-accent/25 text-gold-accent text-xs font-semibold tracking-wider uppercase mb-4">
            <Sparkles size={12} className="text-gold-accent" />
            Today’s Exquisite Creations
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-brand-brown tracking-tight leading-tight">
            Today’s <span className="text-gold-accent">Specials</span>
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Savor our freshly customized recipes curated daily by our Master Chef. These dishes feature limited-quantity premium cuts and organic local ingredients.
          </p>
        </div>

        {/* 4 Specials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {SPECIALS_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-cream-bg/40 border border-brand-brown/5 rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between group luxury-card-hover"
              id={`special-card-${item.id}`}
            >
              {/* Card Image section with badge */}
              <div className="relative overflow-hidden aspect-4/3">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-brown/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Float Badge */}
                <span className="absolute top-4 left-4 bg-brand-brown text-gold-accent text-[10px] font-semibold uppercase px-3 py-1 rounded-full shadow-sm border border-gold-accent/25">
                  {item.badge}
                </span>

                {/* Price Tag Overlay */}
                <div className="absolute bottom-4 right-4 bg-gold-accent text-white font-bold font-sans text-sm px-3.5 py-1.5 rounded-xl shadow-md">
                  {item.price}
                </div>
              </div>

              {/* Content Panel */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  {/* Rating & Name */}
                  <div className="flex items-center gap-1.5 mb-2">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={13}
                          className={`${
                            i < Math.floor(item.rating)
                              ? 'fill-current'
                              : 'text-slate-200'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-brand-brown/70 font-semibold">{item.rating}</span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-brand-brown group-hover:text-gold-accent transition-colors leading-tight mb-2">
                    {item.name}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* CTA WhatsApp Link */}
                <div className="pt-4 border-t border-brand-brown/5">
                  <motion.button
                    whileTap={{ scale: 0.96 }}
                    onClick={() => handleOrderWhatsApp(item.name, item.price)}
                    className="w-full bg-soft-green text-white hover:bg-soft-green/90 font-bold py-2.5 px-4 rounded-xl transition-all text-xs flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <MessageSquare size={14} className="fill-current text-white" />
                    <span>Order Now on WhatsApp</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
