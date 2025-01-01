import { MainPlayer } from "./MainPlayer.js";
import { MainPlayerObserver } from "./MainPlayerObserver.js";
MainPlayerObserver.subscribe(MainPlayer.damagePlayer);
MainPlayerObserver.broadcast();