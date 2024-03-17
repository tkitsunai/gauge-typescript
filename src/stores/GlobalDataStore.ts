import {DataStore} from "./DataStore";

export interface GlobalDataStore extends Global {
    gaugeSpecDataStore: DataStore,
    gaugeSuiteDataStore: DataStore,
    gaugeScenarioDataStore: DataStore,
}

/* eslint-disable no-var */
declare global {
    var gaugeSpecDataStore: DataStore;
    var gaugeSuiteDataStore: DataStore;
    var gaugeSchenarioDataStore: DataStore;
}
/* eslint-enable no-var */