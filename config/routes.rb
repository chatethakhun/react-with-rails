Rails.application.routes.draw do
  resources :todos, only: [:index, :show, :create, :update, :destroy]s
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'pages#index'

  get '*page', to: 'pages#index', constraints: -> (req) do
    !req.xhr? and req.format.html?
  end
end
