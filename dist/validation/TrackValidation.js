"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTrack = validateTrack;
exports.validateNumber = validateNumber;
exports.validatePlayer = validatePlayer;
const PlayerValidation_1 = require("./PlayerValidation");
const PlayerError_1 = require("./PlayerError");
// eslint-disable-next-line @typescript-eslint/ban-types
function validateTrack(track) {
    if (typeof track !== "object" || track === null)
        throw new PlayerError_1.PlayerError(PlayerError_1.ErrorMessages.Expecting("object", "Track", track === null ? "null" : typeof track));
    if (!("sourceType" in track))
        throw new PlayerError_1.PlayerError(PlayerError_1.ErrorMessages.NotProvided("sourceType", "Track"));
    else if (typeof track.sourceType !== "number")
        throw new PlayerError_1.PlayerError(PlayerError_1.ErrorMessages.Expecting("number", "Track.sourceType", typeof track.sourceType));
    if (!("urlOrLocation" in track))
        throw new PlayerError_1.PlayerError(PlayerError_1.ErrorMessages.NotProvided("urlOrLocation", "Track"));
    else if (typeof track.urlOrLocation !== "string")
        throw new PlayerError_1.PlayerError(PlayerError_1.ErrorMessages.Expecting("string", "Track.urlOrLocation", typeof track.urlOrLocation));
    if ("metadata" in track && (typeof track.metadata !== "object" || track.metadata === null))
        throw new PlayerError_1.PlayerError(PlayerError_1.ErrorMessages.Expecting("object", "Track.metadata", track.metadata === null ? "null" : typeof track.metadata));
}
function validateNumber(where, value) {
    if (typeof value !== "number")
        throw new PlayerError_1.PlayerError(PlayerError_1.ErrorMessages.Expecting("number", `Track.${where}`, typeof value));
    else if (!Number.isInteger(value))
        throw new PlayerError_1.PlayerError(PlayerError_1.ErrorMessages.NotInteger(value));
}
function validatePlayer(player) {
    (0, PlayerValidation_1.validatePlayer)(player, "Track.player");
}
