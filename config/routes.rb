Rails.application.routes.draw do

  devise_for :users
  root to: "application#angular"

  resources :categories, only: [:create, :index, :show] do
    resources :items, only: [:create, :index, :show] do
      resources :descriptions do
      end
      resources :orders do
      end
    end
  end

  get "/profile", to: "profile#show"
  get "/profile/orders/:user_id", to: "profile#get_user_orders"
  get "/profile/items/:user_id", to: "profile#get_user_items"

  post "/register" => "emails#welcome"
  get "/community_order/:user_id/:owner_id", to: "emails#community_order"
  get "/corporate_order/:id", to: "emails#corporate_order"
  get "/community_item/:id", to: "emails#community_item"
end
