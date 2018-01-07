Rails.application.routes.draw do
  root 'static_pages#index'

  namespace "api" do
    namespace "v1" do
      resources :contacts

      get "/contacts", to: "contacts#index"

      post "/contacts", to: "contacts#create"

      # destroy "/api/v1/contacts", to: "contacts#destroy"
    end
  end
end
