CREATE TABLE `links` (
	`id` text PRIMARY KEY NOT NULL,
	`url` text NOT NULL,
	`slug` text NOT NULL,
	`expiresAt` text,
	`expiresUrl` text,
	`userId` text,
	`createdAt` text DEFAULT (strftime('%Y-%m-%d %H:%M:%f', 'now')) NOT NULL,
	`updatedAt` text NOT NULL,
	FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
DROP TABLE `links_temp`;--> statement-breakpoint
CREATE UNIQUE INDEX `links_slug_unique` ON `links` (`slug`);