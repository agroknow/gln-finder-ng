//gets of the full JSON based on Agro-Know Internal Format
function getFullJSON(urlTemp){
        jQuery.ajax({
               url: urlTemp,
               mimeType: "textPlain",
               dataType: "json",
               success: function(data)
                    {
                   //alert(urlTemp);
                    
                        //GENERAL
                    
                        if(data.identifier!==undefined){ jQuery('#stage').html('<p> identifier: ' + data.identifier + '</p>'); }
                        if(data.set!==undefined){jQuery('#stage').append('<p>set : ' + data.set+ '</p>');}
                        if(data.status!==undefined){ jQuery('#stage').append('<p>status : ' + data.status+ '</p>');}
                        if(data.generateThumbnail!==undefined){jQuery('#stage').append('<p> generateThumbnail: ' + data.generateThumbnail+ '</p>');}
                        if(data.lastUpdateDate!==undefined){jQuery('#stage').append('<p> lastUpdateDate: ' + data.lastUpdateDate+ '</p>');}
                        if(data.creationDate!==undefined){jQuery('#stage').append('<p> creationDate: ' + data.creationDate+ '</p>');}
                    
                    
                        //-------------------*LANGUAGEBLOCKS contains multiple language versions - reads all.-------------------
                        jQuery('#stage').append('<p style="color:blue;"> ------- language blocks -------- </p>');
                    
                        //if languageBlocks is an array and isn't empty
                        if(data.languageBlocks.length!==undefined && data.languageBlocks!==undefined )
                        {
                        for(var i = 0; i<data.languageBlocks.length; i++)//run all different languages version of this item
                        {
                            var language = Object.keys(data.languageBlocks[i]); //keys for different language versions of this item. (i.e en, gr, no,) 
                    
                            languageBlock = data.languageBlocks[i][language[0]]; // We always get language[0] as key
                    
                            jQuery('#stage').append('<p> languageBlocks.title: ' + language[0] + '</p>'); // language code
                            jQuery('#stage').append('<p> languageBlocks.title: ' + languageBlock.title + '</p>');
                            jQuery('#stage').append('<p> languageBlocks.description: ' + languageBlock.description+ '</p>');
                            jQuery('#stage').append('<p> languageBlocks.coverage: ' + languageBlock.coverage+ '</p>');
                            jQuery('#stage').append('<p> languageBlocks.keywords: ' + languageBlock.keywords+ '</p>'); //*ARRAY of keywords in current version
                    
                        }}
                        //if languageBlocks has ONLY one value => not array
                        if(data.languageBlocks.length==undefined && data.languageBlocks!==undefined )
                        {
                        var language = Object.keys(data.languageBlocks); //keys for different language versions of this item. (i.e en, gr, no,)
                    
                        languageBlock = data.languageBlocks[language[0]]; // We always get language[0] as key
                    
                        jQuery('#stage').append('<p> languageBlocks.title: ' + language[0] + '</p>'); // language code
                        jQuery('#stage').append('<p> languageBlocks.title: ' + languageBlock.title + '</p>');
                        jQuery('#stage').append('<p> languageBlocks.description: ' + languageBlock.description+ '</p>');
                        jQuery('#stage').append('<p> languageBlocks.coverage: ' + languageBlock.coverage+ '</p>');
                        jQuery('#stage').append('<p> languageBlocks.keywords: ' + languageBlock.keywords+ '</p>'); //*ARRAY of keywords in current version
                        }
                    
                    
                        //-------------------TOKENBLOCK-------------------
                        jQuery('#stage').append('<p style="color:blue;"> ------- token block -------- </p>');
                    
                        if(data.tokenBlock!==undefined)
                        {
                        if(data.tokenBlock.learningResourceTypes!==undefined){
                        jQuery('#stage').append('<p> learningResourceTypes: ' + data.tokenBlock.learningResourceTypes+ '</p>');} //*ARRAY of learningResourceTypes
                        if(data.tokenBlock.endUserRole!==undefined){jQuery('#stage').append('<p> endUserRole: ' + data.tokenBlock.endUserRole + '</p>'); } //*ARRAY of endUserRole
                        if(data.tokenBlock.context!==undefined){jQuery('#stage').append('<p> context: ' + data.tokenBlock.context+ '</p>');} //*ARRAY of context
                        if(data.tokenBlock.taxonPaths!==undefined){jQuery('#stage').append('<p> taxonPaths: ' + data.tokenBlock.taxonPaths+ '</p>');} //*ARRAY of taxonPaths
                        if(data.tokenBlock.ageRange!==undefined){jQuery('#stage').append('<p> ageRange: ' + data.tokenBlock.ageRange+ '</p>');}
                        }
                        
                        
                         
                         
                        

                    
              
                        //-------------------*EXPRESSIONS contains multiple manifestions-------------------
                        jQuery('#stage').append('<p style="color:blue;"> ------- expressions -------- </p>');
                    
                        if(data.expressions!==undefined){
                        for(var i=0; i<data.expressions.length;i++)
                        {
                            var expression = data.expressions[i]; //this expression
                            jQuery('#stage').append('<p> expressions.language: ' + expression.language + '</p>');
                    
                            //*manifestions
                            for(var j=0; i<expression.manifestations.length;i++)
                            {
                                var manifestation = expression.manifestations[j]; //this manifestion
                                jQuery('#stage').append('<p> expressions.manifestations.identifier: ' + manifestation.identifier + '</p>');
                                jQuery('#stage').append('<p> expressions.manifestations.name: ' + manifestation.name + '</p>');
                                jQuery('#stage').append('<p> expressions.manifestations.parameter: ' + manifestation.parameter + '</p>');
                                jQuery('#stage').append('<p> expressions.manifestations.duration: ' + manifestation.duration + '</p>');
                    
                                for(var k=0; k< manifestation.items.lenght ;k++)
                                {
                                    var item = manifestation.items[k]; //this item
                                    jQuery('#stage').append('<p> expressions.manifestations.items.url: ' + item.url + '</p>');
                                    jQuery('#stage').append('<p> expressions.manifestations.items.broken: ' + item.broken + '</p>');
                                }//end-for item
                            }//end-for manifestion
                        }//end-for expression
                        }//end-if
                
      
               
                    
                    
                    
                        //-------------------RIGHTS-------------------
                        jQuery('#stage').append('<p style="color:blue;"> ------- rights -------- </p>');
                    
                        jQuery('#stage').append('<p> rights: ' + data.rights.url+ '</p>');
                    
                        if(data.rights.description!==undefined){
                        for(var i=0; i<data.rights.description.length;i++)
                        {jQuery('#stage').append('<p> rights: ' + data.rights.description[i]+ '</p>');}
                        }//end if
                    
                        
                    
                    
                        //-------------------*CONTRIBUTORS-------------------
                        jQuery('#stage').append('<p style="color:blue;"> ------- contributors-------- </p>');
                    
                        if(data.contributors!==undefined){
                        for(var i=0; i<data.contributors.length;i++){
                            var contributor = data.contributors[i]; //this contributor
                            jQuery('#stage').append('<p> contributors.role: ' + contributor.role+ '</p>');
                            jQuery('#stage').append('<p> contributors.name: ' + contributor.name+ '</p>');
                            jQuery('#stage').append('<p> contributors.organization: ' + contributor.organization+ '</p>');
                            jQuery('#stage').append('<p> contributors.date: ' + contributor.date+ '</p>');
                        }}
                    
                    
                    jQuery('#stage').append('<p style="color:blue;"> ------- end-------- </p>');
                    
                    }});
        
    }


