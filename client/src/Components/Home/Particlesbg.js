import React from 'react';

import Particles from "react-tsparticles";
const particlebackground = ()=>{
    const particlesInit = (main) => {
        //console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      };
    
      const particlesLoaded = (container) => {
        //console.log(container);
      };
    
    return (
      <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#04052E",
          },
        },
        fpsLimit: 30,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "top-left",
            enable: true,
            outMode: "out",
            random: false,
            speed: 5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 700,
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
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
    )
}
export default particlebackground;


{/* <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#04052E",
          },
        },
        fpsLimit: 30,
        interactivity: {
          events: {
            onClick: {
              enable:false,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          number: {
              value: 80,
              density: {
                  enable: true,
                  value_area: 800
              }
          },
          color: {
              value: "#418fb5"
          },
          shape: {
              type: "circle",
              stroke: {
                  width: 0,
                  color: "#000000"
              },
              polygon: {
                  nb_sides: 5
              },
              image: {
                  src: "img/github.svg",
                  width: 100,
                  height: 100
              }
          },
          opacity: {
              value: 1,
              random: false,
              anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false
              }
          },
          size: {
              value: 5,
              random: false,
              anim: {
                  enable: false,
                  speed: 40,
                  size_min: 0.1,
                  sync: false
              }
          },
          line_linked: {
              enable: true,
              distance: 150,
              color: "#2436db",
              opacity: 1,
              width: 3
          },
          move: {
              enable: true,
              speed: 3,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200
              }
          }
      },
        detectRetina: true,
      }}
    /> */}