/**
 * @class Oskari.liikennevirasto.bundle.transport.selector.HideSelectionRequest
 * Requests a hide selection on map.
 *
 * Requests are build and sent through Oskari.Sandbox.
 * Oskari.mapframework.request.Request superclass documents how to send one.
 */
Oskari.clazz.define('Oskari.liikennevirasto.bundle.transport.selector.HideSelectionRequest',
/**
 * @method create called automatically on construction
 * @static
 */
function() {
}, {
	/** @static @property __name request name */
    __name : "HideSelectionRequest",
    /**
     * @method getName
     * @return {String} request name
     */
    getName : function() {
        return this.__name;
    }
}, {
	/**
     * @property {String[]} protocol array of superclasses as {String}
     * @static
     */
    'protocol' : ['Oskari.mapframework.request.Request']
});