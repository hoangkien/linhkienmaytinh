RailsDemo::Application.routes.draw do
  root :to => 'home/home#index'
  mount Ckeditor::Engine => '/ckeditor'

  # root :to => 'admin/login#index'
  get "login/new"

  get "login/create"

  get "login/destroy"

  get "category/index"

  get "product/index"
  get "admin" => "admin/home#index"
  get "san-pham" => "home/products#index" ,:as => :products
  get "gioi-thieu" => "home/home#about", :as => :about
  get "products/preview" => "home/products#preview"
  get "admin/signup" => "admin/login#index"
  get "admin/danh-muc-san-pham" => "admin/categories#index",:as => :cate_index
  get "admin/danh-muc-san-pham/:id" => "admin/categories#show",:as =>:cate_show
  get "tin-tuc" => "home/home#news",:as => :news
  get "trang-chu" => "home/home#index",:as => :home
  get "lien-he" => "home/home#contact" ,:as => :contact
  get "dich-vu" => "home/home#service", :as => :service
  get "san-pham/danh-muc-san-pham/:id" => "home/products#category" ,:as =>:category
  get "san-pham/preview" => "home/products#preview", :as => :preview
  get "san-pham/:id" =>"home/products#show",:as => :products_view
  get "san-pham/search/(.:format)" => "products#search", :as => :products_search
  get "admin/contacts/reply/:id" =>"admin/contacts#reply", :as =>:reply_contact
  post "admin/config/ChangeInfo" =>"admin/config#ChangeInfo", :as =>:changeinfo
  post "admin/config/ChangeIntro" =>"admin/config#ChangeIntro", :as =>:changeintro
  namespace :admin do
      #Directs /admin/users/* to Admin::ProductsController
      #(app/controllers/admin/products_controller.rb)
      resources :home

    end
    namespace :admin do
      resources :users
    end
    namespace :admin do
      resources :products do
        collection do
          post'delete'
        end
      end
    end
    namespace :admin do
      resources :customers,:contacts,:trademaks
    end
    namespace :admin do
      resources :contacts do
        collection do
          post'delete'
          post'reply'
          post'sendmail'
        end
      end
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
    namespace :home do
      resources :home do
        collection do
          get'about'
          get'news'
          match'contact',via:[:get,:post]
          get 'service'
          get 'contact_submit'
        end
      end
    end
    namespace :home do
      resources :products do
        collection do
          get'search'
        end
      end
    end
  get '*unmatched_route', :to => 'application#raise_not_found'
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


  # See how all your routes lay out with "rake routes"

  # This is a legacy wild controller route that's not recommended for RESTful applications.
  # Note: This route will make all actions in every controller accessible via GET requests.
  #match ':controller(/:action(/:id))(.:format)'

end
