Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  match '*path' => 'application#preflight', via: :options

  resource :tokens, only: [:create, :destroy]
  resources :tasks, only: :index
  resource :tasks, only: [:create, :destroy]
end
