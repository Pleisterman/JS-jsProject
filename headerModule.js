/* 
 *  Project: jsProject Examples  
 * 
 *  File: headerModule.js
 * 
 *  Purpose: 
 *      creates the header
 *  
 *  Last Revision:  22-03-2017
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

    // MODULE: headerModule( void ) void
    
    pleisterman.headerModule = function( ) {
        // PRIVATE:
        
        // MEMBERS
        var self = this;                                                // object: self
        self.MODULE = 'headerModule';                                   // string: module
        self.debugOn = false;                                           // boolean: debugOn
        self.headerOptions = {                                          // json: headerOptions
            'id'                    :   'header',                       // string: id
            'element'               :   'div',                          // string: html element type 
            'styleHeight'           :   '100px',                        // integer: height
            'styleWidth'            :   '100%',                         // css style width
            'minimumWidth'          :   '1020px',                       // css style width
            'backgroundColor'       :   'white',                        // css color: background color
            'position'              :   'fixed',                        // css style position
            'top'                   :   '0px',                          // css top
            'boxShadow'             :   '0px 3px 3px rgba( 46, 139, 87, 0.2 )', // css box shadow
            'zIndex'                :   pleisterman.getSetting( 'zIndex' )['header'].toString() // integer: z index
        };                                                              // done json: headerOptions        
        self.logoOptions = {                                            // json: title Options
            'id'                            :   self.headerOptions['id'] + 'Logo',   // string: id
            'element'                       :   'a',                    // string: html element type 
            'display'                       :   'inline-block',         // css display
            'target'                        :   '_self',                // a target
            'href'                          :   'https://www.pleisterman.nl',  // a href
            'text'                          :   'Pleisterman',            // string: text 
            'fontSize'                      :   '3.0em',                // css font size 
            'padding'                       :   '8px',                  // css padding
            'marginTop'                     :   '18px',                 // css margin top
            'marginLeft'                    :   '42px',                 // css margin left
            'color'                         :   'mediumseagreen',       // css color
        };                                                              // done json: title Options
        self.titleOptions = {                                           // json: title Options
            'id'                            :   self.headerOptions['id'] + 'Title',   // string: id
            'element'                       :   'a',                    // string: html element type 
            'display'                       :   'inline-block',         // css display
            'target'                        :   '_self',                // html target
            'href'                          :   pleisterman.getSetting( 'jsProjectHomeDir' ),    // html href
            'text'                          :   pleisterman.getTranslation( 'title' ),   // string: title 
            'fontSize'                      :   '2.0em',                // css font size 
            'padding'                       :   '8px',                  // css padding
            'marginTop'                     :   '38px',                 // css margin top
            'marginLeft'                    :   '42px',                 // css margin left
            'color'                         :   'seagreen',             // css color
        };                                                              // done json: title Options
        self.debugButton = null;                                        // module: debugButton
        self.downloadButton = null;                                     // module: downloadButton
        self.githubButton = null;                                       // module: githubButton
        self.languageSelection = null;                                  // module: languageSelection
         // DONE MEMBERS
        
        // FUNCTIONS
        self.construct = function() {
        // FUNCTION: construct( void ) void
            
            // debug info
            self.debug( 'construct' );

            // add header to layout
            $( '#' + pleisterman.getSetting( 'ids' )['layoutId'] ).append( jsProject.jsonToElementHtml( self.headerOptions ) );
            // add logo
            self.addLogo();
            // add title
            self.addTitle();
            // add download button
            self.downloadButton = new pleisterman.downloadButtonModule( self.headerOptions['id'] );
            // add github button
            self.githubButton = new pleisterman.githubButtonModule( self.headerOptions['id'] );
            // add language selection
            self.languageSelection = new pleisterman.languageSelectionModule( self.headerOptions['id'] );

        // DONE FUNCTION: construct( void ) void
        };
        self.addLogo = function() {
        // FUNCTION: addLogo( void ) void
        
            // url language not empty
            if( pleisterman.urlLanguage !== '' ){
                // add language to href
                self.logoOptions['href'] += '/' + pleisterman.urlLanguage + '/';
            }
            // done url language not empty
        
            // add logo to header
            $( '#' + self.headerOptions['id'] ).append( jsProject.jsonToElementHtml( self.logoOptions ) );

        // DONE FUNCTION: addLogo( void ) void
        };
        self.addTitle = function() {
        // FUNCTION: addTitle( void ) void
        
            // url language not empty
            if( pleisterman.urlLanguage !== '' ){
                // add language to href
                self.titleOptions['href'] += '?lang=' + pleisterman.urlLanguage + '';
            }
            // done url language not empty
        
            // add logo to header
            $( '#' + self.headerOptions['id'] ).append( jsProject.jsonToElementHtml( self.titleOptions ) );

        // DONE FUNCTION: addTitle( void ) void
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
    // DONE MODULE: headerModule( void ) void
})( pleisterman );
// done create module function
