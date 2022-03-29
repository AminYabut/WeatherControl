exports.mod = (mod_data) => {
    let PathResolver = global.internal.path.resolve
    let ModFolder = `user/mods/${mod_data.author}-${mod_data.name}-${mod_data.version}`
    let settings = mod_data.settings

    //Prepare weather cache structure
    let fileWeather = {"err": 0, "errmsg": null, "data": []};

    // Loop through weather types
    let writeChanges = 0;
    if (Number.isInteger(settings.Fog) && settings.Fog >= 1) {
        writeChanges = 1; //If any of these weather types are changed then we need to write a new cache
        let weatherFog = fileIO.readParsed(PathResolver(`db/weather/fog.json`))

        for (let i = 1; settings.Fog >= i; i++) {
            fileWeather.data.push(weatherFog);
        } 
    }
    if (Number.isInteger(settings.HeavyClouds) && settings.HeavyClouds >= 1) {
        writeChanges = 1;
        let weatherHeavyClouds = fileIO.readParsed(PathResolver(`db/weather/heavyclouds.json`))

        for (let i = 1; settings.HeavyClouds >= i; i++) {
            fileWeather.data.push(weatherHeavyClouds);
        } 
    }
    if (Number.isInteger(settings.HeavyRain) && settings.HeavyRain >= 1) {
        writeChanges = 1;
        let weatherHeavyRain = fileIO.readParsed(PathResolver(`db/weather/heavyrain.json`))

        for (let i = 1; settings.HeavyRain >= i; i++) {
            fileWeather.data.push(weatherHeavyRain);
        } 
    }
    if (Number.isInteger(settings.LightClouds) && settings.LightClouds >= 1) {
        writeChanges = 1;
        let weatherLightClouds = fileIO.readParsed(PathResolver(`db/weather/lightclouds.json`))

        for (let i = 1; settings.LightClouds >= i; i++) {
            fileWeather.data.push(weatherLightClouds);
        } 
    }
    if (Number.isInteger(settings.LightRain) && settings.LightRain >= 1) {
        writeChanges = 1;
        let weatherLightRain = fileIO.readParsed(PathResolver(`db/weather/lightrain.json`))

        for (let i = 1; settings.LightRain >= i; i++) {
            fileWeather.data.push(weatherLightRain);
        } 
    }
    if (Number.isInteger(settings.Storm) && settings.Storm >= 1) {
        writeChanges = 1;
        let weatherStorm = fileIO.readParsed(PathResolver(`db/weather/storm.json`))

        for (let i = 1; settings.Storm >= i; i++) {
            fileWeather.data.push(weatherStorm);
        } 
    }
    if (Number.isInteger(settings.Sun) && settings.Sun >= 1) {
        writeChanges = 1;
        let weatherSun = fileIO.readParsed(PathResolver(`db/weather/sun.json`))

        for (let i = 1; settings.Sun >= i; i++) {
            fileWeather.data.push(weatherSun);
        } 
    }
    if (Number.isInteger(settings.Thunder) && settings.Thunder >= 1) {
        writeChanges = 1;
        let weatherThunder = fileIO.readParsed(PathResolver(`db/weather/thunder.json`))

        for (let i = 1; settings.Thunder >= i; i++) {
            fileWeather.data.push(weatherThunder);
        } 
    }
    if (Number.isInteger(settings.Wind) && settings.Wind >= 1) {
        writeChanges = 1;
        let weatherWind = fileIO.readParsed(PathResolver(`db/weather/wind.json`))

        for (let i = 1; settings.Wind >= i; i++) {
            fileWeather.data.push(weatherWind);
        } 
    }

    // Write the cache
    if (writeChanges == 1) {
        fileIO.write(`./user/cache/weather.json`, fileWeather, true, false);        
        logger.logSuccess(`[MOD] ${mod_data.name} ${mod_data.version}`)
    }

}