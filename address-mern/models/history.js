var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var HistorySchema = new Schema ({
    searchTerm: {
        type: String
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

var History = mongoose.model("History", HistorySchema);

module.exports = History;