Rails.application.routes.draw do

  devise_for :users
  root to: "application#angular"

  resources :categories, only: [:create, :index, :show] do
    resources :items, only: [:create, :index, :show] do
      resources :descriptions do
      end
    end
  end

end
