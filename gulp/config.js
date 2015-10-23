var dist = 'dist/',
    app = 'app/',
    npm = 'node_modules/';

module.exports = {
  paths: {
    project: './',
    dist: {
      html: dist,
      styles: dist + 'css',
      js: dist + 'js',
      images: dist + 'images',
      fonts: dist + 'fonts',
      resources: dist
    },
    app: {
      html: app + 'pages/*.jade',
      jade: [
          app + 'pages/*.jade',
          app + 'components/**/*.jade'
      ],
      styles: [
          npm + 'reset.css/reset.css',
          app + 'components/**/*.css'
      ],
      scripts: app + 'components/**/*.js',
      js: npm + 'jquery/dist/jquery.min.js',
      images: [
        app + 'components/**/*.{png,jpeg,jpg,svg}',
        '!./app/components/font/**/*.svg'
      ],
      fonts: [
        app + 'components/**/*.{eot,ttf,woff,woff2,svg}'
      ],
      resources: app + 'resources/**/*'
    }
  }
};
