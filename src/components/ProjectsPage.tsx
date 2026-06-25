import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Utensils, MessageSquare, Star, Sparkles, Filter, ShieldCheck, Heart } from 'lucide-react';
import { FoodItem } from '../types';

const FOOD_ITEMS_DATA: FoodItem[] = [
  {
    id: 'starter-1',
    name: 'Golden Herb Spring Rolls',
    description: 'Crispy delicate skin wrappers stuffed with glass noodles, organic garden vegetables, field mushrooms, and served with sweet plum dip.',
    price: '₹189',
    rating: 4.7,
    imageUrl: '/src/assets/images/gourmet_starter_1782359587422.jpg',
    category: 'Starters',
    isSpecial: false
  },
  {
    id: 'starter-2',
    name: 'Butter Garlic Herb Prawns',
    description: 'Crispy grilled coastal tiger prawns sautéed in organic clarified butter, crushed fresh garlic, and garnished with dynamic micro-coriander.',
    price: '₹249',
    rating: 4.9,
    imageUrl: '/src/assets/images/gourmet_starter_1782359587422.jpg',
    category: 'Starters',
    isSpecial: true
  },
  {
    id: 'main-1',
    name: 'Claypot Mutton Biryani',
    description: 'Our signature culinary gem: long-grain vintage basmati rice steamed over juicy grass-fed mutton in an authentic slow claypot oven.',
    price: '₹449',
    rating: 5.0,
    imageUrl: '/src/assets/images/gourmet_biryani_1782359525162.jpg',
    category: 'Main Course',
    isSpecial: true
  },
  {
    id: 'main-2',
    name: 'Truffle Carbonara Pasta',
    description: 'Al dente ribbons of fresh fettuccine folded in carbonara cream, pecorino cheese, double smoked bacon lardons, and black winter truffles.',
    price: '₹389',
    rating: 4.9,
    imageUrl: '/src/assets/images/artisan_pasta_1782359539754.jpg',
    category: 'Main Course',
    isSpecial: true
  },
  {
    id: 'main-3',
    name: 'Smoked Truffle Craft Burger',
    description: 'Double flame-kissed Wagyu-style beef patties, melting aged cheddar, crispy caramelized onions, and dripping house truffle glaze on brioche.',
    price: '₹299',
    rating: 4.8,
    imageUrl: '/src/assets/images/gourmet_burger_1782359554661.jpg',
    category: 'Main Course',
    isSpecial: false
  },
  {
    id: 'dessert-1',
    name: 'Belgian Molten Lava Cake',
    description: 'Rich dark chocolate cake structure with a dynamic chocolate center flow, balanced with fresh berries and organic vanilla bean ice cream.',
    price: '₹249',
    rating: 5.0,
    imageUrl: '/src/assets/images/decadent_dessert_1782359569891.jpg',
    category: 'Desserts',
    isSpecial: true
  },
  {
    id: 'dessert-2',
    name: 'Madagascar Vanilla Crème Brûlée',
    description: 'Velvety smooth vanilla-infused egg custard baked with a glassy, fire-torched caramelized sugar layer on top.',
    price: '₹199',
    rating: 4.8,
    imageUrl: '/src/assets/images/decadent_dessert_1782359569891.jpg',
    category: 'Desserts',
    isSpecial: false
  },
  {
    id: 'drink-1',
    name: 'Citrus Passion Botanical Mocktail',
    description: 'A vibrant, refreshing mix of organic passionfruit syrup, fresh lemon squeeze, hand-crushed mint leaves, and effervescent sparkling water.',
    price: '₹149',
    rating: 4.7,
    imageUrl: '/src/assets/images/gourmet_drink_1782359603624.jpg',
    category: 'Drinks',
    isSpecial: false
  },
  {
    id: 'drink-2',
    name: 'Signature Cold Brew Affogato',
    description: 'Premium slow-extracted Arabica cold brew espresso poured delicately over a rich double scoop of our signature vanilla bean gelato.',
    price: '₹169',
    rating: 4.9,
    imageUrl: '/src/assets/images/gourmet_drink_1782359603624.jpg',
    category: 'Drinks',
    isSpecial: true
  }
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Starters' | 'Main Course' | 'Desserts' | 'Drinks'>('All');
  const whatsappNumber = '918919449475';

  const categories: ('All' | 'Starters' | 'Main Course' | 'Desserts' | 'Drinks')[] = [
    'All',
    'Starters',
    'Main Course',
    'Desserts',
    'Drinks'
  ];

  const filteredItems = activeCategory === 'All'
    ? FOOD_ITEMS_DATA
    : FOOD_ITEMS_DATA.filter(item => item.category === activeCategory);

  const handleWhatsAppEnquiry = (itemName: string, price: string) => {
    const text = encodeURIComponent(`Hello The Daily Craving! I am interested in ordering/inquiring about the "${itemName}" (${price}) from your menu. Is it available for delivery or table serving?`);
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="py-20 bg-cream-bg min-h-screen relative overflow-hidden" id="foods-page-container">
      {/* Background Decorators */}
      <div className="absolute top-1/5 right-0 h-96 w-96 rounded-full bg-gold-accent/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/5 left-0 h-96 w-96 rounded-full bg-appetite-orange/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-accent/10 border border-gold-accent/25 text-gold-accent text-xs font-semibold tracking-wider uppercase mb-4">
            <Utensils size={12} className="text-gold-accent" />
            Gastronomy Menu
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-brand-brown tracking-tight leading-tight">
            Our Food <span className="text-gold-accent">Menu</span>
          </h1>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Browse through our gourmet menu collections. Savor authentic culinary recipes built using slow-cooking craft methods and pristine fresh garden supplies.
          </p>
        </div>

        {/* Category Switcher Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12" id="food-categories-tab">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'text-white font-bold'
                  : 'text-brand-brown hover:text-gold-accent border border-brand-brown/10 hover:border-gold-accent/30 bg-white/60 backdrop-blur-sm'
              }`}
            >
              <span className="relative z-10">{cat}</span>
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeCategoryBg"
                  className="absolute inset-0 bg-brand-brown rounded-xl"
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Foods Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          id="foods-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="bg-white border border-brand-brown/5 rounded-3xl overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md luxury-card-hover group h-full"
                id={`food-card-${item.id}`}
              >
                {/* Image Section with Overlay */}
                <div className="relative aspect-4/3 overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-brown/40 via-brand-brown/10 to-transparent" />
                  
                  {/* Category & Special Tag */}
                  <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-brand-brown/95 text-gold-accent text-[9px] font-bold uppercase tracking-wider shadow-md">
                      {item.category}
                    </span>
                    {item.isSpecial && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gold-accent text-white text-[9px] font-bold uppercase tracking-wider shadow-md">
                        <Sparkles size={10} className="fill-current text-white" />
                        Chef Special
                      </span>
                    )}
                  </div>

                  {/* Price Tag Overlay */}
                  <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm text-brand-brown font-bold font-sans text-sm px-3.5 py-1.5 rounded-xl shadow-md border border-brand-brown/5">
                    {item.price}
                  </div>
                </div>

                {/* Content Panel */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Stars and Category */}
                    <div className="flex items-center gap-1 mb-2">
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={12}
                            className={`${
                              i < Math.floor(item.rating)
                                ? 'fill-current'
                                : 'text-slate-200'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-brand-brown/70 font-semibold pl-1">
                        {item.rating}
                      </span>
                    </div>

                    <h3 className="font-display text-lg font-bold text-brand-brown mb-2 group-hover:text-gold-accent transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  {/* Enquiry button */}
                  <div className="pt-4 border-t border-brand-brown/5">
                    <button
                      onClick={() => handleWhatsAppEnquiry(item.name, item.price)}
                      className="w-full py-2.5 bg-gradient-to-r from-gold-accent to-appetite-orange hover:from-appetite-orange hover:to-gold-accent text-white font-bold rounded-xl transition-all text-xs flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                    >
                      <MessageSquare size={14} className="fill-current text-white" />
                      Discuss / Order Item
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Trust Badge */}
        <div className="mt-16 bg-white p-6 rounded-3xl border border-brand-brown/5 text-center shadow-sm max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="h-12 w-12 rounded-full bg-soft-green-bg text-soft-green flex items-center justify-center">
            <ShieldCheck size={26} />
          </div>
          <div className="text-left">
            <h4 className="text-brand-brown font-display font-bold text-base leading-tight">Strict Culinary Standards</h4>
            <p className="text-xs text-slate-500 font-light mt-0.5 leading-relaxed">
              We practice safe hygienic preparation, chemical-free raw processing, and express sanitization. All kitchen staff are thoroughly certified.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
