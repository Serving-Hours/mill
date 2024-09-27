CREATE TABLE `links` (
	`id` text PRIMARY KEY NOT NULL,
	`url` text NOT NULL,
	`slug` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `links_slug_unique` ON `links` (`slug`);