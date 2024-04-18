import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div>
      <Image
        src="/pokemon-logo.png"
        alt="pokemon-logo"
        width={200}
        height={60}
      />
    </div>
  );
};

export default Header;
