import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "<> Full-Stack Software Engineer </>",
          "<> Computer Science MEng Graduate </>",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 90,
      }}
    />
  );
}

export default Type;
