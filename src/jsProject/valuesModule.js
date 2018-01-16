/* 
 *  Project: jsProject 
 * 
 *  File: valuesModule.js
 * 
 *  Last revision: 10-03-2017
 * 
 * Purpose:  this module controls access to global values for the application
 *           the values are mutable declarations which have global scope    
 *           values are stored within a group
 *           the module will add the functions:
 *               addValue        create a new global value
 *               addValueList    create a list of global values
 *               getValue        get a value
 *               setValue        set a value
 *           to the jsProject Module
 * 
 * Usage:  
 *           jsProject.getValue( string name, string group )
 *           jsProject.addValueList( array[string id, misc value,..], string group )
 *           jsProject.getValue( string name, string group )
 *           jsProject.setValue( string name, string group, misc value )
 *
 *  Author: Pleisterman
 *  Web: www.pleisterman.nl 
 *  Mail: info@pleisterman.nl 
 *  GitHub: Pleisterman 
 * 
 *  Copyright (C) 2017 Pleisterman 
 *  GNU General Public License 3+ 
 *  see <http://www.gnu.org/licenses/>
 */

// create module function
( function( jsProject ){

    // FUNCTION: valuesModule( void ) void
    
    jsProject.valuesModule = function( ) {
        // PRIVATE:
        
        // MEMBERS
        var self = this;                                    // object: self
        self.MODULE = 'valuesModule';                       // string: module
        self.debugOn = false;                               // boolean: debug
        self.groups = {};                                   // json: groups
        // DONE MEMBERS
        
        // FUNCTIONS
        self.construct = function() {
        // FUNCTION: construct( void ) void
        
            // debug info
            self.debug( 'construct' );

            // add extensions 
            self.addApplicationsExtensions();
                        
        };
        self.addApplicationsExtensions = function( ){
        // FUNCTION: addApplicationsExtensions( void ) void
        
            // add functions to application 
            jsProject.addValue = self.addValue;
            jsProject.addValueList = self.addValueList;
            jsProject.getValue = self.getValue;
            jsProject.setValue = self.setValue;
            // done add functions to application 
            
        // DONE FUNCTION: addApplicationsExtensions( void ) void
        };
        // add a value according to id
        self.addValue = function( id, group, value ) {
        // FUNCTION: addValue( string: value, string: group, json: value ) void
        
            // debug info
            self.debug( 'addValue: ' + 'id:' + id + ', group, :' + group + ', value:' + value );
            
            // check if the group exists
            if( self.groups[group] === undefined ){
                // create the group
                self.groups[group] = {};
            }    
            // value exists
            if( self.groups[group][id] !== undefined ){
                // debug info
                self.debug( 'add value warning value already exists id: ' +  id );
            }
            else {
                // add the value
                self.groups[group][id] = value;
            }
            // done value exists
            
        // DONE FUNCTION: addValue( string: value, string: group, json: value ) void
        };
        self.addValueList = function( valueList, group ) {
        // FUNCTION: addValueList( json: valueList, string: group ) void
        
            // debug info
            self.debug( 'addValueList: group, :' + group );
            
            // loop over valueList
            for ( var key in valueList ) {
                // add value
                self.addValue( key, group, valueList[key] );
            }                
            // done loop over valueList
            
        // DONE FUNCTION: addValueList( json: valueList, string: group ) void
        };
        self.getValue = function( id, group ) {
        // FUNCTION: getValue( string: id, string: group ) var
            
            // debug info
            self.debug( 'getValue: ' + 'id:' + id + ', group, :' + group );
            
            // id exists
            if( self.groups[group][id] !== undefined ){
                // return the value
                return self.groups[group][id];
            }
            // done id exists
            
            // debug info
            self.debug( 'get value error value not found id: ' +  id );
            
            // done with error
            return false;
            
        // DONE FUNCTION: getValue( string: id, string: group ) var
        };
        self.setValue = function( id, group, value ) {
        // FUNCTION: setValue( string: id, string: group, var: value ) void
        
            // debug info
            self.debug( 'setValue: ' + 'id:' + id + ', group, :' + group + ', value:' + value );
            // check if the value existst
            if( self.groups[group][id] !== undefined ){
                // set the value
                self.groups[group][id] = value;
            }
            // value not found error
            else if( self.debugOn ) {
                // debug info
                self.debug( 'set value error value not found id: ' +  id );
            }
            
        // DONE FUNCTION: setValue( string: id, string: group, var: value ) void
        };
        self.debug = function( message ) {
        // FUNCTION: debug( string: message ) void
            
            // debug on
            if( self.debugOn ) {
                // call global debug
                jsProject.debug( self.FUNCTION + ' ' + message );
            }
            // done debug on
            
        // DONE FUNCTION: debug( string: message ) void
        };
        // DONE FUNCTIONS

        // initialize the class 
        self.construct();
        // DONE PRIVATE
        
        // PUBLIC
        return {
        };
        // DONE PUBLIC
    };
    // DONE FUNCTION: valuesModule( void ) void 
})( jsProject );
// done create module function