//gets needed attributes and render them in the item.html
function getItemJSON(urlTemp)
{
    //alert("getItemJSON!");
    jQuery.ajax({
                url: urlTemp,
                mimeType: "textPlain",
                dataType: "json",
                success: function(data)
                {
                
                //if languageBlocks is an array and isn't empty
                if(data.languageBlocks.length!==undefined && data.languageBlocks!==undefined )
                {
                for(var i = 0; i<data.languageBlocks.length; i++)//run all different languages version of this item
                {
                var language = Object.keys(data.languageBlocks[i]); //keys for different language versions of this item. (i.e en, gr, no,)
                
                languageBlock = data.languageBlocks[i][language[0]]; // We always get language[0] as key
                
                //jQuery('#stage').append('<p> languageBlocks.title: ' + language[0] + '</p>'); // language code
                document.getElementById('itemTitle').innerHTML = languageBlock.title;
                document.getElementById('itemDescription').innerHTML = languageBlock.description;
                if(data.tokenBlock.ageRange!==undefined){
                jQuery('#ageRange').append(data.tokenBlock.ageRange);}
                
                if(languageBlock.keywords.length!==undefined)
                {
                for(var j=0; j<languageBlock.keywords.length;j++)//*ARRAY of keywords in current version
                {
                jQuery('#itemKeywords').append('<a  href="#" class="secondary">'+languageBlock.keywords[j]+'</a>');
                }
                }
                
                }}
                
                
                
                //if languageBlocks has ONLY one value => not array
                if(data.languageBlocks.length==undefined && data.languageBlocks!==undefined )
                {
                var language = Object.keys(data.languageBlocks); //keys for different language versions of this item. (i.e en, gr, no,)
                
                languageBlock = data.languageBlocks[language[0]]; // We always get language[0] as key
                
                //jQuery('#stage').append('<p> languageBlocks.title: ' + language[0] + '</p>'); // language code
                document.getElementById('itemTitle').innerHTML = languageBlock.title ;
                document.getElementById('itemDescription').innerHTML = languageBlock.description;
                if(data.tokenBlock.ageRange!==undefined){
                jQuery('#ageRange').append(data.tokenBlock.ageRange);}
                
                if(languageBlock.keywords.length!==undefined)
                {
                for(var j=0; j<languageBlock.keywords.length;j++)//*ARRAY of keywords in current version
                {
                jQuery('#itemKeywords').append('<a  href="#" class="secondary">'+languageBlock.keywords[j]+'</a>');
                }
                }
                
                }
                
                
                }
                
                });
}


