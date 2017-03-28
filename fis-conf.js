//var static_path = '/actPlatform_v0.3/';
var static_path = '//';
//md5
fis.match('*.{js,css,gif}', {
    useHash: true // 开启 md5 戳
});
//图片合并
fis.match('::package', {
    spriter: fis.plugin('csssprites')
});
// 对 CSS 进行图片合并
fis.match('*.css', {
    // 给匹配到的文件分配属性 `useSprite`
    useSprite: true
});
fis.match('*.js', {
    // fis-optimizer-uglify-js 插件进行压缩，已内置
    optimizer: fis.plugin('uglify-js')
});

fis.match('*.css', {
    // fis-optimizer-clean-css 插件进行压缩，已内置
    optimizer: fis.plugin('clean-css')
});
fis.match('*.png', {
    // fis-optimizer-png-compressor 插件进行压缩，已内置
    optimizer: fis.plugin('png-compressor')
});
fis.match('*', {
    release: static_path + '$0'
});
fis.match('::package', {
    postpackager: fis.plugin('loader', {
        allInOne: true
    })
});
fis.match('*.less', {
    parser: fis.plugin('less'),
    rExt: '.css',
    optimizer: fis.plugin('clean-css'),
    useSprite: true,
    useHash: true // 开启 md5 戳
});

fis.media('debug').match('*.less', {
    parser: fis.plugin('less'),
    rExt: '.css',
    optimizer: null,
    useSprite: false
});

fis.media('debug').match('*.{js,css,png}', {
    useHash: false,
    useSprite: false,
    optimizer: null
});
fis.media('debug').match('::package', {
    postpackager: fis.plugin('loader', {
        allInOne: false
    })
});
