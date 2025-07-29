// Menu data with authentic South Indian dishes
export const menuData = [
  // Breakfast Items (20 items)
  {
    id: 'b1',
    name: 'Traditional Dosa',
    category: 'breakfast',
    price: 80,
    description: 'Crispy fermented crepe served with coconut chutney and sambar',
    image: 'https://tse3.mm.bing.net/th/id/OIP.zns6vEnIPk4jKDFc81wYQwHaE7?pid=Api&P=0&h=180',
    ingredients: [
      { name: 'Rice', calories: 130, protein: 2.5, carbs: 28, fat: 0.3 },
      { name: 'Urad Dal', calories: 120, protein: 9, carbs: 16, fat: 1 },
      { name: 'Coconut', calories: 60, protein: 1, carbs: 2, fat: 6 }
    ],
    recipe: '1. Soak rice and urad dal separately for 4-6 hours. 2. Grind into smooth batter. 3. Ferment overnight. 4. Heat pan and spread batter thinly. 5. Cook until golden and crispy.'
  },
  {
    id: 'b2',
    name: 'Masala Dosa',
    category: 'breakfast',
    price: 120,
    description: 'Crispy dosa filled with spiced potato curry',
    image: 'https://tse3.mm.bing.net/th/id/OIP.XSCo5S6kP3o-7-jVqH4vGgHaE8?pid=Api&P=0&h=180',
    ingredients: [
      { name: 'Rice', calories: 130, protein: 2.5, carbs: 28, fat: 0.3 },
      { name: 'Potato', calories: 80, protein: 2, carbs: 18, fat: 0.1 },
      { name: 'Onion', calories: 20, protein: 0.5, carbs: 5, fat: 0 }
    ],
    recipe: 'Same as traditional dosa with added spiced potato filling made with onions, turmeric, and curry leaves.'
  },
  {
    id: 'b3',
    name: 'Rava Dosa',
    category: 'breakfast',
    price: 100,
    description: 'Crispy semolina crepe with onions and spices',
    image: 'https://vegecravings.com/wp-content/uploads/2023/07/Rava-Dosa-Recipe-Step-By-Step-Instructions-scaled.jpg',
    ingredients: [
      { name: 'Semolina', calories: 150, protein: 5, carbs: 30, fat: 1 },
      { name: 'Rice Flour', calories: 100, protein: 2, carbs: 22, fat: 0.5 },
      { name: 'Onion', calories: 20, protein: 0.5, carbs: 5, fat: 0 }
    ],
    recipe: 'Mix semolina, rice flour, and spices. Add water to make thin batter. Cook on hot pan with ghee until crispy.'
  },
  {
    id: 'b4',
    name: 'Idli (4 pieces)',
    category: 'breakfast',
    price: 60,
    description: 'Soft steamed rice cakes served with chutney and sambar',
    image: 'https://tse4.mm.bing.net/th/id/OIP.hqmDmn7CbZABNESBsK6CwQHaFw?pid=Api&P=0&h=180',
    ingredients: [
      { name: 'Rice', calories: 130, protein: 2.5, carbs: 28, fat: 0.3 },
      { name: 'Urad Dal', calories: 120, protein: 9, carbs: 16, fat: 1 }
    ],
    recipe: 'Steam fermented rice and urad dal batter in idli molds for 10-12 minutes until fluffy.'
  },
  {
    id: 'b5',
    name: 'Vada (3 pieces)',
    category: 'breakfast',
    price: 70,
    description: 'Crispy deep-fried lentil donuts with coconut chutney',
    image: 'https://tse1.mm.bing.net/th/id/OIP._1VfAf1Vo2yHGo-HHQlQWAHaFj?pid=Api&P=0&h=180',
    ingredients: [
      { name: 'Urad Dal', calories: 120, protein: 9, carbs: 16, fat: 1 },
      { name: 'Ginger', calories: 5, protein: 0.1, carbs: 1, fat: 0 },
      { name: 'Curry Leaves', calories: 2, protein: 0.1, carbs: 0.4, fat: 0 }
    ],
    recipe: 'Grind soaked urad dal into fluffy batter. Add spices and deep fry in oil until golden brown.'
  },
  {
    id: 'b6',
    name: 'Upma',
    category: 'breakfast',
    price: 65,
    description: 'Savory semolina porridge with vegetables and spices',
    image: 'https://tse4.mm.bing.net/th/id/OIP.boBBw90ShLIHl5l9pQvbQgHaE7?pid=Api&P=0&h=180',
    ingredients: [
      { name: 'Semolina', calories: 150, protein: 5, carbs: 30, fat: 1 },
      { name: 'Vegetables', calories: 30, protein: 1, carbs: 6, fat: 0.2 },
      { name: 'Ghee', calories: 40, protein: 0, carbs: 0, fat: 4.5 }
    ],
    recipe: 'Roast semolina, sauté vegetables with spices, add water and cook until fluffy.'
  },
  {
    id: 'b7',
    name: 'Pesarattu',
    category: 'breakfast',
    price: 90,
    description: 'Green gram dosa with ginger and green chilies',
    image: 'https://tse4.mm.bing.net/th/id/OIP.guaXiiD9Re3IHlnnEtB6wQHaFP?pid=Api&P=0&h=180',
    ingredients: [
      { name: 'Green Gram', calories: 140, protein: 10, carbs: 20, fat: 1.5 },
      { name: 'Ginger', calories: 5, protein: 0.1, carbs: 1, fat: 0 },
      { name: 'Green Chili', calories: 3, protein: 0.2, carbs: 0.7, fat: 0 }
    ],
    recipe: 'Grind soaked green gram with ginger and chilies. Make dosa on hot pan with oil.'
  },
  {
    id: 'b8',
    name: 'Uttapam',
    category: 'breakfast',
    price: 95,
    description: 'Thick pancake topped with onions, tomatoes, and chilies',
    image: 'https://tse2.mm.bing.net/th/id/OIP.__PCOypsfqkcL5q_rjH-BgHaE1?pid=Api&P=0&h=180',
    ingredients: [
      { name: 'Rice', calories: 130, protein: 2.5, carbs: 28, fat: 0.3 },
      { name: 'Onion', calories: 20, protein: 0.5, carbs: 5, fat: 0 },
      { name: 'Tomato', calories: 15, protein: 0.8, carbs: 3, fat: 0.2 }
    ],
    recipe: 'Spread thick dosa batter, top with chopped vegetables, cook until bottom is golden.'
  },
  {
    id: 'b9',
    name: 'Pongal',
    category: 'breakfast',
    price: 75,
    description: 'Savory rice and lentil dish tempered with ghee and spices',
    image: 'https://tse4.mm.bing.net/th/id/OIP.eh5cEwS6_davfe-6432ZmgHaHa?pid=Api&P=0&h=180',
    ingredients: [
      { name: 'Rice', calories: 130, protein: 2.5, carbs: 28, fat: 0.3 },
      { name: 'Moong Dal', calories: 120, protein: 8, carbs: 20, fat: 1 },
      { name: 'Ghee', calories: 40, protein: 0, carbs: 0, fat: 4.5 }
    ],
    recipe: 'Cook rice and moong dal together, temper with ghee, cumin, and black pepper.'
  },
  {
    id: 'b10',
    name: 'Appe/Paniyaram',
    category: 'breakfast',
    price: 80,
    description: 'Round dumplings made from dosa batter in special pan',
    image: 'https://tse2.mm.bing.net/th/id/OIP.hH0H1r3QcALAcl95NHNasAHaE7?pid=Api&P=0&h=180',
    ingredients: [
      { name: 'Rice', calories: 130, protein: 2.5, carbs: 28, fat: 0.3 },
      { name: 'Urad Dal', calories: 120, protein: 9, carbs: 16, fat: 1 },
      { name: 'Mustard Seeds', calories: 5, protein: 0.3, carbs: 0.3, fat: 0.4 }
    ],
    recipe: 'Pour fermented batter into appe pan, cook until golden on all sides.'
  },
  {
    id: 'b11',
    name: 'Bonda',
    category: 'breakfast',
    price: 50,
    description: 'Deep-fried potato dumplings in gram flour batter',
    image: 'https://tse2.mm.bing.net/th/id/OIP.OqCcwwRugIQ4F8dmCMptZgHaFj?pid=Api&P=0&h=180',
    ingredients: [
      { name: 'Potato', calories: 80, protein: 2, carbs: 18, fat: 0.1 },
      { name: 'Gram Flour', calories: 100, protein: 6, carbs: 16, fat: 2 },
      { name: 'Oil', calories: 120, protein: 0, carbs: 0, fat: 14 }
    ],
    recipe: 'Make spiced potato balls, dip in gram flour batter, deep fry until golden.'
  },
  {
    id: 'b12',
    name: 'Kanchipuram Idli',
    category: 'breakfast',
    price: 85,
    description: 'Spiced idli with ghee, curry leaves, and black pepper',
    image: 'https://tse1.mm.bing.net/th/id/OIP.FJ-OJuaJb3TRKa0pwRzW3gHaFj?pid=Api&P=0&h=180',
    ingredients: [
      { name: 'Rice', calories: 130, protein: 2.5, carbs: 28, fat: 0.3 },
      { name: 'Urad Dal', calories: 120, protein: 9, carbs: 16, fat: 1 },
      { name: 'Ghee', calories: 40, protein: 0, carbs: 0, fat: 4.5 }
    ],
    recipe: 'Steam spiced idli batter with ghee tempering, curry leaves, and pepper.'
  },
  {
    id: 'b13',
    name: 'Adai',
    category: 'breakfast',
    price: 90,
    description: 'Multi-lentil crepe with vegetables and spices',
    image: 'https://tse3.mm.bing.net/th/id/OIP.wyFlTfTBttRhUf8SBXrvAQAAAA?pid=Api&P=0&h=180',
    ingredients: [
      { name: 'Mixed Lentils', calories: 140, protein: 10, carbs: 20, fat: 1.5 },
      { name: 'Vegetables', calories: 30, protein: 1, carbs: 6, fat: 0.2 },
      { name: 'Spices', calories: 10, protein: 0.5, carbs: 2, fat: 0.5 }
    ],
    recipe: 'Grind mixed lentils with spices, add vegetables, make thick crepes.'
  },
  {
    id: 'b14',
    name: 'Rava Upma',
    category: 'breakfast',
    price: 70,
    description: 'Fine semolina cooked with vegetables and South Indian spices',
    image: 'https://tse3.mm.bing.net/th/id/OIP.8XzS_q_5vOuEfrWVEhSP4wHaJQ?pid=Api&P=0&h=180',
    ingredients: [
      { name: 'Fine Semolina', calories: 150, protein: 5, carbs: 30, fat: 1 },
      { name: 'Vegetables', calories: 30, protein: 1, carbs: 6, fat: 0.2 },
      { name: 'Curry Leaves', calories: 2, protein: 0.1, carbs: 0.4, fat: 0 }
    ],
    recipe: 'Roast fine semolina, sauté vegetables with spices, cook with water until fluffy.'
  },
  {
    id: 'b15',
    name: 'Methu Vada',
    category: 'breakfast',
    price: 75,
    description: 'Extra fluffy urad dal vada with perfect texture',
    image: 'https://tse1.mm.bing.net/th/id/OIP.PYSsOnMNxZu9VeldtPYkiQHaE6?pid=Api&P=0&h=180',
    ingredients: [
      { name: 'Urad Dal', calories: 120, protein: 9, carbs: 16, fat: 1 },
      { name: 'Ginger', calories: 5, protein: 0.1, carbs: 1, fat: 0 },
      { name: 'Pepper', calories: 3, protein: 0.1, carbs: 0.6, fat: 0 }
    ],
    recipe: 'Grind urad dal to extra fluffy batter, add spices, deep fry with hole in center.'
  },
  {
    id: 'b16',
    name: 'Coconut Chutney',
    category: 'breakfast',
    price: 30,
    description: 'Fresh coconut chutney with curry leaves tempering',
    image: 'https://tse3.mm.bing.net/th/id/OIP.EtejkuH3Sk7yFO8sRhdgUAHaHa?pid=Api&P=0&h=180',
    ingredients: [
      { name: 'Coconut', calories: 60, protein: 1, carbs: 2, fat: 6 },
      { name: 'Green Chili', calories: 3, protein: 0.2, carbs: 0.7, fat: 0 },
      { name: 'Ginger', calories: 5, protein: 0.1, carbs: 1, fat: 0 }
    ],
    recipe: 'Grind coconut with green chilies and ginger, temper with mustard seeds and curry leaves.'
  },
  {
    id: 'b17',
    name: 'Sambar',
    category: 'breakfast',
    price: 40,
    description: 'Traditional lentil curry with vegetables and tamarind',
    image: 'https://tse4.mm.bing.net/th/id/OIP.mbt9FLAaeC1lpIhfMnTusQHaFj?pid=Api&P=0&h=180',
    ingredients: [
      { name: 'Toor Dal', calories: 120, protein: 8, carbs: 20, fat: 1 },
      { name: 'Vegetables', calories: 30, protein: 1, carbs: 6, fat: 0.2 },
      { name: 'Tamarind', calories: 15, protein: 0.3, carbs: 4, fat: 0.1 }
    ],
    recipe: 'Cook toor dal, add vegetables, tamarind, and sambar powder. Temper with spices.'
  },
  {
    id: 'b18',
    name: 'Ghee Roast Dosa',
    category: 'breakfast',
    price: 140,
    description: 'Crispy dosa roasted with pure ghee',
    image: 'https://images.slurrp.com/prod/recipe_images/transcribe/breakfast/Ghee-Roast-Dosa.webp',
    ingredients: [
      { name: 'Rice', calories: 130, protein: 2.5, carbs: 28, fat: 0.3 },
      { name: 'Urad Dal', calories: 120, protein: 9, carbs: 16, fat: 1 },
      { name: 'Ghee', calories: 80, protein: 0, carbs: 0, fat: 9 }
    ],
    recipe: 'Make dosa with extra ghee for crispy texture and rich flavor.'
  },
  {
    id: 'b19',
    name: 'Button Idli',
    category: 'breakfast',
    price: 65,
    description: 'Mini idlis perfect for kids, served with chutney',
    image: 'https://tse4.mm.bing.net/th/id/OIP.zk2_GSKHlnH6yD8tZmNjKwHaFw?pid=Api&P=0&h=180',
    ingredients: [
      { name: 'Rice', calories: 130, protein: 2.5, carbs: 28, fat: 0.3 },
      { name: 'Urad Dal', calories: 120, protein: 9, carbs: 16, fat: 1 }
    ],
    recipe: 'Steam idli batter in small button-shaped molds for 8-10 minutes.'
  },
  {
    id: 'b20',
    name: 'Cheese Dosa',
    category: 'breakfast',
    price: 160,
    description: 'Modern twist on traditional dosa with melted cheese',
    image: 'https://tse1.mm.bing.net/th/id/OIP.J5rELBbpNsC98i3tFfgeVgHaHa?pid=Api&P=0&h=180',
    ingredients: [
      { name: 'Rice', calories: 130, protein: 2.5, carbs: 28, fat: 0.3 },
      { name: 'Cheese', calories: 100, protein: 7, carbs: 1, fat: 8 },
      { name: 'Butter', calories: 50, protein: 0, carbs: 0, fat: 6 }
    ],
    recipe: 'Make dosa, add grated cheese while hot, fold and serve immediately.'
  },

  // Lunch Items (20 items)
  {
    id: 'l1',
    name: 'South Indian Thali',
    category: 'lunch',
    price: 180,
    description: 'Complete meal with rice, sambar, rasam, curry, and accompaniments',
    image: 'https://tse2.mm.bing.net/th/id/OIP.K_ScF0y1yobcrPOeVTcuZwHaFx?pid=Api&P=0&h=180',
    ingredients: [
      { name: 'Rice', calories: 200, protein: 4, carbs: 45, fat: 0.5 },
      { name: 'Sambar', calories: 80, protein: 4, carbs: 12, fat: 2 },
      { name: 'Rasam', calories: 40, protein: 2, carbs: 6, fat: 1 }
    ],
    recipe: 'Serve steamed rice with sambar, rasam, vegetable curry, pickle, and papad.'
  },
  {
    id: 'l2',
    name: 'Bisi Bele Bath',
    category: 'lunch',
    price: 120,
    description: 'Spicy rice and lentil dish with vegetables',
    image: 'https://tse4.mm.bing.net/th/id/OIP.dsubFqERaMlWkuPMNwsE3AHaE8?pid=Api&P=0&h=180',
    ingredients: [
      { name: 'Rice', calories: 130, protein: 2.5, carbs: 28, fat: 0.3 },
      { name: 'Toor Dal', calories: 120, protein: 8, carbs: 20, fat: 1 },
      { name: 'Vegetables', calories: 40, protein: 2, carbs: 8, fat: 0.3 }
    ],
    recipe: 'Cook rice and dal together, add vegetables and bisi bele bath powder, simmer well.'
  },
  {
    id: 'l3',
    name: 'Hyderabadi Biryani',
    category: 'lunch',
    price: 250,
    description: 'Fragrant basmati rice with spiced vegetables and saffron',
    image: 'https://tse4.mm.bing.net/th/id/OIP.VQSf0GuP2KOhHVE1xQuFwwHaFj?pid=Api&P=0&h=180',
    ingredients: [
      { name: 'Basmati Rice', calories: 180, protein: 4, carbs: 38, fat: 0.5 },
      { name: 'Vegetables', calories: 60, protein: 3, carbs: 12, fat: 0.5 },
      { name: 'Saffron', calories: 5, protein: 0.2, carbs: 1, fat: 0.1 }
    ],
    recipe: 'Layer cooked rice with spiced vegetables, cook dum style with saffron milk.'
  },
  {
    id: 'l4',
    name: 'Curd Rice',
    category: 'lunch',
    price: 80,
    description: 'Comfort food with rice, yogurt, and South Indian tempering',
    image: 'https://tse1.mm.bing.net/th/id/OIP.eaz8JeQJfq-I5yFaDSZ1jQHaFj?pid=Api&P=0&h=180',
    ingredients: [
      { name: 'Rice', calories: 130, protein: 2.5, carbs: 28, fat: 0.3 },
      { name: 'Yogurt', calories: 60, protein: 3, carbs: 4, fat: 3 },
      { name: 'Curry Leaves', calories: 2, protein: 0.1, carbs: 0.4, fat: 0 }
    ],
    recipe: 'Mix cooked rice with yogurt, temper with mustard seeds, curry leaves, and ginger.'
  },
  {
    id: 'l5',
    name: 'Lemon Rice',
    category: 'lunch',
    price: 90,
    description: 'Tangy rice with lemon juice, peanuts, and curry leaves',
    image: 'https://tse4.mm.bing.net/th/id/OIP.NgXppeeT7A6iHrxvESE9RwHaHa?pid=Api&P=0&h=180',
    ingredients: [
      { name: 'Rice', calories: 130, protein: 2.5, carbs: 28, fat: 0.3 },
      { name: 'Lemon', calories: 10, protein: 0.2, carbs: 3, fat: 0.1 },
      { name: 'Peanuts', calories: 80, protein: 4, carbs: 3, fat: 7 }
    ],
    recipe: 'Temper cooked rice with mustard seeds, add lemon juice, peanuts, and curry leaves.'
  },
  {
    id: 'l6',
    name: 'Tomato Rice',
    category: 'lunch',
    price: 95,
    description: 'Flavorful rice cooked with tomatoes and South Indian spices',
    image: 'https://tse3.mm.bing.net/th/id/OIP.KtIdawFRHjT7nMAq2Nt1bQHaE8?pid=Api&P=0&h=180',
    ingredients: [
      { name: 'Rice', calories: 130, protein: 2.5, carbs: 28, fat: 0.3 },
      { name: 'Tomato', calories: 20, protein: 1, carbs: 4, fat: 0.2 },
      { name: 'Spices', calories: 15, protein: 0.5, carbs: 3, fat: 0.5 }
    ],
    recipe: 'Cook rice with tomato puree, onions, and South Indian spice powder.'
  },
  {
    id: 'l7',
    name: 'Tamarind Rice',
    category: 'lunch',
    price: 85,
    description: 'Tangy rice with tamarind, jaggery, and peanuts',
    image: 'https://i.pinimg.com/originals/8a/c2/2e/8ac22e0ebd3ff11f9a85b1df94b0faea.jpg',
    ingredients: [
      { name: 'Rice', calories: 130, protein: 2.5, carbs: 28, fat: 0.3 },
      { name: 'Tamarind', calories: 15, protein: 0.3, carbs: 4, fat: 0.1 },
      { name: 'Jaggery', calories: 20, protein: 0, carbs: 5, fat: 0 }
    ],
    recipe: 'Mix cooked rice with tamarind paste, jaggery, and tempering.'
  },
  {
    id: 'l8',
    name: 'Coconut Rice',
    category: 'lunch',
    price: 100,
    description: 'Aromatic rice cooked with fresh coconut and curry leaves',
    image: 'https://tse2.mm.bing.net/th/id/OIP.5JQ9eGlAlB_b9_pNn914PwHaFj?pid=Api&P=0&h=180',
    ingredients: [
      { name: 'Rice', calories: 130, protein: 2.5, carbs: 28, fat: 0.3 },
      { name: 'Coconut', calories: 80, protein: 1.5, carbs: 3, fat: 8 },
      { name: 'Curry Leaves', calories: 2, protein: 0.1, carbs: 0.4, fat: 0 }
    ],
    recipe: 'Cook rice with grated coconut, temper with mustard seeds and curry leaves.'
  },
  {
    id: 'l9',
    name: 'Vegetable Pulao',
    category: 'lunch',
    price: 130,
    description: 'Fragrant rice with mixed vegetables and aromatic spices',
    image: 'https://tse3.mm.bing.net/th/id/OIP.0rUaUWEqxiaWgX2FPotp5AHaEK?pid=Api&P=0&h=180',
    ingredients: [
      { name: 'Basmati Rice', calories: 150, protein: 3, carbs: 32, fat: 0.4 },
      { name: 'Mixed Vegetables', calories: 50, protein: 2, carbs: 10, fat: 0.3 },
      { name: 'Ghee', calories: 40, protein: 0, carbs: 0, fat: 4.5 }
    ],
    recipe: 'Cook rice with vegetables, whole spices, and ghee until fragrant.'
  },
  {
    id: 'l10',
    name: 'Rasam',
    category: 'lunch',
    price: 50,
    description: 'Traditional South Indian soup with tamarind and spices',
    image: 'https://tse4.mm.bing.net/th/id/OIP.p9DjcrHJxRWYYTRAolGGtAHaEI?pid=Api&P=0&h=180',
    ingredients: [
      { name: 'Tamarind', calories: 15, protein: 0.3, carbs: 4, fat: 0.1 },
      { name: 'Tomato', calories: 15, protein: 0.8, carbs: 3, fat: 0.2 },
      { name: 'Rasam Powder', calories: 10, protein: 0.5, carbs: 2, fat: 0.5 }
    ],
    recipe: 'Boil tamarind water with tomatoes, add rasam powder, and temper with spices.'
  },
  {
    id: 'l11',
    name: 'Spinach Dal',
    category: 'lunch',
    price: 80,
    description: 'Nutritious lentils cooked with fresh spinach',
    image: 'https://tse4.mm.bing.net/th/id/OIP.M15c9jw4rUsQE3otOSHJ-gHaEw?pid=Api&P=0&h=180',
    ingredients: [
      { name: 'Toor Dal', calories: 120, protein: 8, carbs: 20, fat: 1 },
      { name: 'Spinach', calories: 20, protein: 2, carbs: 3, fat: 0.3 },
      { name: 'Turmeric', calories: 5, protein: 0.2, carbs: 1, fat: 0.1 }
    ],
    recipe: 'Cook dal with spinach, turmeric, and spices until well combined.'
  },
  {
    id: 'l12',
    name: 'Brinjal Curry',
    category: 'lunch',
    price: 90,
    description: 'Spicy eggplant curry with South Indian flavors',
    image: 'https://tse2.mm.bing.net/th/id/OIP.VJzUyTJViK5j_zou5NcNVQHaHa?pid=Api&P=0&h=180',
    ingredients: [
      { name: 'Brinjal', calories: 25, protein: 1, carbs: 6, fat: 0.2 },
      { name: 'Onion', calories: 25, protein: 0.7, carbs: 6, fat: 0 },
      { name: 'Coconut', calories: 40, protein: 0.7, carbs: 1.5, fat: 4 }
    ],
    recipe: 'Cook brinjal with onions, coconut, and South Indian spice paste.'
  },
  {
    id: 'l13',
    name: 'Okra Fry',
    category: 'lunch',
    price: 85,
    description: 'Crispy fried okra with onions and spices',
    image: 'https://tse1.mm.bing.net/th/id/OIP.z3JWxcEQ6L7zYaeVHTpPPQHaE8?pid=Api&P=0&h=180',
    ingredients: [
      { name: 'Okra', calories: 30, protein: 2, carbs: 7, fat: 0.1 },
      { name: 'Onion', calories: 20, protein: 0.5, carbs: 5, fat: 0 },
      { name: 'Oil', calories: 60, protein: 0, carbs: 0, fat: 7 }
    ],
    recipe: 'Fry okra with onions until crispy, season with spices.'
  },
  {
    id: 'l14',
    name: 'Drumstick Sambar',
    category: 'lunch',
    price: 70,
    description: 'Traditional sambar with drumsticks and vegetables',
    image: 'https://tse4.mm.bing.net/th/id/OIP.I0MzFwyFoLeYxfV8wKTXBwHaEK?pid=Api&P=0&h=180',
    ingredients: [
      { name: 'Toor Dal', calories: 120, protein: 8, carbs: 20, fat: 1 },
      { name: 'Drumstick', calories: 25, protein: 2, carbs: 4, fat: 0.2 },
      { name: 'Tamarind', calories: 10, protein: 0.2, carbs: 2.5, fat: 0.1 }
    ],
    recipe: 'Cook dal with drumsticks, add tamarind and sambar powder, temper well.'
  },
  {
    id: 'l15',
    name: 'Potato Curry',
    category: 'lunch',
    price: 75,
    description: 'Spiced potato curry with South Indian tempering',
    image: 'https://tse3.mm.bing.net/th/id/OIP.C2uwnyXo7fH4nIgdR4YjHgHaHa?pid=Api&P=0&h=180',
    ingredients: [
      { name: 'Potato', calories: 80, protein: 2, carbs: 18, fat: 0.1 },
      { name: 'Onion', calories: 20, protein: 0.5, carbs: 5, fat: 0 },
      { name: 'Curry Powder', calories: 15, protein: 0.5, carbs: 3, fat: 0.5 }
    ],
    recipe: 'Cook potatoes with onions and South Indian curry powder.'
  },
  {
    id: 'l16',
    name: 'Cabbage Poriyal',
    category: 'lunch',
    price: 65,
    description: 'Dry-roasted cabbage with coconut and curry leaves',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSguSr7zS4yE-zsq3zAI4BScFANCCYzhFdj7g&s',
    ingredients: [
      { name: 'Cabbage', calories: 20, protein: 1, carbs: 5, fat: 0.1 },
      { name: 'Coconut', calories: 30, protein: 0.5, carbs: 1, fat: 3 },
      { name: 'Curry Leaves', calories: 2, protein: 0.1, carbs: 0.4, fat: 0 }
    ],
    recipe: 'Stir-fry cabbage with coconut, curry leaves, and mustard seeds.'
  },
  {
    id: 'l17',
    name: 'Mixed Vegetable Curry',
    category: 'lunch',
    price: 95,
    description: 'Assorted vegetables in coconut-based curry',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6h-qTxmeSTQTHboCXhTs29GjopmzpfQEkaQ&s',
    ingredients: [
      { name: 'Mixed Vegetables', calories: 60, protein: 3, carbs: 12, fat: 0.5 },
      { name: 'Coconut Milk', calories: 50, protein: 1, carbs: 2, fat: 5 },
      { name: 'Spices', calories: 15, protein: 0.5, carbs: 3, fat: 0.5 }
    ],
    recipe: 'Cook mixed vegetables in coconut milk with South Indian spices.'
  },
  {
    id: 'l18',
    name: 'Paruppu Usili',
    category: 'lunch',
    price: 80,
    description: 'Steamed vegetables with spiced dal mixture',
    image: 'https://www.kannammacooks.com/wp-content/uploads/2015/12/paruppu-usili-recipe.jpg',
    ingredients: [
      { name: 'Toor Dal', calories: 80, protein: 5, carbs: 13, fat: 0.7 },
      { name: 'Green Beans', calories: 20, protein: 1, carbs: 5, fat: 0.1 },
      { name: 'Coconut', calories: 30, protein: 0.5, carbs: 1, fat: 3 }
    ],
    recipe: 'Steam vegetables, mix with coarse ground dal and coconut.'
  },
  {
    id: 'l19',
    name: 'Mor Kulambu',
    category: 'lunch',
    price: 70,
    description: 'Yogurt-based curry with vegetables and spices',
    image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2018/05/mor-kuzhambu-1a.jpg',
    ingredients: [
      { name: 'Yogurt', calories: 60, protein: 3, carbs: 4, fat: 3 },
      { name: 'Vegetables', calories: 30, protein: 1, carbs: 6, fat: 0.2 },
      { name: 'Coconut', calories: 25, protein: 0.4, carbs: 1, fat: 2.5 }
    ],
    recipe: 'Cook vegetables in spiced yogurt gravy with coconut paste.'
  },
  {
    id: 'l20',
    name: 'Avial',
    category: 'lunch',
    price: 85,
    description: 'Mixed vegetables in coconut and yogurt gravy',
    image: 'https://thumbs.dreamstime.com/b/south-indian-kerala-lunch-thaali-dosa-served-sambhar-amixed-veg-curry-avial-rice-83341145.jpg',
    ingredients: [
      { name: 'Mixed Vegetables', calories: 50, protein: 2, carbs: 10, fat: 0.3 },
      { name: 'Coconut', calories: 40, protein: 0.7, carbs: 1.5, fat: 4 },
      { name: 'Yogurt', calories: 30, protein: 1.5, carbs: 2, fat: 1.5 }
    ],
    recipe: 'Cook mixed vegetables with ground coconut and finish with yogurt.'
  },

  // Dinner Items (20 items)
  {
    id: 'd1',
    name: 'Special Dinner Thali',
    category: 'dinner',
    price: 220,
    description: 'Elaborate dinner with rice, multiple curries, bread, and dessert',
    image: 'https://img.freepik.com/premium-photo/indian-hindu-veg-thali-also-known-as-food-platter-is-complete-lunch-dinner-meal-closeup-selective-focus_466689-9098.jpg',
    ingredients: [
      { name: 'Rice', calories: 200, protein: 4, carbs: 45, fat: 0.5 },
      { name: 'Multiple Curries', calories: 150, protein: 8, carbs: 20, fat: 5 },
      { name: 'Bread', calories: 100, protein: 3, carbs: 20, fat: 2 }
    ],
    recipe: 'Complete meal with rice, curries, dal, vegetables, bread, pickle, and sweet.'
  },
  {
    id: 'd2',
    name: 'Dosa Varieties Combo',
    category: 'dinner',
    price: 180,
    description: 'Combination of different dosas with accompaniments',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmCMFOJdrHi2BKhxksesE7nO36qRxbAU8jNQ&s',
    ingredients: [
      { name: 'Rice Batter', calories: 160, protein: 3, carbs: 35, fat: 0.4 },
      { name: 'Various Fillings', calories: 80, protein: 3, carbs: 12, fat: 2 },
      { name: 'Chutneys', calories: 40, protein: 1, carbs: 6, fat: 2 }
    ],
    recipe: 'Serve variety of dosas like plain, masala, and rava with different chutneys.'
  },
  {
    id: 'd3',
    name: 'Appam with Stew',
    category: 'dinner',
    price: 150,
    description: 'Soft fermented rice pancakes with coconut vegetable stew',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhFubtEa333WRt5zNW3n8QFPrGmQam8I5dKw&s',
    ingredients: [
      { name: 'Rice', calories: 120, protein: 2, carbs: 26, fat: 0.3 },
      { name: 'Coconut Milk', calories: 80, protein: 1.5, carbs: 3, fat: 8 },
      { name: 'Vegetables', calories: 40, protein: 2, carbs: 8, fat: 0.3 }
    ],
    recipe: 'Make soft appam with fermented rice batter, serve with coconut milk stew.'
  },
  {
    id: 'd4',
    name: 'Idiyappam with Curry',
    category: 'dinner',
    price: 130,
    description: 'Steamed rice noodles with flavorful vegetable curry',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz16RSUDAbEbZ5d20YOMduyEygmALr1PfOxQ&s',
    ingredients: [
      { name: 'Rice Flour', calories: 100, protein: 2, carbs: 22, fat: 0.5 },
      { name: 'Vegetable Curry', calories: 80, protein: 3, carbs: 12, fat: 3 },
      { name: 'Coconut', calories: 30, protein: 0.5, carbs: 1, fat: 3 }
    ],
    recipe: 'Steam rice flour noodles, serve with spiced vegetable curry.'
  },
  {
    id: 'd5',
    name: 'Puttu with Kadala Curry',
    category: 'dinner',
    price: 120,
    description: 'Steamed rice cake with black chickpea curry',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0XSIdUGs4C7oqSdrnSMbJhAFXl9dMUPqZbw&s',
    ingredients: [
      { name: 'Rice Flour', calories: 100, protein: 2, carbs: 22, fat: 0.5 },
      { name: 'Black Chickpeas', calories: 120, protein: 8, carbs: 20, fat: 2 },
      { name: 'Coconut', calories: 40, protein: 0.7, carbs: 1.5, fat: 4 }
    ],
    recipe: 'Steam rice flour with coconut, serve with spiced black chickpea curry.'
  },
  {
    id: 'd6',
    name: 'Kothu Parotta',
    category: 'dinner',
    price: 140,
    description: 'Shredded parotta stir-fried with vegetables and spices',
    image: 'https://t3.ftcdn.net/jpg/04/48/22/02/360_F_448220244_sDh8CUQS8xvAeniSF8xPPB9AmZ6mkNwY.jpg',
    ingredients: [
      { name: 'Parotta', calories: 150, protein: 4, carbs: 30, fat: 3 },
      { name: 'Vegetables', calories: 40, protein: 2, carbs: 8, fat: 0.3 },
      { name: 'Spices', calories: 15, protein: 0.5, carbs: 3, fat: 0.5 }
    ],
    recipe: 'Shred parotta, stir-fry with vegetables, eggs, and South Indian spices.'
  },
  {
    id: 'd7',
    name: 'Paneer Dosa',
    category: 'dinner',
    price: 170,
    description: 'Dosa filled with spiced paneer and onions',
    image: 'https://img.freepik.com/free-photo/delicious-indian-dosa-composition_23-2149086051.jpg',
    ingredients: [
      { name: 'Rice Batter', calories: 130, protein: 2.5, carbs: 28, fat: 0.3 },
      { name: 'Paneer', calories: 100, protein: 8, carbs: 3, fat: 7 },
      { name: 'Onion', calories: 20, protein: 0.5, carbs: 5, fat: 0 }
    ],
    recipe: 'Fill dosa with spiced paneer mixture and caramelized onions.'
  },
  {
    id: 'd8',
    name: 'Mushroom Biryani',
    category: 'dinner',
    price: 190,
    description: 'Aromatic rice with mushrooms and biryani spices',
    image: 'https://www.cookwithkushi.com/wp-content/uploads/2015/09/best_quick_easy_veg_mushroom_biryani.jpg',
    ingredients: [
      { name: 'Basmati Rice', calories: 180, protein: 4, carbs: 38, fat: 0.5 },
      { name: 'Mushrooms', calories: 25, protein: 3, carbs: 4, fat: 0.3 },
      { name: 'Biryani Spices', calories: 20, protein: 1, carbs: 4, fat: 1 }
    ],
    recipe: 'Layer rice with spiced mushrooms, cook dum style with aromatic spices.'
  },
  {
    id: 'd9',
    name: 'Chettinad Curry',
    category: 'dinner',
    price: 160,
    description: 'Spicy South Indian curry with mixed vegetables',
    image: 'https://swatisani.net/kitchen/wp-content/uploads/2015/10/IMG_9350.jpg',
    ingredients: [
      { name: 'Mixed Vegetables', calories: 60, protein: 3, carbs: 12, fat: 0.5 },
      { name: 'Chettinad Spices', calories: 25, protein: 1, carbs: 5, fat: 2 },
      { name: 'Coconut', calories: 40, protein: 0.7, carbs: 1.5, fat: 4 }
    ],
    recipe: 'Cook vegetables with authentic Chettinad spice paste and coconut.'
  },
  {
    id: 'd10',
    name: 'Kerala Parotta',
    category: 'dinner',
    price: 60,
    description: 'Flaky layered bread perfect with curry',
    image: 'https://t3.ftcdn.net/jpg/05/15/68/32/360_F_515683261_df9lrDahFzDyCgqxkKsaXLcENjIiVHiy.jpg',
    ingredients: [
      { name: 'Wheat Flour', calories: 120, protein: 4, carbs: 24, fat: 1 },
      { name: 'Oil', calories: 40, protein: 0, carbs: 0, fat: 4.5 },
      { name: 'Salt', calories: 0, protein: 0, carbs: 0, fat: 0 }
    ],
    recipe: 'Make layered dough, roll thin, cook on griddle until flaky and golden.'
  },
  {
    id: 'd11',
    name: 'Vegetable Korma',
    category: 'dinner',
    price: 110,
    description: 'Rich and creamy mixed vegetable curry',
    image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/veg-kurma-vegetable-korma-recipe.jpg',
    ingredients: [
      { name: 'Mixed Vegetables', calories: 70, protein: 3, carbs: 14, fat: 0.5 },
      { name: 'Coconut Milk', calories: 60, protein: 1, carbs: 3, fat: 6 },
      { name: 'Cashews', calories: 50, protein: 2, carbs: 3, fat: 4 }
    ],
    recipe: 'Cook vegetables in rich coconut and cashew gravy with aromatic spices.'
  },
  {
    id: 'd12',
    name: 'Pepper Rasam',
    category: 'dinner',
    price: 55,
    description: 'Spicy black pepper soup with South Indian flavors',
    image: 'https://i0.wp.com/cookingfromheart.com/wp-content/uploads/2016/09/m_DSC_0659-1.jpg?resize=720%2C499&ssl=1',
    ingredients: [
      { name: 'Black Pepper', calories: 5, protein: 0.2, carbs: 1, fat: 0.1 },
      { name: 'Tamarind', calories: 15, protein: 0.3, carbs: 4, fat: 0.1 },
      { name: 'Curry Leaves', calories: 2, protein: 0.1, carbs: 0.4, fat: 0 }
    ],
    recipe: 'Boil tamarind water with pepper powder, temper with curry leaves.'
  },
  {
    id: 'd13',
    name: 'Vegetable Fried Rice',
    category: 'dinner',
    price: 125,
    description: 'Indo-Chinese style fried rice with vegetables',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrEp5Y50RpgvgZNlooh7aHP7YsYOZpMI7zgQ&s',
    ingredients: [
      { name: 'Rice', calories: 150, protein: 3, carbs: 32, fat: 0.4 },
      { name: 'Mixed Vegetables', calories: 50, protein: 2, carbs: 10, fat: 0.3 },
      { name: 'Soy Sauce', calories: 10, protein: 1, carbs: 1, fat: 0 }
    ],
    recipe: 'Stir-fry cooked rice with vegetables and Indo-Chinese sauces.'
  },
  {
    id: 'd14',
    name: 'Masala Vada',
    category: 'dinner',
    price: 80,
    description: 'Spicy lentil fritters perfect as dinner starter',
    image: 'https://manjulaskitchen.com/wp-content/uploads/masala_vada.jpg',
    ingredients: [
      { name: 'Chana Dal', calories: 120, protein: 8, carbs: 20, fat: 1.5 },
      { name: 'Onion', calories: 20, protein: 0.5, carbs: 5, fat: 0 },
      { name: 'Green Chili', calories: 5, protein: 0.3, carbs: 1, fat: 0 }
    ],
    recipe: 'Coarse grind chana dal with spices, onions, deep fry until crispy.'
  },
  {
    id: 'd15',
    name: 'Coconut Milk Rice',
    category: 'dinner',
    price: 105,
    description: 'Fragrant rice cooked in coconut milk with whole spices',
    image: 'https://www.maggi.in/sites/default/files/srh_recipes/1917c8eb89672185ec3920ed2c1eaf60.jpg',
    ingredients: [
      { name: 'Rice', calories: 130, protein: 2.5, carbs: 28, fat: 0.3 },
      { name: 'Coconut Milk', calories: 80, protein: 1.5, carbs: 3, fat: 8 },
      { name: 'Whole Spices', calories: 10, protein: 0.3, carbs: 2, fat: 0.5 }
    ],
    recipe: 'Cook rice in coconut milk with cardamom, cinnamon, and bay leaves.'
  },
  {
    id: 'd16',
    name: 'Banana Leaf Meals',
    category: 'dinner',
    price: 200,
    description: 'Traditional meal served on banana leaf with multiple dishes',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo0SPdKGuAO5UJesHXwoai-ZFHg5CeSvxc_g&s',
    ingredients: [
      { name: 'Rice', calories: 200, protein: 4, carbs: 45, fat: 0.5 },
      { name: 'Multiple Dishes', calories: 180, protein: 10, carbs: 25, fat: 6 },
      { name: 'Condiments', calories: 50, protein: 2, carbs: 8, fat: 2 }
    ],
    recipe: 'Serve complete meal on banana leaf with rice, curries, and accompaniments.'
  },
  {
    id: 'd17',
    name: 'Kara Chutney',
    category: 'dinner',
    price: 45,
    description: 'Spicy red chutney with chilies and tamarind',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB64xJJr65pJI_2H807ZrhPzUzTDy5stRL2Q&s',
    ingredients: [
      { name: 'Red Chilies', calories: 15, protein: 0.8, carbs: 3, fat: 0.2 },
      { name: 'Tamarind', calories: 10, protein: 0.2, carbs: 2.5, fat: 0.1 },
      { name: 'Garlic', calories: 8, protein: 0.4, carbs: 2, fat: 0 }
    ],
    recipe: 'Grind red chilies with tamarind, garlic, and salt. No tempering needed.'
  },
  {
    id: 'd18',
    name: 'Ghee Roast',
    category: 'dinner',
    price: 90,
    description: 'Vegetables roasted in pure ghee with spices',
    image: 'https://www.shutterstock.com/image-photo/dosa-ghee-roast-coconut-chutney-260nw-2484376905.jpg',
    ingredients: [
      { name: 'Vegetables', calories: 40, protein: 2, carbs: 8, fat: 0.3 },
      { name: 'Ghee', calories: 60, protein: 0, carbs: 0, fat: 7 },
      { name: 'Spices', calories: 10, protein: 0.5, carbs: 2, fat: 0.5 }
    ],
    recipe: 'Roast vegetables in ghee with aromatic spices until golden.'
  },
  {
    id: 'd19',
    name: 'Jeera Rice',
    category: 'dinner',
    price: 95,
    description: 'Fragrant cumin rice with whole spices',
    image: 'https://nishkitchen.com/wp-content/uploads/2019/03/Jeera-Rice-1B-500x500.jpg',
    ingredients: [
      { name: 'Basmati Rice', calories: 150, protein: 3, carbs: 32, fat: 0.4 },
      { name: 'Cumin Seeds', calories: 8, protein: 0.4, carbs: 1, fat: 0.5 },
      { name: 'Ghee', calories: 40, protein: 0, carbs: 0, fat: 4.5 }
    ],
    recipe: 'Cook rice with cumin seeds, whole spices, and ghee.'
  },
  {
    id: 'd20',
    name: 'Papad',
    category: 'dinner',
    price: 25,
    description: 'Crispy lentil wafers roasted or fried',
    image: 'https://t4.ftcdn.net/jpg/00/55/23/19/360_F_55231952_mE2OfUMAO3d4fkG92NYKNaWtj2cEdVgF.jpg',
    ingredients: [
      { name: 'Urad Dal', calories: 80, protein: 6, carbs: 12, fat: 0.8 },
      { name: 'Spices', calories: 5, protein: 0.2, carbs: 1, fat: 0.2 }
    ],
    recipe: 'Roast or fry thin lentil wafers until crispy and golden.'
  },

  // Snacks (20 items)
  {
    id: 's1',
    name: 'Bhel Puri',
    category: 'snacks',
    price: 60,
    description: 'Crispy puffed rice with chutneys and vegetables',
    image: 'https://media.istockphoto.com/id/2075152539/photo/tasty-bhelpuri-is-a-savoury-snack-or-chaat-it-is-made-out-of-puffed-rice-vegetables-and-a.jpg?s=612x612&w=0&k=20&c=A-24HiNYIwW2UCwj5sIfWEQatE0gb4coxuuy6zEtxWU=',
    ingredients: [
      { name: 'Puffed Rice', calories: 60, protein: 1.5, carbs: 14, fat: 0.3 },
      { name: 'Chutneys', calories: 30, protein: 0.5, carbs: 7, fat: 1 },
      { name: 'Vegetables', calories: 15, protein: 0.5, carbs: 3, fat: 0.1 }
    ],
    recipe: 'Mix puffed rice with chutneys, onions, tomatoes, and sev.'
  },
  {
    id: 's2',
    name: 'Pani Puri',
    category: 'snacks',
    price: 50,
    description: 'Crispy hollow puris filled with spiced water',
    image: 'https://t4.ftcdn.net/jpg/03/05/35/65/360_F_305356563_RjpA8bNIfjd2s78JpTt3Ed6hKWPUBOwS.jpg',
    ingredients: [
      { name: 'Puris', calories: 50, protein: 2, carbs: 10, fat: 1 },
      { name: 'Spiced Water', calories: 10, protein: 0.2, carbs: 2, fat: 0 },
      { name: 'Potato', calories: 30, protein: 1, carbs: 7, fat: 0.1 }
    ],
    recipe: 'Fill crispy puris with spiced mint water, potato, and chutneys.'
  },
  {
    id: 's3',
    name: 'Samosa (2 pieces)',
    category: 'snacks',
    price: 40,
    description: 'Crispy triangular pastries with spiced potato filling',
    image: 'https://www.aamchimumbai.co.uk/files/samosa.jpg',
    ingredients: [
      { name: 'Wheat Flour', calories: 80, protein: 2.5, carbs: 16, fat: 0.8 },
      { name: 'Potato', calories: 60, protein: 1.5, carbs: 14, fat: 0.1 },
      { name: 'Oil', calories: 100, protein: 0, carbs: 0, fat: 11 }
    ],
    recipe: 'Fill pastry with spiced potato mixture, seal and deep fry until golden.'
  },
  {
    id: 's4',
    name: 'Bajji Combo',
    category: 'snacks',
    price: 70,
    description: 'Mixed vegetable fritters in gram flour batter',
    image: 'https://t4.ftcdn.net/jpg/05/91/14/01/360_F_591140107_CjWdO5W76TePEfAEoGUpW7PIAYONI860.jpg',
    ingredients: [
      { name: 'Mixed Vegetables', calories: 40, protein: 2, carbs: 8, fat: 0.3 },
      { name: 'Gram Flour', calories: 80, protein: 5, carbs: 12, fat: 1.5 },
      { name: 'Oil', calories: 80, protein: 0, carbs: 0, fat: 9 }
    ],
    recipe: 'Dip vegetables in spiced gram flour batter, deep fry until crispy.'
  },
  {
    id: 's5',
    name: 'Dahi Vada',
    category: 'snacks',
    price: 65,
    description: 'Soft lentil dumplings in seasoned yogurt',
    image: 'https://static.toiimg.com/thumb/55432577.cms?imgsize=240828&width=800&height=800',
    ingredients: [
      { name: 'Urad Dal', calories: 100, protein: 7, carbs: 14, fat: 0.8 },
      { name: 'Yogurt', calories: 60, protein: 3, carbs: 4, fat: 3 },
      { name: 'Chutneys', calories: 25, protein: 0.5, carbs: 5, fat: 1 }
    ],
    recipe: 'Soak fried vadas in water, serve with yogurt and chutneys.'
  },
  {
    id: 's6',
    name: 'Mirchi Bajji',
    category: 'snacks',
    price: 45,
    description: 'Stuffed green chili fritters with tangy filling',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7U-OFtmjnBb-UpS7gZHn-kn1VxxOLlByGjw&s',
    ingredients: [
      { name: 'Green Chilies', calories: 15, protein: 1, carbs: 3, fat: 0.1 },
      { name: 'Gram Flour', calories: 60, protein: 4, carbs: 9, fat: 1 },
      { name: 'Stuffing', calories: 30, protein: 1, carbs: 6, fat: 0.5 }
    ],
    recipe: 'Stuff chilies with spiced mixture, coat in batter, deep fry until golden.'
  },
  {
    id: 's7',
    name: 'Aloo Bonda',
    category: 'snacks',
    price: 55,
    description: 'Spiced potato balls coated in gram flour batter',
    image: 'https://i.pinimg.com/564x/02/e2/0f/02e20fcd44a321b1fa15e5acbaca8f87.jpg',
    ingredients: [
      { name: 'Potato', calories: 80, protein: 2, carbs: 18, fat: 0.1 },
      { name: 'Gram Flour', calories: 70, protein: 4.5, carbs: 11, fat: 1.2 },
      { name: 'Spices', calories: 10, protein: 0.5, carbs: 2, fat: 0.5 }
    ],
    recipe: 'Make spiced potato balls, dip in gram flour batter, deep fry.'
  },
  {
    id: 's8',
    name: 'Punugulu',
    category: 'snacks',
    price: 60,
    description: 'Round crispy snacks made from dosa batter',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjDvd28Hr4GzVfcjn2zwNdVc_4nZbD2cB24Q&s',
    ingredients: [
      { name: 'Dosa Batter', calories: 80, protein: 2, carbs: 17, fat: 0.2 },
      { name: 'Onion', calories: 15, protein: 0.4, carbs: 3.5, fat: 0 },
      { name: 'Green Chilies', calories: 3, protein: 0.2, carbs: 0.7, fat: 0 }
    ],
    recipe: 'Mix dosa batter with onions and chilies, deep fry in small balls.'
  },
  {
    id: 's9',
    name: 'Mixture',
    category: 'snacks',
    price: 35,
    description: 'Crunchy South Indian snack mix with nuts and spices',
    image: 'https://media.istockphoto.com/id/1586817015/photo/mixture.jpg?s=612x612&w=0&k=20&c=7s2A6pKq_iGKWCRYWTIdog16j-sZkS3ZwC_f-VFNcGQ=',
    ingredients: [
      { name: 'Sev', calories: 60, protein: 3, carbs: 8, fat: 2.5 },
      { name: 'Nuts', calories: 50, protein: 2, carbs: 3, fat: 4 },
      { name: 'Spices', calories: 10, protein: 0.5, carbs: 2, fat: 0.5 }
    ],
    recipe: 'Mix fried sev, nuts, curry leaves, and spices. Store in airtight container.'
  },
  {
    id: 's10',
    name: 'Pav Bhaji',
    category: 'snacks',
    price: 80,
    description: 'Spiced vegetable curry served with buttered bread',
    image: 'https://media.istockphoto.com/id/1155185428/photo/indian-spicy-food-paav-bhaji-or-pav-bhaji.jpg?s=612x612&w=0&k=20&c=AMT1hmTm1xhTT0KmGsGPRyU6cPe-HFJuvkOgiT0m3Jo=',
    ingredients: [
      { name: 'Mixed Vegetables', calories: 80, protein: 3, carbs: 16, fat: 0.5 },
      { name: 'Pav Bread', calories: 120, protein: 4, carbs: 22, fat: 2 },
      { name: 'Butter', calories: 50, protein: 0, carbs: 0, fat: 6 }
    ],
    recipe: 'Mash vegetables with spices, serve with buttered and toasted pav.'
  },
  {
    id: 's11',
    name: 'Masala Puri',
    category: 'snacks',
    price: 65,
    description: 'Crispy puris topped with chutneys and vegetables',
    image: 'https://cookingfromheart.com/wp-content/uploads/2019/09/Masala-Puri-Chaat-7.jpg',
    ingredients: [
      { name: 'Puris', calories: 70, protein: 2.5, carbs: 14, fat: 1.5 },
      { name: 'Chutneys', calories: 40, protein: 1, carbs: 8, fat: 1.5 },
      { name: 'Vegetables', calories: 20, protein: 1, carbs: 4, fat: 0.1 }
    ],
    recipe: 'Top crispy puris with various chutneys, onions, and tomatoes.'
  },
  {
    id: 's12',
    name: 'Chana Chat',
    category: 'snacks',
    price: 55,
    description: 'Spiced chickpea salad with onions and chutneys',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLAaHPshFut7WXE8xaO3HU4LkISfQKsHsblQ&s',
    ingredients: [
      { name: 'Chickpeas', calories: 100, protein: 6, carbs: 17, fat: 1.5 },
      { name: 'Onion', calories: 15, protein: 0.4, carbs: 3.5, fat: 0 },
      { name: 'Chutneys', calories: 25, protein: 0.5, carbs: 5, fat: 1 }
    ],
    recipe: 'Mix boiled chickpeas with onions, tomatoes, and tangy chutneys.'
  },
  {
    id: 's13',
    name: 'Egg Bonda',
    category: 'snacks',
    price: 70,
    description: 'Hard-boiled eggs coated in spiced gram flour batter',
    image: 'https://vismaifood.com/storage/app/uploads/public/133/3e5/ba8/thumb__1200_0_0_0_auto.jpg',
    ingredients: [
      { name: 'Eggs', calories: 140, protein: 12, carbs: 1, fat: 10 },
      { name: 'Gram Flour', calories: 60, protein: 4, carbs: 9, fat: 1 },
      { name: 'Spices', calories: 10, protein: 0.5, carbs: 2, fat: 0.5 }
    ],
    recipe: 'Coat hard-boiled eggs in spiced gram flour batter, deep fry until golden.'
  },
  {
    id: 's14',
    name: 'Kachori',
    category: 'snacks',
    price: 50,
    description: 'Flaky pastry filled with spiced lentil mixture',
    image: 'https://t3.ftcdn.net/jpg/04/07/03/64/360_F_407036477_eXoZNsoSJIqbIdSzKleSwaqJkrxiyGnT.jpg',
    ingredients: [
      { name: 'Wheat Flour', calories: 80, protein: 2.5, carbs: 16, fat: 0.8 },
      { name: 'Lentil Filling', calories: 60, protein: 4, carbs: 10, fat: 1 },
      { name: 'Oil', calories: 80, protein: 0, carbs: 0, fat: 9 }
    ],
    recipe: 'Fill pastry with spiced lentil mixture, deep fry until puffed and golden.'
  },
  {
    id: 's15',
    name: 'Bread Pakoda',
    category: 'snacks',
    price: 45,
    description: 'Bread slices coated in spiced gram flour batter',
    image: 'https://dinedelicious.in/wp-content/uploads/2021/07/Bread-Pakora-10.jpg',
    ingredients: [
      { name: 'Bread', calories: 80, protein: 3, carbs: 15, fat: 1 },
      { name: 'Gram Flour', calories: 50, protein: 3, carbs: 8, fat: 1 },
      { name: 'Oil', calories: 60, protein: 0, carbs: 0, fat: 7 }
    ],
    recipe: 'Dip bread slices in spiced gram flour batter, deep fry until crispy.'
  },
  {
    id: 's16',
    name: 'Banana Bajji',
    category: 'snacks',
    price: 40,
    description: 'Sweet banana slices in gram flour batter',
    image: 'https://www.shutterstock.com/image-photo/indian-food-raw-banana-bajji-600nw-1851016573.jpg',
    ingredients: [
      { name: 'Banana', calories: 60, protein: 1, carbs: 15, fat: 0.2 },
      { name: 'Gram Flour', calories: 50, protein: 3, carbs: 8, fat: 1 },
      { name: 'Jaggery', calories: 15, protein: 0, carbs: 4, fat: 0 }
    ],
    recipe: 'Slice bananas, dip in sweet gram flour batter, deep fry until golden.'
  },
  {
    id: 's17',
    name: 'Gobi Manchurian',
    category: 'snacks',
    price: 75,
    description: 'Indo-Chinese cauliflower in tangy sauce',
    image: 'https://t3.ftcdn.net/jpg/06/97/12/70/360_F_697127055_5DLbBRm9lUsvg2ubqBJJclBGO6AxPrpu.jpg',
    ingredients: [
      { name: 'Cauliflower', calories: 30, protein: 2, carbs: 6, fat: 0.3 },
      { name: 'Flour', calories: 50, protein: 2, carbs: 10, fat: 0.5 },
      { name: 'Sauce', calories: 25, protein: 1, carbs: 5, fat: 1 }
    ],
    recipe: 'Fry cauliflower florets in batter, toss in Indo-Chinese sauce.'
  },
  {
    id: 's18',
    name: 'Cutlet',
    category: 'snacks',
    price: 65,
    description: 'Spiced vegetable patties coated in breadcrumbs',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkGBq5SR1vVv1OVQDkQW74i68R3t1KqmuJkg&s',
    ingredients: [
      { name: 'Mixed Vegetables', calories: 60, protein: 3, carbs: 12, fat: 0.5 },
      { name: 'Breadcrumbs', calories: 40, protein: 2, carbs: 8, fat: 0.5 },
      { name: 'Oil', calories: 60, protein: 0, carbs: 0, fat: 7 }
    ],
    recipe: 'Shape spiced vegetable mixture into patties, coat in breadcrumbs, shallow fry.'
  },
  {
    id: 's19',
    name: 'Paneer Pakoda',
    category: 'snacks',
    price: 85,
    description: 'Cottage cheese cubes in spiced gram flour batter',
    image: 'https://media.istockphoto.com/id/698454548/photo/punjabi-paneer-pakoda-or-pakora-or-vada-made-from-gram-flour-and-cottage-cheese.jpg?s=612x612&w=0&k=20&c=QlRFYITBT1qYjshDh7Jz3HOiWxgTShHfizQXysMmc1c=',
    ingredients: [
      { name: 'Paneer', calories: 120, protein: 9, carbs: 3, fat: 8 },
      { name: 'Gram Flour', calories: 50, protein: 3, carbs: 8, fat: 1 },
      { name: 'Spices', calories: 10, protein: 0.5, carbs: 2, fat: 0.5 }
    ],
    recipe: 'Cut paneer into cubes, coat in spiced batter, deep fry until golden.'
  },
  {
    id: 's20',
    name: 'Mysore Bonda',
    category: 'snacks',
    price: 55,
    description: 'Soft and spongy lentil dumplings from Mysore',
    image: 'https://i0.wp.com/kalimirchbysmita.com/wp-content/uploads/2016/07/Mysore-Bonda-02-1024x730.jpg?resize=1024%2C730',
    ingredients: [
      { name: 'Urad Dal', calories: 90, protein: 6, carbs: 13, fat: 0.7 },
      { name: 'Ginger', calories: 3, protein: 0.1, carbs: 0.7, fat: 0 },
      { name: 'Curry Leaves', calories: 2, protein: 0.1, carbs: 0.4, fat: 0 }
    ],
    recipe: 'Grind urad dal to fluffy batter with ginger, deep fry in small balls.'
  },

  // Beverages (20 items)
  {
    id: 'bv1',
    name: 'South Indian Filter Coffee',
    category: 'beverages',
    price: 35,
    description: 'Strong coffee brewed in traditional filter with milk',
    image: 'https://i.pinimg.com/736x/01/c1/35/01c1354dda01fac9d4bf03f0e79de003.jpg',
    ingredients: [
      { name: 'Coffee Powder', calories: 5, protein: 0.3, carbs: 1, fat: 0 },
      { name: 'Milk', calories: 60, protein: 3, carbs: 5, fat: 3 },
      { name: 'Sugar', calories: 40, protein: 0, carbs: 10, fat: 0 }
    ],
    recipe: 'Brew coffee in filter, mix with hot milk and sugar to taste.'
  },
  {
    id: 'bv2',
    name: 'Masala Chai',
    category: 'beverages',
    price: 30,
    description: 'Spiced tea with cardamom, ginger, and other aromatic spices',
    image: 'https://as1.ftcdn.net/v2/jpg/13/95/84/28/1000_F_1395842868_lErIo5PaavkwmKr2C5CUH6ihvcPMnf5w.jpg',
    ingredients: [
      { name: 'Tea Leaves', calories: 2, protein: 0, carbs: 0, fat: 0 },
      { name: 'Milk', calories: 60, protein: 3, carbs: 5, fat: 3 },
      { name: 'Spices', calories: 5, protein: 0.2, carbs: 1, fat: 0.1 }
    ],
    recipe: 'Boil tea with spices, add milk and sugar, simmer until aromatic.'
  },
  {
    id: 'bv3',
    name: 'Fresh Lime Water',
    category: 'beverages',
    price: 25,
    description: 'Refreshing drink with fresh lime juice and mint',
    image: 'https://media.istockphoto.com/id/596803774/photo/cold-cocktail-with-lime-lemon-tonic-vodka-and-ice.jpg?s=612x612&w=0&k=20&c=1Fp2ACTL-3Ifedqxj0_OZTPl0Ty-lfW-eDDcepTTfO0=',
    ingredients: [
      { name: 'Lime', calories: 15, protein: 0.3, carbs: 4, fat: 0.1 },
      { name: 'Water', calories: 0, protein: 0, carbs: 0, fat: 0 },
      { name: 'Sugar', calories: 20, protein: 0, carbs: 5, fat: 0 }
    ],
    recipe: 'Mix fresh lime juice with water, sugar, and mint leaves.'
  },
  {
    id: 'bv4',
    name: 'Buttermilk',
    category: 'beverages',
    price: 30,
    description: 'Cooling yogurt drink with curry leaves and ginger',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy0DcsYRvUDrY0AiENji79OR-su-N8yJNrkQ&s',
    ingredients: [
      { name: 'Yogurt', calories: 80, protein: 4, carbs: 6, fat: 4 },
      { name: 'Water', calories: 0, protein: 0, carbs: 0, fat: 0 },
      { name: 'Spices', calories: 3, protein: 0.1, carbs: 0.5, fat: 0.1 }
    ],
    recipe: 'Whisk yogurt with water, add salt, ginger, and curry leaves.'
  },
  {
    id: 'bv5',
    name: 'Mango Lassi',
    category: 'beverages',
    price: 60,
    description: 'Creamy yogurt drink blended with sweet mango pulp',
    image: 'https://media.istockphoto.com/id/1365859011/photo/drink-mango-lassi-in-two-glasses-on-rustic-concrete-table-with-fresh-ripe-cut-manfo-from-above.jpg?s=612x612&w=0&k=20&c=uHnr_0raQDe2sgUYHdP5GSa2raaj3ILG4m1cmFHtVJA=',
    ingredients: [
      { name: 'Mango Pulp', calories: 80, protein: 1, carbs: 20, fat: 0.3 },
      { name: 'Yogurt', calories: 60, protein: 3, carbs: 4, fat: 3 },
      { name: 'Sugar', calories: 30, protein: 0, carbs: 8, fat: 0 }
    ],
    recipe: 'Blend mango pulp with yogurt, sugar, and ice until smooth.'
  },
  {
    id: 'bv6',
    name: 'Rose Milk',
    category: 'beverages',
    price: 45,
    description: 'Sweet milk flavored with rose syrup',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWjhw4XVjWb3iEDx7X5XkhNxo21Y7ewXgV_g&s',
    ingredients: [
      { name: 'Milk', calories: 120, protein: 6, carbs: 9, fat: 6 },
      { name: 'Rose Syrup', calories: 50, protein: 0, carbs: 13, fat: 0 },
      { name: 'Sugar', calories: 20, protein: 0, carbs: 5, fat: 0 }
    ],
    recipe: 'Mix chilled milk with rose syrup and sugar to taste.'
  },
  {
    id: 'bv7',
    name: 'Coconut Water',
    category: 'beverages',
    price: 40,
    description: 'Fresh coconut water straight from tender coconut',
    image: 'https://t3.ftcdn.net/jpg/03/06/32/50/360_F_306325086_rRHmFccHKptOs8OjbqMg2Fbn4mWJJRZ0.jpg',
    ingredients: [
      { name: 'Coconut Water', calories: 45, protein: 2, carbs: 9, fat: 0.5 }
    ],
    recipe: 'Serve fresh coconut water chilled from tender coconut.'
  },
  {
    id: 'bv8',
    name: 'Jigarthanda',
    category: 'beverages',
    price: 70,
    description: 'Special drink with milk, ice cream, and almond gum',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbLU0nr3wxMk25ywWRS8CJoDh5_qcpzBMioA&s',
    ingredients: [
      { name: 'Milk', calories: 100, protein: 5, carbs: 8, fat: 5 },
      { name: 'Ice Cream', calories: 80, protein: 2, carbs: 12, fat: 4 },
      { name: 'Almond Gum', calories: 20, protein: 1, carbs: 3, fat: 1 }
    ],
    recipe: 'Layer milk with almond gum, top with ice cream and syrups.'
  },
  {
    id: 'bv9',
    name: 'Badam Milk',
    category: 'beverages',
    price: 55,
    description: 'Rich almond milk with cardamom and saffron',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj6yHKFn1JSpRA_jiJrDxfjuDceK7hknJ4GA&s',
    ingredients: [
      { name: 'Almonds', calories: 80, protein: 3, carbs: 3, fat: 7 },
      { name: 'Milk', calories: 100, protein: 5, carbs: 8, fat: 5 },
      { name: 'Saffron', calories: 2, protein: 0.1, carbs: 0.4, fat: 0.1 }
    ],
    recipe: 'Blend soaked almonds with milk, add cardamom and saffron.'
  },
  {
    id: 'bv10',
    name: 'Sugarcane Juice',
    category: 'beverages',
    price: 35,
    description: 'Fresh sugarcane juice with ginger and lime',
    image: 'https://t4.ftcdn.net/jpg/05/88/95/49/360_F_588954911_S2dXt8djD0SJ03XFjbmGKepOZfJwVFGn.jpg',
    ingredients: [
      { name: 'Sugarcane', calories: 100, protein: 0, carbs: 25, fat: 0 },
      { name: 'Ginger', calories: 2, protein: 0.1, carbs: 0.5, fat: 0 },
      { name: 'Lime', calories: 5, protein: 0.1, carbs: 1.5, fat: 0 }
    ],
    recipe: 'Extract fresh sugarcane juice, add ginger and lime juice.'
  },
  {
    id: 'bv11',
    name: 'Paneer Soda',
    category: 'beverages',
    price: 25,
    description: 'Refreshing lemon soda with rose water',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6BajX38Plm6gwEr8qf4ZvHwy5vNOFtqiCAw&s',
    ingredients: [
      { name: 'Soda Water', calories: 0, protein: 0, carbs: 0, fat: 0 },
      { name: 'Lemon', calories: 10, protein: 0.2, carbs: 3, fat: 0.1 },
      { name: 'Rose Water', calories: 2, protein: 0, carbs: 0.5, fat: 0 }
    ],
    recipe: 'Mix soda water with lemon juice, rose water, and sugar.'
  },
  {
    id: 'bv12',
    name: 'Tender Coconut Shake',
    category: 'beverages',
    price: 65,
    description: 'Creamy shake made with tender coconut and milk',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/013/566/745/small_2x/a-glass-of-sweet-coconut-water-coconut-fragrance-photo.jpg',
    ingredients: [
      { name: 'Tender Coconut', calories: 60, protein: 2.5, carbs: 12, fat: 0.5 },
      { name: 'Milk', calories: 80, protein: 4, carbs: 6, fat: 4 },
      { name: 'Ice Cream', calories: 40, protein: 1, carbs: 6, fat: 2 }
    ],
    recipe: 'Blend tender coconut meat and water with milk and ice cream.'
  },
  {
    id: 'bv13',
    name: 'Masala Milk',
    category: 'beverages',
    price: 50,
    description: 'Spiced milk with cardamom, nutmeg, and almonds',
    image: 'https://consumer-voice.org/wp-content/uploads/2023/04/Buttermilk-A-Refreshing-Summer-Drink.jpg',
    ingredients: [
      { name: 'Milk', calories: 120, protein: 6, carbs: 9, fat: 6 },
      { name: 'Spices', calories: 8, protein: 0.3, carbs: 1.5, fat: 0.3 },
      { name: 'Almonds', calories: 30, protein: 1, carbs: 1, fat: 2.5 }
    ],
    recipe: 'Heat milk with cardamom, nutmeg, crushed almonds, and sugar.'
  },
  {
    id: 'bv14',
    name: 'Watermelon Juice',
    category: 'beverages',
    price: 40,
    description: 'Fresh watermelon juice with mint and black salt',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/030/210/583/small/of-a-watermelon-juice-isolated-on-flat-black-background-generative-ai-photo.jpg',
    ingredients: [
      { name: 'Watermelon', calories: 60, protein: 1, carbs: 15, fat: 0.2 },
      { name: 'Mint', calories: 2, protein: 0.1, carbs: 0.5, fat: 0 },
      { name: 'Black Salt', calories: 0, protein: 0, carbs: 0, fat: 0 }
    ],
    recipe: 'Blend watermelon with mint, strain, add black salt to taste.'
  },
  {
    id: 'bv15',
    name: 'Sweet Lassi',
    category: 'beverages',
    price: 45,
    description: 'Traditional sweet yogurt drink with cardamom',
    image: 'https://t4.ftcdn.net/jpg/05/12/58/51/360_F_512585178_7hnfJGxxsybEDn0QXe4iQXg7CeiF7pju.jpg',
    ingredients: [
      { name: 'Yogurt', calories: 80, protein: 4, carbs: 6, fat: 4 },
      { name: 'Sugar', calories: 40, protein: 0, carbs: 10, fat: 0 },
      { name: 'Cardamom', calories: 3, protein: 0.1, carbs: 0.7, fat: 0.1 }
    ],
    recipe: 'Whisk yogurt with sugar, cardamom powder, and ice water.'
  },
  {
    id: 'bv16',
    name: 'Salt Lassi',
    category: 'beverages',
    price: 40,
    description: 'Savory yogurt drink with cumin and black salt',
    image: 'https://themagicsaucepan.com/wp-content/uploads/2018/05/20180511-salt-lassi-0061-500x500.jpg',
    ingredients: [
      { name: 'Yogurt', calories: 80, protein: 4, carbs: 6, fat: 4 },
      { name: 'Cumin Powder', calories: 3, protein: 0.2, carbs: 0.4, fat: 0.2 },
      { name: 'Black Salt', calories: 0, protein: 0, carbs: 0, fat: 0 }
    ],
    recipe: 'Whisk yogurt with salt, cumin powder, and chilled water.'
  },
  {
    id: 'bv17',
    name: 'Lemon Tea',
    category: 'beverages',
    price: 25,
    description: 'Hot tea with fresh lemon juice and honey',
    image: 'https://cdn.pixabay.com/photo/2015/09/12/20/19/lemon-tea-937245_1280.jpg',
    ingredients: [
      { name: 'Tea', calories: 2, protein: 0, carbs: 0, fat: 0 },
      { name: 'Lemon', calories: 10, protein: 0.2, carbs: 3, fat: 0.1 },
      { name: 'Honey', calories: 30, protein: 0, carbs: 8, fat: 0 }
    ],
    recipe: 'Brew tea, add fresh lemon juice and honey to taste.'
  },
  {
    id: 'bv18',
    name: 'Ginger Tea',
    category: 'beverages',
    price: 30,
    description: 'Warming tea with fresh ginger and cardamom',
    image: 'https://t3.ftcdn.net/jpg/00/95/82/04/360_F_95820402_nvMKdWxL3IBfNxqw6ab3fCd2vumzZLdD.jpg',
    ingredients: [
      { name: 'Tea', calories: 2, protein: 0, carbs: 0, fat: 0 },
      { name: 'Ginger', calories: 5, protein: 0.1, carbs: 1, fat: 0 },
      { name: 'Cardamom', calories: 3, protein: 0.1, carbs: 0.7, fat: 0.1 }
    ],
    recipe: 'Boil tea with fresh ginger and cardamom, add milk and sugar.'
  },
  {
    id: 'bv19',
    name: 'Fresh Fruit Juice',
    category: 'beverages',
    price: 50,
    description: 'Seasonal fresh fruit juice of your choice',
    image: 'https://refreshjuice.com.au/cdn/shop/articles/Featured_Image_1_1.png?v=1730101394',
    ingredients: [
      { name: 'Seasonal Fruits', calories: 80, protein: 1, carbs: 20, fat: 0.3 },
      { name: 'Water', calories: 0, protein: 0, carbs: 0, fat: 0 },
      { name: 'Sugar', calories: 20, protein: 0, carbs: 5, fat: 0 }
    ],
    recipe: 'Blend fresh seasonal fruits with water, strain if needed, add sugar.'
  },
  {
    id: 'bv20',
    name: 'Iced Coffee',
    category: 'beverages',
    price: 55,
    description: 'Cold coffee with ice cream and chocolate syrup',
    image: 'https://img.freepik.com/premium-photo/milk-being-poured-into-iced-coffee-dark-table_118631-2003.jpg',
    ingredients: [
      { name: 'Coffee', calories: 10, protein: 0.3, carbs: 2, fat: 0 },
      { name: 'Milk', calories: 80, protein: 4, carbs: 6, fat: 4 },
      { name: 'Ice Cream', calories: 60, protein: 2, carbs: 8, fat: 3 }
    ],
    recipe: 'Blend cold coffee with milk, ice cream, and chocolate syrup.'
  },

  // Desserts (20 items)
  {
    id: 'ds1',
    name: 'Gulab Jamun (2 pieces)',
    category: 'desserts',
    price: 60,
    description: 'Soft milk dumplings in rose-flavored sugar syrup',
    image: 'https://t3.ftcdn.net/jpg/08/42/48/86/360_F_842488691_jNknbqQn2GSMXFggvtyX3UaVORtBRFSc.jpg',
    ingredients: [
      { name: 'Milk Powder', calories: 120, protein: 6, carbs: 12, fat: 6 },
      { name: 'Sugar Syrup', calories: 80, protein: 0, carbs: 20, fat: 0 },
      { name: 'Rose Water', calories: 2, protein: 0, carbs: 0.5, fat: 0 }
    ],
    recipe: 'Make dough with milk powder, form balls, deep fry, soak in sugar syrup.'
  },
  {
    id: 'ds2',
    name: 'Rasmalai (2 pieces)',
    category: 'desserts',
    price: 80,
    description: 'Cottage cheese discs in sweetened milk with cardamom',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnZYNCUwhpUKn1mVZfN84ccGH8g4AAU-FjrQ&s',
    ingredients: [
      { name: 'Paneer', calories: 100, protein: 8, carbs: 3, fat: 7 },
      { name: 'Milk', calories: 120, protein: 6, carbs: 9, fat: 6 },
      { name: 'Sugar', calories: 60, protein: 0, carbs: 15, fat: 0 }
    ],
    recipe: 'Boil paneer discs, simmer in sweetened milk with cardamom and nuts.'
  },
  {
    id: 'ds3',
    name: 'Payasam',
    category: 'desserts',
    price: 70,
    description: 'Traditional South Indian sweet pudding with rice and milk',
    image: 'https://img.freepik.com/free-photo/semiya-payasam-shewai-sewai-khir-seviyan-kheer-is-indian-sweet-made-with-vermicelli-milk-ghee-sugar-jaggery-raisins-nuts_466689-75455.jpg',
    ingredients: [
      { name: 'Rice', calories: 80, protein: 1.5, carbs: 18, fat: 0.2 },
      { name: 'Milk', calories: 150, protein: 8, carbs: 12, fat: 8 },
      { name: 'Jaggery', calories: 60, protein: 0, carbs: 15, fat: 0 }
    ],
    recipe: 'Cook rice in milk until creamy, sweeten with jaggery, add cardamom and nuts.'
  },
  {
    id: 'ds4',
    name: 'Mysore Pak',
    category: 'desserts',
    price: 90,
    description: 'Rich gram flour sweet with ghee and sugar',
    image: 'https://media.istockphoto.com/id/1441587051/photo/mysorepak-indian-famous-traditional-sweet-closeup-with-selective-focus-and-blur.jpg?s=612x612&w=0&k=20&c=8dHyKFQE0kiulPzlarZgHBstXrdvd35UBsbcFZo4guI=',
    ingredients: [
      { name: 'Gram Flour', calories: 100, protein: 6, carbs: 16, fat: 2 },
      { name: 'Ghee', calories: 120, protein: 0, carbs: 0, fat: 14 },
      { name: 'Sugar', calories: 100, protein: 0, carbs: 25, fat: 0 }
    ],
    recipe: 'Roast gram flour in ghee, add sugar syrup, cook until set.'
  },
  {
    id: 'ds5',
    name: 'Badusha',
    category: 'desserts',
    price: 50,
    description: 'Flaky pastry soaked in sugar syrup',
    image: 'https://thehappypalates.wordpress.com/wp-content/uploads/2014/10/img_6170.jpg',
    ingredients: [
      { name: 'Wheat Flour', calories: 120, protein: 4, carbs: 24, fat: 1 },
      { name: 'Ghee', calories: 80, protein: 0, carbs: 0, fat: 9 },
      { name: 'Sugar Syrup', calories: 80, protein: 0, carbs: 20, fat: 0 }
    ],
    recipe: 'Make flaky pastry with ghee, deep fry, soak in sugar syrup.'
  },
  {
    id: 'ds6',
    name: 'Kesari Bath',
    category: 'desserts',
    price: 65,
    description: 'Semolina sweet pudding with saffron and nuts',
    image: 'https://www.shutterstock.com/image-photo/rava-kesari-bath-sheera-indian-260nw-2043574979.jpg',
    ingredients: [
      { name: 'Semolina', calories: 120, protein: 4, carbs: 24, fat: 1 },
      { name: 'Sugar', calories: 80, protein: 0, carbs: 20, fat: 0 },
      { name: 'Saffron', calories: 5, protein: 0.2, carbs: 1, fat: 0.1 }
    ],
    recipe: 'Roast semolina, cook with sugar syrup, add saffron and ghee.'
  },
  {
    id: 'ds7',
    name: 'Double Ka Meetha',
    category: 'desserts',
    price: 75,
    description: 'Hyderabadi bread pudding with milk and nuts',
    image: 'https://cdn3.foodviva.com/static-content/food-images/dessert-recipes/double-ka-meetha-recipe/double-ka-meetha-recipe.jpg',
    ingredients: [
      { name: 'Bread', calories: 100, protein: 4, carbs: 18, fat: 2 },
      { name: 'Milk', calories: 120, protein: 6, carbs: 9, fat: 6 },
      { name: 'Sugar', calories: 60, protein: 0, carbs: 15, fat: 0 }
    ],
    recipe: 'Fry bread slices, layer with sweetened milk, garnish with nuts.'
  },
  {
    id: 'ds8',
    name: 'Coconut Barfi',
    category: 'desserts',
    price: 55,
    description: 'Sweet coconut fudge with cardamom',
    image: 'https://www.shutterstock.com/image-photo/indian-popular-sweet-food-khopara-600nw-1253841091.jpg',
    ingredients: [
      { name: 'Coconut', calories: 120, protein: 2, carbs: 4, fat: 12 },
      { name: 'Sugar', calories: 80, protein: 0, carbs: 20, fat: 0 },
      { name: 'Cardamom', calories: 5, protein: 0.2, carbs: 1, fat: 0.1 }
    ],
    recipe: 'Cook grated coconut with sugar until thick, add cardamom, set in tray.'
  },
  {
    id: 'ds9',
    name: 'Laddu (2 pieces)',
    category: 'desserts',
    price: 45,
    description: 'Traditional gram flour balls with ghee and nuts',
    image: 'https://t3.ftcdn.net/jpg/01/14/65/92/360_F_114659226_qptdYH9G97BFOeOIDQ3J4uOy9JiE449k.jpg', 
           ingredients: [
      { name: 'Gram Flour', calories: 100, protein: 6, carbs: 16, fat: 2 },
      { name: 'Ghee', calories: 80, protein: 0, carbs: 0, fat: 9 },
      { name: 'Jaggery', calories: 60, protein: 0, carbs: 15, fat: 0 }
    ],
    recipe: 'Roast gram flour in ghee, mix with powdered jaggery, form balls.'
  },

  {
    id: 'ds10',
    name: 'Kulfi',
    category: 'desserts',
    price: 40,
    description: 'Traditional Indian ice cream with cardamom and pistachios',
    image: 'https://media.istockphoto.com/id/503011705/photo/kulfi.jpg?s=612x612&w=0&k=20&c=R_9ksNnkuG0bEgtH1cScnk8Dx9YCEwsGZX-uDaNhWPE=',
    ingredients: [
      { name: 'Milk', calories: 120, protein: 6, carbs: 9, fat: 6 },
      { name: 'Sugar', calories: 40, protein: 0, carbs: 10, fat: 0 },
      { name: 'Cardamom', calories: 3, protein: 0.1, carbs: 0.7, fat: 0.1 }
    ],
    recipe: 'Reduce milk with sugar, add cardamom, freeze in kulfi molds.'
  },
  {
    id: 'ds11',
    name: 'Jalebi (4 pieces)',
    category: 'desserts',
    price: 50,
    description: 'Crispy spiral-shaped sweets in sugar syrup',
    image: 'https://thumbs.dreamstime.com/b/indian-sweet-jalebi-traditional-dessert-india-77486391.jpg',
    ingredients: [
      { name: 'Wheat Flour', calories: 80, protein: 2.5, carbs: 16, fat: 0.8 },
      { name: 'Sugar Syrup', calories: 100, protein: 0, carbs: 25, fat: 0 },
      { name: 'Saffron', calories: 2, protein: 0.1, carbs: 0.4, fat: 0.1 }
    ],
    recipe: 'Make fermented batter, pipe spirals in hot oil, soak in saffron syrup.'
  },
  {
    id: 'ds12',
    name: 'Halwa',
    category: 'desserts',
    price: 70,
    description: 'Rich semolina pudding with ghee, sugar, and nuts',
    image: 'https://static.vecteezy.com/system/resources/previews/016/285/833/non_2x/apple-sheera-or-pudding-or-halwa-free-photo.jpg',
    ingredients: [
      { name: 'Semolina', calories: 120, protein: 4, carbs: 24, fat: 1 },
      { name: 'Ghee', calories: 100, protein: 0, carbs: 0, fat: 11 },
      { name: 'Sugar', calories: 80, protein: 0, carbs: 20, fat: 0 }
    ],
    recipe: 'Roast semolina in ghee, add sugar syrup, cook until thick and glossy.'
  },
  {
    id: 'ds13',
    name: 'Carrot Halwa',
    category: 'desserts',
    price: 80,
    description: 'Sweet carrot pudding with milk, nuts, and cardamom',
    image: 'https://www.shutterstock.com/image-photo/gajar-ka-halwa-carrotbased-sweet-600nw-759925072.jpg',
    ingredients: [
      { name: 'Carrots', calories: 60, protein: 1, carbs: 14, fat: 0.3 },
      { name: 'Milk', calories: 100, protein: 5, carbs: 8, fat: 5 },
      { name: 'Sugar', calories: 60, protein: 0, carbs: 15, fat: 0 }
    ],
    recipe: 'Cook grated carrots in milk, add sugar, reduce until thick.'
  },
  {
    id: 'ds14',
    name: 'Rabri',
    category: 'desserts',
    price: 75,
    description: 'Thickened sweetened milk with cardamom and nuts',
    image: 'https://img.freepik.com/premium-photo/sweet-rabdi-lachha-rabri-basundi-made-with-pure-milk-garnished-with-dry-fruits-served-bowl-moody-background-selective-focus_466689-30399.jpg',
    ingredients: [
      { name: 'Milk', calories: 180, protein: 9, carbs: 14, fat: 9 },
      { name: 'Sugar', calories: 60, protein: 0, carbs: 15, fat: 0 },
      { name: 'Cardamom', calories: 3, protein: 0.1, carbs: 0.7, fat: 0.1 }
    ],
    recipe: 'Slowly reduce milk while stirring, sweeten with sugar, add cardamom.'
  },
  {
    id: 'ds15',
    name: 'Kaju Katli',
    category: 'desserts',
    price: 120,
    description: 'Diamond-shaped cashew fudge with silver leaf',
    image: 'https://media.istockphoto.com/id/1225627187/photo/delicious-indian-sweet-kaju-katli-in-a-white-bowl.jpg?s=612x612&w=0&k=20&c=l9XABMf_h69TO_vRVTOrUbk5-26tLQEeDHiJMU4RTUg=',
    ingredients: [
      { name: 'Cashews', calories: 150, protein: 5, carbs: 8, fat: 12 },
      { name: 'Sugar', calories: 80, protein: 0, carbs: 20, fat: 0 },
      { name: 'Cardamom', calories: 3, protein: 0.1, carbs: 0.7, fat: 0.1 }
    ],
    recipe: 'Grind cashews, cook with sugar syrup, roll thin, cut into diamonds.'
  },
  {
    id: 'ds16',
    name: 'Ras Malai Ice Cream',
    category: 'desserts',
    price: 85,
    description: 'Frozen version of traditional rasmalai',
    image: 'https://sahnibakery.com/cdn/shop/products/15RASMALAI.jpg?v=1609434930',
    ingredients: [
      { name: 'Milk', calories: 120, protein: 6, carbs: 9, fat: 6 },
      { name: 'Cream', calories: 80, protein: 1, carbs: 2, fat: 8 },
      { name: 'Paneer', calories: 60, protein: 5, carbs: 2, fat: 4 }
    ],
    recipe: 'Churn reduced milk with cream and paneer pieces, freeze until set.'
  },
  {
    id: 'ds17',
    name: 'Pootharekulu (2 pieces)',
    category: 'desserts',
    price: 95,
    description: 'Paper-thin sweet crepes with jaggery and ghee',
    image: 'https://olivemithai.com/cdn/shop/files/1C1A0487.jpg?v=1693822879&width=533',
    ingredients: [
      { name: 'Rice Starch', calories: 60, protein: 1, carbs: 14, fat: 0.1 },
      { name: 'Jaggery', calories: 80, protein: 0, carbs: 20, fat: 0 },
      { name: 'Ghee', calories: 60, protein: 0, carbs: 0, fat: 7 }
    ],
    recipe: 'Make paper-thin crepes, fill with jaggery and ghee, roll carefully.'
  },
  {
    id: 'ds18',
    name: 'Malai Kulfi',
    category: 'desserts',
    price: 50,
    description: 'Creamy kulfi with extra milk solids',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg7p2Gh1W49n6rUO3bUcv07CQVmDhPytoYJA&ss:', 
    ingredients: [
      { name: 'Milk', calories: 140, protein: 7, carbs: 11, fat: 7 },
      { name: 'Cream', calories: 60, protein: 1, carbs: 2, fat: 6 },
      { name: 'Sugar', calories: 40, protein: 0, carbs: 10, fat: 0 }
    ],
    recipe: 'Reduce milk with cream, sweeten, add cardamom, freeze in kulfi molds.'
  },
  {
    id: 'ds19',
    name: 'Filter Coffee Ice Cream',
    category: 'desserts',
    price: 60,
    description: 'South Indian coffee flavored ice cream',
    image: ' https://www.shutterstock.com/image-photo/walnut-cream-caramel-roma-ice-600nw-2012747552.jpg',
    ingredients: [
      { name: 'Coffee Decoction', calories: 10, protein: 0.5, carbs: 2, fat: 0 },
      { name: 'Milk', calories: 100, protein: 5, carbs: 8, fat: 5 },
      { name: 'Cream', calories: 80, protein: 1, carbs: 2, fat: 8 }
    ],
    recipe: 'Churn strong coffee decoction with sweetened milk and cream.'
  },
  {
    id: 'ds20',
    name: 'Coconut Ice Cream',
    category: 'desserts',
    price: 55,
    description: 'Tropical coconut flavored ice cream with coconut pieces',
    image: 'https://media.istockphoto.com/id/1140753618/photo/homemade-coconut-popsicles-ice-lolly-on-wooden-table-summer-food.jpg?s=612x612&w=0&k=20&c=dDTPOu_vcOurZiyUOg9mwCd4RGXpT8Wslc1VpiwzasY=',
    ingredients: [
      { name: 'Coconut Milk', calories: 100, protein: 2, carbs: 4, fat: 10 },
      { name: 'Milk', calories: 80, protein: 4, carbs: 6, fat: 4 },
      { name: 'Coconut Pieces', calories: 40, protein: 0.7, carbs: 1.5, fat: 4 }
    ],
    recipe: 'Churn coconut milk with regular milk, add fresh coconut pieces.'
  }
];