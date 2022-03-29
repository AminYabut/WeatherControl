Weather Control is a mod that allows you to control the probability of weather in all of Tarkov  
(except factory since it doesn't have weather)

## -- Installation --
Unzip Nevermind-WeatherControl-1.0.1 into `(Server Dir)\user\mods`

## -- Configuration --
Use `mod.config.json` to configure weather probabilities:

    "settings": {
        "Fog": 0,           <--- Setting weather to 0 means this weather will never occur
        "HeavyClouds": 0,
        "HeavyRain": 0,
        "LightClouds": 1,   <--- Setting weather to 1 means this is the normal likelihood for this weather to occur
        "LightRain": 0,
        "Storm": 0,
        "Sun": 4,           <--- Setting weather to a higher number means this weather is more likely to occur than normal - in this case, 4 means Sunny weather is 4x more likely
        "Thunder": 1,
        "Wind": 1
    },

## -- Changelog --
#### 1.0.1 - 30 JAN 2022
* Rewrote weather change loop

#### 1.0.0 - 05 JAN 2022
* Initial release