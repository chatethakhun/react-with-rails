Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  resources :todos, only: [:index, :show, :create, :update, :destroy]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'pages#index'

  get '*page', to: 'pages#index', constraints: -> (req) do
    !req.xhr? and req.format.html?
  end
end
