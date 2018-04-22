import _ from 'lodash'
import configService from './configService';

async function getToggles(env, app){
    const response = await fetch(`${configService.configs.springConfigServerUrl}${app}/${env}`);

    const responseJson = await response.json();

    if(responseJson.propertySources.length < 1) return null;

    const configs = responseJson.propertySources[0].source;
    
    const toggles= {};

    _.each(configs, (v, k) => {
        if(k.startsWith('toggle.')){
            const key = k.substring(7, k.length);
            toggles[key] = v === "true";
        }
    });

    return {toggles, app, env};
}

async function getAllToggles(){

    const promises = [];

    configService.configs.envs.forEach(env => {
        configService.configs.apps.forEach(app => {
            const config = getToggles(env, app);
            if(config != null)
                promises.push(config);
        });
    });

    const data = await Promise.all(promises);

    return data;
}

function transformData(configs){

    const applications = {};

    configService.configs.apps.forEach(appName => {

        applications[appName] = {};

        const apps = configs.filter(x=> x !== null && x.app === appName);

        const toggleNames = apps.map(a=>Object.keys(a.toggles));

        const uniqueToggleNames = _.uniq(_.flatten(toggleNames));

        uniqueToggleNames.forEach(toggleName => {
            applications[appName][toggleName] = {};

            configService.configs.envs.forEach(env => {
                const app = apps.filter(a=> a.app === appName && a.env === env)[0];
                if(app)
                    applications[appName][toggleName][env] = app.toggles[toggleName];
            });
        });
    });
    return applications;
}

export default async function getApplications() {
    await configService.init();
    const toggles = await getAllToggles();
    const transformedToggles = transformData(toggles);
    return transformedToggles;
}