Rails.application.routes.draw do

  devise_for :users
  get "/profile", to: "profile#show"
  get "/profile/orders/:id", to: "profile#get_user_orders"
  get "/profile/items/:id", to: "profile#get_user_items"
  root to: "application#angular"

  resources :categories, only: [:create, :index, :show] do
    resources :items, only: [:create, :index, :show] do
      resources :descriptions do
      end
      resources :orders do
      end
    end
  end

  post "/register" => "emails#welcome"
  get "/community_order/:user_id/:owner_id", to: "emails#community_order"
  get "/corporate_order/:id", to: "emails#corporate_order"
end
