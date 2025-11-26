export default {
  state: () => ({
    wishlist: [],
    courses: [
      {
        id: 1,
        title: "Italian Pasta Mastery",
        chef: "Chef Bungcwalisa",
        price: 49,
        level: "Beginner",
        available: true,
        image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&w=900&q=60"
      },
      {
        id: 2,
        title: "Sushi Rolling Essentials",
        chef: "Chef Liviwe",
        price: 79,
        level: "Intermediate",
        available: false,
        image: "https://images.unsplash.com/photo-1604908176997-2855d493725f?auto=format&w=900&q=60"
      },
      {
        id: 3,
        title: "French Pastry Art",
        chef: "Chef Marie",
        price: 99,
        level: "Advanced",
        available: true,
        image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&w=900&q=60"
      }
    ]
  }),

  mutations: {
    ADD_TO_WISHLIST(state, id) {
      if (!state.wishlist.includes(id)) {
        state.wishlist.push(id);
      }
    }
  },

  getters: {
    wishlistCount: (state) => state.wishlist.length,
    allCourses: (state) => state.courses
  }
};