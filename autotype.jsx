// written by @avialxee
// MIT License

#target photoshop
#include json2.js // json to js parser


if (app.documents.length > 0) {
    var myDocument = app.activeDocument;
    var theName = myDocument.name.match(/(.*)\.[^\.]+$/)[1];
    var thePath = myDocument.path;
    var outpath = thePath+'/output/';
    
    psdOpts = new PhotoshopSaveOptions();
    psdOpts.embedColorProfile = true;
    psdOpts.alphaChannels = true;
    psdOpts.layers = true;
    psdOpts.spotColors = true;


    var obj = loadInput('inputs.json')

    function loadInput(relpath){
        var input = new File($.fileName);
        var jsoninput = new File(input.path + '/' + relpath);

        jsoninput.open('r');
        var name = jsoninput.read();
        jsoninput.close();

        return JSON.parse(name);
    }


    
    for (var i in obj.name) {
        
        var TitleGroup = myDocument.layerSets.getByName('free_mug_mock-up');
        var TitleGroup2 = myDocument.layerSets.getByName('text');
        var thNamer = obj.name[i];
        VolLayer = TitleGroup2.artLayers.getByName('participantName');
        myDocument.activeLayer = VolLayer;
        //var theFiles = ppath + thNamer + '.tif';
        
        if (thNamer) {
            //VolLayer = replaceContents(theFiles);
            VolLayer.textItem.contents = thNamer;
            saveJPEG(thNamer);
            alert("saved Jpeg");
            myDocument.saveAs((new File(outpath+ thNamer + "_" + ".psd")), psdOpts, true);
            
        }      
    }
};




function getFiles(theFile) {
    if (theFile.name.match(/\.(psd|tif)$/i)) {
        return true
    };
};

function replaceContents(newFile) {
    var idplacedLayerReplaceContents = stringIDToTypeID("placedLayerReplaceContents");
    var desc3 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    desc3.putPath(idnull, new File(theFiles));
    var idPgNm = charIDToTypeID("PgNm");
    desc3.putInteger(idPgNm, 1);
    executeAction(idplacedLayerReplaceContents, desc3, DialogModes.NO);
};

function saveJPEG(name) {
    var doc = app.activeDocument;
    var file = new File(outpath + name + '.Jpg');
    var opts = new JPEGSaveOptions();
    opts.quality = 10;
    doc.saveAs(file, opts, true);
}
