modules.define('progressbar', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {

    setVal: function(val) {
        if (!val) val = 0;
        if (val < 0) val = 0;
        if (val > 100) val = 100;
        this.elem('progress').css('width', val + '%');
    }

}, {

    live: true

}))

});
