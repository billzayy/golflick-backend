package routes

import (
	"net/http"

	productUser "github.com/billzayy/golf-server/internal/routes/userRoute/product"

	brandRoute "github.com/billzayy/golf-server/internal/routes/adminRoute/brand"
	categoryRoute "github.com/billzayy/golf-server/internal/routes/adminRoute/category"
	productRoute "github.com/billzayy/golf-server/internal/routes/adminRoute/product"
	typeRoute "github.com/billzayy/golf-server/internal/routes/adminRoute/type"
	auth "github.com/billzayy/golf-server/internal/routes/authRoute"
)

func NewRouter() http.Handler {
	mux := http.NewServeMux()

	// Group APIs
	mux.Handle("/api/v1/", http.StripPrefix("/api/v1", userProductMux()))
	mux.Handle("/api/v1/auth/", http.StripPrefix("/api/v1/auth", authMux()))
	mux.Handle("/api/v1/admin/", http.StripPrefix("/api/v1/admin", adminMux()))

	return mux
}

func authMux() *http.ServeMux {
	mux := http.NewServeMux()

	mux.HandleFunc("/sign-up", auth.SignUpRoute)
	mux.HandleFunc("/login", auth.LoginRoute)
	mux.HandleFunc("/logout", auth.LogOutRoute)
	// mux.HandleFunc("/refresh-token", auth.RefreshTokenRoute)

	return mux
}

func userProductMux() *http.ServeMux {
	mux := http.NewServeMux()

	// Product (Just Get)
	mux.HandleFunc("/products", productUser.GetProduct)

	// Billing Management
	// Cart Management
	// Order Management
	// Review Management
	// Wishlist Management
	// Blog Get
	// Profile Management
	// Banking Account Management

	return mux
}

func adminMux() *http.ServeMux {
	mux := http.NewServeMux()

	// Brand Management
	mux.HandleFunc("/brands", brandRoute.GetBrandRoutes)
	mux.HandleFunc("/brand/add", brandRoute.AddBrandRoute)
	mux.HandleFunc("/brand/delete/{brandId}", brandRoute.DeleteBrandRoute)
	mux.HandleFunc("/brand/update", brandRoute.UpdateBrandRoute)

	// Type Management
	mux.HandleFunc("/types", typeRoute.GetTypeRoute)
	mux.HandleFunc("/type/add", typeRoute.AddTypeRoute)
	mux.HandleFunc("/type/delete/{typeId}", typeRoute.DeleteTypeRoute)
	mux.HandleFunc("/type/update", typeRoute.UpdateTypeRoute)

	// Category Management
	mux.HandleFunc("/categories", categoryRoute.GetCategory)
	mux.HandleFunc("/category/add", categoryRoute.AddCategory)
	mux.HandleFunc("/category/delete", categoryRoute.DeleteCategory)
	mux.HandleFunc("/category/update", categoryRoute.UpdateCategory)

	// Product Management
	mux.HandleFunc("/product/add", productRoute.AddProductRoute)
	mux.HandleFunc("/product/delete", productRoute.DeleteProduct)
	mux.HandleFunc("/product/update", productRoute.UpdateProduct)

	// Blog Management
	// Review Management (Just Delete)
	// Coupon Management
	// Bank Type Management

	return mux
}
