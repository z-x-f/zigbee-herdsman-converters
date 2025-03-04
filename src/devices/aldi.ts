import fz from "../converters/fromZigbee";
import * as exposes from "../lib/exposes";
import * as tuya from "../lib/tuya";
import type {DefinitionWithExtend} from "../lib/types";

const e = exposes.presets;

export const definitions: DefinitionWithExtend[] = [
    {
        fingerprint: tuya.fingerprint("TS1001", ["_TZ3000_ztrfrcsu"]),
        model: "141L100RC",
        vendor: "Aldi",
        description: "MEGOS switch and dimming light remote control",
        exposes: [
            e.action(["on", "off", "brightness_stop", "brightness_step_up", "brightness_step_down", "brightness_move_up", "brightness_move_down"]),
        ],
        fromZigbee: [fz.command_on, fz.command_off, fz.command_step, fz.command_move, fz.command_stop],
        toZigbee: [],
    },
];
