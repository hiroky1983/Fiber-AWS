package main

import (

	// "github.com/labstack/echo/v4"
	// "github.com/labstack/echo/v4/middleware"
	"fmt"
	"log"
	"strings"

	types "fiber-aws/struct"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)



func main() {
  app := fiber.New()
  fmt.Println("Server is running on port 8080")
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
    return c.JSON(types.Response{Code: 200, Message: "Hello, World!"})
  })
  router.Get("/user", func(c *fiber.Ctx) error {
    return c.JSON(types.User{
      FirstName: "John",
      LastName:  "Doe",
      Gender:    "woman",
      Age:       31,
      Address:   "New York",
      Email:     "expample@google.com",
      Phone:     "1234567890000000",
    })
  })
})
  log.Fatal(app.Listen(":8080"))
  // e := echo.New()
  // e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
  //   AllowOrigins: []string{"*"},
  //   AllowHeaders: []string{echo.HeaderOrigin, echo.HeaderContentType, echo.HeaderAccept},
  // }))
  // e.GET("/api/hello", func(c echo.Context) error {
  //   return c.JSON(200, types.Response{Code: 200, Message: "Hello, World!"})
  // })

  // e.GET("/api/user", func(c echo.Context) error {
  //   return c.JSON(200, types.User{
  //     FirstName: "John",
  //     LastName:  "Doe",
  //     Gender:    types.GenderMan,
  //     Age:       31,
  //     Address:   "New York",
  //     Email:     "expample@google.com",
  //     Phone:     "123456789000",
  //   })
  // })
      
  // e.Logger.Fatal(e.Start(":8080"))
}
