import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

// INDIAN FOOD
import paneer from "./assets/paneer.jpg";
import butterchicken from "./assets/butterchicken.jpg";
import daltadka from "./assets/daltadka.jpg";
import chicken65 from "./assets/chicken65.jpg";
import dosa from "./assets/dosa.jpg";

// BREADS
import roti from "./assets/roti.jpg";
import chapati from "./assets/chapati.jpg";

// FAST FOOD
import pizza from "./assets/pizza.jpg";
import burger from "./assets/burger.jpg";
import pasta from "./assets/pasta.jpg";

// BEVERAGES
import mango from "./assets/mango.jpg";
import strawberry from "./assets/strawberry.jpg";
import orange from "./assets/orange.jpg";
import cocacola from "./assets/cocacola.jpg";
import mojito from "./assets/mojito.jpg";

import bg from "./assets/restaurant.jpg";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  // EMAIL FUNCTION
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_0ublic8",
      "template_rel73bs",
      e.target,
      "u6DXS_c-TfQuKhqLx"
    )
      .then(() => {
        toast.success("Message Sent Successfully!");
      })
      .catch(() => {
        toast.error("Failed to send message");
      });

    e.target.reset();
  };

  if (loading) {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-white">

      <motion.div
        className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1 }}
      />

      <p className="mt-4 text-gray-600 text-lg font-semibold">
        Loading Swad Sagar...
      </p>

    </div>
  );
}

  return (
    <div>

      <Toaster />

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-10 py-4 bg-white/70 backdrop-blur-lg border-b border-gray-200 sticky top-0 z-50">
        <h1 className="flex items-center gap-3 cursor-pointer group">

          {/* CLEAN CIRCLE LOGO */}
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-green-600 text-white font-bold text-lg shadow-md group-hover:scale-110 transition">
            SS
          </div>

          {/* TEXT */}
          <div className="flex flex-col leading-tight">
            <span className="text-2xl font-semibold text-gray-800">
              Swad Sagar
            </span>
            <span className="text-xs text-gray-500 tracking-widest uppercase">
              Taste of India
            </span>
          </div>

        </h1>
        <div className="space-x-6">
          <a href="#home" className="hover:text-orange-500">Home</a>
          <a href="#menu" className="hover:text-orange-500">Menu</a>
          <a href="#contact" className="hover:text-orange-500">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="h-screen flex flex-col justify-center items-center text-white text-center"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold bg-black bg-opacity-50 p-4 rounded"
        >
          Welcome to Swad Sagar
        </motion.h1>

        <p className="mt-4 text-xl bg-black bg-opacity-50 px-4 py-2 rounded">
          Authentic Indian Flavors • Taste of Tradition 🇮🇳
        </p>
      </section>

      {/* MENU */}
      <motion.section id="menu" className="p-12 text-center bg-gray-100">

        <h2 className="text-3xl font-bold mb-10">Our Menu 🍛</h2>

        {/* INDIAN */}
        <h3 className="text-2xl font-bold mb-6 text-orange-500">Indian Specials</h3>
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {[
            { img: paneer, name: "Paneer Tikka", price: "₹249" },
            { img: butterchicken, name: "Butter Chicken", price: "₹349" },
            { img: daltadka, name: "Dal Tadka", price: "₹179" },
            { img: chicken65, name: "Chicken 65", price: "₹299" },
            { img: dosa, name: "Masala Dosa", price: "₹149" },
          ].map((item, i) => (
            <motion.div key={i} whileHover={{ scale: 1.08 }}
              className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition border-t-4 border-orange-500">
              <img src={item.img} alt={item.name} className="h-40 w-full object-cover" />
              <div className="p-4">
                <h3 className="font-bold">{item.name}</h3>
                <p className="text-orange-500">{item.price}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BREADS */}
        <h3 className="text-2xl font-bold mb-6 text-yellow-600">Breads</h3>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            { img: roti, name: "Roti", price: "₹20" },
            { img: chapati, name: "Chapati", price: "₹25" },
          ].map((item, i) => (
            <motion.div key={i} whileHover={{ scale: 1.08 }}
              className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition border-t-4 border-yellow-500">
              <img src={item.img} alt={item.name} className="h-40 w-full object-cover" />
              <div className="p-4">
                <h3 className="font-bold">{item.name}</h3>
                <p className="text-yellow-600">{item.price}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAST FOOD */}
        <h3 className="text-2xl font-bold mb-6 text-red-500">Fast Food</h3>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            { img: pizza, name: "Pizza", price: "₹299" },
            { img: burger, name: "Burger", price: "₹199" },
            { img: pasta, name: "Pasta", price: "₹249" },
          ].map((item, i) => (
            <motion.div key={i} whileHover={{ scale: 1.08 }}
              className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition border-t-4 border-red-500">
              <img src={item.img} alt={item.name} className="h-40 w-full object-cover" />
              <div className="p-4">
                <h3 className="font-bold">{item.name}</h3>
                <p className="text-red-500">{item.price}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BEVERAGES */}
        <h3 className="text-2xl font-bold mb-6 text-green-600">Beverages</h3>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { img: mango, name: "Mango Juice", price: "₹99" },
            { img: strawberry, name: "Strawberry Juice", price: "₹109" },
            { img: orange, name: "Orange Juice", price: "₹89" },
            { img: cocacola, name: "Coca-Cola", price: "₹59" },
            { img: mojito, name: "Mojito", price: "₹129" },
          ].map((item, i) => (
            <motion.div key={i} whileHover={{ scale: 1.08 }}
              className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition border-t-4 border-green-500">
              <img src={item.img} alt={item.name} className="h-40 w-full object-cover" />
              <div className="p-4">
                <h3 className="font-bold">{item.name}</h3>
                <p className="text-green-600">{item.price}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </motion.section>

      {/* CONTACT */}
      <section id="contact" className="p-12 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>

        <form onSubmit={sendEmail} className="max-w-md mx-auto space-y-4">
          <input name="user_name" placeholder="Name" className="w-full p-2 border rounded" required />
          <input name="user_email" placeholder="Email" className="w-full p-2 border rounded" required />
          <textarea name="message" placeholder="Message" className="w-full p-2 border rounded" required />
          <button type="submit" className="bg-orange-500 text-white px-6 py-2 rounded hover:scale-105">
            Send Message
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="bg-green-700 text-white text-center p-6">
        <p>© 2026 Swad Sagar</p>
      </footer>

    </div>
  );
}

export default App;