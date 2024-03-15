package main

import (
	"log"
	"strings"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

type Response struct {
  Code int `json:"code"`
  Message string `json:"message"`
}

func main() {
  app := fiber.New()
  app.Use(cors.New(cors.Config{
    AllowOrigins: "*",
    AllowHeaders:  "Origin, Content-Type, Accept",
    AllowMethods: strings.Join([]string{
      fiber.MethodGet,
      fiber.MethodPost,
      fiber.MethodHead,
      fiber.MethodPut,
      fiber.MethodDelete,
      fiber.MethodPatch,
  }, ","),
}))

app.Route("/api", func(router fiber.Router) {
  router.Get("/hello", func(c *fiber.Ctx) error {
    return c.JSON(Response{Code: 200, Message: "Hello, World!"})
  })
})

  app.Get("/api/hello", func(c *fiber.Ctx) error {
    return c.JSON(Response{Code: 200, Message: "Hello, World!"})
  })
  log.Fatal(app.Listen(":8080"))
}
