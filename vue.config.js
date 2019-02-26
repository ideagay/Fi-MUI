const path = require('path');
const md = require('markdown-it')();
const slugify = require('transliteration').slugify;
const striptags = require('./strip-tags');

var resolve = (dir) => {
    return path.join(__dirname, dir)
}
function convert(str) {
  str = str.replace(/(&#x)(\w{4});/gi, function($0) {
    return String.fromCharCode(parseInt(encodeURIComponent($0).replace(/(%26%23x)(\w{4})(%3B)/g, '$2'), 16));
  });
  return str;
}

function wrap(render) {
  return function() {
    return render.apply(this, arguments)
      .replace('<code v-pre class="', '<code class="hljs ')
      .replace('<code>', '<code class="hljs">');
  };
}

module.exports = {
    configureWebpack: {
        entry: './demos/main.js',
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                'vue$': 'vue/dist/vue.common.js',
                '@': resolve('demos'),
                'components': resolve('demos/components'),
            }
        }
    },
    chainWebpack: config => {
        config.module.rule('md')
          .test(/\.md/)
          .use('vue-loader')
          .loader('vue-loader')
          .end()
          .use('vue-markdown-loader')
          .loader('vue-markdown-loader/lib/markdown-compiler')
          .options({
            preventExtract: false,
            raw: true,
            preprocess: function(MarkdownIt, source) {
              MarkdownIt.renderer.rules.table_open = function() {
                return '<table class="table">';
              };
              MarkdownIt.renderer.rules.fence = wrap(MarkdownIt.renderer.rules.fence);
              return source;
            },
            use: [
              [require('markdown-it-anchor'), {
                level: 2,
                slugify: slugify
              }],
              [require('markdown-it-container'), 'demo', {
                validate: function(params) {
                  return params.trim().match(/^demo\s*(.*)$/);
                },
                render: function(tokens, idx) {
                  var m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
                  if (tokens[idx].nesting === 1) {
                    var description = (m && m.length > 1) ? m[1] : '';
                    var content = tokens[idx + 1].content;
                    var html = convert(striptags.strip(content, ['script', 'style'])).replace(/(<[^>]*)=""(?=.*>)/g, '$1');
                    var script = striptags.fetch(content, 'script');
                    var style = striptags.fetch(content, 'style');
                    var descriptionHTML = description
                      ? md.render(description)
                      : '';
                    return `<demo-block class="demo-box">
                              <div class="source" slot="source">${html}</div>
                              ${descriptionHTML}
                              <div class="highlight" slot="highlight">`;
                  }
                  return '</div></demo-block>\n';
                }
              }],
              [require('markdown-it-container'), 'tip'],
              [require('markdown-it-container'), 'warning']
            ]
          })
    }
  }