import {StepRegistry} from "./StepRegistry";
import {HookRegistry} from "./HookRegistry";

export interface GlobalStepRegistry extends Global {
    gaugeStepRegistry: StepRegistry,
    gaugeHookRegistry: HookRegistry
}

/* eslint-disable no-var */
declare global {
    var gaugeStepRegistry: StepRegistry;
    var gaugeHookRegistry: HookRegistry;
}
/* eslint-enable no-var */