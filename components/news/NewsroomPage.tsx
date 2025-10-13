"use client";
import { ChevronDownIcon, UserCircleIcon } from "lucide-react";
import { motion } from "framer-motion";

const articlesData = [
  {
    id: 1,
    type: "placeholder",
    postedBy: "bih_user",
    date: "May 27, 2025",
    readTime: "1 min read",
    title:
      "BlueSPACE Innovation Exchange Mission: Ghanaian Innovation on a Global Stage at the Startup Festival Malta 2023",
    categories: ["Uncategorized"],
    bgColor: "bg-neutral-500",
    textColor: "text-white",
    tagBgColor: "bg-neutral-600",
    tagTextColor: "text-white",
  },
  {
    id: 2,
    type: "image",
    imageUrl:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    date: "May 27, 2025",
    readTime: "1 min read",
    title: "BlueSPACE Innovation Hub delegation enhances global networks",
    categories: ["Events", "Programs"],
  },
  {
    id: 3,
    type: "image",
    imageUrl:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
    date: "May 16, 2025",
    readTime: "1 min read",
    title: "BlueSPACE Innovation Hub ends first edition of DevCon Summit",
    categories: ["Events"],
  },
  {
    id: 4,
    type: "image",
    imageUrl:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    date: "May 10, 2025",
    readTime: "2 min read",
    title: "Another Exciting News from BlueSPACE",
    categories: ["Updates", "Community"],
  },
];

const ScrollToTopAffix = () => (
  <motion.div
    className="fixed left-3 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center z-50 space-y-1.5"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.5 }}
  >
    <div className="flex flex-col items-center">
      <div className="w-2 h-px bg-neutral-600"></div>
      <div className="w-px h-12 bg-neutral-600"></div>
    </div>
    <motion.p
      className="text-[10px] font-medium text-neutral-600"
      style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
      whileHover={{ color: "#000" }}
    >
      scroll to top
    </motion.p>
  </motion.div>
);

const NewsroomPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <ScrollToTopAffix />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <motion.div
          className="flex flex-col sm:flex-row justify-between sm:items-center mb-8 space-y-4 sm:space-y-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <p className="text-sm text-neutral-600">
              <span className="hover:underline cursor-pointer">Home</span>
              <span className="mx-1">{">"}</span>
              <span className="font-medium text-neutral-800">Our Newsroom</span>
            </p>
          </motion.div>
          <motion.div
            className="flex items-center space-x-4"
            variants={itemVariants}
          >
            <p className="text-sm text-neutral-600">Showing 1–4 of 4 results</p>
            <motion.button
              className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-md px-3 py-1.5 text-sm font-medium text-neutral-700 flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Categories
              <ChevronDownIcon className="w-4 h-4 ml-2 text-neutral-500" />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Articles Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {articlesData.map((article, index) => (
            <motion.div
              key={article.id}
              className={`rounded-lg overflow-hidden shadow-sm flex flex-col
                ${
                  article.type === "placeholder" ? article.bgColor : "bg-white"
                }`}
              style={{ minHeight: "450px" }}
              variants={itemVariants}
              custom={index}
              whileHover={{ y: -5 }}
            >
              {article.type === "placeholder" ? (
                <motion.div
                  className={`p-6 flex flex-col h-full ${article.textColor}`}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center mb-4">
                    <motion.div
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3 shrink-0"
                      whileHover={{ rotate: 10 }}
                    >
                      <UserCircleIcon className="w-8 h-8 text-neutral-400" />
                    </motion.div>
                    <div>
                      <p className={`text-xs ${article.textColor} opacity-80`}>
                        Posted by
                      </p>
                      <p
                        className={`text-sm font-semibold ${article.textColor}`}
                      >
                        {article.postedBy}
                      </p>
                    </div>
                  </div>
                  <p className={`text-xs mb-2 ${article.textColor} opacity-80`}>
                    {article.date} • {article.readTime}
                  </p>
                  <h2
                    className={`text-xl font-bold mb-4 flex-grow ${article.textColor}`}
                  >
                    {article.title}
                  </h2>
                  <div className="mt-auto flex gap-2">
                    {article.categories.map((category) => (
                      <motion.span
                        key={category}
                        className={`inline-block ${article.tagBgColor} ${article.tagTextColor} text-xs font-medium px-3 py-1 rounded-full`}
                        whileHover={{ scale: 1.1 }}
                      >
                        {category}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  className="relative w-full h-full group"
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.img
                    src={article.imageUrl}
                    alt={article.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                  <div className="relative p-6 flex flex-col justify-end h-full text-white">
                    <p className="text-xs mb-2 opacity-90">
                      {article.date} • {article.readTime}
                    </p>
                    <motion.h2
                      className="text-xl font-bold mb-4 group-hover:underline"
                      whileHover={{ x: 5 }}
                    >
                      {article.title}
                    </motion.h2>
                    <div className="flex flex-wrap gap-2">
                      {article.categories.map((category) => (
                        <motion.span
                          key={category}
                          className="bg-neutral-800 bg-opacity-80 text-white text-xs font-medium px-3 py-1 rounded-full"
                          whileHover={{ scale: 1.1 }}
                        >
                          {category}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default NewsroomPage;
