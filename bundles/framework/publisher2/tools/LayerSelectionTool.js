Oskari.clazz.define('Oskari.mapframework.publisher.tool.LayerSelectionTool',
function() {
}, {
    index : 1,
    allowedLocations : ['bottom left', 'bottom right'],
    lefthanded: 'top right',
    righthanded: 'top left',
    allowedLocations: ['top left', 'top center', 'top right'],
    allowedSiblings: [
        'Oskari.mapframework.bundle.featuredata2.plugin.FeaturedataPlugin',
        'Oskari.mapframework.bundle.mapmodule.plugin.PublisherToolbarPlugin',
        'Oskari.mapframework.bundle.mapmodule.plugin.SearchPlugin'
    ],
    groupedSiblings: false,

    /**
    * Get tool object.
    * @method getTool
    *
    * @returns {Object} tool description
    */
    getTool: function(){
        return {
            id: 'Oskari.mapframework.bundle.mapmodule.plugin.LayerSelectionPlugin',
            name: 'LayerSelectionPlugin',
            config: {}
        };
    },
    /**
    * Get values.
    * @method getValues
    * @public
    *
    * @returns {Object} tool value object
    */
    getValues: function () {
        var me = this;

        if(me.state.enabled) {
            return {
                mapfull: {
                    conf: {
                        plugins: [{ id: this.getTool().id }]
                    }
                }
            };
        } else {
            return null;
        }
    }

/*
    ,
    isShownInToolsPanel: function() {
        return false
    }
*/    
}, {
    'extend' : ['Oskari.mapframework.publisher.tool.AbstractPluginTool'],
    'protocol' : ['Oskari.mapframework.publisher.Tool']
});