//Items is an array with the names of the jsons.
//WE ASSUME THAT WE WANT 3 ITEMS PER SLIDE
//!!! Function may change to follow the storage format ../3LastDigits/XXX3LastDigits
function getFeaturedItems(items, urlPath)
{
    var itemsPerSlide = 2;
    var numOfSlides= Math.ceil(items.length/itemsPerSlide); //rounds up the value
    
    
    var functionsQueue = [];
    
    //alert("Slides:" + numOfSlides +" \nPath:"+ urlPath);
    
    
    for(var i=0; i<numOfSlides;i++)//every slide page
    {
        jQuery('#FeaturedItemsSlider').append('<div id="slide'+ i +'" class="slider_page">')
        
        //alert("outer: i: "+i);

        for(var j=0; j<itemsPerSlide; j++) //for every position in the slide page
        {
            
            itemIndexInItemsArray = i*itemsPerSlide + j;
            
            var fileUrl = urlPath + items[itemIndexInItemsArray] + ".json";
            
            
            //we add the called functions in a Queue because ajax is asynchronous and
            //creates problems inside the for loops
            var thisItem = getFeaturedItem(fileUrl, i, j);
            functionsQueue.push(thisItem);
            
                 
        }//end inner loop - j
        
        
    }//end outter loop -i
    
    while (functionsQueue.length > 0) {
        
        //if(functionsQueue.length%3 === 2){jQuery('#FeaturedItemsSlider').append('</ul></div>');}
        
        functionsQueue.shift();
    }

}

function getFeaturedItem(urlTemp, slideNum, position)
{
    
    jQuery.ajax({
                url: urlTemp,
                mimeType: "textPlain",
                dataType: "json",
                async:false,
                success: function(data)
                {
                
                //alert(":"+urlTemp);
                
                //if(slideNum===undefined){alert("undefined");} else {alert(slideNum+" "+fileUrl);}
               
                
                
                //if languageBlocks is an array and isn't empty
                if(data.languageBlocks.length!==undefined && data.languageBlocks!==undefined )
                {
                for(var k = 0; k<data.languageBlocks.length; k++)//run all different languages version of this item
                {
                var language = Object.keys(data.languageBlocks[k]); //keys for different language versions of this item. (i.e en, gr, no,)
                
                languageBlock = data.languageBlocks[k][language[0]]; // We always get language[0] as key
                
                
                jQuery('#slide'+slideNum).append('<li class="clearfix slider_page_listitem"><a href="#" class="hasshadow"><img src="images/sample_small_thumb.jpg" alt="thumb" width="140" height="80" /></a><div> <h2><a href="item.html?id='+data.identifier+'">'+languageBlock.title + '</a></h2><p>'+languageBlock.description+'</p><div class="info clearfix"><div class="floatleft">{Here goes j! rating}</div><a href="#">View reviewing history</a><a href="#">View rating history</a></div></div></li> ');//end ('#slide'+i).append()
                
                }}
                
                //if languageBlocks has ONLY one value => not array
                if(data.languageBlocks.length==undefined && data.languageBlocks!==undefined )
                {
                
                var language = Object.keys(data.languageBlocks); //keys for different language versions of this item. (i.e en, gr, no,)
                
                languageBlock = data.languageBlocks[language[0]]; // We always get language[0] as key
                
                
                
                jQuery('#slide'+slideNum).append('<li class="clearfix slider_page_listitem"><a href="#" class="hasshadow"><img src="images/sample_small_thumb.jpg" alt="thumb" width="140" height="80" /></a><div> <h2><a href="item.html?id='+data.identifier+'">'+languageBlock.title+'</a></h2><p>'+languageBlock.description+'</p><div class="info clearfix"><div class="floatleft">{Here goes j! rating}</div><a href="#">View reviewing history</a><a href="#">View rating history</a></div></div></li> ');//end ('#slide'+i).append()
                }
                
                
                }
                
                });

}








