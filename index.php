<?php
/* 
 *  Project: jsProject Examples  
 * 
 *  File: index.php
 * 
 *  Purpose: 
 *      creates the page
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

?>
<!DOCTYPE html>
<html>
    <head>
        <title>jsProject Examples</title>
        <meta charset="UTF-8">
        <meta name="description" content="Explanation on using jsProject">
        <meta name="keywords" content="jsProject, Home, function, examples">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="IE=edge"><link href="https://fonts.googleapis.com/css?family=Raleway" media="screen" rel="stylesheet" type="text/css">
        <script>
            // add onload event    
            window.onload = function(){
                // set language
                pleisterman.urlLanguage = '<?php 
                    // lang in url
                    if( isset( $_GET['lang'] ) ){
                        // echo lang
                        echo $_GET['lang'];
                    }
                    // lang in url
                ?>';
                
                // start the application
                pleisterman.start();
            };
            // done add onload event  
        </script>
        <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>   
        <script type="text/javascript" src="main.js"></script>
        <script type="text/javascript" src="settingsModule.js"></script>
        <?php
            echo ' <script type="text/javascript" src="translationsModule';
            // lang in url
            if( isset( $_GET['lang'] ) ){
                // echo lang
                echo '_' . $_GET['lang'];
            }
            // lang in url
            echo '.js"></script>';
        ?>
        <script type="text/javascript" src="valuesModule.js"></script>
        <script type="text/javascript" src="layoutModule.js"></script>
        <script type="text/javascript" src="headerModule.js"></script>
        <script type="text/javascript" src="githubButtonModule.js"></script>
        <script type="text/javascript" src="downloadButtonModule.js"></script>
        <script type="text/javascript" src="languageSelectionModule.js"></script>
        <script type="text/javascript" src="languageSelectionItemModule.js"></script>
        <script type="text/javascript" src="contentModule.js"></script>
        <script type="text/javascript" src="contentIntroModule.js"></script>
        <script type="text/javascript" src="contentItemsModule.js"></script>
        <script type="text/javascript" src="./src/jsProject/jsProject-min.js"></script>
        
    </head>
    <body>
        
    </body>
</html>
