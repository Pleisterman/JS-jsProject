/* 
 *  Project: jsProject Examples
 * 
 *  File: layoutModule.js
 * 
 *  Purpose: 
 *      this module handles the layout
 *      it catches the window resize function and calls the 
 *      global event layoutChange
 *  
 *  Last Revision:  10-03-2017
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
( function( pleisterman ){

    // MODULE: layoutModule( pleisterman ) void
    
    pleisterman.layoutModule = function( ) {
        // PRIVATE:

        // MEMBERS:
        var self = this;                                        // object: self
        self.MODULE = 'layoutModule';                           // string: module
        self.debugOn = false;                                   // boolean: debugOn
        self.layoutOptions = {                                  // json: layoutOptions
            'id'                        :   pleisterman.getSetting( 'ids' )['layoutId'], // string: html element id
            'element'                   :   'div',              // string: html element type 
            'position'                  :   'absolute',         // css style position
            'top'                       :   0,                  // px: top 
            'left'                      :   0,                  // px: left
            'minimumWidth'              :   100,                // px: minimun width
            'minimumHeight'             :   100,                // px: minimum height
            'styleWidth'                :   '100%',             // css style width
            'backgroundColor'           :   pleisterman.getSetting( 'colors' )['commonBackgroundColor'],  // css color
            'zIndex'                    :   pleisterman.getSetting( 'zIndex' )['layout'].toString()      // integer: z index
        };                                                      // done json: layoutOptions
        // DONE MEMBERS

        // FUNCTIONS
        self.construct = function() {
        // FUNCTION: construct( void ) void
            
            // debug info
            self.debug( 'construct' );
            
            // set document title
            self.setDocumentTitle();
            
            // set document css
            self.setDocumentCss();
            
            // create html
            self.addHtml();

            // add window events 
            self.addWindowEvents();
            
            // event subscription
            self.addEventSubscriptions();

        // DONE FUNCTION: construct( void ) void
        };
        self.addEventSubscriptions = function(){
        // FUNCTION: addEventSubscriptions( void ) void

            // debug info
            self.debug( 'addEventSubscriptions' );

            // add scene change
            jsProject.subscribeToEvent( 'sceneChange', self.sceneChange );
            
            // add refreshPage
            jsProject.subscribeToEvent( 'refreshPage', self.refreshPage );
            
        // DONE FUNCTION: start( void ) void
        };
        self.addWindowEvents = function(){

            // debug info
            self.debug( 'addWindowEvents' );

            // override window.onresize
            window.onresize = function( ) {
                // scene change
                self.sceneChange();
            };
            // done override window.onresize
        
            // override window.onresize
            $( window ).on( "orientationchange", function( event ) {
                self.debug( 'orientaitionChange' );
                // scene change
                self.sceneChange();
            });
            // done override window.onresize
        
            // override window.onresize
            window.onscroll = function( ) {
                // scene change
                self.sceneScroll();
            };
            // done override window.onresize
        };
        self.setDocumentCss = function() {
        // FUNCTION: setDocumentCss( void ) void
        
            // debug info
            self.debug( 'setDocumentCss' );

            // get document css settings
            var documentCssOptions = pleisterman.getSetting( 'documentCssOptions' );

            var sheet = document.createElement('style');
            sheet.innerHTML = '';
            // loop over document css options
            $.each( documentCssOptions, function( index, subject ) {
                sheet.innerHTML += index + ' { ';
                // loop over subjects
                $.each( subject, function( subjectIndex, value ) {
                    // set css value
                    sheet.innerHTML += '' + subjectIndex + ' : ' + value + ';';
                });            
                // done loop over subjects
                sheet.innerHTML += ' } ';
            });            
            // done loop over document css options
            document.body.appendChild( sheet );

        // DONE FUNCTION: setDocumentCss( void ) void
        };
        self.setDocumentTitle = function() {
        // FUNCTION: setDocumentTitle( void ) void

            // set document title
            document.title = pleisterman.getTranslation( 'documentTitle' );
        
        // DONE FUNCTION: setDocumentTitle( void ) void
        };
        self.addHtml = function() {
        // FUNCTION: addHtml( void ) void
            
            // debug info
            self.debug( 'addHtml' );

            // add layout to document
            $( document.body ).append( jsProject.jsonToElementHtml( self.layoutOptions ) );


        // DONE FUNCTION: addHtml( void ) void
        };
        self.refreshPage = function() {
        // FUNCTION: refreshPage( void ) void

            // set title    
            document.title = pleisterman.content['documentTitle'];

        // DONE FUNCTION: refreshPage( void ) void
        };
        self.sceneChange = function() {
        // FUNCTION: sceneChange( void ) void
            
            // debug on
            if( self.debugOn ) {
                // get width
                var width = $( '#' + self.layoutOptions['id'] ).width();
                // get height
                var height = $( '#' + self.layoutOptions['id'] ).height();
                // debug info
                self.debug( 'sceneChange width: ' + width + ' height: ' + height );
            }
            // done debug on
            
            // call the global event
            jsProject.callEvent( "layoutChange" );

        // DONE FUNCTION: sceneChange( void ) void
        };
        self.sceneScroll = function() {
        // FUNCTION: sceneScroll( void ) void
            
            // call the global event
            jsProject.callEvent( "sceneScroll" );
            
        // DONE FUNCTION: sceneScroll( void ) void
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
    // DONE MODULE: layoutModule( pleisterman ) void
})( pleisterman );
// done create module function
