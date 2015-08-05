Rails.application.routes.draw do

  root to: "application#angular"

  resources :items, only: [:create, :index, :show] do
    resources :descriptions do
    end
  end

end
