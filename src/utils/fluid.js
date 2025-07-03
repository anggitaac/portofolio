// utils/fluid.js
export function initFluid(canvas) {
  import('webgl-fluid').then(({ default: createFluid }) => {
    createFluid(canvas, {
      BLOOM : false,
      TRIGGER: 'hover',
      IMMEDIATE: true,
      AUTO: false,
      TRANSPARENT: false,
      BACK_COLOR: {r:255,g:255,b:255}   ,
      SIM_RESOLUTION: 128,
      DYE_RESOLUTION: 1024,
      DENSITY_DISSIPATION: 1.2,
      VELOCITY_DISSIPATION: 4,
      PRESSURE: 0,
      CURL: 30,
      SPLAT_RADIUS: 0.2,
      SPLAT_FORCE: 8000,
      COLORFUL: true,
      COLOR_PALETTE: ['#ff6ec7', '#ffd700', '#00e5ff', '#a3ff00', '#ff3d00'],
    });
  });
}
