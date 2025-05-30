export default function RGBButton({ text = "Contact Me", href = "#contact" }) {
    return (
      <a
        href={href}
        className="relative inline-block px-6 py-3 text-white font-semibold rounded-full bg-black group"
      >
        <span className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 bg-[length:300%_300%] animate-rgb border-0 group-hover:blur-sm transition-all duration-300"></span>
        <span className="relative z-10 block bg-black rounded-full px-6 py-3">
          {text}
        </span>
      </a>
    );
  }
  