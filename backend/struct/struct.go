package types

type Gender string

const (
  GenderMan Gender = "man"
  GenderWoman Gender = "woman"
)

type Response struct {
  Code int `json:"code"`
  Message string `json:"message"`
}

type User struct {
  FirstName string `json:"firstName"`
  LastName  string `json:"lastName"`
  Gender    Gender `json:"gender"`
  Age       int    `json:"age"`
  Address   string `json:"address"`
  Email     string `json:"email"`
  Phone     string `json:"phone"`
}