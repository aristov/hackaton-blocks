modules.define('dragndrop', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {

    onSetMod: {
        js: {
            inited: function() {
                var domNode = this.domElem[0];

                this.domElem
                    .css('top', this._top = domNode.offsetTop)
                    .css('left', this._left = domNode.offsetLeft);
            }
        }
    },

    _onMouseDown: function(e) {
        this._cursorY = e.pageY;
        this._cursorX = e.pageX;

        this.bindToDoc('mousemove', this._onMouseMove);
        this.bindToDoc('mouseup', this._onMouseUp);
        this.setMod('drag');
    },

    _onMouseMove: function(e) {
        this.domElem
            .css('top', this._top + e.pageY - this._cursorY)
            .css('left', this._left + e.pageX - this._cursorX);
    },

    _onMouseUp: function() {
        var domNode = this.domElem[0];

        this._top = domNode.offsetTop;
        this._left = domNode.offsetLeft;

        this.unbindFromDoc('mousemove', this._onMouseMove);
        this.unbindFromDoc('mouseup', this._onMouseUp);
        this.delMod('drag');
    }

}, {

    live: function() {
        this.liveBindTo('mousedown', this.prototype._onMouseDown);
    }

}))

});
