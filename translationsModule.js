/* 
 *  Project: jsProject Examples
 * 
 *  File: translationsModule.js
 * 
 *  Purpose: 
 *      creates a json object with translations
 *      adds the application function: getTranslation to the application
 *  
 *  Last Revision:  21-03-2017
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

    // MODULE: translationsModule( pleisterman ) void
    
    pleisterman.translationsModule = function( ) {
        // PRIVATE:
        
        // MEMBERS
        var self = this;                                            // object: self
        self.MODULE = 'translationsModule';                         // string: module
        self.debugOn = false;                                       // boolean: debugOn
        self.introText = '<div style="color:mediumseagreen;">';
        self.introText += '<b>jsProject is een Javascript library.</b>';
        self.introText += '</div>';
        self.introText += '<br>';
        self.introText += 'De library is geschreven met het Revealing Module Pattern.';
        self.introText += '<br>';
        self.introText += 'Hij bevat een aantal essenti&euml;le functies die veel gebruikt worden in een project.';
        self.introText += '<br>';
        self.introText += 'Hier kun je een beschrijving van deze essenti&euml;le functies vinden.';
        self.introText += '<br>';
        self.introText += '<br>';
        self.introText += '<div style="color:mediumseagreen;">';
        self.introText += '<b>JQuery is vereist.</b>';
        self.introText += '</div>';
        self.introText += '<br>';
        self.introText += '<div style="color:mediumseagreen;">';
        self.introText += '<b>Waarom zou je jsProject gebruiken?</b>';
        self.introText += '</div>';
        self.introText += '<br>';
        self.introText += 'Er zitten een aantal heel handige functies in voor je project.';
        self.introText += '<br>';
        self.introText += '<br>';
        self.introText += 'De code is gemaakt om alleen de basale functionaliteit te geven zodat de code overzichtelijk is en makkelijk aangepast kan worden.';
        self.introText += '<br>';
        self.translations = {                                        // json: translations
            'documentTitle'         :       'Pleisterman-jsProject',
            'title'                 :       'jsProject Voorbeelden.',
            'introTitle'            :       'Welkom bij de jsProject voorbeelden.',
            'introText'             :       self.introText,
            'contentItems'          :       [
                {                                                           // json: item jsProject
                    'title'     :   'Hoe kan ik jsProject gebruiken',
                    'fileName'  :   'main.js',
                    'text'      :   'jsProject kan gebruikt worden in een modulaire setup. Maar het is ook mogelijk de functies van jsProject vanuit standaard Javascript te gebruiken.<br><br>Klik hier om meer te leren over het gebruik van jsProject.<br><br>',
                    'link'      :   './examples/integration/index.php'
                },                                                          // done json: item jsProject
                {                                                           // json: item values
                    'title'     :   'Values',
                    'fileName'  :   './jsProject/src/valuesModule.js',
                    'text'      :   'Values in the valuesModules zijn veranderbare globale waarden vastgelegd.<br><br>The values module omkapseld deze waarden.<br><br>Klik hier om meer te leren over de valuesModule en het gebruik ervan.<br><br>',
                    'link'      :   './examples/values/index.php'
                },                                                          // done json: item values
                {                                                           // json: item debugger
                    'title'     :   'Debugger',
                    'fileName'  :   './jsProject/src/debugModule.js',
                    'text'      :   'De debugger is een dragable venster dat real-time debug informatie toont.<br><br>Klik hier om meer te leren over de  debuggerModule en het gebruik ervan.<br><br>',
                    'link'      :   './examples/debugger/index.php'
                },                                                           // done json: item debugger
                {                                                           // json: item events
                    'title'     :   'Events',
                    'fileName'  :   './jsProject/src/eventsModule.js',
                    'text'      :   'De eventsModule is een subscriptie service.<br>De events worden synchronoon afgehandeld in in de volgorde van subscriptie.<br>De eventsModule voorziet de applicatie brede toegang tot deze events.<br><br>Klik hier om meer te leren over de eventsModule en het gebruik ervan.<br><br>',
                    'link'      :   './examples/events/index.php'
                },                                                           // done json: item events
                {                                                           // json: item ajax
                    'title'     :   'Ajax',
                    'fileName'  :   './jsProject/src/ajaxModule.js',
                    'text'      :   'De ajaxModule heeft een standaard post en een beveiligde tokenized post and download functie.<br>De post events worden in multi-processing asynchronious procedures afgehandeld.<br><br>Klik hier om meer te leren over de ajaxModule en het gebruik ervan.<br><br>',
                    'link'      :   './examples/ajax/index.php'
                },                                                           // done json: item events
                {                                                           // json: item html-generator
                    'title'     :   'HTML-Generator',
                    'fileName'  :   './jsProject/src/jsonToElementHtmlModule.js',
                    'text'      :   'De jsonToElementHtmlModule is een generator die html gegenereert vanuit Json structuren.<br>De Json structuren zijn eenvoudiger te onderhouden en makkelijker te hergebruiken dan Html.<br><br>Klik hier om meer te leren over de HTML-generator en het gebruik ervan.<br><br>',
                    'link'      :   './examples/htmlGenerator/index.php'
                },                                                           // done json: item html-generator
                {                                                           // json: item settings
                    'title'     :   'functions',
                    'fileName'  :   './jsProject/src/functions/functionsModule.js',
                    'text'      :   'JsProject heeft een aantal functies die gemakkelijk in gebruik zijn en enige basis functionaliteit toevoegen voor strings, kleuren, datums etc...<br><br><br>Klik hier om meer te leren over de functies en het gebruik ervan.<br><br>',
                    'link'      :   './examples/functions/index.php'
                },                                                           // done json: item html-generator
                {                                                           // json: item settings
                    'title'     :   'Settings',
                    'fileName'  :   'settingsModule.js',
                    'text'      :   'Settings in de settingsModule zijn globale onveranderbare waarden.<br>De settings module omkapseld deze waarden.<br>De settingsModule is geen onderdeel van jsProject maar is een extensie module die goed samenwerkt met jsProject.<br><br>Klik hier om meer te leren over de settingsModule en het gebruik ervan.<br><br>',
                    'link'      :   './examples/settings/index.php'
                },                                                           // done json: item html-generator
                {                                                           // json: item layout
                    'title'     :   'Layout',
                    'fileName'  :   '/github/jsProject/layoutModule.js',
                    'text'      :   'De jsProject HTML-Generator gegereert HTML met inline css, de layoutModule regelt de responsive layout van de pagina.<br>De layoutModule is geen onderdeel van jsProject maar is een extensie module die goed samenwerkt met jsProject.<br><br>Klik hier om meer te leren over de layoutModule en het gebruik ervan.<br><br>',
                    'link'      :   './examples/layout/index.php'
                }                                                          // done json: item layout
            ]
        };                                                          // done json: translations
        // DONE MEMBERS
        
        // FUNCTIONS
        self.construct = function() {
        // FUNCTION: construct( void ) void
            
            // debug info
            self.debug( 'construct' );
            
            // add the extensions to pleisterman
            self.addApplicationsExtensions();

        // DONE FUNCTION: construct( void ) void
        };
        self.addApplicationsExtensions = function(){
        // FUNCTION: addApplicationsExtensions( void ) void
            
            // add get translations function
            pleisterman.getTranslation = self.get;
            
        // DONE FUNCTION: addApplicationsExtensions( void ) void
        };
        self.get = function( translationId ) {
        // FUNCTION: get( string: translationId ) var
            
            // translation defined
            if( self.translations[translationId] !== undefined ){
                // done
                return self.translations[translationId];
            }
            // done translation defined
            
            // debug info
            self.debug( 'error translation not found: ' +  translationId );
            // done with error
            return false;
            
        // DONE FUNCTION: get( string: translationId ) var
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
    // DONE MODULE: translationsModule( pleisterman ) void
})( pleisterman );
// done create module function

