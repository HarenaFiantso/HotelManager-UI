CREATE TABLE "users" (
	"id" uuid PRIMARY KEY NOT NULL,
	"email" varchar(256) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
