 /* 
 *  Project: jsProject 
 * 
 *  File: ajaxModule.js
 * 
 *  Last revision: 10-03-2017
 * 
 * Purpose:  
 *          this module controls ajax calls for the application  
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

    // FUNCTION: ajaxModule( void ) void
    
    jsProject.ajaxModule = function( ) {
        // PRIVATE:
        
        // MEMBERS
        var self = this;                                    // object: self
        self.MODULE = 'ajaxModule';                         // string: module
        self.debugOn = true;                                // boolean: debug
        self.nextProcesId = 0;                              // integer: next proces id
        self.errorCount = 0;                                // integer: error count
        self.maxRecalls = 0;                                // integer: max recalls
        self.processes = {};                                // json: processes
        self.downloadCallback = null;                       // function: downloadCallback
        self.header = null;                                 // header
        // DONE MEMBERS
        
        // FUNCTIONS
        self.construct = function() {
        // FUNCTION: construct( void ) void
        
            // debug info
            self.debug( 'construct' );
            
            // add the functions to jsProject
            jsProject.securePost = self.securePost;
            jsProject.secureDownload = self.secureDownload;
            jsProject.post = self.post;
            // done add the functions to jsProject

        // DONE FUNCTION: construct( void ) void
        };
        self.post = function( url, data, callback, isExistingProces ) {
        // FUNCTION: post( string: url, function: callback, boolean: isExistingProces ) void
        
            // !is existing proces 
            if( !isExistingProces ){


                // enrich data
                data['procesId'] = self.nextProcesId;
                // enrich data

                // debug info
                self.debug( 'new proces: ' + data['procesId']  + ' url: ' + url + ' subject: ' + data['subject'] );
                
                // create a process
                var proces = {  'id'            : self.nextProcesId++,
                                'url'           : url,
                                'isSecure'      : false,
                                'recallCount'   : 0,
                                'data'          : data,
                                'callback'      : callback };
                // done create a process

                // add the proces to the list
                self.processes[proces['id']] = proces;
            }            
            // !done is existing proces 
            
            // make ajax call
            $.ajax({
                type: "POST",
                async: true,
                url: url,
                data: data,
                dataType: 'json',
                success: function( result )
                {
                    // debug info
                    self.debug( 'ajax succes' );
                    // call succes
                    self.succes( result );
                },
                error: function( jqXHR, textStatus,errorThrown )
                {
                    // error count += 1
                    self.errorCount++;
                    // handle error 
                    console.log( 'ajax error' );
                    $.each( jqXHR, function( index, value ) {
                        self.debug( 'ajax failed jqXHR:' + value );
                        console.log( value );
                    } );
                    // debug info
                    self.debug( 'ajax failed textStatus:' + textStatus );
                    self.debug( 'ajax failed errorThrown:' + errorThrown );
                    // debug info
                    
                    // handle errors
                    self.handleErrors();
                }
            });
            // done make ajax call

        // DONE FUNCTION: post( string: url, function: callback, boolean: isExistingProces ) void
        };
        self.securePost = function( url, token, data, callback, isExistingProces ) {
        // FUNCTION: securePost( string: url, string: token, function: callback, boolean: isExistingProces ) void
        
            // !is existing proces 
            if( !isExistingProces ){

                // enrich data
                data['procesId'] = self.nextProcesId;
                data['token'] = token;
                
                // debug info
                self.debug( 'new secure proces: ' + data['procesId']  + ' url: ' + url + ' subject: ' + data['subject'] );
                
                // create proces
                var proces = {  'id'            : self.nextProcesId++,
                                'url'           : url,
                                'data'          : data,
                                'isSecure'      : true,
                                'recallCount'   : 0,
                                'callback'      : callback };
                // done create proces
            
                // add to process list
                self.processes[proces['id']] = proces;
            }
            else {
                self.debug( 'recall secure post url: ' + url );
                // debug info
                self.debug( 'recall proces: ' + data['procesId'] );
            }
            // !done is existing proces 
            
            // make ajex call
            $.ajax({
                type: "POST",
                async: true,
                url: url,
                data: data,
                dataType: 'json',
                success: function( result )
                {
                    self.succes( result );
                },
                error: function( jqXHR, textStatus,errorThrown )
                {
                    // error count += 1
                    self.errorCount++;
                    // handle error 
                    console.log( 'ajax error' );
                    $.each( jqXHR, function( index, value ) {
                        // debug info
                        // self.debug( 'ajax failed jqXHR:' + value );
                        console.log( value );
                    } );
                    // debug info
                    self.debug( '-------- ajax failed ---------' + textStatus );
                    // debug info
                    self.debug( 'textStatus:' + textStatus );
                    // debug info
                    self.debug( 'errorThrown:' + errorThrown );
                    // debug info
                    self.debug( '-------- end ajax failed ---------' + textStatus );
                    // handle errors
                    self.handleErrors();
                }
            });
            // done make ajex call

        // DONE FUNCTION: string: url, string: token, function: callback, boolean: isExistingProces ) void
        };
        self.secureDownload = function( url, token, data ) {
        // FUNCTION: secureDownload( string: url, string: token, json: data ) void
        
            data['token'] = token;
            var xhr = new XMLHttpRequest();
            xhr.open('POST', url, true);
            xhr.responseType = 'arraybuffer';
            xhr.onload = function () {
                if (this.status === 200) {
                    var filename = "";
                    var disposition = xhr.getResponseHeader('Content-Disposition');
                    if (disposition && disposition.indexOf('attachment') !== -1) {
                        var filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
                        var matches = filenameRegex.exec(disposition);
                        if (matches !== null && matches[1]) filename = matches[1].replace(/['"]/g, '');
                    }
                    var type = xhr.getResponseHeader('Content-Type');

                    var blob = new Blob([this.response], { type: type });
                    if (typeof window.navigator.msSaveBlob !== 'undefined') {
                        // IE workaround for "HTML7007: One or more blob URLs were revoked by closing the blob for which they were created. These URLs will no longer resolve as the data backing the URL has been freed."
                        window.navigator.msSaveBlob(blob, filename);
                    } else {
                        var URL = window.URL || window.webkitURL;
                        var downloadUrl = URL.createObjectURL(blob);

                        if (filename) {
                            // use HTML5 a[download] attribute to specify filename
                            var a = document.createElement("a");
                            // safari doesn't support this yet
                            if (typeof a.download === 'undefined') {
                                window.location = downloadUrl;
                            } else {
                                a.href = downloadUrl;
                                a.download = filename;
                                document.body.appendChild(a);
                                a.click();
                            }
                        } else {
                            window.location = downloadUrl;
                        }
                        setTimeout(function () { URL.revokeObjectURL(downloadUrl); }, 100); // cleanup
                    }
                }
            };
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr.send($.param(data));

        // DONE FUNCTION: secureDownload( string: url, string: token, json: data ) void
        };
        self.downloadSucces = function( result ) {
        // FUNCTION: downloadSucces( json: result ) void
        
            // call callback
            self.downloadCallback( result );
            // unset callback
            self.downloadCallback = null;

        // DONE FUNCTION: downloadSucces( json: result ) void
        };
        self.succes = function( result ) {
        // FUNCTION: succes( json: result ) void
        
            // debug info
            self.debug( 'succes' );
            // proces not defined
            if( result['procesId'] === null ){
                console.log( 'procesId = null error ' );
                $.each( result, function( index, value ) {
                    console.log( index + ": " + value );
                } );
            }
            else {
                // debug info
                self.debug( 'succes proces: ' + result['procesId'] );
                // make callback call
                self.processes[result['procesId']]['callback']( result['result'] );
                // remove proces
                delete self.processes[result['procesId']];
            }

            // handle errors
            self.handleErrors();
            
        // DONE FUNCTION: succes( json: result ) void
        }; 
        self.handleErrors = function( ) {
        // FUNCTION: handleErrors( void ) void
        
            // has errors and number of processes left = error count
            if( self.errorCount === 0 || Object.keys( self.processes ).length !== self.errorCount ){
                
                // done
                return;
                
            };
            // done has errors and number of processes left = error count
            
            self.errorCount = 0;
            var hasRecall = false;
            
            // loop over processes
            $.each( self.processes, function( procesId, process ) {
                
                if( process['recallCount'] < self.maxRecalls ){
                    hasRecall = true;
                    // create delay
                    self.recall( procesId, process );
                    return;
                }
                
            } );
            // done loop over processes
            
            if( !hasRecall ){
                var result = { 'criticalError'  :    'dataConnectionFailed' };
                // loop over processes
                $.each( self.processes, function( procesId, process ) {
                    process['callback']( result );
                } );
                // done loop over processes
                
            }

        // DONE FUNCTION: handleErrors( void ) void
        }; 
        self.recall = function( procesId, process ) {
        // FUNCTION: recall( integer: procesId, json: process ) void
        
            process['recallCount']++;
            if( process['isSecure'] ){
                // recall secure post
                self.securePost(  process['url'], process['data']['token'], process['data'], process['callback'], true );
            }
            else {
                // recall post
                self.post( process['url'], process['data'], process['callback'], true );
            }

        // DONE FUNCTION: recall( integer: procesId, json: process ) void
        }; 
        self.debug = function( message ){
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
    // DONE MODULE: ajaxModule( void ) void
})( jsProject );
// done create module function
