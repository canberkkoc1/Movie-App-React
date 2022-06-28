package main

import (
	"github.com/canberkkoc1/React-Go-Auth/pkg/config"
	"github.com/canberkkoc1/React-Go-Auth/pkg/routes"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {

	err := dbConnectionAndMigration()

	if err != nil {
		panic("DB Migration Error")
	}

	app := fiber.New()

	app.Use(cors.New(cors.Config{
		AllowCredentials: true,
	}))

	routes.Setup(app)

	app.Listen(":8081")

}

func dbConnectionAndMigration() error {

	err := config.NewMySQLConnection("<Your Connection Information>")

	if err != nil {
		return err
	}
	return nil

}
