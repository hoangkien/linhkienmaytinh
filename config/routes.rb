RailsDemo::Application.routes.draw do
  root :to => 'home/home#index'
  mount Ckeditor::Engine => '/ckeditor'

  # root :to => 'admin/login#index'
  # get "login/new"

  # post "admin/login/create"

  # delete "admin/login/destroy"

  # get "category/index"
  # get "admin/signup" => "admin/login#index"

  scope module: 'home' do

    scope controller: :home do
      get "gioi-thieu" => :about, :as => :about
      get "tin-tuc" => :news,:as => :news
      get "trang-chu" => :index,:as => :home
      get "lien-he" => :contact ,:as => :contact
      post"lien-he" => :contact
      get "dich-vu" =>:service, :as => :service
    end

    scope controller: :products do
        get "san-pham/danh-muc-san-pham/:id" => :category ,:as =>:category
        get "products/preview" => :preview
        get "san-pham/search/(.:format)" => :search, :as => :products_search
        get "san-pham/:id" =>:show,:as => :products_view
        get "san-pham/preview" => :preview, :as => :preview
        get "san-pham" => :index ,:as => :products
    end

  end

  scope module: 'admin' do

    scope controller: :login do
      get "admin" => :index
      get "admin/signup" => :index
      post "admin/login/create" => :create
      delete "admin/login/destroy" => :destroy
    end

  end

  get "category/index"

  get "product/index"
  get "admin/danh-muc-san-pham" => "admin/categories#index",:as => :cate_index
  get "admin/danh-muc-san-pham/:id" => "admin/categories#show",:as =>:cate_show


  get "admin/contacts/reply/:id" =>"admin/contacts#reply", :as =>:reply_contact
    namespace :admin do
      #Directs /admin/users/* to Admin::ProductsController
      #(app/controllers/admin/products_controller.rb)
      resources :home,:users,:customers,:config,:news,:categories,:trademaks
      resources :products do
        collection do
          post 'delete'
          get 'get_sub_cate/:id' => :get_sub_cate
        end
      end

      resources :contacts do
        collection do
          post'delete'
          post'reply'
          post'sendmail'
        end
      end

      resources :members do
        collection do
          post'delete'
        end
      end
    end
    resources :home
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
