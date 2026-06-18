const fs = require('fs');
const path = require('path');

// Target directory
const targetDir = path.join(__dirname, '..', 'public', 'animations');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Configuration
const WIDTH = 800;
const HEIGHT = 800;
const TOTAL_FRAMES = 480; // 8 seconds at 60 FPS
const FPS = 60;

// Colors
const COLOR_NAVY = [0.075, 0.114, 0.271, 1];   // #131D45
const COLOR_RED = [0.776, 0.157, 0.157, 1];    // #C62828
const COLOR_GOLD = [0.957, 0.773, 0.259, 1];   // #F4C542
const COLOR_WHITE = [1, 1, 1, 1];              // #FFFFFF
const COLOR_GREEN = [0.063, 0.725, 0.506, 1];  // #10B981
const COLOR_BLUE = [0.078, 0.361, 0.902, 1];   // #145CE6
const COLOR_LIGHT_BLUE = [0.859, 0.902, 0.996, 0.15];

// Lottie Helper functions
const createFill = (color) => ({
  ty: 'fl',
  c: { a: 0, k: color.slice(0, 3), ix: 4 },
  o: { a: 0, k: color[3] * 100, ix: 5 },
  r: 1,
  nm: 'Fill'
});

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

const createStaticProp = (val) => ({ a: 0, k: val });

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
  keyframes[keyframes.length - 1].e = undefined;
  return { a: 1, k: keyframes };
};

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

