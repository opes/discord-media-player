"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateDir = validateDir;
exports.validateOptions = validateOptions;
exports.validateIdentifier = validateIdentifier;
exports.validateResource = validateResource;
exports.validateSeconds = validateSeconds;
exports.validateDecoder = validateDecoder;
const PlayerError_1 = require("./PlayerError");
const Resource_1 = require("../util/Resource");
const prism_media_1 = require("prism-media");
/**
 * Validate the cache directory
 * @param dir The cache directory
 */
function validateDir(dir) {
    if (typeof dir !== "string")
        throw new PlayerError_1.PlayerError(PlayerError_1.ErrorMessages.Expecting("string", "Cache.dir", typeof dir));
}
/**
 * Validate the cache options
 * @param options The cache options
 */
function validateOptions(options) {
    if (typeof options !== "object" || options === null)
        throw new PlayerError_1.PlayerError(PlayerError_1.ErrorMessages.Expecting("object", "CacheOptions", options === null ? "null" : typeof options));
    if (!("path" in options) && !("timeout" in options))
        throw new PlayerError_1.PlayerError(PlayerError_1.ErrorMessages.AtleastHave("CacheOptions", ["path", "timeout"]));
    if ("path" in options)
        if (typeof options.path !== "string")
            throw new PlayerError_1.PlayerError(PlayerError_1.ErrorMessages.Expecting("string", "CacheOptions.path", typeof options.path));
    if ("timeout" in options) {
        if (typeof options.timeout !== "number")
            throw new PlayerError_1.PlayerError(PlayerError_1.ErrorMessages.Expecting("number", "CacheOptions.timeout", typeof options.timeout));
        else if (!Number.isInteger(options.timeout))
            throw new PlayerError_1.PlayerError(PlayerError_1.ErrorMessages.NotInteger(options.timeout));
    }
}
/**
 * Validate the cache identifier
 * @param identifier The cache identifier
 */
function validateIdentifier(identifier) {
    if (typeof identifier !== "string")
        throw new PlayerError_1.PlayerError(PlayerError_1.ErrorMessages.Expecting("string", "Cache.identifier", typeof identifier));
}
/**
 * Validate the cache resource
 * @param resource The cache resource
 */
function validateResource(resource) {
    if (typeof resource !== "object" || resource === null)
        throw new PlayerError_1.PlayerError(PlayerError_1.ErrorMessages.Expecting("object", "Cache.resource", resource === null ? "null" : typeof resource));
    else if (!(resource instanceof Resource_1.Resource))
        throw new PlayerError_1.PlayerError(PlayerError_1.ErrorMessages.Expecting("Resource", "Cache.resource", resource));
}
/**
 * Validate the seconds
 * @param seconds Where to start the audio (in seconds)
 */
function validateSeconds(seconds) {
    if (typeof seconds !== "number")
        throw new PlayerError_1.PlayerError(PlayerError_1.ErrorMessages.Expecting("number", "Cache.seconds", typeof seconds));
}
function validateDecoder(decoder) {
    if (typeof decoder !== "object" || decoder === null)
        throw new PlayerError_1.PlayerError(PlayerError_1.ErrorMessages.Expecting("object", "Cache.getReader.decoder", decoder === null ? "null" : typeof decoder));
    else if (!(decoder instanceof prism_media_1.opus.Decoder))
        throw new PlayerError_1.PlayerError(PlayerError_1.ErrorMessages.Expecting("OpusDecoder", "Cache.getReader.decoder", decoder));
}
