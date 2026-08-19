import { createApp } from "../server/src/app.js";
import { loadConfig } from "../server/src/config.js";
import { createPool } from "../server/src/database/pool.js";

const config = loadConfig();
const pool = createPool(config.DATABASE_URL);

export default createApp(config, pool);
