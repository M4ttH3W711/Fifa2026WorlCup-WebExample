import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#A885F2] text-black py-6 w-full mt-auto">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Redes sociales en fila horizontal */}
        <div className="flex items-center space-x-6">
          {/* Twitter */}
          <a
            href="https://x.com/?lang=es"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:scale-110 transition-transform"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
              <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
            </svg>
          </a>
          {/* Facebook */}
          <a
            href="https://www.facebook.com/?locale=es_LA"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:scale-110 transition-transform"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
            </svg>
          </a>
          {/* YouTube */}
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="hover:scale-110 transition-transform"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z" />
              <path d="M10 9l5 3l-5 3z" />
            </svg>
          </a>
          {/* LinkedIn */}
          <a
            href="https://mx.linkedin.com/?trk=guest_homepage-basic_nav-header-logo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:scale-110 transition-transform"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
              <path d="M8 11l0 5" />
              <path d="M8 8l0 .01" />
              <path d="M12 16l0 -5" />
              <path d="M16 16v-3a2 2 0 0 0 -4 0" />
            </svg>
          </a>
        </div>

        {/* Use cases */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Use cases</h3>
          <ul className="space-y-1">
            <li>UI design</li>
            <li>UX design</li>
            <li>Wireframing</li>
            <li>Diagramming</li>
            <li>Brainstorming</li>
            <li>Online whiteboard</li>
            <li>Team collaboration</li>
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Explore</h3>
          <ul className="space-y-1">
            <li>Design</li>
            <li>Prototyping</li>
            <li>Development features</li>
            <li>Design systems</li>
            <li>Collaboration features</li>
            <li>Design process</li>
            <li>FigJam</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Resources</h3>
          <ul className="space-y-1">
            <li>Blog</li>
            <li>Best practices</li>
            <li>Colors</li>
            <li>Color wheel</li>
            <li>Support</li>
            <li>Developers</li>
            <li>Resource library</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
