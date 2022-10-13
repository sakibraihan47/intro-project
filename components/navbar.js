import Link from "next/link";
import Image from "next/image";

import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/tree.png" width={60} height={60} />
      </div>

      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/reckless">
        <a>Products List</a>
      </Link>
      <Link href="/additem">
        <a>Post Item +</a>
      </Link>
      <div className="cart">
        <Link href="/cartpage">
          <FaShoppingCart />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
