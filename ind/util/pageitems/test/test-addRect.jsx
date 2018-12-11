#include "test-header.js"

var Doc = app.documents.add();
with( Doc.documentPreferences ){
    pageHeight = "100mm";
    pageWidth  = "100mm";
    documentBleedUniformSize = true;
    documentSlugUniformSize = true;
    documentBleedTopOffset = "10mm";
    documentSlugTopOffset = "10mm";
};

var rect = Pageitems.addRect( Doc.pages[0], {strokeWeight: "0.25mm"} ); 
var strokePoints = parseFloat(rect.strokeWeight);

Doc.close(SaveOptions.NO);

$.writeln( strokePoints === 0.70866141732283 );
