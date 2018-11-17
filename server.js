var express = require("express");
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static("public"));

app.set("views", "views");
app.set("view engine", "ejs");

app.get("/getRate", function(req, res) {
    
    var type = Number(req.query.type);
    var weight = Number(req.query.weight);
    var rate = calculateRate(type, weight);
    
    type = retrieveType(type);
    
    var params = {rate: rate, type: type, weight: weight};
    res.render("rate", params);
});

app.listen(app.get('port'), function() {
   console.log("Listening on port 5000");
});

function retrieveType(typeId) {
    switch (typeId) {
        case 1:
            return 'Letters (Stamped)';
        case 2:
            return'Letters (Metered)';
        case 3:
            return'Large Envelopes (Flats)';
        case 4:
            return'First-Class Package Service—Retail';
    }
    
}

function calculateRate(type, weight) {
    if (weight > 13) {
        return 'Over weight limit. Cannot be sent as first class mail.';
    }
    
    if (weight <= 0) {
        return 'Please enter a weight greater than 0';
    }
    
    switch (type) {
        case 1:
            if (weight > 3.5) {
                return 'Over weight limit for this type. Recalculate as Large Envelope';
            }
            else if (weight > 3) {
                return '$1.13';
            }
            else if (weight > 2) {
                return '$0.92';
            }
            else if (weight > 1) {
                return '$0.71';
            }
            else if (weight > 0) {
                return '$0.50';
            }
            break;
            
        case 2:
            if (weight > 3.5) {
                return 'Over weight limit for this type. Recalculate as Large Envelope';
            }
            else if (weight > 3) {
                return '$1.10';
            }
            else if (weight > 2) {
                return '$0.89';
            }
            else if (weight > 1) {
                return '$0.68';
            }
            else if (weight > 0) {
                return '$0.47';
            }
            break;
            
        case 3:
            if (weight > 12) {
                return '$3.52';
            }
            else if (weight > 11) {
                return '$3.31';
            }
            else if (weight > 10) {
                return '$3.10';
            }
            else if (weight > 9) {
                return '$2.89';
            }
            else if (weight > 8) {
                return '$2.68';
            }
            else if (weight > 7) {
                return '$2.47';
            }
            else if (weight > 6) {
                return '$2.26';
            }
            else if (weight > 5) {
                return '$2.05';
            }
            else if (weight > 4) {
                return '$1.84';
            }
            else if (weight > 3) {
                return '$1.63';
            }
            else if (weight > 2) {
                return '$1.42';
            }
            else if (weight > 1) {
                return '$1.21';
            }
            else if (weight > 0) {
                return '$1.00';
            }
            break;
            
        case 4:
            if (weight > 12) {
                return '$5.50';
            }
            else if (weight > 11) {
                return '$5.15';
            }
            else if (weight > 10) {
                return '$4.80';
            }
            else if (weight > 9) {
                return '$4.45';
            }
            else if (weight > 8) {
                return '$4.10';
            }
            else if (weight > 7) {
                return '$3.75';
            }
            else if (weight > 6) {
                return '$3.75';
            }
            else if (weight > 5) {
                return '$3.75';
            }
            else if (weight > 4) {
                return '$3.75';
            }
            else if (weight > 3) {
                return '$3.50';
            }
            else if (weight > 2) {
                return '$3.50';
            }
            else if (weight > 1) {
                return '$3.50';
            }
            else if (weight > 0) {
                return '$3.50';
            }
            break;
    }
    
}