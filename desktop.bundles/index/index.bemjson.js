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
        { elem : 'js', url : '_index.js' }
    ],
    mods : { theme : 'islands' },
    content : [
        {
            block: 'calendar',
            year: 2014,
            month: 12,
            date: 7
        },
        /*{
            tag: 'input',
            attrs: { type: 'date' }
        }*/
        /*{
            block: 'input',
            mods: {
                theme: 'islands',
                size: 'xl',
                type: 'datepicker'
            }
        },
        {
            block: 'progressbar',
            progress: 25
        }*/
        {
            block: 'dragndrop'
        }
    ]
})
