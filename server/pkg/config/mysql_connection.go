package config

import (
	"github.com/canberkkoc1/React-Go-Auth/pkg/models"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

func NewMySQLConnection(connection string) error {

	db, err := gorm.Open(mysql.Open(connection), &gorm.Config{})

	if err != nil {
		panic("DB connection Error")
	}

	err = db.AutoMigrate(&models.User{})

	if err != nil {
		return err
	}

	DB = db

	return nil
}
