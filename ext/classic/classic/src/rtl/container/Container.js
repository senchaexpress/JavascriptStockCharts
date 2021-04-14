Ext.define('Ext.rtl.container.Container', {
    override: 'Ext.container.Container',

    privates: {
        // Direction reversal here is necessary because right and left arrow
        // are not reversed in RTL like Tab, so pressing left arrow would move
        // focus to the right.
        moveChildFocus: function(e, forward) {
            var fwd = this.getInherited().rtl ? !forward : forward;

            return this.callParent([e, fwd]);
        }
    }
});
