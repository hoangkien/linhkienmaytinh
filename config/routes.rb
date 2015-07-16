RailsDemo::Application.routes.draw do
  root :to => 'home/home#index'
  mount Ckeditor::Engine => '/ckeditor'

  scope module: 'home' do

    scope controller: :home do
      get "gioi-thieu.html" => :about, :as => :about
      get "tin-tuc.html" => :news,:as => :news
      get "trang-chu.html/" => :index,:as => :home
      get "lien-he.html" => :contact ,:as => :contact
      post"lien-he" => :contact
      get "dich-vu.html" =>:service, :as => :service
      get "ban-do.html" => :map, :as => :map
    end

    scope controller: :products do
      # get "/:id.html" => :category ,:as =>:category
      get "/search/(.:format)" => :search, :as => :products_search
      get "/:id.html" =>:show,:as => :products_view
      get "/preview" => :preview, :as => :preview
      get "san-pham" => :index ,:as => :products
    end

  end

  scope module: 'admin' do

    scope controller: :login do
      get "admin" => :index
      # get "admin/signup" => :index
      post "admin/login/create" => :create
      delete "admin/login/destroy" => :destroy
    end

    scope controller: :categories do
      get "admin/danh-muc-san-pham" => :index,:as => :cate_index
      get "admin/danh-muc-san-pham/:id" => :show,:as =>:cate_show
    end

    scope controller: :contacts do
      get "admin/contacts/reply/:id" => :reply, :as =>:reply_contact
    end
  end



    namespace :admin do
      #Directs /admin/users/* to Admin::ProductsController
      #(app/controllers/admin/products_controller.rb)
      resources :users,:news,:trademaks
      resources :categories, only: [:new,:create,:destroy,:update,:edit]
      resources :home,:customers, only: [:index]

      resources :products do
        collection do
          post 'delete'
          get 'get_sub_cate/:id' => :get_sub_cate
        end
      end
      resources :contacts,only: [:index,:show,:destroy]
      scope controller: :contacts do
          post'contacts/delete' => :delete
          post'contacts/reply' => :reply
          post'contacts/sendmail' => :sendmail
      end

      resources :members do
        collection do
          post'delete'
        end
      end

      resources :slides do
        collection do
          delete 'delete'
        end
      end

      resources :config, only: [:index]
      scope controller: :config do
        post 'config/change_info' => :change_info
        post 'config/change_intro' => :change_intro
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
