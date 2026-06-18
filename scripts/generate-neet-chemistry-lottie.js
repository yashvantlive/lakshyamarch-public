const fs = require('fs');
const path = require('path');

// Target file location
const targetDir = path.join(__dirname, '..', 'public', 'animations');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}
const targetPath = path.join(targetDir, 'neet-chemistry-booklet.json');

// Constants
const WIDTH = 800;
const HEIGHT = 800;
const TOTAL_FRAMES = 480; // 8 seconds at 60 FPS
const FPS = 60;

// Normalized Colors [R, G, B, A]
const COLOR_NAVY = [0.075, 0.114, 0.271, 1];   // #131D45
const COLOR_RED = [0.776, 0.157, 0.157, 1];    // #C62828
const COLOR_GOLD = [0.957, 0.773, 0.259, 1];   // #F4C542
const COLOR_WHITE = [1, 1, 1, 1];              // #FFFFFF
const COLOR_GREEN = [0.063, 0.725, 0.506, 1];  // #10B981
const COLOR_BLACK = [0, 0, 0, 1];              // #000000
const COLOR_LIGHT_BLUE = [0.859, 0.902, 0.996, 0.15]; // brandBlue[100] with low opacity

// Helper function to create a solid shape fill
const createFill = (color) => ({
  ty: 'fl',
  c: { a: 0, k: color.slice(0, 3), ix: 4 },
  o: { a: 0, k: color[3] * 100, ix: 5 },
  r: 1,
  nm: 'Fill'
});

// Helper function to create a stroke
const createStroke = (color, width, dash = null) => {
  const stroke = {
    ty: 'st',
    c: { a: 0, k: color.slice(0, 3), ix: 3 },
    o: { a: 0, k: color[3] * 100, ix: 4 },
    w: { a: 0, k: width, ix: 5 },
    lc: 2,
    lj: 2,
    ml: 4,
    nm: 'Stroke'
  };
  if (dash) {
    stroke.d = [
      { n: 'dash', nm: 'dash', v: { a: 0, k: dash } },
      { n: 'gap', nm: 'gap', v: { a: 0, k: dash } }
    ];
  }
  return stroke;
};

// Helper for Lottie keyframes
const createStaticProp = (val) => ({ a: 0, k: val });

// Helper to generate animated position keyframes for floating book
const generateFloatingPosition = (baseX, baseY, amp, duration) => {
  const keyframes = [];
  for (let i = 0; i <= TOTAL_FRAMES; i += 24) {
    const angle = (i / duration) * 2 * Math.PI;
    const yOffset = amp * Math.sin(angle);
    keyframes.push({
      t: i,
      s: [baseX, baseY + yOffset, 0],
      e: [baseX, baseY + yOffset, 0]
    });
  }
  // Remove last frame's end property
  keyframes[keyframes.length - 1].e = undefined;
  return { a: 1, k: keyframes };
};

// Helper to generate animated rotation keyframes
const generateFloatingRotation = (baseRot, amp, duration) => {
  const keyframes = [];
  for (let i = 0; i <= TOTAL_FRAMES; i += 24) {
    const angle = (i / duration) * 2 * Math.PI;
    const rotOffset = amp * Math.sin(angle);
    keyframes.push({
      t: i,
      s: [baseRot + rotOffset],
      e: [baseRot + rotOffset]
    });
  }
  keyframes[keyframes.length - 1].e = undefined;
  return { a: 1, k: keyframes };
};

// Helper to generate keyframes for an electron orbiting on tilted ellipse
const generateOrbitPosition = (centerX, centerY, w, h, tiltDegrees, speedMultiplier = 1, startPhase = 0) => {
  const keyframes = [];
  const rad = tiltDegrees * Math.PI / 180;
  const cosT = Math.cos(rad);
  const sinT = Math.sin(rad);

  for (let t = 0; t <= TOTAL_FRAMES; t += 20) {
    const orbitAngle = (t / TOTAL_FRAMES) * 2 * Math.PI * speedMultiplier + startPhase;
    const ex = (w / 2) * Math.cos(orbitAngle);
    const ey = (h / 2) * Math.sin(orbitAngle);
    
    // Rotate coordinates
    const rx = ex * cosT - ey * sinT;
    const ry = ex * sinT + ey * cosT;
    
    keyframes.push({
      t: t,
      s: [centerX + rx, centerY + ry, 0],
      e: [centerX + rx, centerY + ry, 0]
    });
  }
  keyframes[keyframes.length - 1].e = undefined;
  return { a: 1, k: keyframes };
};

