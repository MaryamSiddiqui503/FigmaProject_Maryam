import Link from "next/link";
const links = ["Home", "Shop", "Blog", "Contact"];

export default function Header() {
  return (
    <div className=" bg-white-100 flex justify-between items-center gap-[10px]  border-2 border-black  w-1440 h-100 text-center text-black">
      
         {/* logo */}
        
          <img src="/logo.jpg" alt="logo" />
          <h1 className="text-black flex h-41 w-130 font-black text-1xl">
            Furniro
          </h1>
        
         
          <ul className="flex justify-between items-center gap-10 list-none text-black">
            {links.map((link) => (
              <li key={link}>
                <a href="/">{link}</a>
              </li>
            ))}
          </ul>
          <ul className="flex justify-between list-none">
            <li className="w-28 h-28">
              <img src="/users.jpg" />
            </li>
            <li className="w-28 h-28">
              <img src="/search.jpg" />
            </li>
            <li className="w-28 h-28">
              <img src="/heart.jpg" />
            </li>
            <li className="w-28 h-28">
              <img src="/cart.jpg" />
            </li>
          </ul>
         
      
    </div>
  );
}
