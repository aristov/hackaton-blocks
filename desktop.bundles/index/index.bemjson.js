({
    block : 'page',
    title : 'Title of the page',
    favicon : '/favicon.ico',
    head : [
        { elem : 'meta', attrs : { name : 'description', content : '' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
        { elem : 'css', url : '_index.css' }
    ],
    scripts: [
        { elem : 'js', url : '_index.js' },
        { elem : 'js', url : 'index.bemhtml.js' }
    ],
    mods : { theme : 'islands' },
    content : [
        /*{
            block: 'progressbar',
            progress: 25
        }*/
        /*{
            block: 'dragndrop'
        }*/
        {
            block: 'calendar',
            year: 2014,
            month: 11,
            date: 8
        }
    ]
})
