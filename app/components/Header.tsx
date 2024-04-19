import React from "react";
import Image from "next/image";
import Container from "./styled/Container";

const Header = () => {
  return (
    <Container>
      <Image
        src="/pokemon-logo.png"
        alt="pokemon-logo"
        width={200}
        height={60}
      />
    </Container>
  );
};

export default Header;
