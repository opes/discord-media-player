"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePackets = validatePackets;
exports.validateFileHandle = validateFileHandle;
exports.validateMs = validateMs;
exports.validateFile = validateFile;
const PlayerError_1 = require("./PlayerError");
function validatePackets(packets) {
    if (typeof packets !== "object" || packets === null)
        throw new PlayerError_1.PlayerError(PlayerError_1.ErrorMessages.Expecting("object", "CacheReader.packets", packets === null ? "null" : typeof packets));
    else if (!Array.isArray(packets))
        throw new PlayerError_1.PlayerError(PlayerError_1.ErrorMessages.Expecting("Array", "CacheReader.packets", packets));
}
function validateFileHandle(fileHandle) {
    if (typeof fileHandle !== "object" || fileHandle === null)
        throw new PlayerError_1.PlayerError(PlayerError_1.ErrorMessages.Expecting("object", "CacheReader.file", fileHandle === null ? "null" : typeof fileHandle));
    else if (!(fileHandle instanceof Promise))
        throw new PlayerError_1.PlayerError(PlayerError_1.ErrorMessages.Expecting("Promise<FileHandle>", "CacheReader.file", fileHandle));
}
function validateMs(ms) {
    if (typeof ms !== "number")
        throw new PlayerError_1.PlayerError(PlayerError_1.ErrorMessages.Expecting("number", "CacheReader.ms", typeof ms));
    else if (!Number.isInteger(ms))
        throw new PlayerError_1.PlayerError(PlayerError_1.ErrorMessages.NotInteger(ms));
}
function validateFile(file) {
    if (typeof file !== "object" || file === null)
        throw new PlayerError_1.PlayerError(PlayerError_1.ErrorMessages.Expecting("object", "CacheReader.file", file === null ? "null" : typeof file));
    else if (!("read" in file))
        throw new PlayerError_1.PlayerError(PlayerError_1.ErrorMessages.NotProvided("read", "CacheReader.file"));
    else if (typeof file.read !== "function")
        throw new PlayerError_1.PlayerError(PlayerError_1.ErrorMessages.Expecting("function", "CacheReader.file.read", typeof file.read));
}
