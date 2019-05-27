'use strict';
const path = require('path');

const colors = {
  red: '#DC0E1C',
  red2: '#FC0E1C',
  white: '#FFF',
};

function getImagePath() {
  const background = path.resolve(__dirname, 'backgrounds/iacc.png');
  if (process.platform === 'win32') {
    return background.replace(/\\/g, '/');
  }
  return background;
}

exports.decorateConfig = (config) => {
  // Background
  const imagePath = getImagePath();
  const themeBackground = `url("file://${imagePath}") bottom right no-repeat;`;

  return Object.assign({}, config, {
    borderColor: colors.red,
    cursorColor: colors.red,
    css: `
      ${config.css || ''}
      .header_shape, .header_appTitle {
        color: ${colors.white};
      }
      .header_header, .header_windowHeader {
        background-color: ${colors.red} !important;
      }

      .tabs_nav .tabs_list .tab_textInner {
        color: ${colors.white};
      }

      .tabs_nav .tabs_list .tab_active {
        background: ${colors.red2};
      }

      .tabs_nav .tabs_list .tab_active .tab_textInner {
        font-weight: bold;
      }

      .tabs_nav .tabs_title {
        color: ${colors.red};
      }

      .xterm-screen canvas {
        background: ${themeBackground} white;
        background-size: 20%;
      }
    `
  });
}
