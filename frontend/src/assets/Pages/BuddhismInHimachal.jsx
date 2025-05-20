import React from 'react';

const monasteries = [
  {
    name: "Tashijong Monastery (Dharamshala)",
    description:
      "Tashijong Monastery, located in Dharamshala, is an important Tibetan Buddhist monastery that serves as a center for Tibetan culture and teachings. Established in the early 1950s, it houses a large community of monks and is renowned for its serene ambiance and beautiful Tibetan architecture. The monastery offers a peaceful retreat for spiritual seekers and is a significant site for those interested in Tibetan Buddhism."
  },
  {
    name: "Namgyal Monastery (Dharamshala)",
    description:
      "Namgyal Monastery is the personal monastery of the Dalai Lama in Dharamshala and holds immense significance in Tibetan Buddhism. The monastery offers spiritual teachings, meditation, and rituals. Its tranquil setting and the presence of the Dalai Lama make it a revered place for Buddhists around the world. Visitors can also explore the beautiful Tibetan art, architecture, and learn about Tibetan culture."
  },
  {
    name: "Dharamkot Monastery (Dharamshala)",
    description:
      "Dharamkot Monastery, located near McLeod Ganj, is a small yet beautiful Tibetan Buddhist monastery. It is known for its peaceful surroundings, with views of the Dhauladhar mountain range. The monastery is an ideal place for meditation and reflection, attracting many visitors who seek spiritual solace. It offers regular teachings and is also a spot for yoga and meditation enthusiasts."
  },
  {
    name: "Kailash Monastery (Spiti Valley)",
    description:
      "Kailash Monastery, situated in the remote Spiti Valley, is dedicated to Buddhist teachings and the Tibetan way of life. The monastery is known for its isolated location and breathtaking views of the surrounding mountains. It is a spiritual haven where Buddhist monks study and meditate. The monastery’s ancient structure and serene environment make it a must-visit place for those exploring Tibetan Buddhism."
  },
  {
    name: "Key Monastery (Spiti Valley)",
    description:
      "Key Monastery, also known as Ki Monastery, is one of the most significant Buddhist monasteries in Himachal Pradesh. Located at an altitude of 4,166 meters, it is perched on a hilltop overlooking the Spiti Valley. The monastery is home to numerous monks and offers teachings on Mahayana Buddhism. Its architectural beauty, stunning backdrop, and spiritual significance make it a major attraction for pilgrims and tourists alike."
  },
  {
    name: "Sherabling Monastery (Baijnath)",
    description:
      "Sherabling Monastery in Baijnath is a prominent Tibetan Buddhist monastery in the Kangra Valley. The monastery, which was established in the 16th century, serves as a key center for Buddhist teachings in the region. Its peaceful environment and the presence of monks make it a serene spot for meditation and reflection. Visitors can explore the monastery and learn more about Tibetan Buddhism and its practices."
  },
  {
    name: "Spiti Valley Monasteries (Spiti Valley)",
    description:
      "Spiti Valley, often referred to as ‘Little Tibet’, is home to a number of monasteries that hold great spiritual significance in Tibetan Buddhism. Monasteries like Kungri Monastery, Tabo Monastery, and Dhankar Monastery attract pilgrims from across the world. These ancient structures are known for their beautiful murals, ancient texts, and spiritual aura. The monasteries are not just religious hubs but also offer insight into Tibetan culture and traditions."
  },
  {
    name: "Tabo Monastery (Spiti Valley)",
    description:
      "Tabo Monastery is one of the oldest Buddhist monasteries in India, established in the 10th century. It is a UNESCO World Heritage Site and is renowned for its ancient murals, sculptures, and spiritual teachings. Located in the Spiti Valley, the monastery is an important pilgrimage site for Tibetan Buddhists. Visitors can explore the temple complex, interact with the monks, and meditate in the peaceful surroundings."
  },
  {
    name: "Lama Yuru Monastery (Spiti Valley)",
    description:
      "Lama Yuru Monastery, situated in the Spiti Valley, is known for its beautiful architecture and serene location. The monastery is part of the Gelugpa tradition of Tibetan Buddhism and is famous for its rare murals depicting Buddhist deities. The monastery provides an excellent opportunity to experience the peaceful and contemplative side of Buddhist life in a spectacular landscape."
  },
  {
    name: "Dungkar Monastery (Lahaul)",
    description:
      "Dungkar Monastery in Lahaul is an important Buddhist site with a rich cultural history. The monastery is set amidst the scenic beauty of the Lahaul Valley and is dedicated to the practice of Tibetan Buddhism. It serves as a hub for religious teachings, meditation, and cultural activities. The monastery offers visitors a chance to learn about the region’s Buddhist traditions and enjoy the serene atmosphere."
  },
  {
    name: "Maha Karuna Buddhist Monastery (Dharamshala)",
    description:
      "Maha Karuna Buddhist Monastery in Dharamshala is an important center for Buddhist studies and meditation. It serves as a peaceful retreat for monks and spiritual seekers. The monastery is known for its teachings on compassion and mindfulness, inspired by the Dalai Lama’s philosophy. Visitors can join meditation sessions, attend teachings, and explore the monastery’s peaceful environment."
  },
  {
    name: "Lama Temple (Manali)",
    description:
      "The Lama Temple in Manali is a small yet significant Buddhist temple dedicated to Tibetan Buddhist practices. It is known for its vibrant murals and peaceful ambiance, making it a popular stop for spiritual seekers. The temple is often visited by tourists and locals alike, who come to meditate and explore Tibetan Buddhist culture."
  },
  {
    name: "Buddhist Monastery (Kullu)",
    description:
      "The Buddhist Monastery in Kullu is a peaceful place for meditation and spiritual reflection. It is part of the larger Tibetan Buddhist tradition and offers teachings to visitors. The monastery’s serene atmosphere and stunning surroundings attract both pilgrims and tourists looking to experience the spiritual side of Himachal Pradesh."
  },
  {
    name: "Nyingmapa Monastery (Dharamshala)",
    description:
      "Nyingmapa Monastery in Dharamshala is dedicated to the Nyingma tradition of Tibetan Buddhism. The monastery is a center for spiritual study and meditation. With its peaceful surroundings and stunning views, it is a place for those interested in learning more about the teachings of Tibetan Buddhism and practicing mindfulness."
  },
  {
    name: "Gaden Monastery (Kullu)",
    description:
      "Gaden Monastery, located in the Kullu Valley, is another prominent Tibetan Buddhist monastery. It offers a peaceful environment for meditation and spiritual growth. The monastery is also a hub for cultural exchange and Tibetan Buddhist teachings. Visitors can participate in teachings and learn about Tibetan Buddhism in this serene location."
  },
  {
    name: "Jantir Monastery (Kullu)",
    description:
      "Jantir Monastery in the Kullu Valley is known for its spiritual teachings and peaceful environment. The monastery provides a perfect setting for meditation and spiritual retreat. It is a center for Tibetan Buddhist practices and is visited by tourists and pilgrims who seek to learn more about Tibetan Buddhism."
  },
  {
    name: "Dharamsala Tibetan Monastery (Dharamshala)",
    description:
      "Dharamsala Tibetan Monastery, located in the foothills of the Dhauladhar range, is known for its teachings on Tibetan Buddhism. The monastery offers a tranquil setting for visitors seeking to practice meditation and mindfulness. It is also a place to learn about Tibetan culture and experience the peaceful traditions of Buddhism."
  },
  {
    name: "Buddhist Monastery (Nako)",
    description:
      "The Buddhist Monastery in Nako, located in the Spiti Valley, is a hidden gem in Himachal Pradesh. Known for its ancient murals and serene surroundings, the monastery offers a glimpse into the region's Buddhist heritage. It is a peaceful retreat for pilgrims and spiritual seekers looking to connect with the divine in a quiet, remote setting."
  },
  {
    name: "Maha Bodhi Monastery (Dharamshala)",
    description:
      "Maha Bodhi Monastery in Dharamshala is a renowned center for Buddhist teachings and meditation. The monastery is affiliated with the Mahayana tradition of Buddhism and serves as a peaceful retreat for those looking to deepen their spiritual practice. The serene environment and beautiful Tibetan architecture make it a must-visit for Buddhist pilgrims and tourists."
  },
  {
    name: "Kunzum Pass Monastery (Spiti Valley)",
    description:
      "Kunzum Pass Monastery, located at a high altitude, is a small but important Buddhist monastery in the Spiti Valley. The monastery is known for its stunning views and its importance to Tibetan Buddhists, as it is a key point of pilgrimage. The monastery offers visitors a chance to experience Buddhist spirituality amidst the breathtaking mountain landscapes."
  }
];

const BuddhismInHimachal = () => {
  return (
    <div className="w-full min-h-screen bg-cover bg-center relative" style={{ backgroundImage: "url('/kullu.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 flex flex-col items-center pt-20 px-4">
        <h1 className="text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-red-500 font-bold font-dancing">
          Buddhism in Himachal Pradesh
        </h1>
        <p className="mt-4 text-white text-lg text-center max-w-3xl font-light">
          Explore the rich spiritual heritage nestled in the mountains of Himachal.
        </p>
      </div>

      <div className="relative z-10 mt-10 px-4 md:px-20 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 bg-white/20 backdrop-blur-xl p-10 rounded-3xl shadow-2xl">
          {monasteries.map((monastery, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition duration-300 border border-gray-200"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-2">{monastery.name}</h2>
              <p className="text-gray-600 text-sm">{monastery.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuddhismInHimachal;
