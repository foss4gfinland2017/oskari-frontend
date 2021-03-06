
Oskari.clazz.define('Oskari.mapframework.publisher.tool.MapRotator',
function() {
}, {
  index : 500,
  allowedLocations : ['top left', 'top right'],
  lefthanded: 'top left',
  righthanded: 'top right',
  allowedSiblings : [],
  templates: {
      'toolOptions': '<div class="tool-options"></div>'
  },
  noUI: false,
/**
  * Get tool object.
  * @method getTool
  *
  * @returns {Object} tool description
  */
  getTool: function() {
      return {
          id: 'Oskari.mapping.maprotator.plugin.MapRotatorPlugin',
          title: 'MapRotator',
          config: {
              instance: this.getMapRotatorInstance()
          }
      };
  },
  isDisplayed: function() {
    // shouldn't be shown if bundle is not started
    // otherwise results in js errors
    return !!this.getMapRotatorInstance();
  },
  getMapRotatorInstance : function() {
    return this.__sandbox.findRegisteredModuleInstance(this.bundleName);
  },
  getPlugin: function(){
    var maprotator = this.getMapRotatorInstance() || {};
    return maprotator.plugin;
  },
  //Key in view config non-map-module-plugin tools (for returning the state when modifying an existing published map).
  bundleName: 'maprotator',
  /**
   * Initialise tool
   * @method init
   */
  init: function(data) {
      var me = this;
      if ( !data || !data.configuration[me.bundleName] ) {
          return;
      }

      me.setEnabled(true);
      var conf = data.configuration[me.bundleName].conf || {};
      me.noUI = !!conf.noUI;

  },
  /**
  * Set enabled.
  * @method setEnabled
  * @public
  *
  * @param {Boolean} enabled is tool enabled or not
  */
  setEnabled : function(enabled) {
      var me = this,
          tool = me.getTool(),
          request;

      me.state.enabled = enabled;
      if(tool.config.instance.plugin === null && enabled) {
        tool.config.instance.createPlugin(true, true);
        me.__started = true;
      }
      if(!enabled && me.__started){
        if(me.getMapRotatorInstance().plugin && !me.noUI){
            me.getMapRotatorInstance().stopPlugin();
        }
        me.__started = false;
      }
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
        var pluginConfig = this.getPlugin().getConfig();

          if(me.noUI) {
              pluginConfig.noUI = me.noUI;
          }
          var json = {
              configuration: {}
          };
          json.configuration[me.bundleName] = {
              conf: pluginConfig,
              state: {}
          };
          return json;
        } else {
          return null;
      }
  },
  /**
  * Get extra options.
  * @method @public getExtraOptions
  * @param {Object} jQuery element toolContainer
  * @return {Object} jQuery element template
  */
  getExtraOptions: function (toolContainer) {
    //CREATE CHECKBOX
    var me = this,
        template = jQuery(me.templates.toolOptions).clone(),
        loc = Oskari.getLocalization('maprotator', Oskari.getLang()),
        labelNoUI = loc.display.publisher.noUI;
    var input = Oskari.clazz.create(
        'Oskari.userinterface.component.CheckboxInput'
    );

    input.setTitle( labelNoUI );
    input.setHandler( function( checked ) {
        if(!me.getPlugin()){
            return;
        }
        if( checked === 'on' ){
            me.noUI = true;
            me.getPlugin().teardownUI();
        } else {
            me.noUI = false;
            me.getPlugin().redrawUI();
        }
    });
    input.setChecked(me.noUi);

    var inputEl = input.getElement();
    template.append(inputEl);
    return template;

  }
}, {
    'extend' : ['Oskari.mapframework.publisher.tool.AbstractPluginTool'],
    'protocol' : ['Oskari.mapframework.publisher.Tool']
});