// Helper to generate bubble keyframes inside glassware
const generateBubbleKeyframes = (startX, startY, endY, delayFrames) => {
  const keyframes = [];
  const duration = 120; // 2 seconds
  for (let t = 0; t <= TOTAL_FRAMES; t += 24) {
    const lifetime = (t - delayFrames + TOTAL_FRAMES) % TOTAL_FRAMES;
    let pos = [startX, startY, 0];
    let opacity = 0;
    
    if (lifetime < duration) {
      const progress = lifetime / duration;
      const xOffset = 8 * Math.sin(progress * 4 * Math.PI);
      const currY = startY + (endY - startY) * progress;
      pos = [startX + xOffset, currY, 0];
      
      // Fade in and out
      if (progress < 0.2) {
        opacity = (progress / 0.2) * 80;
      } else if (progress > 0.8) {
        opacity = ((1 - progress) / 0.2) * 80;
      } else {
        opacity = 80;
      }
    }
    
    keyframes.push({
      t: t,
      s: pos,
      o: opacity,
      e: pos
    });
  }
  
  // Return separate position and opacity keyframe list
  const pKfs = keyframes.map(kf => ({ t: kf.t, s: kf.s, e: kf.s }));
  pKfs[pKfs.length - 1].e = undefined;

  const oKfs = keyframes.map(kf => ({ t: kf.t, s: [kf.o], e: [kf.o] }));
  oKfs[oKfs.length - 1].e = undefined;

  return { pos: { a: 1, k: pKfs }, opac: { a: 1, k: oKfs } };
};

// Create vector path for standard Glass Beaker
const getBeakerPathShape = (w, h) => {
  const halfW = w / 2;
  const halfH = h / 2;
  // Simple beaker with lip
  return {
    ty: 'sh',
    ks: createStaticProp({
      i: [[0,0], [0,0], [0,0], [0,0], [0,0], [0,0]],
      o: [[0,0], [0,0], [0,0], [0,0], [0,0], [0,0]],
      v: [
        [-halfW - 5, -halfH],
        [-halfW, -halfH],
        [-halfW, halfH],
        [halfW, halfH],
        [halfW, -halfH],
        [halfW + 5, -halfH]
      ],
      c: false
    }),
    nm: 'Beaker Outline'
  };
};

// Create vector path for Erlenmeyer Flask
const getFlaskPathShape = (w, h) => {
  const halfW = w / 2;
  const halfH = h / 2;
  const neckW = w * 0.25;
  const neckH = h * 0.35;
  return {
    ty: 'sh',
    ks: createStaticProp({
      i: [[0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0]],
      o: [[0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0]],
      v: [
        [-neckW - 3, -halfH],
        [-neckW, -halfH],
        [-neckW, -halfH + neckH],
        [-halfW, halfH],
        [halfW, halfH],
        [neckW, -halfH + neckH],
        [neckW, -halfH],
        [neckW + 3, -halfH]
      ],
      c: false
    }),
    nm: 'Flask Outline'
  };
};

// Create vector path for Booklet Wave Curve
const getWavePathShape = () => {
  // A gentle bezier wave curve going from left [-120, 20] to right [120, -10]
  return {
    ty: 'sh',
    ks: createStaticProp({
      i: [[0, 0], [-30, 15], [30, -15], [0, 0]],
      o: [[30, -15], [30, -15], [-30, 15], [0, 0]],
      v: [
        [-120, 25],
        [-40, 5],
        [40, 15],
        [120, -15]
      ],
      c: false
    }),
    nm: 'Wave Divider'
  };
};

