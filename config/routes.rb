Rails.application.routes.draw do

  devise_for :users
  get "/profile", to: "profile#show"
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
  get "/community_order/:id", to: "emails#community_order"
  get "/corporate_order/:id", to: "emails#corporate_order"
end
