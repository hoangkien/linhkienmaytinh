RailsDemo::Application.routes.draw do

  mount Ckeditor::Engine => '/ckeditor'

  root :to => 'admin/login#index'
  get "login/new"

  get "login/create"

  get "login/destroy"

  get "category/index"

  get "product/index"
  get "admin/signup" => "admin/login#index"
  get "home" => "home/home#index"
  
   namespace :admin do
      #Directs /admin/users/* to Admin::ProductsController
      #(app/controllers/admin/products_controller.rb)
      resources :home
    end
    namespace :admin do
      resources :users
    end
    namespace :admin do
      resources :products
    end
    namespace :admin do
      resources :customers
    end
    namespace :admin do
      resources :config
    end
    namespace :admin do
      resources :members do
      collection do
        post'delete'
        end
      end
    end
    namespace :admin do
      resources :news
    end
    namespace :admin do
      resources :categories
    end
   namespace :admin do
      resources :login
    end
    namespace :admin do
      namespace :members do
        resources :del
      end
    end
    namespace :home do
      resources :home do
        collection do 
          post'preview'
        end
      end
    end

  # The priority is based upon order of creation:
  # first created -> highest priority.

  # Sample of regular route:
  #   match 'products/:id' => 'catalog#view'
  # Keep in mind you can assign values other than :controller and :action

  # Sample of named route:
  #   match 'products/:id/purchase' => 'catalog#purchase', :as => :purchase
  # This route can be invoked with purchase_url(:id => product.id)

  # Sample resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Sample resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Sample resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Sample resource route with more complex sub-resources
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', :on => :collection
  #     end
  #   end

  # Sample resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end

  # You can have the root of your site routed with "root"
  # just remember to delete public/index.html.
  # root :to => 'welcome#index'

  # See how all your routes lay out with "rake routes"

  # This is a legacy wild controller route that's not recommended for RESTful applications.
  # Note: This route will make all actions in every controller accessible via GET requests.
  #match ':controller(/:action(/:id))(.:format)'
end
