import React, { useCallback } from "react";
import { Container } from "react-bootstrap";
import Particles from "react-tsparticles";
import Type from "./Type";
import { loadFull } from "tsparticles";

function Home() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.1,
                },
              },
            },
            particles: {
              color: {
                value: "#cfcfcf",
              },
              links: {
                color: "#808080",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                directions: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
        <h1
          style={{ paddingBottom: 15, paddingTop: 200, color: "white" }}
          className="heading"
        >
          Hey!
        </h1>

        <h1
          className="heading-name"
          style={{ textAlign: "center", color: "white" }}
        >
          I'm
          <strong className="main-name"> George Alexiou</strong>
        </h1>

        <div
          style={{
            textAlign: "center",
            paddingTop: 80,
            paddingBottom: 400,
          }}
        >
          <Type />
        </div>
      </Container>
    </section>
  );
}

export default Home;