// Assemble the Lottie JSON
const lottieJson = {
  v: '5.7.5',
  fr: FPS,
  ip: 0,
  op: TOTAL_FRAMES,
  w: WIDTH,
  h: HEIGHT,
  nm: 'NEET Chemistry Booklet',
// Removed assets array

  layers: [
    // ----------------------------------------------------
    // LAYER 0: Ambient Background Glow
    // ----------------------------------------------------
    {
      ty: 4,
      ind: 1,
      nm: 'Background Glow',
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            { t: 0, s: [30], e: [30] },
            { t: 120, s: [45], e: [45] },
            { t: 240, s: [30], e: [30] },
            { t: 360, s: [45], e: [45] },
            { t: 480, s: [30] }
          ]
        },
        r: createStaticProp(0),
        p: createStaticProp([400, 400, 0]),
        a: createStaticProp([0, 0, 0]),
        s: {
          a: 1,
          k: [
            { t: 0, s: [100, 100, 100], e: [100, 100, 100] },
            { t: 240, s: [115, 115, 100], e: [115, 115, 100] },
            { t: 480, s: [100, 100, 100] }
          ]
        }
      },
      shapes: [
        {
          ty: 'gr',
          nm: 'Glow Circle',
          it: [
            {
              ty: 'el',
              s: createStaticProp([450, 450]),
              p: createStaticProp([0, 0]),
              nm: 'Ellipse'
            },
            createFill([0.075, 0.25, 0.8, 0.45]), // Soft blue glow
            {
              ty: 'tr',
              p: createStaticProp([0, 0]),
              a: createStaticProp([0, 0]),
              s: createStaticProp([100, 100]),
              r: createStaticProp(0),
              o: createStaticProp(100)
            }
          ]
        }
      ],
      ip: 0,
      op: TOTAL_FRAMES
    },

    // ----------------------------------------------------
    // LAYER 1: Background Glassware Left (Flask)
    // ----------------------------------------------------
    {
      ty: 4,
      ind: 2,
      nm: 'Glassware Flask Left',
      sr: 1,
      ks: {
        o: createStaticProp(100),
        r: generateFloatingRotation(-10, 4, 480),
        p: generateFloatingPosition(180, 420, 20, 480),
        a: createStaticProp([0, 0, 0]),
        s: createStaticProp([100, 100, 100])
      },
      shapes: [
        {
          ty: 'gr',
          nm: 'Flask',
          it: [
            getFlaskPathShape(80, 120),
            createStroke(COLOR_LIGHT_BLUE, 3),
            {
              ty: 'tr',
              p: createStaticProp([0, 0]),
              a: createStaticProp([0, 0]),
              s: createStaticProp([100, 100]),
              r: createStaticProp(0),
              o: createStaticProp(100)
            }
          ]
        }
      ],
      ip: 0,
      op: TOTAL_FRAMES
    },

    // ----------------------------------------------------
    // LAYER 2: Background Glassware Right (Beaker)
    // ----------------------------------------------------
    {
      ty: 4,
      ind: 3,
      nm: 'Glassware Beaker Right',
      sr: 1,
      ks: {
        o: createStaticProp(100),
        r: generateFloatingRotation(8, 3, 240),
        p: generateFloatingPosition(620, 380, 15, 480),
        a: createStaticProp([0, 0, 0]),
        s: createStaticProp([100, 100, 100])
      },
      shapes: [
        {
          ty: 'gr',
          nm: 'Beaker',
          it: [
            getBeakerPathShape(70, 95),
            createStroke(COLOR_LIGHT_BLUE, 3),
            {
              ty: 'tr',
              p: createStaticProp([0, 0]),
              a: createStaticProp([0, 0]),
              s: createStaticProp([100, 100]),
              r: createStaticProp(0),
              o: createStaticProp(100)
            }
          ]
        }
      ],
      ip: 0,
      op: TOTAL_FRAMES
    },

    // ----------------------------------------------------
    // LAYERS 3-5: Rising Bubbles from Glassware Left
    // ----------------------------------------------------
    ...[0, 160, 320].map((delay, idx) => {
      const bubbles = generateBubbleKeyframes(180, 390, 250, delay);
      return {
        ty: 4,
        ind: 4 + idx,
        nm: `Bubble Left ${idx + 1}`,
        sr: 1,
        ks: {
          o: bubbles.opac,
          r: createStaticProp(0),
          p: bubbles.pos,
          a: createStaticProp([0, 0, 0]),
          s: createStaticProp([100, 100, 100])
        },
        shapes: [
          {
            ty: 'gr',
            nm: 'Bubble',
            it: [
              {
                ty: 'el',
                s: createStaticProp([6 + idx * 2, 6 + idx * 2]),
                p: createStaticProp([0, 0])
              },
              createStroke(COLOR_GOLD, 1.5),
              {
                ty: 'tr',
                p: createStaticProp([0, 0])
              }
            ]
          }
        ],
        ip: 0,
        op: TOTAL_FRAMES
      };
    }),

    // ----------------------------------------------------
    // LAYER 6: Orbiting Atom Path 1 (30 degrees)
    // ----------------------------------------------------
    {
      ty: 4,
      ind: 7,
      nm: 'Atom Path 1',
      sr: 1,
      ks: {
        o: createStaticProp(35),
        r: createStaticProp(30),
        p: createStaticProp([400, 400, 0]),
        a: createStaticProp([0, 0, 0]),
        s: createStaticProp([100, 100, 100])
      },
      shapes: [
        {
          ty: 'gr',
          nm: 'Orbit',
          it: [
            {
              ty: 'el',
              s: createStaticProp([360, 120]),
              p: createStaticProp([0, 0])
            },
            createStroke(COLOR_GOLD, 1.5, 6), // Gold dashed line
            {
              ty: 'tr',
              p: createStaticProp([0, 0])
            }
          ]
        }
      ],
      ip: 0,
      op: TOTAL_FRAMES
    },

    // ----------------------------------------------------
    // LAYER 7: Orbiting Atom Path 2 (-30 degrees)
    // ----------------------------------------------------
    {
      ty: 4,
      ind: 8,
      nm: 'Atom Path 2',
      sr: 1,
      ks: {
        o: createStaticProp(35),
        r: createStaticProp(-30),
        p: createStaticProp([400, 400, 0]),
        a: createStaticProp([0, 0, 0]),
        s: createStaticProp([100, 100, 100])
      },
      shapes: [
        {
          ty: 'gr',
          nm: 'Orbit',
          it: [
            {
              ty: 'el',
              s: createStaticProp([360, 120]),
              p: createStaticProp([0, 0])
            },
            createStroke(COLOR_WHITE, 1.5, 6), // White dashed line
            {
              ty: 'tr',
              p: createStaticProp([0, 0])
            }
          ]
        }
      ],
      ip: 0,
      op: TOTAL_FRAMES
    },

    // ----------------------------------------------------
    // LAYER 8: Orbiting Atom Path 3 (90 degrees)
    // ----------------------------------------------------
    {
      ty: 4,
      ind: 9,
      nm: 'Atom Path 3',
      sr: 1,
      ks: {
        o: createStaticProp(25),
        r: createStaticProp(90),
        p: createStaticProp([400, 400, 0]),
        a: createStaticProp([0, 0, 0]),
        s: createStaticProp([100, 100, 100])
      },
      shapes: [
        {
          ty: 'gr',
          nm: 'Orbit',
          it: [
            {
              ty: 'el',
              s: createStaticProp([360, 120]),
              p: createStaticProp([0, 0])
            },
            createStroke(COLOR_GOLD, 1.5, 8),
            {
              ty: 'tr',
              p: createStaticProp([0, 0])
            }
          ]
        }
      ],
      ip: 0,
      op: TOTAL_FRAMES
    },

    // ----------------------------------------------------
    // LAYERS 9-11: Orbiting Electrons
    // ----------------------------------------------------
    {
      ty: 4,
      ind: 10,
      nm: 'Electron 1',
      sr: 1,
      ks: {
        o: createStaticProp(100),
        r: createStaticProp(0),
        p: generateOrbitPosition(400, 400, 360, 120, 30, 1, 0),
        a: createStaticProp([0, 0, 0]),
        s: createStaticProp([100, 100, 100])
      },
      shapes: [
        {
          ty: 'gr',
          nm: 'Circle',
          it: [
            {
              ty: 'el',
              s: createStaticProp([12, 12]),
              p: createStaticProp([0, 0])
            },
            createFill(COLOR_GOLD),
            {
              ty: 'tr',
              p: createStaticProp([0, 0])
            }
          ]
        }
      ],
      ip: 0,
      op: TOTAL_FRAMES
    },
    {
      ty: 4,
      ind: 11,
      nm: 'Electron 2',
      sr: 1,
      ks: {
        o: createStaticProp(100),
        r: createStaticProp(0),
        p: generateOrbitPosition(400, 400, 360, 120, -30, 1, Math.PI), // offset by 180 degrees
        a: createStaticProp([0, 0, 0]),
        s: createStaticProp([100, 100, 100])
      },
      shapes: [
        {
          ty: 'gr',
          nm: 'Circle',
          it: [
            {
              ty: 'el',
              s: createStaticProp([12, 12]),
              p: createStaticProp([0, 0])
            },
            createFill(COLOR_WHITE),
            {
              ty: 'tr',
              p: createStaticProp([0, 0])
            }
          ]
        }
      ],
      ip: 0,
      op: TOTAL_FRAMES
    },
    {
      ty: 4,
      ind: 12,
      nm: 'Electron 3',
      sr: 1,
      ks: {
        o: createStaticProp(100),
        r: createStaticProp(0),
        p: generateOrbitPosition(400, 400, 360, 120, 90, 1.5, Math.PI / 2),
        a: createStaticProp([0, 0, 0]),
        s: createStaticProp([100, 100, 100])
      },
      shapes: [
        {
          ty: 'gr',
          nm: 'Circle',
          it: [
            {
              ty: 'el',
              s: createStaticProp([10, 10]),
              p: createStaticProp([0, 0])
            },
            createFill(COLOR_GOLD),
            {
              ty: 'tr',
              p: createStaticProp([0, 0])
            }
          ]
        }
      ],
      ip: 0,
      op: TOTAL_FRAMES
    },

    // ----------------------------------------------------
    // LAYER 12: Molecule Bonds Pulse
    // ----------------------------------------------------
    {
      ty: 4,
      ind: 13,
      nm: 'Molecule Cluster',
      sr: 1,
      ks: {
        o: createStaticProp(70),
        r: generateFloatingRotation(45, 10, 480),
        p: generateFloatingPosition(580, 200, 15, 480),
        a: createStaticProp([0, 0, 0]),
        s: {
          a: 1,
          k: [
            { t: 0, s: [90, 90, 100], e: [90, 90, 100] },
            { t: 240, s: [105, 105, 100], e: [105, 105, 100] },
            { t: 480, s: [90, 90, 100] }
          ]
        }
      },
      shapes: [
        {
          ty: 'gr',
          nm: 'Bonds',
          it: [
            // Center atom
            { ty: 'el', s: createStaticProp([20, 20]), p: createStaticProp([0, 0]), nm: 'Center' },
            createFill(COLOR_RED),
            
            // Branch 1 Path (Left-down)
            {
              ty: 'sh',
              ks: createStaticProp({
                i: [[0,0], [0,0]],
                o: [[0,0], [0,0]],
                v: [[0, 0], [-40, 30]],
                c: false
              }),
              nm: 'Bond 1'
            },
            // Branch 2 Path (Right-down)
            {
              ty: 'sh',
              ks: createStaticProp({
                i: [[0,0], [0,0]],
                o: [[0,0], [0,0]],
                v: [[0, 0], [40, 30]],
                c: false
              }),
              nm: 'Bond 2'
            },
            // Branch 3 Path (Up)
            {
              ty: 'sh',
              ks: createStaticProp({
                i: [[0,0], [0,0]],
                o: [[0,0], [0,0]],
                v: [[0, 0], [0, -50]],
                c: false
              }),
              nm: 'Bond 3'
            },
            createStroke(COLOR_WHITE, 2),

            // Outer atom 1 (Gold)
            { ty: 'el', s: createStaticProp([14, 14]), p: createStaticProp([-40, 30]), nm: 'Atom 1' },
            createFill(COLOR_GOLD),

            // Outer atom 2 (Gold)
            { ty: 'el', s: createStaticProp([14, 14]), p: createStaticProp([40, 30]), nm: 'Atom 2' },
            createFill(COLOR_GOLD),

            // Outer atom 3 (White)
            { ty: 'el', s: createStaticProp([16, 16]), p: createStaticProp([0, -50]), nm: 'Atom 3' },
            createFill(COLOR_WHITE),

            {
              ty: 'tr',
              p: createStaticProp([0, 0])
            }
          ]
        }
      ],
      ip: 0,
      op: TOTAL_FRAMES
    },

    // ----------------------------------------------------
    // LAYER 14: Soft Shadow Below Book
    // ----------------------------------------------------
    {
      ty: 4,
      ind: 15,
      nm: 'Book Soft Shadow',
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            { t: 0, s: [35], e: [35] },
            { t: 120, s: [20], e: [20] },
            { t: 240, s: [35], e: [35] },
            { t: 360, s: [20], e: [20] },
            { t: 480, s: [35] }
          ]
        },
        r: createStaticProp(0),
        p: createStaticProp([400, 600, 0]), // Positioned under the book
        a: createStaticProp([0, 0, 0]),
        s: {
          a: 1,
          k: [
            { t: 0, s: [100, 100, 100], e: [100, 100, 100] },
            { t: 120, s: [85, 85, 100], e: [85, 85, 100] },
            { t: 240, s: [100, 100, 100], e: [100, 100, 100] },
            { t: 360, s: [85, 85, 100], e: [85, 85, 100] },
            { t: 480, s: [100, 100, 100] }
          ]
        }
      },
      shapes: [
        {
          ty: 'gr',
          nm: 'Shadow Ellipse',
          it: [
            {
              ty: 'el',
              s: createStaticProp([200, 30]),
              p: createStaticProp([0, 0])
            },
            createFill([0.05, 0.05, 0.1, 0.8]), // Dark translucent shadow fill
            {
              ty: 'tr',
              p: createStaticProp([0, 0])
            }
          ]
        }
      ],
      ip: 0,
      op: TOTAL_FRAMES
    },

    // ----------------------------------------------------
    // LAYERS 15+: Foreground Particles
    // ----------------------------------------------------
    ...Array.from({ length: 14 }).map((_, idx) => {
      // Setup particles spaced across frame lifespan
      const delay = idx * 34; 
      const startX = 200 + (idx * 37) % 400; // distribute horizontal coordinates
      const startY = 550 - (idx * 13) % 100;  // vary vertical start positions
      const riseDist = 180 + (idx * 17) % 150; // rise distance
      const keyframes = [];

      for (let t = 0; t <= TOTAL_FRAMES; t += 30) {
        const lifetime = (t - delay + TOTAL_FRAMES) % TOTAL_FRAMES;
        let pos = [startX, startY, 0];
        let opacity = 0;

        if (lifetime < 240) {
          const progress = lifetime / 240;
          const xOffset = 25 * Math.sin(progress * 2 * Math.PI + idx);
          pos = [startX + xOffset, startY - progress * riseDist, 0];
          
          if (progress < 0.2) {
            opacity = (progress / 0.2) * 75;
          } else if (progress > 0.8) {
            opacity = ((1 - progress) / 0.2) * 75;
          } else {
            opacity = 75;
          }
        }

        keyframes.push({
          t: t,
          s: pos,
          o: opacity,
          e: pos
        });
      }

      const pKfs = keyframes.map(kf => ({ t: kf.t, s: kf.s, e: kf.s }));
      pKfs[pKfs.length - 1].e = undefined;

      const oKfs = keyframes.map(kf => ({ t: kf.t, s: [kf.o], e: [kf.o] }));
      oKfs[oKfs.length - 1].e = undefined;

      const pSize = 4 + (idx % 3) * 2; // size 4, 6, 8
      const pColor = idx % 2 === 0 ? COLOR_GOLD : COLOR_WHITE;

      return {
        ty: 4,
        ind: 16 + idx,
        nm: `Particle ${idx + 1}`,
        sr: 1,
        ks: {
          o: { a: 1, k: oKfs },
          r: createStaticProp(0),
          p: { a: 1, k: pKfs },
          a: createStaticProp([0, 0, 0]),
          s: createStaticProp([100, 100, 100])
        },
        shapes: [
          {
            ty: 'gr',
            nm: 'Glow Dot',
            it: [
              {
                ty: 'el',
                s: createStaticProp([pSize, pSize]),
                p: createStaticProp([0, 0])
              },
              createFill(pColor),
              {
                ty: 'tr',
                p: createStaticProp([0, 0])
              }
            ]
          }
        ],
        ip: 0,
        op: TOTAL_FRAMES
      };
    })
  ]
};

// Write output JSON
fs.writeFileSync(targetPath, JSON.stringify(lottieJson, null, 2));
console.log(`Lottie animation JSON generated successfully at: ${targetPath}`);
console.log(`File size: ${(fs.statSync(targetPath).size / 1024).toFixed(2)} KB`);
