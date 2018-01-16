/* 
 *  Project: jsProject 
 * 
 *  File: eventsModule.js
 * 
 *  Last revision: 10-03-2017
 * 
 * Purpose:  
 *          this module controls custom events for the application 
 *          application objects can subscribe to an event with a callback 
 *          application objects can call events and subscribed object's callbacks will be called
 *          events are called synchronious in order of addition
 *          application objects can unsubscribe from events
 *           
 * Usage:    
 *          to add an event subscription: call jsProject.subscribeToEvent( eventId, callback );
 *          to remove an added event subscription: call jsProject.unSubscribeFromEvent( eventId, callback );
 *          call all subscribed events: call jsProject.callEvent( eventId );
 *      
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

    // FUNCTION: eventsModule( void ) void
    
    jsProject.eventsModule = function( ) {
        // PRIVATE:
        
        // MEMBERS
        var self = this;                                    // object: self
        self.MODULE = 'eventsModule';                       // string: module
        self.debugOn = false;                                // boolean: debug
        self.events = {};                                   // json: events
        // DONE MEMBERS
        
        // FUNCTIONS
        self.construct = function() {
        // FUNCTION: construct( void ) void
        
            self.debug( 'construct ' );
             
            // add extensions 
            self.addApplicationsExtensions();

        // DONE FUNCTION: construct( void ) void
        };
        self.addApplicationsExtensions = function( ){
        // FUNCTION: addApplicationsExtensions( void ) void
        
            // add the functions to jsProject
            jsProject.subscribeToEvent = self.subscribe;
            jsProject.unSubscribeFromEvent = self.unSubscribe;
            jsProject.callEvent = self.call;
            // done add the functions to jsProject
            
        // DONE FUNCTION: addApplicationsExtensions( void ) void
        };
        self.subscribe = function( eventId, callback ) {
        // FUNCTION: subscribe( string: eventId, function: callback ) void
        
            self.debug( 'subscribe: '  + eventId );
            // check if the eventId exists
            if( !self.events[eventId] ){
                // no event so create a new callback list
                self.events[eventId] = new Array();
            }
            // add the callback to the list
            var eventObject = {
                'callback'  :   callback
            };
            self.events[eventId].push( eventObject );

        // DONE FUNCTION: subscribe( string: eventId, function: callback ) void
        };
        self.unSubscribe = function( eventId, callback ) {
        // FUNCTION: unSubscribe( string: eventId, function: callback ) void
        
            self.debug( 'unSubscribe: ' + eventId );
            // check if the eventId exists
            if( self.events[eventId] ){
                for( var i = self.events[eventId].length - 1; i >= 0 ; i-- ) {
                    // check if the callback matches
                    if( self.events[eventId][i]['callback'] === callback ) {
                        // remove the callback from the list 
                        self.events[eventId].splice( i, 1 );
                    }
                }
            }

        // DONE FUNCTION: unSubscribe( string: eventId, function: callback ) void
        };
        self.call = function( eventId, options ) {
        // FUNCTION: call( string: eventId, json: options ) void
        
            self.debug( 'call: ' + eventId );
            // check if the eventId exists
            if( self.events[eventId] ){
                var callbacks = [];
                // call the callbacks
                for( var i = 0; i < self.events[eventId].length; i++ ) {
                    callbacks.push( self.events[eventId][i]['callback'] );
                }
                for( var i = 0; i < callbacks.length; i++ ) {
                    callbacks[i]( options );
                }
            }

        // DONE FUNCTION: call( string: eventId, json: options ) void
        };
        self.debug = function( message ) {
        // FUNCTION: debug( string: message ) void
            
            // debug on
            if( self.debugOn ) {
                // call global debug
                jsProject.debug( self.MODULE + ' ' + message );
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
    // DONE MODULE: eventsModule( void ) void
})( jsProject );
// done create module function
