var npm = 'node_modules/';

module.exports = {

  dist: 'dist',
  css: 'dist/css',
  js: 'dist/js',
  fonts: 'dist/fonts',
  images: 'dist/images',

  styles: [

   'app/components/**/*.css',

    npm + 'reset.css/reset.css'

  ],

  nodeModules: [

    npm + 'jquery/dist/jquery.min.js'

  ]

};
