/* 
 *  Project: jsProject 
 * 
 *  File: debugModule.js
 * 
 *  Last revision: 10-03-2017
 * 
 * Purpose:  creates a debug screen and handles debug messages  
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

    // FUNCTION: debugModule( json: options ) void
    
    jsProject.debugModule = function( options ) {
        // PRIVATE:
        
        // MEMBERS
        var self = this;                                    // object: self
        self.MODULE = 'debugModule';                        // string: module
        self.debugOn = true;                                // boolean: debug
        self.options = options;                             // json: options
        self.lineCounter = 0;                               // integer: line counter
        // DONE MEMBERS
        
        // FUNCTIONS
        self.construct = function() {
        // FUNCTION: construct( void ) void
        
            // create the html for the window
            var html = '';
            // debug div
            html += '<div id="jsProjectDebugDiv" ';
                html += 'style="';
                    html += ' position:absolute; ';
                    html += ' top: ' + self.options['top'] + 'px; ';
                    html += ' left: ' + self.options['left'] + 'px;';
                    html += ' z-index: ' + self.options['zIndex'] + ';';
                    html += ' border: lightblue 1px groove; ';
                    html += ' border-radius: 5px; ';
                html += '"';
            html += '>';
                // drag handle
                html += '<div id="jsProjectDebugDivDragHandle" ';
                    html += 'style="';
                        html += ' cursor:move; ';
                        html += ' width:100%; ';
                        html += ' height:20px; ';
                        html += ' background-color:green; ';
                    html += '"';
                html += '>';
                
                html += '</div>';
                html += '<div id="jsProjectDebugDivContent" ';
                    html += 'style="';
                        html += ' line-height: 1.2em; ';
                        html += ' overflow: auto; ';
                        html += ' width: ' + self.options['width'] + 'px; ';
                        html += ' height: ' + self.options['height'] + 'px;';
                        html += ' background-color:black;color:white; ';
                    html += '"';
                html += '>';

                html += '</div>';
            html += '</div>';
            // done debug div
            $( document.body ).append( html );
            

            // add functions to application 
            jsProject.debug = self.debug;
            
                // add the drag events
            // store the className of the button div element
            $("#jsProjectDebugDivDragHandle" ).mouseenter( function( ){ self.dragHandleMouseIn(); } );
            $("#jsProjectDebugDivDragHandle" ).mouseout( function(){ self.dragHandleMouseOut(); } );
            $("#jsProjectDebugDivDragHandle" ).mousedown( function( event ){ self.dragHandleMouseClick( event ); } );

        // DONE FUNCTION: construct( void ) void
        };
        self.dragHandleMouseIn = function( ) {
        // FUNCTION: dragHandleMouseIn( void ) void
        
            //self.debug( ' over');
            $("#jsProjectDebugDivDragHandle" ).css('background-color', 'lightgreen' ); 

        // DONE FUNCTION: dragHandleMouseIn( void ) void
        };
        self.dragHandleMouseOut = function( ) {
        // FUNCTION: dragHandleMouseOut( void ) void
        
            //self.debug( ' out' );
            $("#jsProjectDebugDivDragHandle" ).css('background-color', 'green' ); 

        // DONE FUNCTION: dragHandleMouseOut( void ) void
        };
        self.dragHandleMouseClick = function( event ) {
        // FUNCTION: dragHandleMouseClick( event: event ) void
        
            //self.debug( ' down' );
            self.lastPosition = { 'x' : event.pageX, 'y' : event.pageY };
            
            $(document).on( 'mousemove', function( event ) { self.move( event ); } );
            $(document).on( 'mouseup', function( event ) { self.up( event ); } );

        // DONE FUNCTION: dragHandleMouseClick( event: event ) void
        };
        self.move = function( event ) {
        // FUNCTION: move( event: event ) void
        
            //self.debug( ' move' );
            self.positionChange = { 'x' : 0, 'y' : 0 };
            self.positionChange['y'] = self.lastPosition['y'] - event.pageY;
            self.positionChange['x'] = self.lastPosition['x'] - event.pageX;
            var newTop = parseFloat( $('#jsProjectDebugDiv').offset().top ) - parseFloat( self.positionChange['y'] ),
                newLeft = parseFloat( $('#jsProjectDebugDiv').offset().left ) - parseFloat( self.positionChange['x'] );
            if( newTop < 0 ){
                newTop = 0;
            } 
            if( newLeft < 0 ){
                newLeft = 0;
            } 
            
            $( '#jsProjectDebugDiv' ).css( 'top', newTop );
            $( '#jsProjectDebugDiv' ).css( 'left', newLeft );
            self.lastPosition = { 'x' : event.pageX, 'y' : event.pageY };

        // DONE FUNCTION: move( event: event ) void
        }; 
        self.up = function( event ) { 
        // FUNCTION: up( event: event ) void
        
            //self.debug( ' up' );
            $(document).off('mousemove');
            $(document).off('mouseup');

        // DONE FUNCTION: up( event: event ) void
        }; 
        self.active = function( active ) { 
        // FUNCTION: active( boolean: active ) void

            // show is true
            if( active ){
                // add message
                $( '#jsProjectDebugDivContent' ).prepend( jsProject.pad( self.lineCounter, '0', 2 ) + '-' + 'Debugger started' + '<br/>' );
                // line counter +1
                self.lineCounter++;
                // line counter max 9
                self.lineCounter %= 10; 
                // show debugger
                $( '#jsProjectDebugDivContent' ).show();
            }
            else {
                // add message
                $( '#jsProjectDebugDivContent' ).prepend( jsProject.pad( self.lineCounter, '0', 2 ) + '-' + 'Debugger stopped' + '<br/>' );
                // line counter +1
                self.lineCounter++;
                // line counter max 9
                self.lineCounter %= 10; 
                // hide debugger
                $( '#jsProjectDebugDivContent' ).hide();
            }
            // show is true
            
            // set debug on
            self.debugOn = active;   

        // DONE FUNCTION: active( boolean: active ) void
        }; 
        self.debug = function( message ){
        // FUNCTION: debug( string: message ) void
            
            // function prepends the message to the div
            if( self.debugOn ) {
                // prepend info
                $( '#jsProjectDebugDivContent' ).prepend( jsProject.pad( self.lineCounter, '0', 2 ) + '-' + message + '<br/>' );
                // line counter +1
                self.lineCounter++;
                // line counter max 9
                self.lineCounter %= 10; 
            }
            
        // DONE FUNCTION: debug( string: message ) void
        };
        // DONE FUNCTIONS

        // initialize the class 
        self.construct();
        // DONE PRIVATE
        
        // PUBLIC
        return {
            // function active( boolean: active ) void
            active : function( active ){
                // call internal
                self.active( active );
            }
        };
        // DONE PUBLIC
    };
    // DONE MODULE: debugModule( json: options ) void
})( jsProject );
// done create module function
