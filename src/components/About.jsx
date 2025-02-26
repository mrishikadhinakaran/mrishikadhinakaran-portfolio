import "react";


function About() {
  return (
    <section className="w-full min-h-screen bg-black text-white  px-3 py-16 flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto">
      <div className="ml-7">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
        <p className="text-md md:text-xl leading-relaxed font-mono ">
          Hi, I’m <span className="text-orange-400">Raghav Katta</span>, a passionate MERN Stack Developer who loves 
          building dynamic, high-performance web applications. With expertise in 
          <span className="text-blue-400"> MongoDB</span>, <span className="text-yellow-400">Express.js</span>, 
          <span className="text-cyan-400"> React</span>, and <span className="text-purple-400">Node.js</span>, I enjoy crafting seamless user experiences 
          and scalable backend solutions.
        </p>
        <p className="mt-4 text-md md:text-xl font-mono">
          Beyond coding, I thrive on solving complex problems and staying up-to-date with the latest web technologies. 
          Whether it’s developing real-time applications, optimizing performance, or experimenting with new frameworks, 
          I’m always eager to push boundaries.
        </p>
        <p className="mt-4 text-xl font-semibold text-green-400 animate-pulse">
          Let’s connect and build something amazing!
        </p>
      </div>

      <div id="Contact"className="ml-9 ">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-400">Contact Me</h2>
        <form action="" className="flex flex-col gap-6 border-white rounded-4xl ">
        <input type="text" placeholder="Your Name" className="border-white py-2 px-3" />
        <input type="email" placeholder="Your Email"  className="border-white py-2 px-3"/>
        <textarea name="" id="" placeholder="Your Comment" className="border-white py-2 px-3"></textarea>
        <button className="border border-white bg-orange-500 font-bold text-white px-4 py-2 rounded-2xl max-w-sm ">Ask Me</button>
        </form>
      </div>
      </div>
    </section>

  );
}

export default About;
