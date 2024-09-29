CREATE TABLE `links_temp` (
	`id` text PRIMARY KEY NOT NULL,
	`url` text NOT NULL,
	`slug` text NOT NULL,
	`userId` text,
	`created_at` text DEFAULT (strftime('%Y-%m-%d %H:%M:%f', 'now')) NOT NULL,
	FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
DROP TABLE `links`;--> statement-breakpoint
CREATE UNIQUE INDEX `links_temp_slug_unique` ON `links_temp` (`slug`);