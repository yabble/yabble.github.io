/*global block*/
block('metrika').replace()(function() {
    return [
        {
            tag: 'script',
            content: 'Metrika.init(' + this.ctx.metrikaId + ')'
        },
        {
            tag: 'noscript',
            content: {
                tag: 'img',
                attrs: {
                    src: 'https://mc.yandex.ru/watch/' + this.ctx.metrikaId,
                    style: 'position:absolute; left:-9999px;',
                    alt: ''
                }
            }
        }
    ];
});
