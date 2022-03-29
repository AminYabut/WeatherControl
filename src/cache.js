exports.mod = (mod_data) => {
    let serverDir = global.internal.path.resolve
    let settings = mod_data.settings

    //Prepare weather cache structure
    let fileWeather = { "err": 0, "errmsg": null, "data": [] };

    // Loop through weather types
    let writeChanges = false; // Boolean flag to know whether to write cache after this script runs

    for (weatherType in settings) {
        if (Number.isInteger(settings[weatherType]) && settings[weatherType] >= 1) {
            writeChanges = true; //If a weather type is changed then we need to write a new cache
            let weatherObj = fileIO.readParsed(serverDir(`db/weather/${weatherType.toLowerCase()}.json`));

            for (let i = 1; settings[weatherType] >= i; i++) {
                fileWeather.data.push(weatherObj);
            }

            delete (weatherObj); // Delete object from memory
        }
    }

    // Write the cache if changes were made
    if (writeChanges == true) {
        fileIO.write(serverDir(`user/cache/weather.json`), fileWeather, true, false);
        logger.logSuccess(`[MOD] ${mod_data.name} ${mod_data.version}`)
    }

}