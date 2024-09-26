CREATE TABLE `links` (
	`id` integer PRIMARY KEY NOT NULL,
	`url` text NOT NULL,
	`slug` text NOT NULL
);
--> statement-breakpoint
DROP TABLE `users`;--> statement-breakpoint
CREATE UNIQUE INDEX `links_slug_unique` ON `links` (`slug`);