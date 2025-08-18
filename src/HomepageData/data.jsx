const data = {
  categories: [
    { icon: "laptop", label: "Gaming Laptops" },
    { icon: "keyboard", label: "RGB Accessories" },
    { icon: "desktop_windows", label: "Monitors" },
    { icon: "chair", label: "Gaming Chairs" },
    { icon: "headphones", label: "Headsets" },
    { icon: "memory", label: "Components" },
  ],

  dealOfTheDay: {
    title: "MSI Gaming Beast Pro",
    description:
      "Power through games with RTX 5090, 32GB RAM, 2TB SSD, and liquid-cooled efficiency.",
    image:
      "https://images.unsplash.com/photo-1587202372775-98927f8b2f56?auto=format&fit=crop&w=1500&q=80",
    price: 2499,
    oldPrice: 2999,
  },

  topProducts: [
    {
      id: 1,
      name: "4K Ultra Gaming Monitor",
      image:
        "https://images.unsplash.com/photo-1606813907295-53c48a77b635?auto=format&fit=crop&w=800&q=80",
      price: 799,
    },
    {
      id: 2,
      name: "Mechanical RGB Keyboard",
      image:
        "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=800&q=80",
      price: 149,
    },
    {
      id: 3,
      name: "Wireless Gaming Mouse",
      image:
        "https://images.unsplash.com/photo-1563297007-0686b7003af7?auto=format&fit=crop&w=800&q=80",
      price: 89,
    },
  ],

  reviews: [
    {
      id: 1,
      text: "The best gaming gear I've ever owned. Performance and design are unmatched!",
      author: "Gamer #1",
    },
    {
      id: 2,
      text: "Blazing fast delivery and top-notch customer service. 10/10 would buy again!",
      author: "Gamer #2",
    },
    {
      id: 3,
      text: "My FPS literally doubled after upgrading. This store is the real deal.",
      author: "Gamer #3",
    },
  ],
};
export default data;
