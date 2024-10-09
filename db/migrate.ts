import { db } from ".";
import { migrate } from "drizzle-orm/libsql/migrator";
import path from "path";

(async () => {
  console.log("Migrations Running");

  const migrationsPath = path.resolve(__dirname, "../../migrations");
  await migrate(db, { migrationsFolder: migrationsPath });

  console.log("migrations success");
})();
