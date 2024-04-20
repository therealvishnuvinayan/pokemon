import React from "react";
import Image from "next/image";
import { Container } from "@radix-ui/themes";
import Link from "next/link";

const Header = () => {
  return (
    <Container>
      <Link href="/">
        <Image
          src="/pokemon-logo.png"
          alt="pokemon-logo"
          width={200}
          height={60}
        />
      </Link>
    </Container>
  );
};

export default Header;