const generateOrbitPosition = (centerX, centerY, w, h, tiltDegrees, speedMultiplier = 1, startPhase = 0) => {
  const keyframes = [];
  const rad = tiltDegrees * Math.PI / 180;
  const cosT = Math.cos(rad);
  const sinT = Math.sin(rad);

  for (let t = 0; t <= TOTAL_FRAMES; t += 20) {
    const orbitAngle = (t / TOTAL_FRAMES) * 2 * Math.PI * speedMultiplier + startPhase;
    const ex = (w / 2) * Math.cos(orbitAngle);
    const ey = (h / 2) * Math.sin(orbitAngle);
    
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

const generateBubbleKeyframes = (startX, startY, endY, delayFrames) => {
  const keyframes = [];
  const duration = 120;
  for (let t = 0; t <= TOTAL_FRAMES; t += 24) {
    const lifetime = (t - delayFrames + TOTAL_FRAMES) % TOTAL_FRAMES;
    let pos = [startX, startY, 0];
    let opacity = 0;
    
    if (lifetime < duration) {
      const progress = lifetime / duration;
      const xOffset = 8 * Math.sin(progress * 4 * Math.PI);
      const currY = startY + (endY - startY) * progress;
      pos = [startX + xOffset, currY, 0];
      
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
  
  const pKfs = keyframes.map(kf => ({ t: kf.t, s: kf.s, e: kf.s }));
  pKfs[pKfs.length - 1].e = undefined;

  const oKfs = keyframes.map(kf => ({ t: kf.t, s: [kf.o], e: [kf.o] }));
  oKfs[oKfs.length - 1].e = undefined;

  return { pos: { a: 1, k: pKfs }, opac: { a: 1, k: oKfs } };
};

// Shape outlines
const getBeakerPathShape = (w, h) => {
  const halfW = w / 2;
  const halfH = h / 2;
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

const getLeafPathShape = (w, h) => {
  return {
    ty: 'sh',
    ks: createStaticProp({
      i: [[-w * 0.4, h * 0.2], [-w * 0.4, -h * 0.2], [w * 0.4, -h * 0.2], [w * 0.4, h * 0.2]],
      o: [[w * 0.4, -h * 0.2], [w * 0.4, h * 0.2], [-w * 0.4, h * 0.2], [-w * 0.4, -h * 0.2]],
      v: [[0, -h], [w, 0], [0, h], [-w, 0]],
      c: true
    }),
    nm: 'Leaf Shape'
  };
};

// Generates Lottie JSON for a subject/exam combination
function generateLottie(subject, exam) {
  const isNEET = exam === 'NEET';
  const name = `${exam} ${subject} Booklet`;
  
  // Theme configuration
  let glowColor = [0.075, 0.25, 0.8, 0.45]; // blue default
  let particleAccentColor = COLOR_GOLD;
  
  if (subject === 'Chemistry') {
    glowColor = [0.776, 0.157, 0.157, 0.2]; // soft red glow
    particleAccentColor = COLOR_RED;
  } else if (subject === 'Physics') {
    glowColor = [0.078, 0.361, 0.902, 0.2]; // soft blue glow
    particleAccentColor = COLOR_BLUE;
  } else if (subject === 'Biology') {
    glowColor = [0.063, 0.725, 0.506, 0.2]; // soft green glow
    particleAccentColor = COLOR_GREEN;
  } else if (subject === 'Mathematics') {
    glowColor = [0.957, 0.773, 0.259, 0.15]; // soft gold glow
    particleAccentColor = COLOR_GOLD;
  }

  const layers = [];

  // 1. Background Glow Layer (common)
  layers.push({
    ty: 4,
    ind: 1,
    nm: 'Background Glow',
    sr: 1,
    ks: {
      o: createStaticProp(100),
      r: createStaticProp(0),
      p: createStaticProp([400, 400, 0]),
      a: createStaticProp([0, 0, 0]),
      s: createStaticProp([100, 100, 100])
    },
    shapes: [
      {
        ty: 'gr',
        nm: 'Glow Circle',
        it: [
          {
            ty: 'el',
            s: createStaticProp([500, 500]),
            p: createStaticProp([0, 0]),
            nm: 'Ellipse'
          },
          createFill(glowColor),
          {
            ty: 'tr',
            p: createStaticProp([0, 0])
          }
        ]
      }
    ],
    ip: 0,
    op: TOTAL_FRAMES
  });

  // 2. Subject Specific Core Illustrations (Left and Right background shapes)
  if (subject === 'Chemistry') {
    // Glassware left
    layers.push({
      ty: 4,
      ind: 2,
      nm: 'Flask Left',
      sr: 1,
      ks: {
        o: createStaticProp(80),
        r: generateFloatingRotation(-8, 3, 480),
        p: generateFloatingPosition(200, 420, 15, 480),
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
              p: createStaticProp([0, 0])
            }
          ]
        }
      ],
      ip: 0,
      op: TOTAL_FRAMES
    });

    // Glassware right
    layers.push({
      ty: 4,
      ind: 3,
      nm: 'Beaker Right',
      sr: 1,
      ks: {
        o: createStaticProp(80),
        r: generateFloatingRotation(6, 2.5, 360),
        p: generateFloatingPosition(600, 390, 12, 480),
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
              p: createStaticProp([0, 0])
            }
          ]
        }
      ],
      ip: 0,
      op: TOTAL_FRAMES
    });

    // Bubbles
    [0, 160, 320].map((delay, idx) => {
      const bubbles = generateBubbleKeyframes(200, 390, 260, delay);
      layers.push({
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
      });
    });

    // Chemistry molecule cluster
    layers.push({
      ty: 4,
      ind: 13,
      nm: 'Molecule Cluster',
      sr: 1,
      ks: {
        o: createStaticProp(75),
        r: generateFloatingRotation(30, 8, 480),
        p: generateFloatingPosition(560, 220, 15, 480),
        a: createStaticProp([0, 0, 0]),
        s: createStaticProp([90, 90, 100])
      },
      shapes: [
        {
          ty: 'gr',
          nm: 'Bonds',
          it: [
            { ty: 'el', s: createStaticProp([18, 18]), p: createStaticProp([0, 0]), nm: 'Center' },
            createFill(COLOR_RED),
            { ty: 'sh', ks: createStaticProp({ i: [[0,0], [0,0]], o: [[0,0], [0,0]], v: [[0, 0], [-35, 25]], c: false }), nm: 'Bond 1' },
            { ty: 'sh', ks: createStaticProp({ i: [[0,0], [0,0]], o: [[0,0], [0,0]], v: [[0, 0], [35, 25]], c: false }), nm: 'Bond 2' },
            { ty: 'sh', ks: createStaticProp({ i: [[0,0], [0,0]], o: [[0,0], [0,0]], v: [[0, 0], [0, -45]], c: false }), nm: 'Bond 3' },
            createStroke(COLOR_WHITE, 2),
            { ty: 'el', s: createStaticProp([12, 12]), p: createStaticProp([-35, 25]) },
            createFill(COLOR_GOLD),
            { ty: 'el', s: createStaticProp([12, 12]), p: createStaticProp([35, 25]) },
            createFill(COLOR_GOLD),
            { ty: 'el', s: createStaticProp([14, 14]), p: createStaticProp([0, -45]) },
            createFill(COLOR_WHITE),
            { ty: 'tr', p: createStaticProp([0, 0]) }
          ]
        }
      ],
      ip: 0,
      op: TOTAL_FRAMES
    });
  } 
  
  else if (subject === 'Physics') {
    // Left floating magnetic field loop
    layers.push({
      ty: 4,
      ind: 2,
      nm: 'Magnetic Field Left',
      sr: 1,
      ks: {
        o: createStaticProp(60),
        r: generateFloatingRotation(-20, 5, 480),
        p: generateFloatingPosition(190, 420, 15, 480),
        a: createStaticProp([0, 0, 0]),
        s: createStaticProp([100, 100, 100])
      },
      shapes: [
        {
          ty: 'gr',
          nm: 'Loops',
          it: [
            { ty: 'el', s: createStaticProp([100, 40]), p: createStaticProp([0, 0]) },
            { ty: 'el', s: createStaticProp([60, 24]), p: createStaticProp([0, 0]) },
            createStroke(COLOR_BLUE, 2, 4),
            { ty: 'tr', p: createStaticProp([0, 0]) }
          ]
        }
      ],
      ip: 0,
      op: TOTAL_FRAMES
    });

    // Right floating magnetic field loop
    layers.push({
      ty: 4,
      ind: 3,
      nm: 'Magnetic Field Right',
      sr: 1,
      ks: {
        o: createStaticProp(60),
        r: generateFloatingRotation(20, 5, 480),
        p: generateFloatingPosition(610, 390, 12, 480),
        a: createStaticProp([0, 0, 0]),
        s: createStaticProp([100, 100, 100])
      },
      shapes: [
        {
          ty: 'gr',
          nm: 'Loops',
          it: [
            { ty: 'el', s: createStaticProp([90, 36]), p: createStaticProp([0, 0]) },
            { ty: 'el', s: createStaticProp([50, 20]), p: createStaticProp([0, 0]) },
            createStroke(COLOR_WHITE, 2, 4),
            { ty: 'tr', p: createStaticProp([0, 0]) }
          ]
        }
      ],
      ip: 0,
      op: TOTAL_FRAMES
    });

    // Physics wave pulse illustration on top right
    layers.push({
      ty: 4,
      ind: 13,
      nm: 'Wave Pulse',
      sr: 1,
      ks: {
        o: createStaticProp(75),
        r: generateFloatingRotation(-10, 4, 360),
        p: generateFloatingPosition(580, 210, 15, 480),
        a: createStaticProp([0, 0, 0]),
        s: createStaticProp([100, 100, 100])
      },
      shapes: [
        {
          ty: 'gr',
          nm: 'Sine Wave',
          it: [
            {
              ty: 'sh',
              ks: createStaticProp({
                i: [[0, -20], [0, 20], [0, -20], [0, 20], [0, 0]],
                o: [[0, 20], [0, -20], [0, 20], [0, -20], [0, 0]],
                v: [[-60, 0], [-30, 25], [0, -25], [30, 25], [60, 0]],
                c: false
              }),
              nm: 'Sine Wave Line'
            },
            createStroke(COLOR_BLUE, 3),
            {
              ty: 'tr',
              p: createStaticProp([0, 0])
            }
          ]
        }
      ],
      ip: 0,
      op: TOTAL_FRAMES
    });
  } 
  
  else if (subject === 'Biology') {
    // Leaf outline left
    layers.push({
      ty: 4,
      ind: 2,
      nm: 'Leaf Illustration Left',
      sr: 1,
      ks: {
        o: createStaticProp(70),
        r: generateFloatingRotation(-35, 6, 480),
        p: generateFloatingPosition(210, 410, 12, 480),
        a: createStaticProp([0, 0, 0]),
        s: createStaticProp([100, 100, 100])
      },
      shapes: [
        {
          ty: 'gr',
          nm: 'Leaf',
          it: [
            getLeafPathShape(30, 50),
            createStroke(COLOR_GREEN, 2.5),
            {
              ty: 'tr',
              p: createStaticProp([0, 0])
            }
          ]
        }
      ],
      ip: 0,
      op: TOTAL_FRAMES
    });

    // Leaf outline right
    layers.push({
      ty: 4,
      ind: 3,
      nm: 'Leaf Illustration Right',
      sr: 1,
      ks: {
        o: createStaticProp(70),
        r: generateFloatingRotation(45, 8, 360),
        p: generateFloatingPosition(590, 400, 15, 480),
        a: createStaticProp([0, 0, 0]),
        s: createStaticProp([85, 85, 100])
      },
      shapes: [
        {
          ty: 'gr',
          nm: 'Leaf',
          it: [
            getLeafPathShape(25, 40),
            createStroke(COLOR_WHITE, 2),
            {
              ty: 'tr',
              p: createStaticProp([0, 0])
            }
          ]
        }
      ],
      ip: 0,
      op: TOTAL_FRAMES
    });

    // DNA helix strand top right
    layers.push({
      ty: 4,
      ind: 13,
      nm: 'DNA Helix Cluster',
      sr: 1,
      ks: {
        o: createStaticProp(80),
        r: generateFloatingRotation(15, 6, 480),
        p: generateFloatingPosition(570, 200, 15, 480),
        a: createStaticProp([0, 0, 0]),
        s: createStaticProp([100, 100, 100])
      },
      shapes: [
        {
          ty: 'gr',
          nm: 'DNA Strand',
          it: [
            // Sine Strand 1
            { ty: 'sh', ks: createStaticProp({ i: [[-10, 10], [10, -10], [-10, 10]], o: [[10, -10], [-10, 10], [10, -10]], v: [[-40, -15], [0, 15], [40, -15]], c: false }), nm: 'Strand 1' },
            createStroke(COLOR_GREEN, 2.5),
            // Sine Strand 2
            { ty: 'sh', ks: createStaticProp({ i: [[-10, -10], [10, 10], [-10, -10]], o: [[10, 10], [-10, -10], [10, 10]], v: [[-40, 15], [0, -15], [40, 15]], c: false }), nm: 'Strand 2' },
            createStroke(COLOR_WHITE, 2.5),
            // Rungs connecting
            { ty: 'sh', ks: createStaticProp({ i: [[0,0], [0,0]], o: [[0,0], [0,0]], v: [[-30, -11], [-30, 11]], c: false }) },
            { ty: 'sh', ks: createStaticProp({ i: [[0,0], [0,0]], o: [[0,0], [0,0]], v: [[-15, -3], [-15, 3]], c: false }) },
            { ty: 'sh', ks: createStaticProp({ i: [[0,0], [0,0]], o: [[0,0], [0,0]], v: [[0, -15], [0, 15]], c: false }) },
            { ty: 'sh', ks: createStaticProp({ i: [[0,0], [0,0]], o: [[0,0], [0,0]], v: [[15, -3], [15, 3]], c: false }) },
            { ty: 'sh', ks: createStaticProp({ i: [[0,0], [0,0]], o: [[0,0], [0,0]], v: [[30, -11], [30, 11]], c: false }) },
            createStroke(COLOR_GOLD, 2),
            { ty: 'tr', p: createStaticProp([0, 0]) }
          ]
        }
      ],
      ip: 0,
      op: TOTAL_FRAMES
    });
  } 
  
  else if (subject === 'Mathematics') {
    // Coordinate axis left
    layers.push({
      ty: 4,
      ind: 2,
      nm: 'Coordinate Axes Left',
      sr: 1,
      ks: {
        o: createStaticProp(60),
        r: generateFloatingRotation(5, 2, 480),
        p: generateFloatingPosition(190, 420, 10, 480),
        a: createStaticProp([0, 0, 0]),
        s: createStaticProp([100, 100, 100])
      },
      shapes: [
        {
          ty: 'gr',
          nm: 'Axes',
          it: [
            { ty: 'sh', ks: createStaticProp({ i: [[0,0], [0,0]], o: [[0,0], [0,0]], v: [[-40, 0], [40, 0]], c: false }), nm: 'X-Axis' },
            { ty: 'sh', ks: createStaticProp({ i: [[0,0], [0,0]], o: [[0,0], [0,0]], v: [[0, -40], [0, 40]], c: false }), nm: 'Y-Axis' },
            createStroke(COLOR_GOLD, 2),
            // Diagonal line representing linear graph
            { ty: 'sh', ks: createStaticProp({ i: [[0,0], [0,0]], o: [[0,0], [0,0]], v: [[-30, 25], [30, -25]], c: false }), nm: 'Line' },
            createStroke(COLOR_WHITE, 2.5),
            { ty: 'tr', p: createStaticProp([0, 0]) }
          ]
        }
      ],
      ip: 0,
      op: TOTAL_FRAMES
    });

    // Geometry triangle/angle shape right
    layers.push({
      ty: 4,
      ind: 3,
      nm: 'Geometry Triangle Right',
      sr: 1,
      ks: {
        o: createStaticProp(60),
        r: generateFloatingRotation(-10, 3, 360),
        p: generateFloatingPosition(610, 395, 12, 480),
        a: createStaticProp([0, 0, 0]),
        s: createStaticProp([100, 100, 100])
      },
      shapes: [
        {
          ty: 'gr',
          nm: 'Triangle',
          it: [
            { ty: 'sh', ks: createStaticProp({ i: [[0,0], [0,0], [0,0]], o: [[0,0], [0,0], [0,0]], v: [[-30, 25], [30, 25], [10, -25]], c: true }) },
            createStroke(COLOR_GOLD, 2),
            { ty: 'tr', p: createStaticProp([0, 0]) }
          ]
        }
      ],
      ip: 0,
      op: TOTAL_FRAMES
    });

    // Geometric 3D Cube top right
    layers.push({
      ty: 4,
      ind: 13,
      nm: '3D Cube Cluster',
      sr: 1,
      ks: {
        o: createStaticProp(75),
        r: generateFloatingRotation(30, 6, 480),
        p: generateFloatingPosition(570, 210, 15, 480),
        a: createStaticProp([0, 0, 0]),
        s: createStaticProp([100, 100, 100])
      },
      shapes: [
        {
          ty: 'gr',
          nm: 'Isometric Cube',
          it: [
            // Top face
            { ty: 'sh', ks: createStaticProp({ i: [[0,0], [0,0], [0,0], [0,0]], o: [[0,0], [0,0], [0,0], [0,0]], v: [[0, -25], [25, -12], [0, 0], [-25, -12]], c: true }), nm: 'Top' },
            createStroke(COLOR_WHITE, 2),
            // Left face
            { ty: 'sh', ks: createStaticProp({ i: [[0,0], [0,0], [0,0], [0,0]], o: [[0,0], [0,0], [0,0], [0,0]], v: [[-25, -12], [0, 0], [0, 25], [-25, 13]], c: true }), nm: 'Left' },
            createStroke(COLOR_GOLD, 2),
            // Right face
            { ty: 'sh', ks: createStaticProp({ i: [[0,0], [0,0], [0,0], [0,0]], o: [[0,0], [0,0], [0,0], [0,0]], v: [[0, 0], [25, -12], [25, 13], [0, 25]], c: true }), nm: 'Right' },
            createStroke(COLOR_WHITE, 2),
            { ty: 'tr', p: createStaticProp([0, 0]) }
          ]
        }
      ],
      ip: 0,
      op: TOTAL_FRAMES
    });
  }

  // 3. Atom Paths and Electrons (Only for Chemistry & Physics)
  if (subject === 'Chemistry' || subject === 'Physics') {
    // Atom Path 1 (30 degrees)
    layers.push({
      ty: 4,
      ind: 7,
      nm: 'Atom Path 1',
      sr: 1,
      ks: {
        o: createStaticProp(30),
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
            { ty: 'el', s: createStaticProp([360, 120]), p: createStaticProp([0, 0]) },
            createStroke(COLOR_GOLD, 1.5, 6),
            { ty: 'tr', p: createStaticProp([0, 0]) }
          ]
        }
      ],
      ip: 0,
      op: TOTAL_FRAMES
    });

    // Atom Path 2 (-30 degrees)
    layers.push({
      ty: 4,
      ind: 8,
      nm: 'Atom Path 2',
      sr: 1,
      ks: {
        o: createStaticProp(30),
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
            { ty: 'el', s: createStaticProp([360, 120]), p: createStaticProp([0, 0]) },
            createStroke(COLOR_WHITE, 1.5, 6),
            { ty: 'tr', p: createStaticProp([0, 0]) }
          ]
        }
      ],
      ip: 0,
      op: TOTAL_FRAMES
    });

    // Orbiting Electron 1
    layers.push({
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
            { ty: 'el', s: createStaticProp([10, 10]), p: createStaticProp([0, 0]) },
            createFill(COLOR_GOLD),
            { ty: 'tr', p: createStaticProp([0, 0]) }
          ]
        }
      ],
      ip: 0,
      op: TOTAL_FRAMES
    });

    // Orbiting Electron 2
    layers.push({
      ty: 4,
      ind: 11,
      nm: 'Electron 2',
      sr: 1,
      ks: {
        o: createStaticProp(100),
        r: createStaticProp(0),
        p: generateOrbitPosition(400, 400, 360, 120, -30, 1, Math.PI),
        a: createStaticProp([0, 0, 0]),
        s: createStaticProp([100, 100, 100])
      },
      shapes: [
        {
          ty: 'gr',
          nm: 'Circle',
          it: [
            { ty: 'el', s: createStaticProp([10, 10]), p: createStaticProp([0, 0]) },
            createFill(COLOR_WHITE),
            { ty: 'tr', p: createStaticProp([0, 0]) }
          ]
        }
      ],
      ip: 0,
      op: TOTAL_FRAMES
    });
  }

  // 4. Book Soft Shadow (under center book)
  layers.push({
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
      p: createStaticProp([400, 600, 0]),
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
          { ty: 'el', s: createStaticProp([200, 30]), p: createStaticProp([0, 0]) },
          createFill([0.05, 0.05, 0.1, 0.8]),
          { ty: 'tr', p: createStaticProp([0, 0]) }
        ]
      }
    ],
    ip: 0,
    op: TOTAL_FRAMES
  });

  // 5. Foreground Floating Glow Particles
  const particlesCount = 12;
  const particleLayers = Array.from({ length: particlesCount }).map((_, idx) => {
    const delay = idx * 40; 
    const startX = 220 + (idx * 31) % 360; 
    const startY = 560 - (idx * 17) % 120;  
    const riseDist = 160 + (idx * 19) % 140; 
    const keyframes = [];

    for (let t = 0; t <= TOTAL_FRAMES; t += 30) {
      const lifetime = (t - delay + TOTAL_FRAMES) % TOTAL_FRAMES;
      let pos = [startX, startY, 0];
      let opacity = 0;

      if (lifetime < 240) {
        const progress = lifetime / 240;
        const xOffset = 20 * Math.sin(progress * 2 * Math.PI + idx);
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

    const pSize = 4 + (idx % 3) * 2; 
    const pColor = idx % 2 === 0 ? particleAccentColor : COLOR_WHITE;

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
            { ty: 'el', s: createStaticProp([pSize, pSize]), p: createStaticProp([0, 0]) },
            createFill(pColor),
            { ty: 'tr', p: createStaticProp([0, 0]) }
          ]
        }
      ],
      ip: 0,
      op: TOTAL_FRAMES
    };
  });

  layers.push(...particleLayers);

  return {
    v: '5.7.5',
    fr: FPS,
    ip: 0,
    op: TOTAL_FRAMES,
    w: WIDTH,
    h: HEIGHT,
    nm: name,
    layers: layers
  };
}

// Generate files for all 6 variants
const runs = [
  { subject: 'Chemistry', exam: 'NEET', filename: 'neet-chemistry-booklet.json' },
  { subject: 'Physics', exam: 'NEET', filename: 'neet-physics-booklet.json' },
  { subject: 'Biology', exam: 'NEET', filename: 'neet-biology-booklet.json' },
  { subject: 'Chemistry', exam: 'IIT-JEE', filename: 'jee-chemistry-booklet.json' },
  { subject: 'Physics', exam: 'IIT-JEE', filename: 'jee-physics-booklet.json' },
  { subject: 'Mathematics', exam: 'IIT-JEE', filename: 'jee-maths-booklet.json' }
];

runs.forEach(run => {
  const json = generateLottie(run.subject, run.exam);
  const outPath = path.join(targetDir, run.filename);
  fs.writeFileSync(outPath, JSON.stringify(json, null, 2));
  console.log(`Generated Lottie for ${run.exam} ${run.subject} -> public/animations/${run.filename} (${(fs.statSync(outPath).size / 1024).toFixed(2)} KB)`);
});
